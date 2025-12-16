import { groq } from "next-sanity";

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)][].slug.current
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    primaryCoverPhoto,
    propertyLogo,
    primaryPropertyPhoto,
    secondaryCoverPhoto,
    primaryHighlights[]{
      _key,
      icon,
      title
    },
    headline,
    propertyPitch,
    primaryAmenities[]{
      _key,
      icon,
      title
    },
    allAmenities,
    floorPlans[]{
      _key,
      image,
      label
    },
    aboutFloorPlans,
    imageGallery[]{
      _key,
      image,
      label
    },
    aboutImageGallery,
    about,
    aboutLocation,
    googleMapsLink,
    videos[]{
      _key,
      videoUrl,
      title
    }
  }
`;

export const blogSlugsQuery = groq`
  *[_type == "blog" && defined(slug.current)][].slug.current
`;

export const blogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    category,
    shortDescription,
    coverImage,
    content,
    createdDate
  }
`;

export const allBlogsQuery = groq`
  *[_type == "blog"] | order(createdDate desc){
    _id,
    title,
    "slug": slug.current,
    category,
    shortDescription,
    coverImage,
    createdDate
  }
`;
