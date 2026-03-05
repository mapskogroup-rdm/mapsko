import Logo from "@/assets/icons/mapsko-logo.svg";
import { client } from "@/lib/sanity.client";
import { ProjectWithSlider } from "@/lib/sanity.types";
import { projectsWithSliderQuery } from "@/lib/sanity.queries";
import ProjectDisplayCardV2 from "@/components/project-display-card-v2";

const SecondSection = async () => {
  const projects = await client.fetch<ProjectWithSlider[]>(
    projectsWithSliderQuery
  );

  if (projects.length === 0) {
    return null;
  }

  const filteredProjects = projects.filter(
    (project) => project.projectType === "residential"
  );

  return (
    <div className="pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Discover Your Perfect Home
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          Premium projects designed for modern living
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 *:w-full text-white text-center">
        {filteredProjects.map((project, index) => (
          <ProjectDisplayCardV2
            key={project._id}
            projectSlider={project}
            gradientColor={index % 2 === 0 ? "#0B6BB8" : "#8AC028"}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
