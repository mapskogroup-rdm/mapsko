import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import FirstSection from "@/views/projects/residential-projects/first-section/first-section";
import HeroSection from "@/views/projects/residential-projects/hero-section";
import SecondSection from "@/views/projects/residential-projects/second-section/second-section";
import ThirdSection from "@/views/projects/residential-projects/third-section.tsx/third-section";

type Props = {};

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
        MAPSKO Group has been a pioneer in the real estate services offering the
        luxurious and best-in-class commercial and residential properties to the
        customers. We feel proud to announce that we have developed many
        residential spaces over the past 20 years. When it comes to handling
        residential projects in Gurgaon, our highly experienced engineers have
        crafted some of the premium residential complexes according to the
        different requirements of the clients. We merge the finest of
        aesthetics, architecture, design, construction, and technology together
        to come up with something unique and modern every single time. Our
        recent projects involve the MAPSKO MOUNT VILLE, Premium Hill Homes,
        Sec-79, Gurgaon, MAPSKO Royale Ville at Sector 82, Gurgaon.
      </div>

      <FirstSection />
      <SecondSection />
      <ThirdSection />

      <Footer />
    </main>
  );
};

export default Page;
