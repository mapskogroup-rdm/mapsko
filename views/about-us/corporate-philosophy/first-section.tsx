import Image from "next/image";
import React from "react";

const FirstSection = () => {
  return (
    <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
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
        <span className="text-sky-700 text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Avenir'] uppercase">
          Mission in Motion:
          <br />
          Technology, Trust & Timelines
          <br />
        </span>
        <span className="text-neutral-500 text-base sm:text-lg font-light font-['Avenir']">
          <br />
          "Our mission is the path we initiate to reach our goals, be it long or
          short term. And the path involves embracing new technologies,
          researching on better ideas, applying new concepts and cultivating
          long-term relationships."
          <br />
          <br />
          One of the core principles of the Mapsko Group is to value time and
          resources. It is considered to be one of the driving forces of the
          organization. Time management has always been a priority at Mapsko.
          The management takes it very seriously. "We harness a reputation for
          executing projects in record time frames and keeping up with accurate
          planning and resource deployment."
          <br />
          <br />
          At Mapsko, the customer is not just a one-time association, but he is
          the ambassador of the brand and the lifeblood of the organization.
          Customer focus is about understanding, listening and delivering what
          people need, when they need it. Trust and integrity is built on
          fairness and reliability.
          <br />
          <br />
          "We manage a positive work environment by being happy in our work
          place and enjoying what we do. And our passion for creation grows with
          every project, which we encounter as a challenge to set definite
          goals."
        </span>
      </div>
    </div>
  );
};

export default FirstSection;
