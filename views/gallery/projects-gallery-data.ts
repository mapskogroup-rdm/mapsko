import { client } from "@/lib/sanity.client";
import { galleryImagesQuery } from "@/lib/sanity.queries";
import { GalleryItem } from "@/lib/sanity.types";

export type ProjectGallery = {
  _id: string;
  name: string;
  slug: string;
  imageGallery: GalleryItem[];
};

const PREFERRED_ORDER = [
  "aspr greenz",
  "icon 79",
  "aspr hills",
  "gardenia",
  "mount ville",
  "casa bella",
  "royale ville",
  "paradise"
];

export const fetchProjectsGallery = async () => {
  const projects = await client.fetch<ProjectGallery[]>(galleryImagesQuery);
  const data = projects || [];

  data.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    
    let aIndex = PREFERRED_ORDER.findIndex(p => aName.includes(p));
    let bIndex = PREFERRED_ORDER.findIndex(p => bName.includes(p));
    
    if (aIndex === -1) aIndex = 999;
    if (bIndex === -1) bIndex = 999;
    
    return aIndex - bIndex;
  });

  return data;
};
