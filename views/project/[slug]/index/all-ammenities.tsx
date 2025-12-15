"use client";

import Logo from "@/assets/icons/mapsko-logo.svg";
import { usePropertyData } from "../use-property-data";

const AllAmmenities = () => {
  const { property } = usePropertyData();

  if (!property.allAmenities) return null;

  return (
    <section className="bg-stone-50">
      <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <Logo className="w-10 sm:w-12 md:w-14" />
          <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
            World-Class Amenities
          </h2>
          <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
            From leisure to fitness, every space at {property.name}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {property.allAmenities?.map((amenity, index) => {
            // Calculate row numbers for different breakpoints
            // Mobile (1 col): each item is its own row
            const rowMobile = index;
            // Tablet (2 cols): 2 items per row
            const rowTablet = Math.floor(index / 2);
            // Desktop (4 cols): 4 items per row
            const rowDesktop = Math.floor(index / 4);

            // Determine if row is even (blue) or odd (green) for each breakpoint
            // Row 0, 2, 4... = blue (even), Row 1, 3, 5... = green (odd)
            const isBlueRowMobile = rowMobile % 2 === 0;
            const isBlueRowTablet = rowTablet % 2 === 0;
            const isBlueRowDesktop = rowDesktop % 2 === 0;

            // Base styles with responsive padding
            const baseStyles =
              "border-2 p-3 sm:p-4 md:p-5 text-center transition-colors duration-200";

            // Mobile styles (1 column)
            const mobileStyles = isBlueRowMobile
              ? "border-sky-500 text-sky-700"
              : "border-lime-500 text-lime-600";

            // Tablet styles (2 columns) - override mobile
            const tabletStyles = isBlueRowTablet
              ? "sm:border-sky-500 sm:text-sky-700"
              : "sm:border-lime-500 sm:text-lime-600";

            // Desktop styles (4 columns) - override tablet
            const desktopStyles = isBlueRowDesktop
              ? "lg:border-sky-500 lg:text-sky-700"
              : "lg:border-lime-500 lg:text-lime-600";

            return (
              <div
                key={amenity}
                className={`${baseStyles} ${mobileStyles} ${tabletStyles} ${desktopStyles}`}
              >
                <h3 className="text-sm sm:text-base md:text-lg font-bold">
                  {amenity}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllAmmenities;
