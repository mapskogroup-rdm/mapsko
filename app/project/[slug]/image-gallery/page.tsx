import Footer from "@/components/footer/footer";
import HeroSection from "@/views/project/[slug]/image-gallery/hero-section";
import ImageGalleryContent from "@/views/project/[slug]/image-gallery/image-gallery-content";
import { fetchProject } from "@/views/project/[slug]/project-data";
import { PropertyDataProvider } from "@/views/project/[slug]/use-property-data";
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
      <ImageGalleryContent />
      <Footer />
    </PropertyDataProvider>
  );
};

export default Page;
