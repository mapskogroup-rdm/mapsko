import SanityImage from "@/components/sanity-image";
import Link from "next/link";
import { Image } from "sanity";

type Props = {
  imageSrc: Image;
  logoSrc: Image;
  title: string;
  address: string;
  description: string;
  linkHref: string;
  index: number;
};

const ReadyToMoveInPropertyCard = ({
  imageSrc,
  logoSrc,
  title,
  address,
  description,
  linkHref,
  index,
}: Props) => {
  return (
    <div className={`${index % 2 === 0 ? "bg-stone-50" : ""}`}>
      <div className={`common-frame-box py-12 md:py-16 lg:py-20 xl:py-28`}>
        <div
          className={`flex flex-col-reverse lg:flex-row ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } lg:gap-32 gap-12 items-center justify-between`}
        >
          <div className="flex w-full lg:min-w-[600px] lg:max-w-[600px] lg:h-[600px] ">
            <SanityImage
              image={imageSrc}
              alt={title}
              width={1200}
              className="object-cover shadow-lg w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <div className="w-40 sm:w-48 md:w-56">
              <SanityImage
                image={logoSrc}
                alt={`${title} logo`}
                width={300}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-sky-700 text-2xl sm:text-3xl lg:text-4xl font-bold uppercase leading-tight">
                {title}
              </h3>
              <p className="text-neutral-600 text-base sm:text-lg font-semibold">
                {address}
              </p>
            </div>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
            {linkHref ? (
              <Link
                href={linkHref}
                className="inline-flex w-fit items-center justify-center border-2 border-sky-600 text-sky-700 font-semibold px-5 sm:px-7 py-3 hover:bg-sky-50 transition-colors"
              >
                View Project
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToMoveInPropertyCard;
