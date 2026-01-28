import Footer from "@/components/footer/footer";
import HeroSection from "@/views/project/[slug]/image-gallery/hero-section";
import ImageGalleryContent from "@/views/project/[slug]/image-gallery/image-gallery-content";
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
          canonical: absoluteUrl(`/project/${slug}/image-gallery`),
        },
        robots: { index: false, follow: false },
      },
      parent
    );
  }

  const canonical = absoluteUrl(`/project/${project.slug}/image-gallery`);
  const title =
    project.imageGalleryMetaTitle || `${project.name} | Image Gallery`;
  const description =
    project.imageGalleryMetaDescription ||
    project.aboutImageGallery ||
    project.headline ||
    "View the project image gallery highlighting architecture and amenities.";
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
      <ImageGalleryContent />
      <Footer />
    </PropertyDataProvider>
  );
};

export default Page;
