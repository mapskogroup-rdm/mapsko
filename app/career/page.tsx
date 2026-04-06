import { absoluteUrl, toOgImage } from "@/lib/seo";
import Navigator from "@/components/navigator/navigator";
import HeroSection from "@/views/career/hero-section";
import Logo from "@/assets/icons/mapsko-logo.svg";
import CareerForm from "@/views/career/career-form/career-form";
import JobsCta from "@/views/career/jobs-cta";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Mapsko Career - Jobs, Culture & Work Opportunities",
  description:
    "Explore career opportunities at Mapsko Group, current job openings, company culture and opportunities to grow in the real estate industry.",
  alternates: {
    canonical: absoluteUrl("/career"),
  },
  openGraph: {
    url: absoluteUrl("/career"),
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
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Career",
              href: "/career",
            },
          ]}
        />
      </div>

      <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="flex flex-col items-center justify-center space-y-4 pb-12 sm:space-y-5 sm:pb-16 md:space-y-6 md:pb-20 lg:pb-24">
          <Logo className="w-10 sm:w-12 md:w-14" />
          <h2 className="px-4 text-center text-2xl font-bold uppercase text-sky-700 sm:text-3xl md:text-4xl lg:text-5xl">
            Career at MAPSKO
          </h2>
          <p className="px-4 text-center text-sm font-light uppercase text-neutral-500 sm:text-base md:text-lg">
            Build the Future With Us
          </p>
        </div>

        <JobsCta />
        <CareerForm />
      </div>

      <Footer />
    </main>
  );
};

export default Page;
