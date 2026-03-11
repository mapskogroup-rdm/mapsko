"use client";

import Link from "next/link"; // no hooks needed after overlay change

import { ProjectWithSlider } from "@/lib/sanity.types";
import { SanityImageBackground } from "./sanity-image-background";

type Props = {
  projectSlider: ProjectWithSlider;
};



const ProjectDisplayCardV2 = ({ projectSlider }: Props) => {
  // fixed black overlay with 50% opacity; no color cycling
  const overlayColor = "rgba(0,0,0,0.5)";
  const { sliderPhoto, shortAddress, statusText, sliderDescription } = projectSlider;

  return (
    <SanityImageBackground
      image={sliderPhoto}
      alt="second-image"
      className="w-full flex flex-col cursor-pointer justify-end group h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px]"
    >
      <div
        className="transition-all duration-1000 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] w-full flex flex-col items-center justify-end p-4 sm:p-6 md:p-8 lg:p-10 opacity-95"
        style={{
          background: `linear-gradient(to top, ${overlayColor} 0%, ${overlayColor} 65%, transparent 100%)`,
        }}
      >
        <span className="text-2xl sm:text-3xl md:text-4xl text-white font-normal uppercase pb-4 sm:pb-6 md:pb-8 lg:pb-10">
          MAPSKO {projectSlider.name}
        </span>

        <div className="space-y-1.5 sm:space-y-2 pb-4 sm:pb-5 md:pb-6 text-center">
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light">
            {shortAddress}
          </p>

          <p className="text-white text-sm sm:text-base md:text-lg font-light">
            Status: {statusText}
          </p>

          <p className="text-white text-sm sm:text-base md:text-lg font-light line-clamp-2 max-w-[80%] mx-auto">
            {sliderDescription}
          </p>
        </div>

        <Link
          href={`/project/${projectSlider.slug}`}
          className="text-center justify-start text-white text-sm sm:text-base md:text-lg lg:text-xl w-fit font-bold border py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 border-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300"
        >
          View Project
        </Link>
      </div>
    </SanityImageBackground>
  );
};

export default ProjectDisplayCardV2;
