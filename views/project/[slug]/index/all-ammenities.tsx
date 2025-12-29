"use client";

import Logo from "@/assets/icons/mapsko-logo.svg";
import SanityImage from "@/components/sanity-image";
import { usePropertyData } from "../use-property-data";
import { Image as SanityImageType } from "sanity";

type AmmentityCardProps = {
  title: string;
  image: SanityImageType;
  index: number;
};

const AmmenityCard = ({ title, image, index }: AmmentityCardProps) => {
  return (
    <div
      className={`w-full md:w-[260px] h-[190px] flex flex-col items-center justify-center gap-5 ${index % 2 === 0 ? "bg-sky-700" : "bg-lime-500"}`}
    >
      <SanityImage
        image={image}
        height={72}
        className="h-[72px] object-cover"
      />
      <div className="text-center text-white text-base md:text-lg font-bold max-w-[200px]">
        {title}
      </div>
    </div>
  );
};

const AllAmmenities = () => {
  const { property } = usePropertyData();

  if (!property.allAmenities) return null;

  const filteredAmenities =
    property.primaryAmenities?.filter((amenity) => amenity.icon) || [];

  return (
    <section className="bg-stone-50">
      <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
        {filteredAmenities.length > 0 && (
          <div className="flex gap-4 xl:flex-nowrap flex-wrap items-center justify-center pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            {filteredAmenities.map((amenity, index) => (
              <AmmenityCard
                index={index}
                key={amenity._key}
                title={amenity.title || ""}
                image={amenity.icon!}
              />
            ))}
          </div>
        )}

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
