import Footer from "@/components/footer/footer";
import HeroSection from "@/views/project/[slug]/location/hero-section";
import LocationContent from "@/views/project/[slug]/location/location-content";
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
      <LocationContent />
      <Footer />
    </PropertyDataProvider>
  );
};

export default Page;
