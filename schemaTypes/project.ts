import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Name",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      description: "E.g. Ready to move, Under construction",
      group: "content",
    }),
    defineField({
      name: "priceRange",
      title: "Price Range",
      type: "string",
      description: "E.g. Starting from 80 Lacs",
      group: "content",
    }),
    defineField({
      name: "possession",
      title: "Possession / Delivery",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
      group: "content",
    }),
    defineField({
      name: "about",
      title: "About",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "media",
      options: { hotspot: true },
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
    }),
    defineField({
      name: "highlightImage",
      title: "Highlight Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
    }),
    defineField({
      name: "floorPlans",
      title: "Floor Plans",
      type: "array",
      group: "media",
      of: [
        defineArrayMember({
          name: "floorPlan",
          title: "Floor Plan",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "bedrooms",
              title: "Bedrooms",
              type: "number",
            }),
            defineField({
              name: "bathrooms",
              title: "Bathrooms",
              type: "number",
            }),
            defineField({
              name: "area",
              title: "Area",
              type: "string",
              description: "e.g. 1650 sq ft",
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "string",
            }),
            defineField({
              name: "downloadUrl",
              title: "Download URL",
              type: "url",
            }),
          ],
          preview: {
            select: {
              title: "name",
              media: "image",
              subtitle: "area",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      group: "media",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "caption",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "videoGallery",
      title: "Video Gallery",
      type: "array",
      group: "media",
      of: [
        defineArrayMember({
          name: "video",
          title: "Video",
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "youtubeId",
              title: "YouTube Video ID",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "poster",
              title: "Poster",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "youtubeId",
              media: "poster",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: "seo",
      fields: [
        defineField({
          name: "title",
          title: "SEO Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "SEO Description",
          type: "text",
        }),
        defineField({
          name: "image",
          title: "SEO / OG Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "ogType",
          title: "OG Type",
          type: "string",
          initialValue: "website",
          options: {
            list: [
              { title: "Website", value: "website" },
              { title: "Article", value: "article" },
            ],
            layout: "dropdown",
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "logo",
    },
  },
});
