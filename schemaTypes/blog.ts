import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
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
      name: "category",
      title: "Category",
      type: "string",
      group: "main",
      options: {
        list: [
          { title: "News", value: "News" },
          { title: "Development", value: "Development" },
          { title: "Project Updates", value: "Project Updates" },
        ],
        layout: "dropdown",
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
      name: "content",
      title: "Blog Content",
      type: "array",
      group: "main",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "image", options: { hotspot: true } }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      group: "main",
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
            {
              name: "body",
              type: "array",
              of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
            },
          ],
        },
        {
          type: "object",
          name: "iconBoxes",
          title: "Icon Boxes",
          fields: [
            { name: "heading", type: "string" },
            {
              name: "items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "icon", type: "image" },
                    { name: "title", type: "string" },
                    { name: "description", type: "text" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "imageBoxes",
          title: "Image Boxes",
          fields: [
            { name: "heading", type: "string" },
            {
              name: "items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "image", type: "image", options: { hotspot: true } },
                    { name: "title", type: "string" },
                    { name: "description", type: "text" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "projectSection",
          title: "Projects Section",
          fields: [
            { name: "heading", type: "string" },
            {
              name: "projects",
              type: "array",
              of: [{ type: "reference", to: [{ type: "project" }] }],
            },
          ],
        },
        {
          type: "object",
          name: "faqSection",
          title: "FAQ Section",
          fields: [
            { name: "heading", type: "string" },
            {
              name: "items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "question", type: "string" },
                    { name: "answer", type: "array", of: [{ type: "block" }] },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "ctaSection",
          title: "CTA Banner",
          fields: [
            { name: "eyebrow", title: "Eyebrow", type: "string" },
            { name: "headline", title: "Headline", type: "string" },
            { name: "subtext", title: "Subtext", type: "text" },
            { name: "buttonLabel", title: "Button Label", type: "string" },
            { name: "buttonHref", title: "Button Link", type: "string" },
            {
              name: "variant",
              title: "Style Variant",
              type: "string",
              options: {
                list: [
                  { title: "Light", value: "light" },
                  { title: "Dark", value: "dark" },
                ],
                layout: "radio",
              },
            },
          ],
        },
        {
          type: "object",
          name: "statsSection",
          title: "Statistics Section",
          fields: [
            { name: "heading", type: "string" },
            {
              name: "items",
              title: "Stats",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", type: "string" },
                    { name: "value", type: "string" },
                    { name: "description", type: "text" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "testimonialsSection",
          title: "Testimonials Section",
          fields: [
            { name: "heading", type: "string" },
            {
              name: "items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "quote", type: "text" },
                    { name: "name", type: "string" },
                    { name: "roleOrCompany", type: "string" },
                    { name: "avatar", type: "image", options: { hotspot: true } },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "relatedContentSection",
          title: "Related Content Section",
          fields: [
            { name: "heading", type: "string" },
            {
              name: "relatedBlogs",
              title: "Related Blogs",
              type: "array",
              of: [{ type: "reference", to: [{ type: "blog" }] }],
            },
            {
              name: "relatedProjects",
              title: "Related Projects",
              type: "array",
              of: [{ type: "reference", to: [{ type: "project" }] }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "createdDate",
      title: "Created Date",
      type: "date",
      group: "main",
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
