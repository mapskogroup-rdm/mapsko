import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const videos = [
  "/assets/banner-video.webm",
  "/assets/banner video 1.webm",
  "/assets/banner video 2.webm",
];

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev: number) => (prev + 1) % videos.length);
  };

  return (
    <div style={{ position: "relative" }} className="overflow-hidden">
      {/* Background Videos with Cross-fade */}
      <div className="absolute inset-0 z-0">
        {videos.map((src, index) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentVideo ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ zIndex: index === currentVideo ? 1 : 0 }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "black",
          opacity: 0.6,
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="w-screen h-screen flex items-center justify-between flex-col text-white px-4 sm:px-6">
          <Navbar />
          <div className="text-center px-4 sm:px-6 mx-auto">
            <h1 className="text-2xl lg:text-5xl leading-tight font-bold">
              BUILDING DREAMS, CREATING LEGACIES
            </h1>
            <p className="text-base lg:text-2xl mt-2 font-medium">
              Premium Real Estate Excellence
            </p>

            <Link
              href="/projects/project-updates"
              className="flex w-fit mx-auto border border-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300 py-3 px-6 lg:py-4 lg:px-8 mt-6 lg:mt-10 text-sm lg:text-base font-semibold tracking-wide"
            >
              Explore Our Projects
            </Link>
          </div>
          <div className="w-full mx-auto px-4 sm:px-6 mb-2 md:mb-4 lg:mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 sm:divide-x sm:divide-white sm:*:px-4 text-base lg:text-2xl">
              <p className="text-center sm:text-left">
                <span className="font-bold">23+</span> Delivered Projects
              </p>
              <p className="text-center sm:text-left">
                ISO 9001:2000 Certified
              </p>
              <p className="text-center sm:text-left">
                <span className="font-bold">Reaching 30 years</span> Legacy
              </p>
              <p className="text-center sm:text-left">
                <span className="font-bold">10,000+ </span>Happy Families
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
