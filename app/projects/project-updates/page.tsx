import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import BuiltAndHandover from "@/views/projects/project-updates/built-and-handover";
import HeroSection from "@/views/projects/project-updates/hero-section";
import OngoingProjects from "@/views/projects/project-updates/ongoing-projects";

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
