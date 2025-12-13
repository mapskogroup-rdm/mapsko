import type { PortableTextBlock } from "sanity";
import type { Image } from "sanity";

export interface FloorPlan {
  _key: string;
  name: string;
  image?: Image;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  price?: string;
  downloadUrl?: string;
}

export interface GalleryImage extends Image {
  _key?: string;
  caption?: string;
  alt?: string | null;
}

export interface VideoItem {
  _key: string;
  title?: string;
  youtubeId: string;
  poster?: Image;
}

export interface ProjectDocument {
  _id: string;
  slug?: string;
  title: string;
  location?: string;
  status?: string;
  priceRange?: string;
  possession?: string;
  amenities?: string[];
  about?: PortableTextBlock[];
  logo?: Image;
  coverImage?: Image;
  highlightImage?: Image;
  floorPlans?: FloorPlan[];
  imageGallery?: GalleryImage[];
  videoGallery?: VideoItem[];
  seo?: {
    title?: string;
    description?: string;
    image?: Image;
    ogType?: string;
  };
}
