import { client } from "@/lib/sanity.client";
import { projectBySlugQuery, projectSlugsQuery } from "@/lib/sanity.queries";
import type { ProjectDocument } from "@/lib/sanity.types";

export const fetchProject = async (slug: string) =>
  client.fetch<ProjectDocument | null>(projectBySlugQuery, { slug });

export const fetchProjectSlugs = async () => {
  const slugs = await client.fetch<string[]>(projectSlugsQuery);
  return slugs.filter(Boolean);
};
