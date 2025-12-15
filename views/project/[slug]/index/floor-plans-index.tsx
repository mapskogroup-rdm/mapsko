"use client";

import Logo from "@/assets/icons/mapsko-logo.svg";
import { usePropertyData } from "../use-property-data";
import SanityImage from "@/components/sanity-image";
import Link from "next/link";

const FloorPlansIndex = () => {
  const { property } = usePropertyData();

  if (!property.floorPlans || property.floorPlans.length === 0) return null;

  const indexFloorPlan = property.floorPlans[0];

  return (
    <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Floor Plans at {property.name}
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          blends functionality with refined aesthetics
        </p>
      </div>

      {indexFloorPlan.image && (
        <SanityImage
          image={indexFloorPlan.image}
          width={1100}
          className="max-w-[1100px] w-full h-auto object-cover"
        />
      )}

      <Link
        href={`/project/${property.slug}/floor-plans`}
        className="lg:mt-24 mt-12 flex hover:bg-sky-700 duration-300 w-fit hover:text-white border border-sky-700 text-sky-700 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 font-bold py-2 sm:py-3"
      >
        View More
      </Link>
    </div>
  );
};

export default FloorPlansIndex;
