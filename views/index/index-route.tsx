import FirstSection from "./first-section/first-section";
import HeroSection from "./hero-section";
import SecondSection from "./second-section/second-section";
import ThirdSection from "./third-section/third-section";
import BuildingImage from "./9239a29228e25fea07ea4879103ec248811b07df.png";
// import FourthSection removed per request (section hidden)

import FifthSection from "./fifth-section/fifth-section";
import SixthSection from "./sixth-section/sixth-section";
import Footer from "@/components/footer/footer";
import ParallaxWindow from "@/components/parallax-window";
import LatestNewsCTA from "./latest-news-cta";
import FeaturedInSection from "./featured-in-section";

const IndexRoute = () => {
  return (
    <main>
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ParallaxWindow
        image={BuildingImage}
        alt="fourth-section-image"
        height="h-[80vh]"
      />
      {/* FourthSection (Key Benefits) hidden per request */}

      <FifthSection />
      <FeaturedInSection limit={3} showViewAll={true} />
      <LatestNewsCTA />
      <Footer />
    </main>
  );
};

export default IndexRoute;
