"use client";

import { usePropertyData } from "../use-property-data";
import PropertyNavbar from "@/components/navbar/property-navbar";
import { SanityImageBackground } from "@/components/sanity-image-background";

const HeroSection = () => {
  const { property } = usePropertyData();

  return (
    <div>
      <SanityImageBackground
        image={property.primaryCoverPhoto}
        overlayOpacity={0.6}
        alt="landing-hero"
      >
        <div className="w-screen h-screen flex items-center justify-between flex-col text-white px-4 sm:px-6">
          <PropertyNavbar property={property} />
          <h1 className="text-center justify-start text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light uppercase">
            {property.name}
          </h1>
          <div className="h-16" />
        </div>
      </SanityImageBackground>
    </div>
  );
};

export default HeroSection;
