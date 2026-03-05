import { absoluteUrl, toOgImage } from "@/lib/seo";
import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import FirstSection from "@/views/about-us/company-profile/first-section/first-section";
import HeroSection from "@/views/about-us/company-profile/hero-section/hero-section";
import SecondSection from "@/views/about-us/company-profile/second-section/second-section";

export const metadata = {
  title: "Mapsko Group - Real Estate Company Profile & Legacy",
  description:
    "Mapsko Group delivers premium residential & commercial projects in Gurgaon & Delhi-NCR with quality, innovation & trusted expertise.",
  alternates: {
    canonical: absoluteUrl("/about-us/company-profile"),
  },
  openGraph: {
    url: absoluteUrl("/about-us/company-profile"),
    images: toOgImage("/assets/og-default.webp"),
  },
};

const Page = () => {
  return (
    <main>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "" },
            { label: "Company Profile", href: "/about-us/company-profile" },
          ]}
        />
      </div>
      <FirstSection />
      <SecondSection />
      <Footer />
    </main>
  );
};

export default Page;
