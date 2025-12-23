import HeroSection from "@/views/project/[slug]/contact/hero-section";
import Footer from "@/components/footer/footer";
import ContactForm from "@/views/contact/contact-form/contact-form";
import ThirdSection from "@/views/contact/third-section/third-section";
import { fetchProject } from "@/views/project/[slug]/project-data";
import { notFound } from "next/navigation";
import { PropertyDataProvider } from "@/views/project/[slug]/use-property-data";

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
