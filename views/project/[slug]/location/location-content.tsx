"use client";

import Logo from "@/assets/icons/mapsko-logo.svg";
import { usePropertyData } from "../use-property-data";

const LocationContent = () => {
  const { property } = usePropertyData();
  return (
    <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Where the City Converges
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          A coveted address encircled by the city&apos;s best
        </p>
      </div>

      <div className="text-center text-neutral-500 text-lg font-light max-w-[1200px] mx-auto pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        {property.aboutLocation}
      </div>

      <div className="w-full max-w-5xl overflow-hidden p-2 border-4 border-neutral-200 mx-auto">
        <div className="relative pb-[62%]">
          <iframe
            title="Mapsko Group Location"
            src={
              property.googleMapsLink ||
              "https://www.google.com/maps?q=Mapsko%20Group%2C%20Golf%20Course%20Rd%2C%20Gurugram&output=embed"
            }
            className="absolute left-0 top-0 h-full w-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationContent;
