import Logo from "@/assets/icons/mapsko-logo.svg";
import FirstImage from "./gated-community.png";
import SecondImage from "./580ad2ae32741759cb647dcb76038cf396f90a13.png";
import ThirdImage from "./140d0c093fd215bf5850833306f67ba807b27307.png";
import ProjectDisplayCard from "@/components/project-display-card";

const PROJECTS = [
  {
    id: "gardenia",
    imageSrc: FirstImage,
    linkHref: "/",
    title: "Mapsko Gardenia",
    location: "Sector 26A, Sonipat",
    subPoints: [
      "Status: Super Structure Completed",
      "Experience nature-centric living in the heart of Sonipat. Premium apartments with world-class amenities and seamless connectivity",
    ],
  },
  {
    id: "icon-79",
    imageSrc: SecondImage,
    linkHref: "/",
    title: "Mapsko The Icon 79",
    location: "Sector-79, Gurgaon",
    subPoints: [
      "Status: Super Structure Completed",
      "Luxury redefined in Gurgaon's prime location. Modern architecture meets sophisticated living.",
    ],
  },
  {
    id: "aspr-hills",
    imageSrc: ThirdImage,
    linkHref: "/",
    title: "Mapsko ASPR Hills",
    location: "Sector-78, Gurgaon",
    subPoints: [
      "Status: OC Completed",
      "Elevated living experience with panoramic views and premium amenities in New Gurgaon.",
    ],
  },
] as const;

const SecondSection = () => {
  return (
    <div className="bg-[#F9F9F9] pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-center px-4">
          Discover Your Perfect Home
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          Premium projects designed for modern living
        </p>
      </div>

      <div className="mapsko-marquee mapsko-marquee--ltr text-white text-center">
        <div className="mapsko-marquee__track">
          {[0, 1].map((dupIndex) => (
            <div key={dupIndex} className="flex flex-nowrap items-stretch">
              {PROJECTS.map((project, index) => (
                <div
                  key={`${dupIndex}-${project.id}`}
                  className="shrink-0 w-[85vw] sm:w-[420px] md:w-[460px] xl:w-[calc((100vw-3rem)/3)]"
                >
                  <ProjectDisplayCard
                    imageSrc={project.imageSrc}
                    linkHref={project.linkHref}
                    title={project.title}
                    location={project.location}
                    subPoints={[...project.subPoints]}
                    gradientColor={
                      (index + dupIndex) % 2 === 0 ? "#0B6BB8" : "#8AC028"
                    }
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
