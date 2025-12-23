import Image from "next/image";
import AmritSinglaImage from "./2c123d31d8e808dde397aef2c25233a169a9c50b.png";
import Logo from "@/assets/icons/mapsko-logo.svg";

const FirstSection = () => {
  return (
    <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28 space-y-12">
      <div className="flex flex-col md:flex-row md:gap-28 gap-12">
        <div className="md:min-w-[500px] md:max-w-[500px] md:min-h-[500px] md:max-h-[500px]">
          <Image
            src={AmritSinglaImage}
            alt="Amrit Single"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />

          <div className="bg-sky-700 p-5">
            <span className="text-white font-extrabold">
              Late Mr. Amrit Singla{" "}
            </span>
            <span className="text-white font-light">
              (Former chairman , Mapsko Group)
            </span>
          </div>
        </div>

        <div className="">
          <Logo className="h-[100px]" />
          <div className="pt-6">
            <p className="text-sky-700 text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">
              MAPSKO: Crafting Signature Landmarks, Building India's Future
            </p>
            <p className="text-neutral-500 text-base md:text-lg font-light">
              <br />
              MAPSKO is a leading and growing real estate organization,
              reckoning its position among the top-notch developers. This is
              exemplified by its world-class structures and services. It is also
              India's blossoming real estate developer, a company that
              meticulously cultivates flowers of concrete and glass for
              commercial and residential use. Each structure follows the pattern
              of a distinct signature. We carved a niche for ourselves in the
              burgeoning field of real estate development and construction. For
              over a decade, the company has consistently set quality benchmarks
              in property development by creating world-class townships and
              commercial spaces in prime locations.
              <br />
              <br />
              The Krishna Apra group was set up on March 13, 1997, formally by
              Late Mr. Amrit Singla (Director, Apra Builders Ltd.) and Jai
              Krishan Estate Pvt. Ltd. The mission of Late Mr. Amrit Singla
              (Director, Apra Builders Ltd and Jai Krishan Estate Pvt. Ltd.) was
              to create a lifestyle within the garden of greens. Apart from
              this, they have greater status de persona in their social,
              economic and family spheres. The results show the value and
              importance of their performance in the field of real estate.
            </p>
          </div>
        </div>
      </div>

      <p className="text-neutral-500 text-base md:text-lg font-light">
        A name that emerged for the promoters of the Krishna Apra Group, an
        entity born to reform the builder's world, is MAPSKO, conceptualized on
        Jan 21, 2003, with a good amount of investment. The Group has pooled in
        endowment and proficiency from varied backgrounds, like architecture,
        civil engineering, planning, management, marketing, finance and legal,
        to efficiently accommodate varied requirements of the clients. The
        highest standards are set by the Group in its pursuit to position India
        on par with the developed economies of the world, and a vision to reach
        and remain at the commanding heights of real estate business.
        <br />
        <br />
        The company's ability to meet the special requirements of the real
        estate market and clients stems from the strong foundations of
        professionalism. The company's passion for exceeding industry benchmarks
        is evident in its ability to redefine value engineering - project after
        project - reinforcing the best of conceptual innovation and cutting-edge
        construction technologies. We create a niche for our clients in the real
        estate space, looking beyond steel and concrete, to redefine life and
        lifestyle. We raise the benchmark of excellence by creating commercial &
        residential landmarks pan India that are at par with prestigious
        addresses across the globe. We try to achieve international quality
        standards through cutting-edge value engineering and intelligent
        resource management
      </p>
    </div>
  );
};

export default FirstSection;
