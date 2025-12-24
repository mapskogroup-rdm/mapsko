import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "main", title: "Main Page", default: true },
    { name: "about", title: "About" },
    { name: "location", title: "Location" },
    { name: "floorPlans", title: "Floor Plans" },
    { name: "imageGallery", title: "Image Gallery" },
    { name: "videos", title: "Videos" },
  ],
  fields: [
    // Main Page
    defineField({
      name: "name",
      title: "Name",
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
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      group: "main",
      options: {
        list: [
          { title: "Residential", value: "residential" },
          { title: "Commercial", value: "commercial" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryCoverPhoto",
      title: "Primary Cover Photo",
      type: "image",
      group: "main",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "secondaryCoverPhoto",
      title: "Secondary Cover Photo",
      type: "image",
      group: "main",
      options: { hotspot: true },
    }),
    defineField({
      name: "propertyLogo",
      title: "Property Logo",
      type: "image",
      group: "main",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryPropertyPhoto",
      title: "Primary Property Photo",
      type: "image",
      group: "main",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryHighlights",
      title: "Primary Highlights",
      type: "array",
      group: "main",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      group: "main",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "propertyPitch",
      title: "Property Pitch",
      type: "array",
      group: "main",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryAmenities",
      title: "Primary Amenities",
      type: "array",
      group: "main",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "allAmenities",
      title: "All Amenities",
      type: "array",
      group: "main",
      of: [{ type: "string" }],
    }),

    // Floor Plans Page
    defineField({
      name: "floorPlans",
      title: "Floor Plans",
      type: "array",
      group: "floorPlans",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "label",
              media: "image",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "aboutFloorPlans",
      title: "About Floor Plans",
      type: "text",
      group: "floorPlans",
    }),

    // Image Gallery Page
    defineField({
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      group: "imageGallery",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "label",
              media: "image",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "aboutImageGallery",
      title: "About Image Gallery",
      type: "text",
      group: "imageGallery",
    }),

    // About Page
    defineField({
      name: "about",
      title: "About",
      type: "text",
      group: "about",
      validation: (rule) => rule.required(),
    }),

    // Location Page
    defineField({
      name: "aboutLocation",
      title: "About Location",
      type: "text",
      group: "location",
    }),
    defineField({
      name: "googleMapsLink",
      title: "Google Maps Link",
      type: "url",
      group: "location",
    }),

    // Videos Page
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      group: "videos",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "videoUrl",
              title: "Video URL",
              type: "url",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "videoUrl",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "primaryCoverPhoto",
    },
  },
});
