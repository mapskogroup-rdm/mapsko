import { absoluteUrl, toOgImage } from "@/lib/seo";
import Navigator from "@/components/navigator/navigator";
import Footer from "@/components/footer/footer";
import FeaturedInSection from "@/views/index/featured-in-section";
import Image from "next/image";
import TOIImage from "./Mapsko TOI.jpeg";

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
      <FeaturedInSection>
          <div className="group flex flex-col bg-white border border-neutral-200 hover:shadow-xl transition-all duration-300 w-full h-full p-2 items-center justify-center">
             <Image src={TOIImage} alt="Mapsko Times of India Feature" className="w-full h-auto object-contain cursor-pointer transition-transform duration-500 hover:scale-[1.02]" placeholder="blur" />
          </div>
      </FeaturedInSection>
      <Footer />
    </main>
  );
};

export default Page;
