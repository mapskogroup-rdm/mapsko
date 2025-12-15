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

    // Handle project document revalidation
    if (body._type === "project") {
      if (body.slug?.current) {
        const slug = body.slug.current;
        revalidatePath(`/project/${slug}`, "page");
        console.log(`Revalidated project page: /project/${slug}`);

        return NextResponse.json({
          revalidated: true,
          now: Date.now(),
          path: `/project/${slug}`,
        });
      } else {
        // If slug is missing, revalidate all project pages
        // This is useful for deletions or when slug changes
        revalidatePath("/project", "layout");
        console.log("Revalidated all project pages (slug missing)");

        return NextResponse.json({
          revalidated: true,
          now: Date.now(),
          path: "/project/*",
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
