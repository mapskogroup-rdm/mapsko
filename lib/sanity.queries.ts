import { groq } from "next-sanity";

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)][].slug.current
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    location,
    status,
    priceRange,
    possession,
    amenities,
    about,
    logo,
    coverImage,
    highlightImage,
    floorPlans[]{
      _key,
      name,
      image,
      bedrooms,
      bathrooms,
      area,
      price,
      downloadUrl
    },
    imageGallery[]{
      ...,
      "alt": coalesce(caption, asset->altText, asset->originalFilename)
    },
    videoGallery[]{
      _key,
      title,
      youtubeId,
      poster
    },
    seo{
      title,
      description,
      image,
      ogType
    }
  }
`;
