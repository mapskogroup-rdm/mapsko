import { absoluteUrl, toOgImage } from "@/lib/seo";
import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import BlogsContainer from "@/views/blog/blogs-container/blogs-container";
import HeroSection from "@/views/blog/hero-section";
import { fetchAllBlogs } from "@/views/blog/utils/blog-data";

export const revalidate = 60;

export const metadata = {
  title: "Mapsko Group Blog – News, Project Updates & Insights",
  description:
    "Read the Mapsko Group blog for real estate news, project updates, and insights on Delhi-NCR properties, investment tips, and market trends.",
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
