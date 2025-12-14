import HeroSection from "@/views/projects/commercial-projects/hero-section";
import Navigator from "@/components/navigator/navigator";
import FirstSection from "@/views/projects/commercial-projects/first-section/first-section";
import Footer from "@/components/footer/footer";

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
        projects include Maspko shopping arcade, Mapsko Royale Plaza, Mapsko
        business arcade, Galleria, Krishna Apra D mall, etc. The projects are
        designed by the group of professional building consultants that will
        surely give you a sense of luxury. The spacious ambiance and highly
        decorated interiors are the USP's of these commercial projects in
        Gurgaon that will change your entire lifestyle into an extraordinary
        one.
      </div>

      <FirstSection />

      <Footer />
    </main>
  );
};

export default Page;
