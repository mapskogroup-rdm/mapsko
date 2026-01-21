import { ImageBackground } from "@/components/image-background";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div style={{ position: "relative" }} className={""}>
      <video
        src="/assets/banner-video.webm"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 z-0"
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "black",
          opacity: 0.7,
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="w-screen h-screen flex items-center justify-between flex-col text-white px-4 sm:px-6">
          <Navbar />
          <div className="text-center px-4 sm:px-6 mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              BUILDING DREAMS, CREATING LEGACIES
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              Premium Real Estate Excellence
            </p>

            <Link
              href="/projects/project-updates"
              className="flex w-fit mx-auto border border-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300 py-3 px-6 sm:py-4 sm:px-8 mt-6 sm:mt-10 text-sm sm:text-base"
            >
              Explore Our Projects
            </Link>
          </div>
          <div className="w-full mx-auto px-4 sm:px-6 mb-8 sm:mb-12 md:mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 sm:divide-x sm:divide-white sm:*:px-4 text-base sm:text-lg xl:text-2xl">
              <p className="text-center sm:text-left">
                <span className="font-bold">22+</span> Delivered Projects
              </p>
              <p className="text-center sm:text-left">
                ISO 9001:2000 Certified
              </p>
              <p className="text-center sm:text-left">
                <span className="font-bold">3+ Decades</span> Legacy
              </p>
              <p className="text-center sm:text-left">
                <span className="font-bold">10,000+ </span>Happy Families
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <ImageBackground
    //   preload
    //   loading="eager"
    //   fetchPriority="high"
    //   overlayOpacity={0.6}
    //   src="/assets/landing-hero.png"
    //   alt="landing-hero"
    //   width={1000}
    //   height={1000}
    // >

    // </ImageBackground>
  );
};

export default HeroSection;
