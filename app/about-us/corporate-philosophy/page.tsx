import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import FirstSection from "@/views/about-us/corporate-philosophy/first-section";
import HeroSection from "@/views/about-us/corporate-philosophy/hero-section";
import SecondSection from "@/views/about-us/corporate-philosophy/second-section";
import ThirdSection from "@/views/about-us/corporate-philosophy/third-section";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
            {
              label: "Corporate Philosophy",
              href: "/about-us/corporate-philosophy",
            },
          ]}
        />
      </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </main>
  );
};

export default Page;
