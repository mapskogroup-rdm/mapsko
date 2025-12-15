import { urlForImage } from "@/lib/sanity.image";
import Image, { ImageProps } from "next/image";
import React, { useMemo } from "react";
import type { Image as SanityImageType } from "sanity";
import {
  getImageDimensions,
  type SanityImageSource,
} from "@sanity/asset-utils";

type Props = {
  image: SanityImageType;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  alt?: string;
  className?: string;
};

type RestImageProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "style" | "className"
>;

const SanityImage = ({
  image,
  width,
  height,
  style,
  alt,
  className,
  ...restImageProps
}: Props & RestImageProps) => {
  const { calculatedWidth, calculatedHeight, imageUrl } = useMemo(() => {
    try {
      // Type assertion needed because Sanity Image type may not exactly match SanityImageSource
      const dimensions = getImageDimensions(image as any as SanityImageSource);
      const aspectRatio = dimensions.aspectRatio;

      let finalWidth: number;
      let finalHeight: number;

      // Calculate missing dimension based on aspect ratio
      if (width && !height) {
        // Width provided, calculate height
        finalWidth = width;
        finalHeight = Math.round(width / aspectRatio);
      } else if (height && !width) {
        // Height provided, calculate width
        finalWidth = Math.round(height * aspectRatio);
        finalHeight = height;
      } else if (!width && !height) {
        // Neither provided, use original dimensions or defaults
        finalWidth = dimensions.width || 1000;
        finalHeight = dimensions.height || 1000;
      } else {
        // Both provided
        finalWidth = width!;
        finalHeight = height!;
      }

      // Build image URL
      const urlBuilder = urlForImage(image);
      if (!urlBuilder) {
        throw new Error("Failed to create URL builder");
      }

      let builder = urlBuilder;
      if (width && !height) {
        // Only width provided - use fit('max') to maintain aspect ratio
        builder = builder.width(finalWidth).fit("max");
      } else if (height && !width) {
        // Only height provided - use fit('max') to maintain aspect ratio
        builder = builder.height(finalHeight).fit("max");
      } else {
        // Both provided or defaults used
        builder = builder.width(finalWidth).height(finalHeight);
      }

      return {
        calculatedWidth: finalWidth,
        calculatedHeight: finalHeight,
        imageUrl: builder.url() || "",
      };
    } catch (error) {
      // Fallback to defaults if dimension extraction fails
      const fallbackWidth = width || 1000;
      const fallbackHeight = height || 1000;
      return {
        calculatedWidth: fallbackWidth,
        calculatedHeight: fallbackHeight,
        imageUrl:
          urlForImage(image)
            ?.width(fallbackWidth)
            .height(fallbackHeight)
            .url() || "",
      };
    }
  }, [image, width, height]);

  return (
    <Image
      src={imageUrl}
      alt={alt || "Image"}
      width={calculatedWidth}
      height={calculatedHeight}
      style={style}
      className={className}
      {...restImageProps}
    />
  );
};

export default SanityImage;
