import HeroSection from "@/views/project/[slug]/contact/hero-section";
import Footer from "@/components/footer/footer";
import ContactForm from "@/views/contact/contact-form/contact-form";
import ThirdSection from "@/views/contact/third-section/third-section";
import { fetchProject } from "@/views/project/[slug]/project-data";
import { notFound } from "next/navigation";
import { PropertyDataProvider } from "@/views/project/[slug]/use-property-data";
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
          canonical: absoluteUrl(`/project/${slug}/contact`),
        },
        robots: { index: false, follow: false },
      },
      parent
    );
  }

  const canonical = absoluteUrl(`/project/${project.slug}/contact`);
  const description =
    "Contact the Mapsko team for this project—book site visits, request pricing, and get expert assistance.";
  const ogImage =
    toOgImage(project.primaryCoverPhoto, { alt: project.name }) ||
    toOgImage(project.primaryPropertyPhoto, { alt: project.name });

  return applyPageDefaults(
    {
      title: `${project.name} | Contact`,
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
      <main>
        <HeroSection />
        <ContactForm />
        <ThirdSection />
        <Footer />
      </main>
    </PropertyDataProvider>
  );
};

export default Page;
