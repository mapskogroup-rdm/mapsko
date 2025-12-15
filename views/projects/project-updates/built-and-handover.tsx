import Logo from "@/assets/icons/mapsko-logo.svg";
import ProjectCard from "./project-card";

const BuiltAndHandover = () => {
  const ongoingProjects = [
    {
      title: "OC Received",
      subtext: "HRERA Regd No. 328 of 2017 dated 23.10.2017",
      logoUrl: "/assets/residential-projects/logos/mount-ville.png",
      href: "/project/mount-ville",
    },
    {
      title: "",
      subtext: "",
      logoUrl: "/assets/residential-projects/logos/city-homes.png",
      href: "/project/aspr-greenz",
    },
    {
      title: "H-RERA Registration NO- 22 OF 2023",
      subtext: "Construction is in full swing",
      logoUrl: "/assets/residential-projects/logos/galleria.png",
      href: "/project/aspr-hills",
    },
    {
      title: "HRERA NO - HRERA 33 OF 2023",
      subtext: "Construction is in full swing",
      logoUrl: "/assets/residential-projects/logos/shopping-arcade.png",
      href: "/project/icon-79",
    },
    {
      title: "HRERA-PKL-SNP-343-2022",
      subtext: "",
      logoUrl: "/assets/residential-projects/logos/royale-plaza.png",
      href: "/project/garden-estate-2",
    },
    {
      title: "HRERA-PKL-SNP-343-2022",
      subtext: "",
      logoUrl: "/assets/residential-projects/logos/paradise.png",
      href: "/project/garden-estate-2",
    },
  ];

  return (
    <section className="bg-stone-50">
      <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <Logo className="w-10 sm:w-12 md:w-14" />
          <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
            Built & Handed Over
          </h2>
          <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
            Quality you can visit. Trust you can feel
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ongoingProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtext={project.subtext}
              logoUrl={project.logoUrl}
              href={project.href}
              className="border-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltAndHandover;
