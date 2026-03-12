import { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity.client";
import { landingPageBySlugQuery } from "@/lib/sanity.queries";
import { LandingPageDocument } from "@/lib/sanity.types";
import PageBuilder from "@/views/landing-page/page-builder";
import { absoluteUrl } from "@/lib/seo";
import { fetchLandingPageSlugs } from "@/views/blog/utils/blog-data";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = await fetchLandingPageSlugs();
    return slugs.map((slug) => ({ slug }));
}

async function getLandingPage(slug: string): Promise<LandingPageDocument | null> {
    return await client.fetch<LandingPageDocument | null>(landingPageBySlugQuery, {
        slug,
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = await getLandingPage(slug);

    if (!page) return {};

    return {
        title: page.seo?.metaTitle || page.title,
        description: page.seo?.metaDescription,
        alternates: {
            canonical: page.seo?.canonical || absoluteUrl(`/${slug}`),
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const page = await getLandingPage(slug);

    if (!page) {
        notFound();
    }

    return <PageBuilder data={page} />;
}
