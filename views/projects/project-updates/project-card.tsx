import SanityImage from "@/components/sanity-image";
import Link from "next/link";
import { Image } from "sanity";

type Props = {
  title: string;
  subtext: string;
  logoImage: Image;
  href: string;
  className?: string;
};

const ProjectCard = ({ title, subtext, logoImage, href, className }: Props) => {
  return (
    <div
      className={`w-full border-8 border-[#F9F9F9] p-4 md:p-10 flex flex-col items-center justify-between ${className}`}
    >
      <div className="w-full h-full max-w-[350px] mx-auto">
        <SanityImage
          image={logoImage}
          alt={title}
          width={350}
          className="w-full h-auto object-cover max-w-[250px] md:max-w-[350px]"
        />
      </div>

      <div className="text-sky-700 text-lg md:text-xl upppercase font-bold pt-10 md:pt-16">
        {title}
      </div>

      <div className="text-center text-neutral-900 md:text-2xl font-light max-w-[380px]">
        {subtext}
      </div>

      <Link
        href={href}
        className="inline-flex mt-6 md:mt-9 w-fit items-center justify-center border-2 border-sky-700 text-sky-700 font-semibold px-7 py-3 hover:bg-sky-700 hover:text-white transition-colors"
      >
        Visit Website
      </Link>
    </div>
  );
};

export default ProjectCard;
