import SanityImage from "@/components/sanity-image";
import Link from "next/link";
import { Image } from "sanity";

type Props = {
  title: string;
  subtext: string;
  address?: string;
  logoImage: Image;
  href: string;
  className?: string;
};

const ProjectCard = ({ title, subtext, address, logoImage, href, className }: Props) => {
  return (
    <div
      className={`w-full border-8 border-[#F9F9F9] p-4 md:p-8 flex flex-col items-center justify-between ${className}`}
    >
      <div className="w-full h-full max-w-[350px] mx-auto min-h-[120px] flex items-center justify-center">
        <SanityImage
          image={logoImage}
          alt={title}
          width={350}
          className="w-full h-auto object-contain max-w-[200px] md:max-w-[280px]"
        />
      </div>

      <div className="flex flex-col items-center text-center space-y-2 pt-6 md:pt-10">
        {title && (
          <div className="text-sky-700 text-lg md:text-xl uppercase font-bold">
            {title}
          </div>
        )}

        {address && (
          <div className="text-neutral-600 text-sm md:text-base font-medium">
            {address}
          </div>
        )}

        {subtext && (
          <div className="text-neutral-900 text-base md:text-lg font-bold">
            {subtext}
          </div>
        )}
      </div>

      <Link
        href={href}
        className="inline-flex mt-6 md:mt-8 w-fit items-center justify-center border-2 border-sky-700 text-sky-700 font-semibold px-7 py-2.5 hover:bg-sky-700 hover:text-white transition-colors uppercase text-sm tracking-wide"
      >
        Visit Website
      </Link>
    </div>
  );
};

export default ProjectCard;
