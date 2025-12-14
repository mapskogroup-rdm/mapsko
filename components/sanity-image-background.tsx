"use client";

import React from "react";
import { ImageProps } from "next/image";
import SanityImage from "./sanity-image";
import type { Image as SanityImageType } from "sanity";

export interface SanityImageBackgroundProps {
  image: SanityImageType;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  imageStyle?: React.CSSProperties;
  imageClassName?: string;
  overlayOpacity?: number; // 0 to 1, adds a black overlay when provided
  children?: React.ReactNode;
}

export function SanityImageBackground({
  style,
  className,
  imageStyle,
  imageClassName,
  overlayOpacity,
  children,
  image,
  alt,
}: SanityImageBackgroundProps) {
  return (
    <div style={{ position: "relative", ...style }} className={className}>
      <SanityImage
        image={image}
        alt={alt}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          ...imageStyle,
        }}
        className={imageClassName}
        {...({} as any)}
      />
      {overlayOpacity !== undefined && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            opacity: overlayOpacity,
            zIndex: 1,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
}
