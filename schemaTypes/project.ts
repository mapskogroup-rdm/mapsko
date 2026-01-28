import { defineArrayMember, defineField, defineType } from "sanity";
import { ViewWebsiteButton } from "./components/ViewWebsiteButton";

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
    { name: "sliderCard", title: "Slider Card" },
    { name: "other", title: "Other" },
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
      name: "projectStatus",
      title: "Project Status",
      type: "string",
      group: "main",
      options: {
        list: [
          { title: "Ongoing", value: "ongoing" },
          { title: "Completed", value: "completed" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "viewWebsite",
      title: "View Website",
      type: "string",
      group: "main",
      readOnly: true,
      components: {
        input: ViewWebsiteButton,
      },
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
      name: "brochurePdf",
      title: "Brochure PDF",
      type: "file",
      group: "main",
      description:
        "Upload the project brochure as a PDF (used for the download banner on the project page).",
      options: {
        accept: "application/pdf",
        storeOriginalFilename: true,
      },
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
      name: "aboutAmenities",
      title: "About Amenities",
      type: "text",
      group: "main",
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
    defineField({
      name: "mainPageMetaTitle",
      title: "Meta Title",
      type: "string",
      group: "main",
      description: "SEO meta title for the main project page",
    }),
    defineField({
      name: "mainPageMetaDescription",
      title: "Meta Description",
      type: "text",
      group: "main",
      description: "SEO meta description for the main project page",
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
    defineField({
      name: "floorPlansMetaTitle",
      title: "Meta Title",
      type: "string",
      group: "floorPlans",
      description: "SEO meta title for the floor plans page",
    }),
    defineField({
      name: "floorPlansMetaDescription",
      title: "Meta Description",
      type: "text",
      group: "floorPlans",
      description: "SEO meta description for the floor plans page",
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
    defineField({
      name: "imageGalleryMetaTitle",
      title: "Meta Title",
      type: "string",
      group: "imageGallery",
      description: "SEO meta title for the image gallery page",
    }),
    defineField({
      name: "imageGalleryMetaDescription",
      title: "Meta Description",
      type: "text",
      group: "imageGallery",
      description: "SEO meta description for the image gallery page",
    }),

    // About Page
    defineField({
      name: "about",
      title: "About",
      type: "text",
      group: "about",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aboutMetaTitle",
      title: "Meta Title",
      type: "string",
      group: "about",
      description: "SEO meta title for the about page",
    }),
    defineField({
      name: "aboutMetaDescription",
      title: "Meta Description",
      type: "text",
      group: "about",
      description: "SEO meta description for the about page",
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
    defineField({
      name: "locationMetaTitle",
      title: "Meta Title",
      type: "string",
      group: "location",
      description: "SEO meta title for the location page",
    }),
    defineField({
      name: "locationMetaDescription",
      title: "Meta Description",
      type: "text",
      group: "location",
      description: "SEO meta description for the location page",
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
    defineField({
      name: "videosMetaTitle",
      title: "Meta Title",
      type: "string",
      group: "videos",
      description: "SEO meta title for the videos page",
    }),
    defineField({
      name: "videosMetaDescription",
      title: "Meta Description",
      type: "text",
      group: "videos",
      description: "SEO meta description for the videos page",
    }),

    // Slider Card
    defineField({
      name: "sliderPhoto",
      title: "Slider Photo",
      type: "image",
      group: "sliderCard",
      options: { hotspot: true },
    }),
    defineField({
      name: "shortAddress",
      title: "Short Address",
      type: "string",
      group: "sliderCard",
    }),
    defineField({
      name: "statusText",
      title: "Status Text",
      type: "string",
      group: "sliderCard",
    }),
    defineField({
      name: "sliderDescription",
      title: "Slider Description",
      type: "string",
      group: "sliderCard",
    }),

    // Other
    defineField({
      name: "rankingIndex",
      title: "Ranking Index",
      type: "number",
      group: "other",
      description:
        "Used to sort projects in a particular order (lower numbers appear first)",
    }),
    defineField({
      name: "registrationCode",
      title: "Registration Code",
      type: "string",
      group: "other",
    }),
    defineField({
      name: "propertyImageWithLogo",
      title: "Property Image with Logo",
      type: "image",
      group: "other",
      options: { hotspot: true },
    }),
    defineField({
      name: "readyToMoveInContent",
      title: "Ready to Move In Content",
      type: "text",
      group: "other",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "primaryCoverPhoto",
    },
  },
});
