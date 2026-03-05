import Navbar from "@/components/navbar/navbar";
import { SanityImageBackground } from "@/components/sanity-image-background";
import { Image } from "sanity";

type Props = {
  image: Image;
};

const HeroSection = ({ image }: Props) => {
  return (
    <div>
      <SanityImageBackground
        image={image}
        overlayOpacity={0.6}
        alt="landing-hero"
      >
        <div className="w-screen h-[500px] flex items-center justify-between flex-col text-white px-4 sm:px-6">
          <Navbar />
          <h1 className="text-center justify-start text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
            News
          </h1>
          <div className="h-16" />
        </div>
      </SanityImageBackground>
    </div>
  );
};

export default HeroSection;
