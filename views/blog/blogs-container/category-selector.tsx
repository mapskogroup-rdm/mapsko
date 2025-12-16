import { BlogDocument } from "@/lib/sanity.types";

type Props = {
  blogs: BlogDocument[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const CategorySelector = ({
  blogs,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-center items-center w-full">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`w-full border border-sky-700 py-2 font-bold px-4 cursor-pointer transition-all duration-300 ${selectedCategory === category ? "bg-sky-700 text-white" : "bg-white text-sky-700 hover:bg-sky-600 hover:text-white"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
