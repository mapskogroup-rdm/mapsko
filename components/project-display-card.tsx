import React from "react";
import { ImageBackground } from "./image-background";
import Link from "next/link";
import { StaticImageData } from "next/image";

type Props = {
  imageSrc: string | StaticImageData;
  linkHref: string;
  title: string;
  location: string;
  subPoints: string[];
  gradientColor: string;
};

const ProjectDisplayCard = ({
  imageSrc,
  linkHref,
  title,
  location,
  subPoints,
  gradientColor,
}: Props) => {
  return (
    <ImageBackground
      src={imageSrc}
      alt="second-image"
      width={1000}
      height={1000}
      className="w-full flex flex-col cursor-pointer justify-end group h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px]"
    >
      <div
        className="transition-all duration-300 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] w-full flex flex-col items-center justify-end p-4 sm:p-6 md:p-8 lg:p-10 opacity-90"
        style={{
          background: `linear-gradient(to top, ${gradientColor} 0%, ${gradientColor} 65%, transparent 100%)`,
        }}
      >
        <span className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase pb-4 sm:pb-6 md:pb-8 lg:pb-10">
          {title}
        </span>

        <div className="space-y-1.5 sm:space-y-2 pb-4 sm:pb-5 md:pb-6">
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light">
            {location}
          </p>

          {subPoints.map((subPoint, index) => (
            <p
              key={index}
              className="text-white text-sm sm:text-base md:text-lg font-light"
            >
              {subPoint}
            </p>
          ))}
        </div>

        <Link
          href={linkHref}
          className="text-center justify-start text-white text-sm sm:text-base md:text-lg lg:text-xl w-fit font-bold border py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 border-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300"
        >
          Visit Website
        </Link>
      </div>
    </ImageBackground>
  );
};

export default ProjectDisplayCard;
