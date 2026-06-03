import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "dummy";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

if (projectId === "dummy") {
  console.warn("WARNING: NEXT_PUBLIC_SANITY_PROJECT_ID is not configured. Sanity CMS queries will return fallback data.");
}

export const sanityConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  perspective: "published" as const,
};

export const client = createClient(sanityConfig);

const originalFetch = client.fetch.bind(client);
client.fetch = (async function fetchWrapper(...args: any[]) {
  try {
    return await originalFetch(...args);
  } catch (err) {
    console.warn("Sanity query failed. Returning fallback empty state.", err);
    return [];
  }
} as any);

export type SanityClientType = typeof client;

export { projectId, dataset, apiVersion };
