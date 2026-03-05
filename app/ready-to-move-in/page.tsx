import { absoluteUrl, toOgImage } from "@/lib/seo";
import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import FirstSection from "@/views/ready-to-move-in/first-section";
import HeroSection from "@/views/ready-to-move-in/hero-section";
import ReadyToMoveInProperties from "@/views/ready-to-move-in/ready-to-move-in-properties";

export const metadata = {
  title: "Ready to Move in Properties | Mapsko",
  description:
    "Find ready to move in properties by Mapsko Group in Gurgaon and Delhi NCR, completed flats and homes you can move into without delay.",
  alternates: {
    canonical: absoluteUrl("/ready-to-move-in"),
  },
  openGraph: {
    url: absoluteUrl("/ready-to-move-in"),
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
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Ready to Move In",
              href: "/ready-to-move-in",
            },
          ]}
        />
      </div>

      <FirstSection />
      <ReadyToMoveInProperties />

      <Footer />
    </main>
  );
};

export default Page;
