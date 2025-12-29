import { fetchProject } from "@/views/project/[slug]/project-data";
import { notFound } from "next/navigation";
import React from "react";
import { PropertyDataProvider } from "@/views/project/[slug]/use-property-data";
import HeroSection from "@/views/project/[slug]/index/hero-section";
import PrimaryHighlights from "@/views/project/[slug]/index/primary-highlights";
import PropertyPitch from "@/views/project/[slug]/index/property-pitch";
import AboutAmenities from "@/views/project/[slug]/index/aboutAmenities";
import AllAmmenities from "@/views/project/[slug]/index/all-ammenities";
import Footer from "@/components/footer/footer";
import FloorPlansIndex from "@/views/project/[slug]/index/floor-plans-index";
import VisualShowcase from "@/views/project/[slug]/index/visual-showcase";
import type { Metadata, ResolvingMetadata } from "next";
import { absoluteUrl, applyPageDefaults, toOgImage } from "@/lib/seo";
import { buildRealEstateJsonLd } from "@/lib/jsonld";

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
        alternates: { canonical: absoluteUrl(`/project/${slug}`) },
        robots: { index: false, follow: false },
      },
      parent
    );
  }

  const description =
    project.headline ||
    project.sliderDescription ||
    project.shortAddress ||
    "Mapsko premium real estate in Gurugram.";

  const canonical = absoluteUrl(`/project/${project.slug}`);
  const ogImage =
    toOgImage(project.primaryCoverPhoto, {
      alt: project.name,
    }) ||
    toOgImage(project.primaryPropertyPhoto, {
      alt: project.name,
    });

  return applyPageDefaults(
    {
      title: project.name,
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

  const ogImage =
    toOgImage(project.primaryCoverPhoto, { alt: project.name }) ||
    toOgImage(project.primaryPropertyPhoto, { alt: project.name });
  const ogImageUrl = ogImage?.[0]?.url;

  const projectJsonLd = buildRealEstateJsonLd({
    name: project.name,
    description:
      project.headline ||
      project.sliderDescription ||
      project.shortAddress ||
      "Mapsko project in Gurugram",
    url: absoluteUrl(`/project/${project.slug}`),
    image: ogImageUrl,
    addressText: project.shortAddress,
  });

  return (
    <PropertyDataProvider property={project}>
      <HeroSection />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <PrimaryHighlights />
      <PropertyPitch />
      <AboutAmenities />
      <AllAmmenities />
      <FloorPlansIndex />
      <VisualShowcase />
      <Footer />
    </PropertyDataProvider>
  );
};

export default Page;
