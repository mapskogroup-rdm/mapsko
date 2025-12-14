import Footer from "@/components/footer/footer";
import { fetchProject } from "@/views/project/[slug]/project-data";
import { PropertyDataProvider } from "@/views/project/[slug]/use-property-data";
import HeroSection from "@/views/project/[slug]/video-gallery/hero-section";
import VideoGalleryContent from "@/views/project/[slug]/video-gallery/video-gallery-content";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = await fetchProject(slug);

  if (!project) {
    notFound();
  }
  return (
    <PropertyDataProvider property={project}>
      <HeroSection />
      <VideoGalleryContent />
      <Footer />
    </PropertyDataProvider>
  );
};

export default Page;
