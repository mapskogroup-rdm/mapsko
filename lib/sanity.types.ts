import type { Image, PortableTextBlock } from "sanity";

export interface PrimaryHighlight {
  _key?: string;
  icon?: Image;
  title?: string;
}

export interface PrimaryAmenity {
  _key?: string;
  icon?: Image;
  title?: string;
}

export interface FloorPlan {
  _key?: string;
  image?: Image;
  label?: string;
}

export interface GalleryItem {
  _key?: string;
  image?: Image;
  label?: string;
}

export interface VideoItem {
  _key?: string;
  videoUrl?: string;
  title?: string;
}

export interface ProjectDocument {
  _id: string;
  slug?: string;
  name: string;
  projectType: "residential" | "commercial";
  primaryCoverPhoto: Image;
  propertyLogo: Image;
  primaryPropertyPhoto: Image;
  secondaryCoverPhoto?: Image;
  primaryHighlights?: PrimaryHighlight[];
  headline?: string;
  propertyPitch?: PortableTextBlock[];
  primaryAmenities?: PrimaryAmenity[];
  allAmenities?: string[];
  floorPlans?: FloorPlan[];
  aboutFloorPlans?: string;
  imageGallery?: GalleryItem[];
  aboutImageGallery?: string;
  about?: string;
  aboutLocation?: string;
  googleMapsLink?: string;
  videos?: VideoItem[];
}

export interface BlogDocument {
  _id: string;
  title: string;
  slug: string;
  category: "news" | "development" | "project-updates";
  shortDescription: string;
  coverImage: Image;
  content: PortableTextBlock[];
  createdDate: string;
}
