import Image from "next/image";
import Logo from "@/assets/icons/mapsko-logo.svg";

const FirstSection = () => {
  return (
    <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 flex flex-col lg:flex-row justify-around items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
      <div className="w-full lg:w-auto shrink-0">
        <Image
          src="/assets/mapsko-detailed-logo.png"
          alt="first-section"
          width={1000}
          height={1000}
          className="w-full h-auto max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none mx-auto lg:mx-0"
        />
      </div>
      <div className="w-full lg:max-w-[950px] justify-start">
        <span className="text-sky-700 text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          MAPSKO: CRAFTING SIGNATURE LANDMARKS, BUILDING INDIA&apos;S FUTURE
        </span>
        <span className="text-neutral-500 text-base sm:text-lg font-light">
          <br />
          MAPSKO is a leading real estate developer recognized for delivering world-class residential and commercial developments. Driven by a strong commitment to quality, innovation, and design excellence, the brand has established itself among India&apos;s most respected real estate companies. Every MAPSKO project is defined by a distinct architectural identity, shaping modern lifestyles that go beyond concrete and steel.
          <br />
          <br />
          Conceptualized in the early 2000s with a vision to create lifestyle-focused developments, MAPSKO integrates sustainable planning, green environments, and future-ready infrastructure into every project. The group brings together multidisciplinary expertise across architecture, engineering, planning, management, finance, and legal domains to deliver holistic solutions tailored to evolving client needs.
          <br />
          <br />
          Since 3 decades, MAPSKO has consistently set benchmarks in real estate development, delivering landmark townships and commercial spaces in prime locations. Through advanced construction practices, value engineering, and adherence to international quality standards, MAPSKO continues to shape urban living while building a future that is resilient, aspirational, and enduring.
        </span>
    </div>
  );
};

export default FirstSection;
