import { absoluteUrl, toOgImage } from "@/lib/seo";
import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import BuiltAndHandover from "@/views/projects/project-updates/built-and-handover";
import HeroSection from "@/views/projects/project-updates/hero-section";
import OngoingProjects from "@/views/projects/project-updates/ongoing-projects";

export const metadata = {
  title: "Project Updates - Mapsko Group Developments",
  description:
    "Stay updated with the latest project progress from Mapsko Group, including construction status, milestones and development news across ongoing properties.",
  alternates: {
    canonical: absoluteUrl("/projects/project-updates"),
  },
  openGraph: {
    url: absoluteUrl("/projects/project-updates"),
    images: toOgImage("/assets/og-default.webp"),
  },
};

const Page = () => {
  return (
    <main>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/" },
            {
              label: "Project Updates",
              href: "/projects/project-updates",
            },
          ]}
        />
      </div>
      <OngoingProjects />
      <BuiltAndHandover />
      <Footer />
    </main>
  );
};

export default Page;
