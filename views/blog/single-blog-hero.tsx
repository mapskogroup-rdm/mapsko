import { ImageBackground } from "@/components/image-background";
import Navbar from "@/components/navbar/navbar";
import { urlForImage } from "@/lib/sanity.image";
import { Image as SanityImageType } from "sanity";

interface SingleBlogHeroProps {
  title: string;
  coverImage: SanityImageType;
}

const SingleBlogHero = ({ title, coverImage }: SingleBlogHeroProps) => {
  const imageUrl = urlForImage(coverImage)?.url() || "/assets/hero-banners/blogs-hero.png";

  return (
    <div>
      <ImageBackground
        src={imageUrl}
        overlayOpacity={0.6}
        alt={title}
        width={1920}
        height={1080}
      >
        <div className="w-screen h-[500px] flex items-center justify-between flex-col text-white px-4 sm:px-6">
          <Navbar />
          <div className="flex-1 flex items-center justify-center text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight px-4">
              {title}
            </h1>
          </div>
          <div className="h-16" />
        </div>
      </ImageBackground>
    </div>
  );
};

export default SingleBlogHero;
