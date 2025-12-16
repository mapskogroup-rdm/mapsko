import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type SanityWebhookPayload = {
  _type: string;
  slug?: {
    current?: string;
  };
};

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<SanityWebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      console.error("Invalid webhook signature");
      return new Response("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      console.error("Webhook body missing _type:", body);
      return new Response("Bad Request: Missing _type", { status: 400 });
    }

    // Handle different document types
    const documentType = body._type;
    const slug = body.slug?.current;

    // Define route mapping for each document type
    const routeMap: Record<string, string> = {
      project: "/project",
      blog: "/blog",
    };

    const basePath = routeMap[documentType];

    if (basePath) {
      if (slug) {
        // Revalidate the specific page
        const pagePath = `${basePath}/${slug}`;
        revalidatePath(pagePath, "page");

        // Also revalidate the listing page (e.g., /blog, /projects)
        revalidatePath(basePath, "page");

        console.log(`Revalidated ${documentType} page: ${pagePath}`);

        return NextResponse.json({
          revalidated: true,
          now: Date.now(),
          path: pagePath,
          type: documentType,
        });
      } else {
        // If slug is missing, revalidate all pages of this type
        // This is useful for deletions or when slug changes
        revalidatePath(basePath, "layout");
        console.log(`Revalidated all ${documentType} pages (slug missing)`);

        return NextResponse.json({
          revalidated: true,
          now: Date.now(),
          path: `${basePath}/*`,
          type: documentType,
        });
      }
    }

    return NextResponse.json({
      revalidated: false,
      reason: `Type "${body._type}" is not configured for revalidation`,
    });
  } catch (err: any) {
    console.error("Error revalidating:", err);
    return new Response(err.message, { status: 500 });
  }
}
