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

    const DURATION = 60000; // 60s in milliseconds

    // Create animation: rtl = move left, ltr = move right
    const keyframes =
      direction === "rtl"
        ? [
            { transform: "translate3d(0, 0, 0)" },
            { transform: "translate3d(-50%, 0, 0)" },
          ]
        : [
            { transform: "translate3d(-50%, 0, 0)" },
            { transform: "translate3d(0, 0, 0)" },
          ];

    const animationOptions: KeyframeAnimationOptions = {
      duration: DURATION,
      iterations: Infinity,
      easing: "linear",
    };

    const animation = track.animate(keyframes, animationOptions);
    animationRef.current = animation;

    let isDragging = false;
    let startX = 0;
    let startScrollTime = 0;
    let hasDragged = false; // To prevent click events if we dragged

    // Handle hover
    const handleMouseEnter = () => {
      if (!isDragging && animationRef.current) {
        animationRef.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (!isDragging && animationRef.current) {
        animationRef.current.play();
      }
    };

    // Handle Dragging
    const handlePointerDown = (e: PointerEvent) => {
      if (!animationRef.current) return;
      isDragging = true;
      hasDragged = false;
      startX = e.clientX;
      startScrollTime = animationRef.current.currentTime as number;
      
      animationRef.current.pause();
      container.style.cursor = "grabbing";
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging || !animationRef.current || !track) return;
      
      const dx = e.clientX - startX;
      
      // If movement is very small, don't consider it a drag yet (allow clicks)
      if (Math.abs(dx) > 5) {
        hasDragged = true;
      }
      
      if (!hasDragged) return;
      
      // Prevent text selection while dragging
      e.preventDefault();
      
      // Calculate time per pixel.
      // -50% translation represents DURATION
      // Therefore, track.scrollWidth / 2 represents DURATION
      const halfWidth = track.scrollWidth / 2;
      const timePerPixel = DURATION / halfWidth;
      
      let timeDelta = dx * timePerPixel;
      
      // For RTL, moving mouse right (dx > 0) means we want to show things to the left
      // which corresponds to moving backwards in the animation (smaller time).
      if (direction === "rtl") {
        timeDelta = -timeDelta;
      }

      let newTime = startScrollTime + timeDelta;
      
      // Wrap around seamlessly
      if (newTime < 0) {
        newTime = (newTime % DURATION) + DURATION;
      }
      if (newTime >= DURATION) {
        newTime = newTime % DURATION;
      }
      
      animationRef.current.currentTime = newTime;
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      container.style.cursor = "grab";
      
      // Resume if we are not hovering anymore
      if (!container.matches(':hover')) {
        animationRef.current?.play();
      }
    };

    // Capture click phase to prevent link navigation if we actually dragged
    const handleClick = (e: MouseEvent) => {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Apply styles for dragging
    container.style.cursor = "grab";
    container.style.userSelect = "none";
    container.style.touchAction = "pan-y"; // allow vertical scroll

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    
    container.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove, { passive: false });
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    
    // Use capture phase for click to stop links from triggering
    container.addEventListener("click", handleClick, true);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      
      container.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      
      container.removeEventListener("click", handleClick, true);

      if (animationRef.current) {
        animationRef.current.cancel();
      }
    };
  }, [direction]);

  return (
    <div
      ref={containerRef}
      className={`mapsko-marquee mapsko-marquee--${direction} text-white text-center overflow-hidden`}
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
