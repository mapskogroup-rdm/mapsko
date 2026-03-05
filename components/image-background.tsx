"use client";

import React from "react";
import Image, { ImageProps } from "next/image";

export interface ImageBackgroundProps
  extends Omit<ImageProps, "style" | "className"> {
  style?: React.CSSProperties;
  className?: string;
  imageStyle?: React.CSSProperties;
  imageClassName?: string;
  overlayOpacity?: number; // 0 to 1, adds a black overlay when provided
  children?: React.ReactNode;
}

export function ImageBackground({
  style,
  className,
  imageStyle,
  imageClassName,
  overlayOpacity,
  children,
  ...imageProps
}: ImageBackgroundProps) {
  return (
    <div style={{ position: "relative", ...style }} className={className}>
      <Image
        {...imageProps}
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
