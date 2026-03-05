import Footer from "@/components/footer/footer";
import AboutContent from "@/views/project/[slug]/about/about-content";
import HeroSection from "@/views/project/[slug]/about/hero-section";
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
        alternates: { canonical: absoluteUrl(`/project/${slug}/about`) },
        robots: { index: false, follow: false },
      },
      parent
    );
  }

  const canonical = absoluteUrl(`/project/${project.slug}/about`);
  const title = project.aboutMetaTitle || `${project.name} | About`;
  const description =
    project.aboutMetaDescription ||
    project.about ||
    project.headline ||
    project.sliderDescription ||
    "Learn more about this Mapsko project.";
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
      <AboutContent />
      <Footer />
    </PropertyDataProvider>
  );
};

export default Page;
