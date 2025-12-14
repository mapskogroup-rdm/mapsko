import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import FirstSection from "@/views/ready-to-move-in/first-section";
import HeroSection from "@/views/ready-to-move-in/hero-section";
import ReadyToMoveInProperties from "@/views/ready-to-move-in/ready-to-move-in-properties";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Ready to Move In",
              href: "/ready-to-move-in",
            },
          ]}
        />
      </div>

      <FirstSection />
      <ReadyToMoveInProperties />

      <Footer />
    </main>
  );
};

export default Page;
