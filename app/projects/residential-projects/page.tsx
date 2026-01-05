import { absoluteUrl, toOgImage } from "@/lib/seo";
import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import FirstSection from "@/views/projects/residential-projects/first-section/first-section";
import HeroSection from "@/views/projects/residential-projects/hero-section";
import SecondSection from "@/views/projects/residential-projects/second-section/second-section";
import ThirdSection from "@/views/projects/residential-projects/third-section.tsx/third-section";

type Props = {};

export const metadata = {
  title: "Residential Projects in Gurugram | Mapsko",
  description:
    "Explore Mapsko’s luxury residential projects in Gurugram, featuring premium amenities, thoughtfully designed spaces, and prime connectivity.",
  alternates: {
    canonical: absoluteUrl("/projects/residential-projects"),
  },
  openGraph: {
    url: absoluteUrl("/projects/residential-projects"),
    images: toOgImage("/assets/og-default.webp"),
  },
};

const Page = (props: Props) => {
  return (
    <main>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/" },
            { label: "Our Projects", href: "" },
            {
              label: "Residential Projects",
              href: "/projects/residential-projects",
            },
          ]}
        />
      </div>

      <div className="text-center justify-start text-neutral-500 text-lg font-light common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
        MAPSKO Group has been a pioneer in the real estate services, offering
        luxurious and best-in-class commercial and residential properties to
        customers. We feel proud to announce that we have developed many
        residential spaces over the past 30 years. When it comes to handling
        residential projects in Gurgaon, our highly experienced engineers have
        crafted some of the premium residential complexes according to the
        different requirements of the clients. We merge the finest of
        aesthetics, architecture, design, construction, and technology together
        to come up with something unique and modern every single time. Our
        recent projects involve the MAPSKO ICON 79 at Sec-79, Gurugram, MAPSKO
        ASPR HILLS at Sector 78, Gurugram.
      </div>

      <FirstSection />
      <SecondSection />
      <ThirdSection />

      <Footer />
    </main>
  );
};

export default Page;
