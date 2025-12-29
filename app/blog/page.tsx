import { absoluteUrl, toOgImage } from "@/lib/seo";
import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import BlogsContainer from "@/views/blog/blogs-container/blogs-container";
import HeroSection from "@/views/blog/hero-section";
import { fetchAllBlogs } from "@/views/blog/utils/blog-data";

export const metadata = {
  title: "Mapsko Blogs | News and Project Updates",
  description:
    "Read the latest news, development updates, and insights from Mapsko’s residential and commercial projects in Gurugram.",
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    url: absoluteUrl("/blog"),
    images: toOgImage("/assets/og-default.webp"),
  },
};

const Page = async () => {
  const blogs = await fetchAllBlogs();

  return (
    <div>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/" },
            { label: "Blogs", href: "/blog" },
          ]}
        />
      </div>
      <BlogsContainer blogs={blogs} />
      <Footer />
    </div>
  );
};

export default Page;
