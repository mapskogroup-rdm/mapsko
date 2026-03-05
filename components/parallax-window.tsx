"use client";

import Image, { StaticImageData } from "next/image";

interface ParallaxWindowProps {
  image: StaticImageData;
  alt: string;
  height?: string;
  className?: string;
}

const ParallaxWindow = ({
  image,
  alt,
  height = "h-[517px]",
  className = "",
}: ParallaxWindowProps) => {
  return (
    <div
      className={`relative ${height} w-full overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    >
      {/* Fixed background image - creates parallax window effect */}
      <div
        className="parallax-bg hidden md:block"
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      {/* Fallback image for mobile (background-attachment: fixed doesn't work well on mobile) */}
      <Image
        src={image}
        alt={alt}
        width={1000}
        height={1000}
        className="w-full h-full object-cover md:hidden"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      {/* Window overlay - transparent, allows content to scroll over */}
      <div className="relative z-0 h-full w-full pointer-events-none" />
    </div>
  );
};

export default ParallaxWindow;
