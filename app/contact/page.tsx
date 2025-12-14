import Navigator from "@/components/navigator/navigator";
import HeroSection from "@/views/contact/hero-section";
import Footer from "@/components/footer/footer";
import FirstSection from "@/views/contact/first-section/first-section";
import ContactForm from "@/views/contact/contact-form/contact-form";
import ThirdSection from "@/views/contact/third-section/third-section";

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
              label: "Contact Us",
              href: "/contact",
            },
          ]}
        />
      </div>

      <FirstSection />
      <ContactForm />
      <ThirdSection />

      <Footer />
    </main>
  );
};

export default Page;
