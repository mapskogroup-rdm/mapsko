import Footer from "@/components/footer/footer";
import AboutContent from "@/views/project/[slug]/about/about-content";
import HeroSection from "@/views/project/[slug]/about/hero-section";
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
      <AboutContent />
      <Footer />
    </PropertyDataProvider>
  );
};

export default Page;
