import Logo from "@/assets/icons/mapsko-logo.svg";
import Image from "next/image";
import ThirdSectionImage from "./b166081247c4ed2fed565e58e864d184bdba4b59.png";

const ThirdSection = () => {
  return (
    <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-28 items-center">
      <div className="w-full lg:w-auto shrink-0 order-2 lg:order-1">
        <Image
          src={ThirdSectionImage}
          alt="third-section"
          width={1000}
          height={1000}
          className="w-full h-auto max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-none mx-auto lg:min-w-[540px] lg:mx-0"
        />
      </div>

      <div className="w-full lg:w-auto order-1 lg:order-2">
        <Logo className="h-16 sm:h-20 md:h-24 lg:h-[100px] w-auto" />

        <div className="pt-4 sm:pt-6 max-w-6xl">
          <span className="text-sky-700 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase">
            From Standards to Signatures:
            <br />
            Our Quality Promise
            <br />
          </span>
          <span className="text-neutral-500 text-base sm:text-lg font-light">
            <br />
            In adherence to strict quality practices and international
            standards, Mapsko lives up to its commitment to what the customer
            demands. Being an ISO 9001:2000 certified, company assures the fact
            that the company is consistent and reliable with some of the best
            practices the industry has to offer.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
