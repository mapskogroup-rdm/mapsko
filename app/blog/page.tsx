import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import BlogsContainer from "@/views/blog/blogs-container/blogs-container";
import HeroSection from "@/views/blog/hero-section";
import { fetchAllBlogs } from "@/views/blog/utils/blog-data";

const Page = async () => {
  const blogs = await fetchAllBlogs();

  return (
    <div>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
          ]}
        />
      </div>
      <BlogsContainer blogs={blogs} />
      <Footer />
    </div>
  );
};

export default Page;
