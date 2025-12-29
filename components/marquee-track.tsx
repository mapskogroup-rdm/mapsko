"use client";

import { useEffect, useRef } from "react";

interface MarqueeTrackProps {
  children: React.ReactNode;
  direction?: "ltr" | "rtl";
}

export const MarqueeTrack = ({
  children,
  direction = "rtl",
}: MarqueeTrackProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    // Create animation for smooth speed control
    const keyframes = [
      { transform: "translate3d(0, 0, 0)" },
      { transform: "translate3d(-50%, 0, 0)" },
    ];

    const animationOptions: KeyframeAnimationOptions = {
      duration: 60000, // 60s in milliseconds
      iterations: Infinity,
      easing: "linear",
    };

    const animation = track.animate(keyframes, animationOptions);
    animationRef.current = animation;

    // Handle hover - smoothly slow down
    const handleMouseEnter = () => {
      if (animationRef.current) {
        // Smoothly transition to slower speed
        animationRef.current.playbackRate = 0.2; // 5x slower
      }
    };

    const handleMouseLeave = () => {
      if (animationRef.current) {
        // Smoothly return to normal speed
        animationRef.current.playbackRate = 1;
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        animationRef.current.cancel();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`mapsko-marquee mapsko-marquee--${direction} text-white text-center`}
    >
      <div
        ref={trackRef}
        className="mapsko-marquee__track mapsko-marquee__track--js"
      >
        {children}
      </div>
    </div>
  );
};
