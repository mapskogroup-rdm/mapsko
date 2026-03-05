import { defineField, defineType } from "sanity";

export default defineType({
    name: "landingPage",
    title: "Landing Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "seo",
            title: "SEO Metadata",
            type: "object",
            fields: [
                { name: "metaTitle", title: "Meta Title", type: "string" },
                { name: "metaDescription", title: "Meta Description", type: "text" },
                { name: "canonical", title: "Canonical URL", type: "url" },
            ],
        }),
        defineField({
            name: "sections",
            title: "Page Sections",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "hero",
                    title: "Hero Section",
                    fields: [
                        { name: "headline", type: "string" },
                        { name: "subHeadline", type: "text" },
                        { name: "backgroundImage", type: "image", options: { hotspot: true } },
                    ],
                },
                {
                    type: "object",
                    name: "contentSection",
                    title: "Content Section",
                    fields: [
                        { name: "heading", type: "string" },
                        { name: "body", type: "array", of: [{ type: "block" }] },
                    ],
                },
                // We can add more sections here as needed (e.g. Gallery, Feature, etc.)
            ],
        }),
    ],
});
