import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { fetchBlogSlugs } from "@/views/blog/utils/blog-data";
import { fetchProjectSlugs } from "@/views/project/[slug]/project-data";

const staticRoutes = [
  "/",
  "/about-us/company-profile",
  "/about-us/corporate-philosophy",
  "/projects/residential-projects",
  "/projects/commercial-projects",
  "/projects/project-updates",
  "/gallery",
  "/ready-to-move-in",
  "/contact",
  "/career",
  "/privacy-policy",
  "/blog",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const blogSlugs = await fetchBlogSlugs();
  const blogEntries =
    blogSlugs?.map((slug) => ({
      url: absoluteUrl(`/blog/${slug}`),
      lastModified,
    })) ?? [];

  const projectSlugs = await fetchProjectSlugs();
  const projectEntries =
    projectSlugs?.flatMap((slug) => {
      const base = absoluteUrl(`/project/${slug}`);
      const subpaths = [
        "",
        "/about",
        "/location",
        "/floor-plans",
        "/image-gallery",
        "/video-gallery",
        "/contact",
      ];
      return subpaths.map((sub) => ({
        url: sub ? `${base}${sub}` : base,
        lastModified,
      }));
    }) ?? [];

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
  }));

  return [...staticEntries, ...blogEntries, ...projectEntries];
}
