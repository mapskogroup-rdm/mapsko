import Logo from "@/assets/icons/mapsko-logo.svg";
import Image from "next/image";
import SecondSectionImage from "./697b2a4de26b2466903223bd83f60d17ce513d30.png";

const SecondSection = () => {
  return (
    <div className="bg-stone-50">
      <div className="common-frame-box py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-28 items-center">
        <div className="w-full lg:w-auto">
          <Logo className="h-16 sm:h-20 md:h-24 lg:h-[100px] w-auto" />

          <div className="pt-4 sm:pt-6">
            <span className="text-sky-700 text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Avenir'] uppercase">
              A Vision for India&apos;s Tomorrow
              <br />
              Built on Trust & Growth
              <br />
            </span>
            <span className="text-neutral-500 text-base sm:text-lg font-light font-['Avenir']">
              <br />
              "Our vision is to construct a new India. Beyond real estate, we
              strive to transform lives, landscapes and living habits of people.
              We aspire to be an exemplary corporate who does its job well; a
              name synonymous with trust, integrity, growth and global
              recognition."
            </span>
          </div>
        </div>

        <div className="w-full lg:w-auto shrink-0">
          <Image
            src={SecondSectionImage}
            alt="second-section"
            width={1000}
            height={1000}
            className="w-full h-auto max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-none mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
