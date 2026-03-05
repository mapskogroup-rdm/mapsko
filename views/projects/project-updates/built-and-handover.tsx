import Logo from "@/assets/icons/mapsko-logo.svg";
import ProjectCard from "./project-card";
import { client } from "@/lib/sanity.client";
import { ProjectUpdateItem } from "@/lib/sanity.types";
import { projectsByStatusQuery } from "@/lib/sanity.queries";

const BuiltAndHandover = async () => {
  const projects = await client.fetch<ProjectUpdateItem[]>(
    projectsByStatusQuery,
    { status: "completed" }
  );

  const completedProjects = projects.map((project) => ({
    id: project._id,
    title: project.registrationCode || "",
    subtext: "",
    logoImage: project.propertyLogo,
    href: `/project/${project.slug}`,
  }));

  if (completedProjects.length === 0) {
    return null;
  }

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
          {completedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              subtext={project.subtext}
              logoImage={project.logoImage}
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
