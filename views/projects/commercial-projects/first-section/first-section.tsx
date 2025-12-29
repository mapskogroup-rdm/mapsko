import Logo from "@/assets/icons/mapsko-logo.svg";
import { client } from "@/lib/sanity.client";
import { ProjectWithPropertyImage } from "@/lib/sanity.types";
import { projectsWithPropertyImageQuery } from "@/lib/sanity.queries";
import SanityImage from "@/components/sanity-image";
import Link from "next/link";

const FirstSection = async () => {
  const projects = await client.fetch<ProjectWithPropertyImage[]>(
    projectsWithPropertyImageQuery
  );

  const commercialProjects = projects.filter(
    (project) => project.projectType === "commercial"
  );

  if (commercialProjects.length === 0) {
    return null;
  }

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-stone-50">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Built for Businesses
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          Prime locations, proven performance
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {commercialProjects.map((project) => (
          <Link
            href={`/project/${project.slug}`}
            key={project._id}
            className="cursor-pointer flex"
          >
            <SanityImage
              image={project.propertyImageWithLogo}
              alt={project.name}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
