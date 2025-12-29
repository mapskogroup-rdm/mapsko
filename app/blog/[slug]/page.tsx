import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import SanityImage from "@/components/sanity-image";
import HeroSection from "@/views/blog/hero-section";
import { fetchBlog } from "@/views/blog/utils/blog-data";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { absoluteUrl, applyPageDefaults, toOgImage } from "@/lib/seo";
import { buildBlogPostingJsonLd } from "@/lib/jsonld";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  if (!blog) {
    return applyPageDefaults(
      {
        title: "Blogs | Mapsko",
        alternates: { canonical: absoluteUrl(`/blog/${slug}`) },
        robots: { index: false, follow: false },
      },
      parent
    );
  }

  return applyPageDefaults(
    {
      title: blog.title,
      description: blog.shortDescription,
      alternates: { canonical: absoluteUrl(`/blog/${blog.slug}`) },
      openGraph: {
        url: absoluteUrl(`/blog/${blog.slug}`),
        type: "article",
        images: toOgImage(blog.coverImage, { alt: blog.title }),
      },
    },
    parent
  );
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  if (!blog) {
    notFound();
  }

  const ogImage = toOgImage(blog.coverImage, { alt: blog.title })?.[0]?.url;
  const blogJsonLd = buildBlogPostingJsonLd({
    headline: blog.title,
    description: blog.shortDescription,
    image: ogImage,
    datePublished: blog.createdDate,
    url: absoluteUrl(`/blog/${blog.slug}`),
  });

  return (
    <div>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/blog" },
            { label: "Blogs", href: "" },
          ]}
        />
      </div>

      <div className="common-frame-box py-10">
        <SanityImage
          image={blog.coverImage}
          alt={blog.title}
          height={560}
          className="h-[560px] w-full object-cover"
        />

        <div className="py-10 md:py-24">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
          />
          <h1 className="text-3xl md:text-5xl font-bold pb-10 md:pb-20 md:leading-16 leading-10">
            {blog.title}
          </h1>
          <div className="prose">
            <PortableText value={blog.content} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
