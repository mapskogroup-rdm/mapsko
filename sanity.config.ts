import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemaTypes from "./schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export default defineConfig({
  name: "mapsko_cms",
  title: "Mapsko CMS",
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
