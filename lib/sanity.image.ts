import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId } from "./sanity.client";

const builder = imageUrlBuilder({
  projectId: projectId || "",
  dataset,
});

export const urlForImage = (source?: Image | null) =>
  source ? builder.image(source) : null;
