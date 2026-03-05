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

  const title = project.mainPageMetaTitle || project.name;
  const description =
    project.mainPageMetaDescription ||
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

  const brochureUrl = project.brochurePdf?.url;
  const brochureFilename =
    project.brochurePdf?.originalFilename ||
    `${project.slug ?? "project"}-brochure.pdf`;
  const brochureDownloadHref = brochureUrl
    ? `/api/brochure?${new URLSearchParams({
      url: brochureUrl,
      filename: brochureFilename,
    }).toString()}`
    : null;

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
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <HeroSection />
      {brochureDownloadHref ? (
        <div className="sticky top-0 z-50 border-b border-white/15 bg-[#0069A9] text-white">
          <div
            className="common-frame-box flex items-center justify-between gap-3 py-3 sm:py-3.5"
            role="region"
            aria-label="Brochure download"
          >
            <div className="flex min-w-0 items-center gap-2.5">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M12 3v10m0 0 4-4m-4 4-4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="min-w-0 leading-tight">
                <div className="text-sm sm:text-base font-semibold tracking-wide">
                  Download project brochure
                </div>
                <div className="text-xs sm:text-sm text-white/90 truncate">
                  {project.brochurePdf?.originalFilename || "PDF file"}
                </div>
              </div>
            </div>

            <a
              href={brochureDownloadHref}
              download={brochureFilename}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm sm:text-base font-semibold text-green-900 shadow-sm ring-1 ring-white/30 transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={`Download brochure PDF for ${project.name}`}
            >
              Download PDF
            </a>
          </div>
        </div>
      ) : null}
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
