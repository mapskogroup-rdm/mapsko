import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import HeroSection from "@/views/gallery/hero-section";
import Logo from "@/assets/icons/mapsko-logo.svg";
import GalleryContent from "@/views/gallery/gallery-content";
import { fetchProjectsGallery } from "@/views/gallery/projects-gallery-data";

const Page = async () => {
  const projectsGallery = await fetchProjectsGallery();

  return (
    <main>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/" },
            { label: "Gallery", href: "/gallery" },
          ]}
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Visual Showcase
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          Architecture, amenities, and life in motion
        </p>
      </div>

      <GalleryContent projectsGallery={projectsGallery} />
      <Footer />
    </main>
  );
};

export default Page;
