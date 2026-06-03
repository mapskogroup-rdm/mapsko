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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
client.fetch = (async function fetchWrapper(this: unknown, ...args: [query: string, ...rest: unknown[]]) {
  try {
    return await (originalFetch as (...a: typeof args) => Promise<unknown>)(...args);
  } catch (err) {
    console.warn("Sanity query failed. Returning fallback empty state.", err);
    return [];
  }
} as typeof client.fetch);

export type SanityClientType = typeof client;

export { projectId, dataset, apiVersion };
