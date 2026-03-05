"use client";

import Logo from "@/assets/icons/mapsko-logo.svg";
import { usePropertyData } from "../use-property-data";

const VideoGalleryContent = () => {
  const { property } = usePropertyData();

  return (
    <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Watch the Way You&apos;ll Live
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          From foyer to balcony—experience the flow in motion
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {property.videos?.map((videoItem) => (
          <div key={videoItem._key}>
            <iframe
              className="h-[465px]"
              src={videoItem.videoUrl}
              title={videoItem.title}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGalleryContent;
