import { client } from "@/lib/sanity.client";
import { galleryImagesQuery } from "@/lib/sanity.queries";
import { GalleryItem } from "@/lib/sanity.types";

export type ProjectGallery = {
  _id: string;
  name: string;
  slug: string;
  imageGallery: GalleryItem[];
};

export const fetchProjectsGallery = async () => {
  const projects = await client.fetch<ProjectGallery[]>(galleryImagesQuery);
  return projects || [];
};
