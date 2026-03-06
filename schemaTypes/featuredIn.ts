import { defineField, defineType } from "sanity";

export default defineType({
    name: "featuredIn",
    title: "Featured In",
    type: "document",
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
    ],
    preview: {
        select: {
            title: "title",
            media: "publicationLogo",
        },
    },
});
