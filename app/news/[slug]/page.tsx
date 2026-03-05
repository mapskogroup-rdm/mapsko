import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import SanityImage from "@/components/sanity-image";
import HeroSection from "@/views/news-section/[slug]/hero-section";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { absoluteUrl, applyPageDefaults, toOgImage } from "@/lib/seo";
import { getNewsBySlug } from "@/views/news-section/news-section.utils";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) {
    return applyPageDefaults(
      {
        title: "News | Mapsko",
        alternates: { canonical: absoluteUrl(`/news/${slug}`) },
        robots: { index: false, follow: false },
      },
      parent
    );
  }

  return applyPageDefaults(
    {
      title: news.title,
      description: news.shortDescription,
      alternates: { canonical: absoluteUrl(`/news/${news.slug}`) },
      openGraph: {
        url: absoluteUrl(`/news/${news.slug}`),
        type: "article",
        images: toOgImage(news.coverImage, { alt: news.title }),
      },
    },
    parent
  );
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  return (
    <div>
      <HeroSection image={news.bannerImage} />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/news" },
            { label: "News", href: "" },
          ]}
        />
      </div>

      <div className="common-frame-box py-10">
        <SanityImage
          image={news.coverImage}
          alt={news.title}
          height={560}
          className="h-[560px] w-full object-cover"
        />

        <div className="py-10 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold pb-10 md:pb-20 md:leading-16 leading-10">
            {news.title}
          </h1>
          <div className="prose space-y-4">
            <PortableText value={news.content} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
