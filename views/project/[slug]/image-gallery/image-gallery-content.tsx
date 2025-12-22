"use client";

import Logo from "@/assets/icons/mapsko-logo.svg";
import { usePropertyData } from "../use-property-data";
import SanityImage from "@/components/sanity-image";

const ImageGalleryContent = () => {
  const { property } = usePropertyData();

  return (
    <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Visual Showcase
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          Architecture, amenities, and life in motion
        </p>
      </div>

      <div className="text-center text-neutral-500 text-lg font-light max-w-[1200px] mx-auto pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        {property.aboutImageGallery}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {property.imageGallery?.map((imageItem) => (
          <div key={imageItem._key}>
            {imageItem.image && (
              <SanityImage
                image={imageItem.image}
                alt={imageItem.label || ""}
                width={1000}
                className="object-cover md:h-[350px] xl:h-[500px]"
              />
            )}
            <p className="p-4 bg-lime-500 text-center text-white text-2xl font-extrabold">
              {imageItem.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryContent;
