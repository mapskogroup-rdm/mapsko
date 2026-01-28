import Footer from "@/components/footer/footer";
import { fetchProject } from "@/views/project/[slug]/project-data";
import { PropertyDataProvider } from "@/views/project/[slug]/use-property-data";
import HeroSection from "@/views/project/[slug]/video-gallery/hero-section";
import VideoGalleryContent from "@/views/project/[slug]/video-gallery/video-gallery-content";
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
          canonical: absoluteUrl(`/project/${slug}/video-gallery`),
        },
        robots: { index: false, follow: false },
      },
      parent
    );
  }

  const canonical = absoluteUrl(`/project/${project.slug}/video-gallery`);
  const title = project.videosMetaTitle || `${project.name} | Video Gallery`;
  const description =
    project.videosMetaDescription ||
    "Watch project walkthroughs, construction progress, and amenity highlights in our video gallery.";
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
      <VideoGalleryContent />
      <Footer />
    </PropertyDataProvider>
  );
};

export default Page;
