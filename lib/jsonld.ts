type OrganizationInput = {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
};

type WebSiteInput = {
  url: string;
  name: string;
  searchUrlTemplate?: string;
};

type BlogPostingInput = {
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  url: string;
};

type RealEstateInput = {
  name: string;
  description: string;
  url: string;
  image?: string;
  addressText?: string;
};

export const buildOrganizationJsonLd = (input: OrganizationInput) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: input.name,
  url: input.url,
  logo: input.logo,
  sameAs: input.sameAs,
});

export const buildWebsiteJsonLd = (input: WebSiteInput) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: input.url,
  name: input.name,
  potentialAction: input.searchUrlTemplate
    ? {
        "@type": "SearchAction",
        target: `${input.searchUrlTemplate}{search_term_string}`,
        "query-input": "required name=search_term_string",
      }
    : undefined,
});

export const buildBlogPostingJsonLd = (input: BlogPostingInput) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: input.headline,
  description: input.description,
  image: input.image,
  datePublished: input.datePublished,
  mainEntityOfPage: input.url,
  url: input.url,
});

export const buildRealEstateJsonLd = (input: RealEstateInput) => ({
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: input.name,
  description: input.description,
  url: input.url,
  image: input.image,
  address: input.addressText,
});
