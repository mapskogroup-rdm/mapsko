const { createClient } = require("next-sanity");
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "dummy";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

const client = createClient({
  projectId: "o9n31x84", // Let's try to find the project ID. Wait, it's in .env.local
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false
});

// We need the project ID. Let me fetch it from .env.local first.
