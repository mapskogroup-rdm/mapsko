"use client";

import Logo from "@/assets/icons/mapsko-logo.svg";
import { usePropertyData } from "../use-property-data";
import SanityImage from "@/components/sanity-image";
import Link from "next/link";
import { MarqueeTrack } from "@/components/marquee-track";

const FloorPlansIndex = () => {
  const { property } = usePropertyData();

  if (!property.floorPlans || property.floorPlans.length === 0) return null;

  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Floor Plans at {property.name}
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          blends functionality with refined aesthetics
        </p>
      </div>

      <MarqueeTrack direction="rtl">
        {Array.from(
          { length: Math.max(Math.ceil(10 / property.floorPlans.length), 1) },
          (_, dupIndex) => (
            <div key={dupIndex} className="flex flex-nowrap items-stretch">
              {property.floorPlans?.map((floorPlan, index) => {
                if (!floorPlan.image) return null;

                return (
                  <div
                    key={`${dupIndex}-${index}`}
                    className="shrink-0 w-[85vw] sm:w-[420px] md:w-[460px] xl:w-[calc((100vw-3rem)/3)]"
                  >
                    <SanityImage
                      image={floorPlan.image}
                      width={1100}
                      className="w-[800px] h-auto object-cover"
                    />
                  </div>
                );
              })}
            </div>
          )
        )}
      </MarqueeTrack>

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
