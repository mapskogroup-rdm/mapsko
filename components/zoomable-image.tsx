"use client";

import React, { useState, useRef, useEffect } from "react";

interface ZoomableImageProps {
  children: React.ReactNode;
  className?: string;
}

const ZoomableImage = ({ children, className = "" }: ZoomableImageProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.5, 4));
  const zoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.5, 1);
      if (newScale === 1) setPosition({ x: 0, y: 0 });
      return newScale;
    });
  };

  // Adjust clamping when scale changes (e.g. zooming out while panned)
  useEffect(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const maxX = (width * (scale - 1)) / 2;
    const maxY = (height * (scale - 1)) / 2;
    
    setPosition(prev => ({
      x: Math.max(-maxX, Math.min(maxX, prev.x)),
      y: Math.max(-maxY, Math.min(maxY, prev.y))
    }));
  }, [scale]);

  const handlePointerDown = (clientX: number, clientY: number) => {
    if (scale === 1) return;
    setIsDragging(true);
    setDragStart({ x: clientX - position.x, y: clientY - position.y });
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!isDragging || scale === 1 || !containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    const maxX = (width * (scale - 1)) / 2;
    const maxY = (height * (scale - 1)) / 2;

    let newX = clientX - dragStart.x;
    let newY = clientY - dragStart.y;

    newX = Math.max(-maxX, Math.min(maxX, newX));
    newY = Math.max(-maxY, Math.min(maxY, newY));

    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className={`relative group overflow-hidden rounded-lg ${className}`}
      ref={containerRef}
      style={{ touchAction: scale > 1 ? 'none' : 'auto' }}
      onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
      onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={(e) => handlePointerDown(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => handlePointerMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handlePointerUp}
    >
      {/* Zoom controls */}
      <div 
        className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
        onMouseDown={e => e.stopPropagation()}
        onTouchStart={e => e.stopPropagation()}
      >
        <button
          onClick={(e) => { e.stopPropagation(); zoomIn(); }}
          aria-label="Zoom In"
          className="bg-white/90 hover:bg-white text-sky-800 p-2 rounded-full shadow-md transition-colors focus:outline-none"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
            <path d="M8 11h6" />
            <path d="M11 8v6" />
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); zoomOut(); }}
          aria-label="Zoom Out"
          className="bg-white/90 hover:bg-white text-sky-800 p-2 rounded-full shadow-md transition-colors focus:outline-none"
          disabled={scale === 1}
          style={{ opacity: scale === 1 ? 0.5 : 1 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
            <path d="M8 11h6" />
          </svg>
        </button>
      </div>

      {/* Image container */}
      <div 
        className={`w-full h-full flex items-center justify-center origin-center ${isDragging ? '' : 'transition-transform duration-300 ease-out'} ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
};

export default ZoomableImage;
