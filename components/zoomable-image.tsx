"use client";

import React, { useState, useRef, MouseEvent } from "react";

interface ZoomableImageProps {
  children: React.ReactNode;
  className?: string;
  zoomScale?: number;
}

const ZoomableImage = ({ children, className = "", zoomScale = 1.5 }: ZoomableImageProps) => {
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to container (0 to 1)
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    setZoomStyle({
      transformOrigin: `${x * 100}% ${y * 100}%`,
      transform: `scale(${zoomScale})`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: "center center",
      transform: "scale(1)",
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-crosshair ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="w-full h-full transition-transform duration-[50ms] ease-out will-change-transform"
        style={zoomStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default ZoomableImage;
