import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import SanityImage from "@/components/sanity-image";
import HeroSection from "@/views/blog/hero-section";
import { fetchBlog } from "@/views/blog/utils/blog-data";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/blog" },
            { label: "Blog", href: "" },
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
