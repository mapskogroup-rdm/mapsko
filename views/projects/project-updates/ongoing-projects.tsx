import Logo from "@/assets/icons/mapsko-logo.svg";
import ProjectCard from "./project-card";

const OngoingProjects = () => {
  const ongoingProjects = [
    {
      title: "HRERA-PKL-SNP-522-2023",
      subtext: "Construction is in full swing",
      logoUrl: "/assets/residential-projects/logos/gardenia.png",
      href: "/project/mapsko-gardenia",
    },
    {
      title: "HRERA-PKL-SNP-397-2023",
      subtext: "Construction is in full swing",
      logoUrl: "/assets/residential-projects/logos/aspr-greenz.png",
      href: "/project/aspr-greenz",
    },
    {
      title: "H-RERA Registration NO- 22 OF 2023",
      subtext: "Construction is in full swing",
      logoUrl: "/assets/residential-projects/logos/aspr-hills.png",
      href: "/project/aspr-hills",
    },
    {
      title: "HRERA NO - HRERA 33 OF 2023",
      subtext: "Construction is in full swing",
      logoUrl: "/assets/residential-projects/logos/icon-79.png",
      href: "/project/icon-79",
    },
    {
      title: "HRERA-PKL-SNP-343-2022",
      subtext: "",
      logoUrl: "/assets/residential-projects/logos/garden-estate-2.png",
      href: "/project/garden-estate-2",
    },
  ];

  return (
    <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Ongoing by MAPSKO
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          Consistent quality, continuous progress, clear milestones
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
          />
        ))}
      </div>
    </div>
  );
};

export default OngoingProjects;
