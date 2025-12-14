"use client";

import SanityImage from "@/components/sanity-image";
import { usePropertyData } from "../use-property-data";

const PrimaryHighlights = () => {
  const { property } = usePropertyData();
  if (!property.primaryHighlights) return null;

  return (
    <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex justify-between gap-4 overflow-x-auto no-scrollbar">
        {property.primaryHighlights.map((highlight) => (
          <div
            key={highlight._key}
            className="flex flex-col items-center gap-4"
          >
            {highlight.icon && (
              <SanityImage
                image={highlight.icon}
                alt={highlight.title}
                height={100}
                className="h-[60px] md:h-[100px] w-auto"
              />
            )}
            <div className="min-w-[200px] max-w-[200px] text-center md:text-base text-sm">
              {highlight.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimaryHighlights;
