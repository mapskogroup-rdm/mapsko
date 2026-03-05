"use client";

import { BlogDocument } from "@/lib/sanity.types";
import CategorySelector from "./category-selector";
import { useState } from "react";
import BlogsList from "./blogs-list";

type Props = {
  blogs: BlogDocument[];
};

const BlogsContainer = ({ blogs }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="common-frame-box py-8 sm:py-12 flex flex-col justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
      <CategorySelector
        blogs={blogs}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {categoryBlogs.length > 0 ? (
        <BlogsList categoryBlogs={categoryBlogs} />
      ) : (
        <div className="text-center text-2xl font-bold">No blogs found</div>
      )}
    </div>
  );
};

export default BlogsContainer;
