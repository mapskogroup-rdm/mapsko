import { absoluteUrl, toOgImage } from "@/lib/seo";
import Navigator from "@/components/navigator/navigator";
import Footer from "@/components/footer/footer";
import NewsSection from "@/views/news-section/news-section";

export const metadata = {
  title: "Latest News & Updates | Mapsko",
  description: "Stay informed with the latest updates and insights from Mapsko.",
  alternates: {
    canonical: absoluteUrl("/latest-news"),
  },
  openGraph: {
    url: absoluteUrl("/latest-news"),
    images: toOgImage("/assets/og-default.webp"),
  },
};

const Page = () => {
  return (
    <main className="bg-white min-h-screen">
      <div className="w-full h-20 bg-[#0B6BB8]"></div>
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/" },
            { label: "Latest News", href: "/latest-news" },
          ]}
        />
      </div>
      <NewsSection />
      <Footer />
    </main>
  );
};

export default Page;
