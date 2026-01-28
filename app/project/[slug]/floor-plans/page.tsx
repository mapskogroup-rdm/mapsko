import Footer from "@/components/footer/footer";
import FloorPlansContent from "@/views/project/[slug]/floor-plans/floor-plans-content";
import HeroSection from "@/views/project/[slug]/floor-plans/hero-section";
import { fetchProject } from "@/views/project/[slug]/project-data";
import { PropertyDataProvider } from "@/views/project/[slug]/use-property-data";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { absoluteUrl, applyPageDefaults, toOgImage } from "@/lib/seo";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const project = await fetchProject(slug);

  if (!project) {
    return applyPageDefaults(
      {
        title: "Project | Mapsko",
        alternates: {
          canonical: absoluteUrl(`/project/${slug}/floor-plans`),
        },
        robots: { index: false, follow: false },
      },
      parent
    );
  }

  const canonical = absoluteUrl(`/project/${project.slug}/floor-plans`);
  const title = project.floorPlansMetaTitle || `${project.name} | Floor Plans`;
  const description =
    project.floorPlansMetaDescription ||
    project.aboutFloorPlans ||
    project.headline ||
    "View detailed floor plans and layouts for this Mapsko project.";
  const ogImage =
    toOgImage(project.primaryCoverPhoto, { alt: project.name }) ||
    toOgImage(project.primaryPropertyPhoto, { alt: project.name });

  return applyPageDefaults(
    {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        images: ogImage,
      },
    },
    parent
  );
}

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
