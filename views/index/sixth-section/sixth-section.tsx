import React from "react";
import Image from "next/image";
import hindustanTimes from "./hindustan-times.png";
import timesOfIndia from "./times-of-india.png";
import hindustanHindi from "./hindustan-hindi.png";
import theHindu from "./the-hindu.png";
import indianExpress from "./indian-express.png";

const logos = [
  { src: hindustanTimes, alt: "Hindustan Times" },
  { src: timesOfIndia, alt: "The Times of India" },
  { src: hindustanHindi, alt: "Hindustan" },
  { src: theHindu, alt: "The Hindu" },
  { src: indianExpress, alt: "The New Indian Express" },
];

const SixthSection = () => {
  return (
    <section className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
      <h2 className="text-[#0B6BB8] text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide text-center pb-16">
        Featured In
      </h2>

      <div className="w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 lg:gap-16">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="h-16 sm:h-20 md:h-24 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="w-auto h-full object-contain"
              width={200}
              height={100}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SixthSection;
