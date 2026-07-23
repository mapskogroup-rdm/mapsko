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
  useCdn: false,
  perspective: "published" as const,
};

export const client = createClient(sanityConfig);

const originalFetch = client.fetch.bind(client);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
client.fetch = (async function fetchWrapper(this: unknown, ...args: [query: string, ...rest: unknown[]]) {
  try {
    const query = args[0];
    const params = (args[1] || {}) as Record<string, any>;
    const options = (args[2] || {}) as any;
    
    // Add current date in IST to params automatically for scheduling
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' });
    params.currentDateIST = formatter.format(now);
    
    // Disable caching for real-time updates without redeploying
    options.cache = "no-store";
    options.next = { ...options.next, revalidate: 0 };
    
    return await (originalFetch as any)(query, params, options);
  } catch (err) {
    console.warn("Sanity query failed. Returning fallback empty state.", err);
    return [];
  }
} as typeof client.fetch);

export type SanityClientType = typeof client;

export { projectId, dataset, apiVersion };
