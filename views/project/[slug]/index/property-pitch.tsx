"use client";

import { PortableText } from "@portabletext/react";
import { usePropertyData } from "../use-property-data";
import Logo from "@/assets/icons/mapsko-logo.svg";
import SanityImage from "@/components/sanity-image";
import Link from "next/link";

const PropertyPitch = () => {
  const { property } = usePropertyData();

  if (!property.propertyPitch) return null;

  return (
    <section className="bg-stone-50 w-full">
      <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <Logo className="w-10 sm:w-12 md:w-14" />
          <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
            Discover Mapsko {property.name}
          </h2>
          <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
            {property.headline}
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-36 items-center">
          <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-28 w-full lg:w-auto">
            <PortableText value={property.propertyPitch as any} />
            <Link
              href={`/project/${property.slug}/about`}
              className="flex hover:bg-sky-700 duration-300 w-fit hover:text-white border border-sky-700 text-sky-700 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 font-bold py-2 sm:py-3"
            >
              View More
            </Link>
          </div>

          <SanityImage
            image={property.primaryPropertyPhoto}
            width={674}
            className="w-full lg:w-auto lg:min-w-[400px] xl:min-w-[500px] 2xl:min-w-[674px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyPitch;
