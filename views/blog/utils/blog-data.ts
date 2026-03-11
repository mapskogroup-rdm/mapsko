import { client } from "@/lib/sanity.client";
import {
  blogBySlugQuery,
  blogSlugsQuery,
  allBlogsQuery,
  landingPageSlugsQuery,
} from "@/lib/sanity.queries";
import type { BlogDocument } from "@/lib/sanity.types";

export const fetchBlog = async (slug: string) =>
  client.fetch<BlogDocument | null>(blogBySlugQuery, { slug });

export const fetchBlogSlugs = async () => {
  const slugs = await client.fetch<string[]>(blogSlugsQuery);
  return slugs.filter(Boolean);
};

export const fetchLandingPageSlugs = async () => {
  const slugs = await client.fetch<string[]>(landingPageSlugsQuery);
  return slugs.filter(Boolean);
};

export const fetchAllBlogs = async () => {
  const blogs = await client.fetch<BlogDocument[]>(allBlogsQuery);
  return blogs.filter(Boolean);
};
