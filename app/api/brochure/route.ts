import { type NextRequest, NextResponse } from "next/server";

const ALLOWED_HOSTS = new Set(["cdn.sanity.io"]);

function sanitizeFilename(input: string) {
  const trimmed = input.trim() || "brochure.pdf";
  const safe = trimmed
    .replace(/[/\\]/g, "_")
    .replace(/[^\w.\- ()]/g, "_")
    .replace(/\s+/g, " ")
    .slice(0, 150);

  return safe.toLowerCase().endsWith(".pdf") ? safe : `${safe}.pdf`;
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const rawFileUrl = url.searchParams.get("url");
  const rawFilename = url.searchParams.get("filename") || "brochure.pdf";

  if (!rawFileUrl) {
    return NextResponse.json(
      { success: false, message: "Missing 'url' query param" },
      { status: 400 }
    );
  }

  let upstream: URL;
  try {
    upstream = new URL(rawFileUrl);
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid 'url' query param" },
      { status: 400 }
    );
  }

  if (upstream.protocol !== "https:") {
    return NextResponse.json(
      { success: false, message: "Only https URLs are allowed" },
      { status: 400 }
    );
  }

  if (!ALLOWED_HOSTS.has(upstream.host)) {
    return NextResponse.json(
      { success: false, message: "URL host not allowed" },
      { status: 400 }
    );
  }

  // Sanity file assets are typically under /files/
  if (!upstream.pathname.startsWith("/files/")) {
    return NextResponse.json(
      { success: false, message: "URL path not allowed" },
      { status: 400 }
    );
  }

  const filename = sanitizeFilename(rawFilename);

  let res: Response;
  try {
    res = await fetch(upstream, { cache: "no-store" });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch brochure" },
      { status: 502 }
    );
  }

  if (!res.ok) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch brochure" },
      { status: 502 }
    );
  }

  const contentType = res.headers.get("content-type") || "application/pdf";

  const headers = new Headers();
  headers.set("Content-Type", contentType);
  headers.set("Content-Disposition", `attachment; filename="${filename}"`);
  headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400");

  return new NextResponse(res.body, { headers });
}
