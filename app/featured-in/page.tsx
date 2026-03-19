import { absoluteUrl, toOgImage } from "@/lib/seo";
import Navigator from "@/components/navigator/navigator";
import Footer from "@/components/footer/footer";
import FeaturedInSection from "@/views/index/featured-in-section";

export const metadata = {
  title: "Featured In | Mapsko",
  description: "Recognized for Excellence in Real Estate. See where Mapsko has been featured.",
  alternates: {
    canonical: absoluteUrl("/featured-in"),
  },
  openGraph: {
    url: absoluteUrl("/featured-in"),
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
            { label: "Featured In", href: "/featured-in" },
          ]}
        />
      </div>
      <FeaturedInSection />
      <Footer />
    </main>
  );
};

export default Page;
