import { fetchProject } from "@/views/project/[slug]/project-data";
import { notFound } from "next/navigation";
import React from "react";
import { PropertyDataProvider } from "@/views/project/[slug]/use-property-data";
import HeroSection from "@/views/project/[slug]/index/hero-section";
import PrimaryHighlights from "@/views/project/[slug]/index/primary-highlights";
import PropertyPitch from "@/views/project/[slug]/index/property-pitch";
import PrimaryAmenities from "@/views/project/[slug]/index/primary-ammenities";
import AllAmmenities from "@/views/project/[slug]/index/all-ammenities";
import Footer from "@/components/footer/footer";
import FloorPlansIndex from "@/views/project/[slug]/index/floor-plans-index";
import VisualShowcase from "@/views/project/[slug]/index/visual-showcase";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = await fetchProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <PropertyDataProvider property={project}>
      <HeroSection />
      <PrimaryHighlights />
      <PropertyPitch />
      <PrimaryAmenities />
      <AllAmmenities />
      <FloorPlansIndex />
      <VisualShowcase />
      <Footer />
    </PropertyDataProvider>
  );
};

export default Page;
