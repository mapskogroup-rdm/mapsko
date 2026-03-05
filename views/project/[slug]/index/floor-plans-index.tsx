"use client";

import Logo from "@/assets/icons/mapsko-logo.svg";
import { usePropertyData } from "../use-property-data";
import SanityImage from "@/components/sanity-image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const FloorPlansIndex = () => {
  const { property } = usePropertyData();

  const floorPlans = useMemo(
    () => property.floorPlans || [],
    [property.floorPlans]
  );
  const totalFloorPlans = floorPlans.length;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [totalFloorPlans]);

  if (totalFloorPlans === 0) return null;

  const canNavigate = totalFloorPlans > 1;
  const activeFloorPlan = floorPlans[activeIndex % totalFloorPlans];

  const goPrev = () => {
    if (!canNavigate) return;
    setActiveIndex((i) => (i - 1 + totalFloorPlans) % totalFloorPlans);
  };

  const goNext = () => {
    if (!canNavigate) return;
    setActiveIndex((i) => (i + 1) % totalFloorPlans);
  };

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

      <div className="relative max-w-[800px] w-full">
        {activeFloorPlan?.image && (
          <SanityImage
            image={activeFloorPlan.image}
            alt={activeFloorPlan.label || `Floor plan for ${property.name}`}
            width={1100}
            className="w-full h-auto object-cover"
          />
        )}

        {canNavigate && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous floor plan"
              className="absolute left-3 cursor-pointer lg:-left-10 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-sky-700 text-sky-700 hover:text-white border border-sky-700 rounded-full w-10 h-10 flex items-center justify-center duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next floor plan"
              className="absolute right-3 cursor-pointer lg:-right-10 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-sky-700 text-sky-700 hover:text-white border border-sky-700 rounded-full w-10 h-10 flex items-center justify-center duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>

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
