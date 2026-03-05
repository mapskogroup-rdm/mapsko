import { getNews } from "./news-section.utils";
import SanityImage from "@/components/sanity-image";
import Link from "next/link";
import Logo from "@/assets/icons/mapsko-logo.svg";

type Props = {};

const NewsSection = async (props: Props) => {
  const news = await getNews();

  return (
    <section className="bg-stone-50">
      <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <Logo className="w-10 sm:w-12 md:w-14" />
          <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
            Latest News
          </h2>
          <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
            Stay updated with the latest news and updates from Mapsko.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {news.map((item) => {
            return (
              <Link
                key={item._id}
                href={`/news/${item.slug}`}
                className="flex flex-col gap-2"
              >
                <SanityImage
                  image={item.coverImage}
                  alt={item.title}
                  height={315}
                  className="w-full object-cover"
                />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.shortDescription}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
