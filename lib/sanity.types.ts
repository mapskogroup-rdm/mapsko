import type { Image, PortableTextBlock } from "sanity";

export interface PrimaryHighlight {
  _key?: string;
  icon?: Image;
  title?: string;
}

export interface BrochurePdf {
  url?: string;
  originalFilename?: string;
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
  brochurePdf?: BrochurePdf;
  primaryHighlights?: PrimaryHighlight[];
  headline?: string;
  propertyPitch?: PortableTextBlock[];
  primaryAmenities?: PrimaryAmenity[];
  aboutAmenities?: string;
  allAmenities?: string[];
  mainPageMetaTitle?: string;
  mainPageMetaDescription?: string;
  floorPlans?: FloorPlan[];
  aboutFloorPlans?: string;
  floorPlansMetaTitle?: string;
  floorPlansMetaDescription?: string;
  imageGallery?: GalleryItem[];
  aboutImageGallery?: string;
  imageGalleryMetaTitle?: string;
  imageGalleryMetaDescription?: string;
  about?: string;
  aboutMetaTitle?: string;
  aboutMetaDescription?: string;
  aboutLocation?: string;
  googleMapsLink?: string;
  locationMetaTitle?: string;
  locationMetaDescription?: string;
  videos?: VideoItem[];
  videosMetaTitle?: string;
  videosMetaDescription?: string;
  sliderPhoto?: Image;
  shortAddress?: string;
  statusText?: string;
  sliderDescription?: string;
  registrationCode?: string;
  propertyImageWithLogo?: Image;
  readyToMoveInContent?: string;
}

export interface ProjectWithSlider {
  _id: string;
  name: string;
  slug: string;
  sliderPhoto: Image;
  shortAddress?: string;
  statusText?: string;
  sliderDescription?: string;
  projectType: "residential" | "commercial";
}

export interface ProjectFooterItem {
  _id: string;
  name: string;
  slug: string;
  projectType: "residential" | "commercial";
  rankingIndex?: number;
}

export interface ProjectWithPropertyImage {
  _id: string;
  name: string;
  slug: string;
  propertyImageWithLogo: Image;
  projectType: "residential" | "commercial";
}

export interface ProjectUpdateItem {
  _id: string;
  slug: string;
  registrationCode?: string;
  propertyLogo: Image;
  statusText?: string;
}

export interface ReadyToMoveInProject {
  _id: string;
  name: string;
  slug: string;
  propertyImageWithLogo?: Image;
  primaryPropertyPhoto?: Image;
  propertyLogo?: Image;
  shortAddress?: string;
  readyToMoveInContent?: string;
  about?: string;
  rankingIndex?: number;
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

export interface NewsDocument {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  coverImage: Image;
  bannerImage: Image;
  content: PortableTextBlock[];
}
