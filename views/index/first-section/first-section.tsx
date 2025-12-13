import React from "react";
import Image from "next/image";
import BuildingIcon from "./building.svg";
import PlotIcon from "./plot.svg";
import G183Icon from "./g183.svg";

const points = [
  {
    icon: BuildingIcon,
    label: "Projects Successfully Delivered",
    value: 7,
  },
  {
    icon: PlotIcon,
    label: "Acres Delivered in Sonipat",
    value: 135,
  },
  {
    icon: PlotIcon,
    label: "Lakhs Sq. Ft. Delivered",
    value: 13,
  },
  {
    icon: G183Icon,
    label: "Major Commercial Project",
    value: 7,
  },
];

const FirstSection = () => {
  return (
    <section className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-6 lg:gap-8">
        <div className="w-full md:w-1/3">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase text-sky-700 leading-tight md:leading-snug lg:leading-14">
            A Golden Era of the Real Estate Industry
          </h2>

          <div className="space-y-3 sm:space-y-3 md:space-y-4 text-neutral-500 text-sm sm:text-base md:text-lg font-light pt-3 sm:pt-4 md:pt-5">
            <p>
              MAPSKO is a pioneering and growing name in the real estate
              organization, echoing its position among the top-notch developers.
              Empowered with world-class structures and services, MAPSKO is
              India's blossoming real estate developer.
            </p>
            <p>
              With a legacy rooted in real estate since the late 1960s, we have
              been the driving force behind nearly 20 successful residential and
              commercial projects across Delhi and the NCR.
            </p>
            <p>
              Our commitment to excellence underscores exponential growth and
              establishes us as trailblazers in the industry.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src={"/assets/mapsko-detailed-logo.png"}
            alt="first-section-image"
            width={500}
            height={500}
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[400px] h-auto"
          />
        </div>

        <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4">
          {points.map((point) => (
            <div
              key={point.label}
              className="flex flex-col items-center gap-1.5 sm:gap-2 bg-[#F9F9F9] px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 lg:py-14"
            >
              <point.icon className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" />
              <p className="text-center text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Avenir'] uppercase">
                {point.value}
              </p>
              <div className="text-center text-neutral-500 text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-tight sm:leading-5">
                {point.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
