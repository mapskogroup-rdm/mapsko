"use client";

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
      className={`w-full md:w-[260px] h-[200px] md:h-[290px] flex flex-col items-center justify-center gap-9 ${index % 2 === 0 ? "bg-sky-700" : "bg-lime-500"}`}
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

const PrimaryAmenities = () => {
  const { property } = usePropertyData();
  if (!property.primaryAmenities) return null;

  const filteredAmenities = property.primaryAmenities.filter(
    (amenity) => amenity.icon
  );

  return (
    <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex gap-4 xl:flex-nowrap flex-wrap items-center justify-center">
        {filteredAmenities.map((amenity, index) => (
          <AmmenityCard
            index={index}
            key={amenity._key}
            title={amenity.title || ""}
            image={amenity.icon!}
          />
        ))}
      </div>
    </div>
  );
};

export default PrimaryAmenities;
