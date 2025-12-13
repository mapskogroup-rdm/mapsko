import BuildingIcon from "./building.svg";
import PhoneIcon from "./phone.svg";
import EmailIcon from "./email.svg";
import Logo from "@/assets/icons/mapsko-logo.svg";

const FirstSection = () => {
  return (
    <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Careers at MAPSKO
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          Build the Future With Us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
        {/* Corporate Office */}
        <div className="flex flex-col items-center text-center bg-[#f9f9f9] px-6 py-8 md:py-10 lg:py-12 shadow-sm">
          <BuildingIcon className="w-12 h-12 md:w-14 md:h-14 mb-6" />
          <h3
            className="text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-4"
            style={{ color: "#0B6BB8" }}
          >
            Corporate Office
          </h3>
          <p className="text-[15px] md:text-[16px] leading-6 text-[#707070] max-w-xl">
            <span className="font-semibold">Address :</span> Baani The Address,
            1, 6th Floor, Golf Course Rd, Sector 56, Gurugram, Haryana 122011
          </p>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col items-center text-center bg-[#f9f9f9] px-6 py-8 md:py-10 lg:py-12 shadow-sm">
          <PhoneIcon className="w-12 h-12 md:w-14 md:h-14 mb-6" />
          <h3
            className="text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-4"
            style={{ color: "#0B6BB8" }}
          >
            Phone Number
          </h3>
          <p className="text-[15px] md:text-[16px] leading-6 text-[#707070]">
            <span className="font-semibold">Phone </span>
            +(91)-(124)-4250610/20/30
          </p>
        </div>

        {/* Email Address */}
        <div className="flex flex-col items-center text-center bg-[#f9f9f9] px-6 py-8 md:py-10 lg:py-12 shadow-sm">
          <EmailIcon className="w-12 h-12 md:w-14 md:h-14 mb-6" />
          <h3
            className="text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-4"
            style={{ color: "#0B6BB8" }}
          >
            Email Address
          </h3>
          <div className="text-[15px] md:text-[16px] leading-6 text-[#707070] space-y-1">
            <p>
              <span className="font-semibold">Email :</span>{" "}
              sales@mapskogroup.com
            </p>
            <p>info@mapskogroup.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
