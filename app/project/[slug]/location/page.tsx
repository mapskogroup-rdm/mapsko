import Footer from "@/components/footer/footer";
import HeroSection from "@/views/project/[slug]/location/hero-section";
import LocationContent from "@/views/project/[slug]/location/location-content";
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
          canonical: absoluteUrl(`/project/${slug}/location`),
        },
        robots: { index: false, follow: false },
      },
      parent
    );
  }

  const canonical = absoluteUrl(`/project/${project.slug}/location`);
  const title = project.locationMetaTitle || `${project.name} | Location`;
  const description =
    project.locationMetaDescription ||
    project.aboutLocation ||
    project.shortAddress ||
    project.headline ||
    "Explore the project location, connectivity, and nearby amenities.";
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
      <LocationContent />
      <Footer />
    </PropertyDataProvider>
  );
};

export default Page;
