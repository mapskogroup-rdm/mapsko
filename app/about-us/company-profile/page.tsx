import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import FirstSection from "@/views/about-us/company-profile/first-section/first-section";
import HeroSection from "@/views/about-us/company-profile/hero-section/hero-section";
import SecondSection from "@/views/about-us/company-profile/second-section/second-section";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
            { label: "Company Profile", href: "/about-us/company-profile" },
          ]}
        />
      </div>
      <FirstSection />
      <SecondSection />
      <Footer />
    </main>
  );
};

export default Page;
