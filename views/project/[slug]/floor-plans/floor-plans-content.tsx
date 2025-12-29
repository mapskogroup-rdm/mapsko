"use client";

import Logo from "@/assets/icons/mapsko-logo.svg";
import { usePropertyData } from "../use-property-data";
import SanityImage from "@/components/sanity-image";

const FloorPlansContent = () => {
  const { property } = usePropertyData();
  return (
    <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          The Blueprint of Better Living
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          Every corner curated for comfort, utility, and light
        </p>
      </div>

      <div className="text-center text-neutral-500 text-lg font-light max-w-[1200px] mx-auto pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        {property.aboutFloorPlans}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {property.floorPlans?.map((floorPlan) => (
          <div key={floorPlan._key} className="flex flex-col">
            {floorPlan.image && (
              <SanityImage
                image={floorPlan.image}
                alt={floorPlan.label || ""}
                width={1000}
                className="w-full object-cover"
              />
            )}
            {floorPlan.label && (
              <p className="p-4 bg-lime-500 text-center text-white text-2xl font-bold">
                {floorPlan.label}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorPlansContent;
