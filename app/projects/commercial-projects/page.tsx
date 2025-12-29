import { absoluteUrl, toOgImage } from "@/lib/seo";
import HeroSection from "@/views/projects/commercial-projects/hero-section";
import Navigator from "@/components/navigator/navigator";
import FirstSection from "@/views/projects/commercial-projects/first-section/first-section";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Commercial Projects in Gurugram | Mapsko",
  description:
    "Discover Mapsko’s commercial developments offering modern infrastructure, strategic locations, and premium business-ready spaces in Gurugram.",
  alternates: {
    canonical: absoluteUrl("/projects/commercial-projects"),
  },
  openGraph: {
    url: absoluteUrl("/projects/commercial-projects"),
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
            { label: "Our Projects", href: "" },
            {
              label: "Commercial Projects",
              href: "/projects/commercial-projects",
            },
          ]}
        />
      </div>

      <div className="text-center justify-start text-neutral-500 text-lg font-light common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
        MAPSKO has set the standards high and has redefined the commercial
        concept of the building. By incorporating the idea of work into leisure,
        we have created some of the finest epitomes of excellence. Believing in
        the idea of merging our strength with our experience, we have
        transformed the work culture with the office spaces and commercial
        properties in Gurgaon. The pioneering MAPSKO commercial projects are all
        set to mark new records and craft new developments in the history of
        commercial construction in the upcoming years. Our current commercial
        projects include Mapsko shopping arcade, Mapsko Royale Plaza, Mapsko
        business arcade, Galleria, etc. The projects are designed by a group of
        professional building consultants who will surely give you a sense of
        luxury. The spacious ambiance and highly decorated interiors are the
        USP’s of these commercial projects in Gurgaon that will change your
        entire lifestyle into an extraordinary one.
      </div>

      <FirstSection />

      <Footer />
    </main>
  );
};

export default Page;
