import Footer from "@/components/footer/footer";
import FloorPlansContent from "@/views/project/[slug]/floor-plans/floor-plans-content";
import HeroSection from "@/views/project/[slug]/floor-plans/hero-section";
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
      <FloorPlansContent />
      <Footer />
    </PropertyDataProvider>
  );
};

export default Page;
