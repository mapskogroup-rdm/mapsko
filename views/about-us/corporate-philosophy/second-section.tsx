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
            <span className="text-sky-700 text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
              A Vision for India&apos;s Tomorrow
              <br />
              Built on Trust & Growth
              <br />
            </span>
            <span className="text-neutral-500 text-base sm:text-lg font-light">
              <br />
              Our vision is to redefine contemporary living in India. Beyond
              building homes, we curate sophisticated lifestyles that inspire
              comfort, connection, and well-being for modern families. Every
              MAPSKO development is crafted to blend timeless luxury with
              thoughtful design, smart spaces, and refined experiences. We
              aspire to be a name synonymous with elegance, trust, innovation,
              and global standards of modern living.
            </span>
          </div>
        </div>

        <div className="w-full lg:w-auto shrink-0">
          <Image
            src={SecondSectionImage}
            alt="second-section"
            width={1000}
            height={1000}
            className="min-w-full h-auto max-w-[300px] sm:max-w-[600px] mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
