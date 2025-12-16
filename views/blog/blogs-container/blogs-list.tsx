import SanityImage from "@/components/sanity-image";
import { BlogDocument } from "@/lib/sanity.types";
import CalenderIcon from "@/assets/icons/calender.svg";
import Link from "next/link";

type Props = {
  categoryBlogs: BlogDocument[];
};

const BlogsList = ({ categoryBlogs }: Props) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-4 xl:gap-16">
      {categoryBlogs.map((blog) => {
        const createdDate = new Date(blog.createdDate).toLocaleDateString(
          "en-US",
          {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }
        );

        return (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog._id}
            className="border border-[#E5E5E5] flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <SanityImage
              image={blog.coverImage}
              alt={blog.title}
              height={300}
              className="h-[200px] sm:h-[250px] md:h-[300px] w-full object-cover"
            />

            <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1 justify-between">
              <div className="flex flex-col gap-3 sm:gap-4 pb-3">
                <h3 className="text-sky-700 text-xl sm:text-2xl md:text-3xl font-medium line-clamp-2 leading-tight sm:leading-8 md:leading-10">
                  {blog.title}
                </h3>
                <p className="text-neutral-500 text-sm sm:text-base md:text-lg font-light line-clamp-3 sm:line-clamp-4 leading-6 sm:leading-7">
                  {blog.shortDescription}
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 text-neutral-500 text-xs sm:text-sm md:text-base font-light leading-6 sm:leading-7">
                <CalenderIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <p>{createdDate}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogsList;
