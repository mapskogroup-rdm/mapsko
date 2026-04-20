"use client";

import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const videos = [
  "/assets/banner-video.webm",
  "/assets/banner video 1.webm",
  "/assets/banner video 2.webm",
];

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Whenever the active index changes, reset & play the new video
  useEffect(() => {
    videos.forEach((_, i) => {
      const el = videoRefs.current[i];
      if (!el) return;
      if (i === currentVideo) {
        el.currentTime = 0;
        el.play().catch(() => {});
      } else {
        el.pause();
        el.currentTime = 0;
      }
    });
  }, [currentVideo]);

  const goNext = () =>
    setCurrentVideo((prev) => (prev + 1) % videos.length);

  const goPrev = () =>
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div style={{ position: "relative" }} className="overflow-hidden">
      {/* Background Videos with Cross-fade */}
      <div className="absolute inset-0 z-0">
        {videos.map((src, index) => (
          <video
            key={src}
            ref={(el) => { videoRefs.current[index] = el; }}
            src={src}
            muted
            playsInline
            onEnded={goNext}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentVideo ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === currentVideo ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "black",
          opacity: 0.55,
          zIndex: 2,
        }}
      />

      {/* Arrow Navigation */}
      <button
        onClick={goPrev}
        aria-label="Previous video"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/60 bg-black/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={goNext}
        aria-label="Next video"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/60 bg-black/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            aria-label={`Go to video ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentVideo ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 3 }}>
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
                <span className="font-bold">ISO 9001:2000</span> Certified
              </p>
              <p className="text-center sm:text-left">
                Reaching <span className="font-bold">30 years</span> Legacy
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

