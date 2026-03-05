import type { Metadata, ResolvingMetadata } from "next";
import type { Image as SanityImageType } from "sanity";
import { urlForImage } from "./sanity.image";

const DEFAULT_SITE_NAME = "Mapsko";
const DEFAULT_DESCRIPTION =
  "Mapsko crafts luxury and premium homes across residential and commercial projects in Gurugram.";

/**
 * Read and normalize the public site URL for absolute canonicals/OG.
 * Falls back to http://localhost:3000 to avoid crashes in dev.
 */
export const getSiteUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const base = envUrl && envUrl.length > 0 ? envUrl : "http://localhost:3000";
  return base.endsWith("/") ? base.slice(0, -1) : base;
};

export const absoluteUrl = (path: string) => {
  if (!path) return getSiteUrl();
  return path.startsWith("http")
    ? path
    : `${getSiteUrl()}${path.startsWith("/") ? "" : "/"}${path}`;
};

export const buildTitle = (pageTitle?: string) =>
  pageTitle ? `${pageTitle} | ${DEFAULT_SITE_NAME}` : DEFAULT_SITE_NAME;

export const baseMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: DEFAULT_SITE_NAME,
    template: `%s | ${DEFAULT_SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: DEFAULT_SITE_NAME,
    title: DEFAULT_SITE_NAME,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
  },
};

type OgImageInput = SanityImageType | string | null | undefined;

export const toOgImage = (
  image: OgImageInput,
  opts?: { width?: number; height?: number; alt?: string }
) => {
  if (!image) return undefined;
  const width = opts?.width ?? 1200;
  const height = opts?.height ?? 630;
  const alt = opts?.alt ?? DEFAULT_SITE_NAME;

  if (typeof image === "string") {
    return [{ url: absoluteUrl(image), width, height, alt }];
  }

  const builder = urlForImage(image);
  const url = builder?.width(width).height(height).fit("max").url();
  if (!url) return undefined;
  return [{ url, width, height, alt }];
};

export const applyPageDefaults = (
  meta: Metadata,
  parent?: ResolvingMetadata
): Metadata => {
  const base: Metadata = { ...baseMetadata, ...parent };
  return {
    ...base,
    ...meta,
    openGraph: {
      ...base.openGraph,
      ...meta.openGraph,
    },
    twitter: {
      ...base.twitter,
      ...meta.twitter,
    },
  };
};
