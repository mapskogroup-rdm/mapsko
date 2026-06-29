import { defineField, defineType } from "sanity";

export default defineType({
    name: "featuredIn",
    title: "Featured In",
    type: "document",
    groups: [
        { name: "main", title: "Main", default: true },
        { name: "seo", title: "SEO" },
    ],
    fields: [
        defineField({
            name: "publicationLogo",
            title: "Publication Logo",
            type: "image",
            options: { hotspot: true },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: { hotspot: true },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "title",
            title: "Heading",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "subheading",
            title: "Subheading",
            type: "string",
        }),
        defineField({
            name: "shortDescription",
            title: "Subtext",
            type: "text",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "externalLink",
            title: "External Link",
            type: "url",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "rankingIndex",
            title: "Ranking Index",
            type: "number",
            initialValue: 0,
        }),
        defineField({
            name: "metaTitle",
            title: "Meta Title",
            type: "string",
            group: "seo",
            description: "Override the page title shown in search results (50–60 characters recommended).",
            validation: (rule) => rule.max(60),
        }),
        defineField({
            name: "metaDescription",
            title: "Meta Description",
            type: "text",
            group: "seo",
            description: "Override the page description shown in search results (150–160 characters recommended).",
            validation: (rule) => rule.max(160),
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "publicationLogo",
        },
    },
});
