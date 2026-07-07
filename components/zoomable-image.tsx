"use client";

import React, { useState } from "react";

interface ZoomableImageProps {
  children: React.ReactNode;
  className?: string;
}

const ZoomableImage = ({ children, className = "" }: ZoomableImageProps) => {
  const [scale, setScale] = useState(1);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.5, 4));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1));

  return (
    <div className={`relative group ${className}`}>
      {/* Zoom controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
        <button
          onClick={zoomIn}
          aria-label="Zoom In"
          className="bg-white/90 hover:bg-white text-sky-800 p-2 rounded-full shadow-md transition-colors focus:outline-none"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
            <path d="M8 11h6" />
            <path d="M11 8v6" />
          </svg>
        </button>
        <button
          onClick={zoomOut}
          aria-label="Zoom Out"
          className="bg-white/90 hover:bg-white text-sky-800 p-2 rounded-full shadow-md transition-colors focus:outline-none"
          disabled={scale === 1}
          style={{ opacity: scale === 1 ? 0.5 : 1 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
            <path d="M8 11h6" />
          </svg>
        </button>
      </div>

      {/* Image container */}
      <div className="w-full h-full overflow-auto rounded-lg" style={{ scrollbarWidth: 'thin' }}>
        <div
          className="transition-all duration-300 ease-out origin-top-left flex items-center justify-center min-h-full"
          style={{ width: `${scale * 100}%` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ZoomableImage;
