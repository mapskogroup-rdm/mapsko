import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "news",
  title: "News",
  type: "document",
  groups: [{ name: "main", title: "Main", default: true }],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "main",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "main",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      group: "main",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      group: "main",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      group: "main",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "News Content",
      type: "array",
      group: "main",
      of: [defineArrayMember({ type: "block" })],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
});
