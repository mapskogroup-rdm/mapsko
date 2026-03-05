import Logo from "@/assets/icons/mapsko-logo.svg";
import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { projectsWithPropertyImageQuery } from "@/lib/sanity.queries";
import type { ProjectWithPropertyImage } from "@/lib/sanity.types";
import SanityImage from "@/components/sanity-image";

type Props = {};

const ThirdSection = async (props: Props) => {
  const projects = await client.fetch<ProjectWithPropertyImage[]>(
    projectsWithPropertyImageQuery
  );

  const residentialProjects = projects.filter(
    (project) => project.projectType === "residential"
  );

  if (residentialProjects.length === 0) {
    return null;
  }

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Built. Handed Over. Cherished.
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          A portfolio of finished spaces crafted to MAPSKO standards
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {residentialProjects.map((project) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default ThirdSection;
