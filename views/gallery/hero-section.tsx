import { ImageBackground } from "@/components/image-background";
import Navbar from "@/components/navbar/navbar";

const HeroSection = () => {
  return (
    <div>
      <ImageBackground
        src="/assets/corporate-philosophy-hero.png"
        overlayOpacity={0.6}
        alt="landing-hero"
        width={1000}
        height={1000}
      >
        <div className="w-screen h-[500px] flex items-center justify-between flex-col text-white px-4 sm:px-6">
          <Navbar />
          <h1 className="text-center justify-start text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
            Gallery
          </h1>
          <div className="h-16" />
        </div>
      </ImageBackground>
    </div>
  );
};

export default HeroSection;
