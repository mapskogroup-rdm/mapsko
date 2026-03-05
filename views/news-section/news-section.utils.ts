import { allNewsQuery, newsBySlugQuery } from "@/lib/sanity.queries";
import { client } from "@/lib/sanity.client";
import { NewsDocument } from "@/lib/sanity.types";

export const getNews = async (): Promise<NewsDocument[]> => {
  const news = await client.fetch(allNewsQuery);
  return news;
};

export const getNewsBySlug = async (slug: string): Promise<NewsDocument> => {
  const news = await client.fetch(newsBySlugQuery, { slug });
  return news;
};
