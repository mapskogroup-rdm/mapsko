"use client";

import Logo from "@/assets/icons/mapsko-logo.svg";
import { usePropertyData } from "../use-property-data";

const AboutAmenities = () => {
  const { property } = usePropertyData();

  return (
    <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          World-Class Amenities
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          From leisure to fitness, every space at {property.name}
        </p>

        {property.aboutAmenities && (
          <p className="max-w-[1100px] text-center text-neutral-500 text-sm sm:text-base md:text-lg">
            {property.aboutAmenities}
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutAmenities;
