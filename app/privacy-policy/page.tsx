import { absoluteUrl, toOgImage } from "@/lib/seo";
import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import HeroSection from "@/views/privacy-policy/hero-section";

export const metadata = {
  title: "Privacy Policy & Disclaimer | Mapsko",
  description:
    "Read Mapsko’s privacy policy and disclaimer covering how we collect, use, and protect your personal information.",
  alternates: {
    canonical: absoluteUrl("/privacy-policy"),
  },
  openGraph: {
    url: absoluteUrl("/privacy-policy"),
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
            { label: "Privacy Policy and Disclaimer", href: "/privacy-policy" },
          ]}
        />
      </div>

      <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
        <p className="text-[#707070] text-center">
          At Mapsko Group, securing and managing your personal information in a
          compliant manner is a priority for us. We understand and value the
          significance of safeguarding your privacy and are dedicated to keeping
          all your personal information safe.
          <br />
          <br />
          In this privacy notice, we have explained how we access your personal
          information, different ways to contact us, and how we share your
          personal details with third parties. Here you will learn about the
          different kinds of information we collect, the reason why we do it,
          and how we use it, with your consent. For any further assistance or
          exegesis, you can write to us or call us at the details provided on
          the contact us page.
          <br />
          <br />
          The reason we collect your personal information is to provide you with
          the best real estate project that suits all your requirements. If you
          wish to contact us, you can contact us in various ways, like email,
          telephone, social media, and contact forms. We may collect your
          personal information, like email address, telephone number, and name,
          to effectively deal with your inquiry. This information will be solely
          retained for a couple of years to address your query, after which all
          your personal information will be deleted. The personal information
          collected by us can be used to create statistics and unidentified
          information to share with third parties like search engines, ad
          networks, and analytics providers. We may also share your personal
          information to comply with a legal obligation, a police or court
          request. By accepting our terms and conditions, you give us your
          consent to use your information for the above-mentioned use.
          <br />
          <br />
          Our privacy policy can be updated at any time without prior notice, so
          we recommend that all users visit our page periodically to check for
          any changes.
          <br />
          <br />
          <span className="font-bold">
            Thank you for reading our privacy policy!
          </span>
        </p>
      </div>

      <Footer />
    </main>
  );
};

export default Page;
