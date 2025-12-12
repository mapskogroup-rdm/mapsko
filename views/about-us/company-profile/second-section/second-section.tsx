import Image from "next/image";
import Logo from "@/assets/icons/mapsko-logo.svg";
import KrishanSinglaImage from "./Generated Image November 06, 2025 - 12_12PM.png";

const SecondSection = () => {
  return (
    <div className="bg-neutral-100 py-12 md:py-16 lg:py-20 xl:pt-28 xl:pb-40">
      <div className="common-frame-box flex flex-col-reverse md:flex-row md:gap-28 gap-12">
        <div className="">
          <Logo className="h-[100px]" />
          <div className="pt-6">
            <p className="text-sky-700 text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">
              A Legacy Continued,
              <br />A Future Accelerated
            </p>
            <p className="text-neutral-500 text-base md:text-lg font-light">
              <br />
              From the visionary leadership of the late Mr. Amrit Singhla Ji,
              the reins of the group have gracefully passed to the capable hands
              of Mr. Krishan Singhla Ji, our current guiding force. Mr Krishan
              Singla, an exceptional first-generation entrepreneur and
              visionary, is charting our company's course with expertise and
              dedication and has steered the MAPSKO Group to remarkable success
              . As Chairman, he has led diverse ventures, including Jai Krishan
              Estates Pvt Ltd, Apra Builders Ltd, and Mapsko Infrastructure Pvt
              Ltd, shoping the conglomerate's prominence in North India. With a
              legacy rooted in real estate since the late 1960s, Mr Singla
              pioneers the industry and serves as a driving force behind nearly
              20 successful residential and commercial projects across Delhi and
              the NCR. His leadership underscores the group's exponential growth
              and his role as a trailblazing figure in the field.
            </p>
          </div>
        </div>
        <div className="md:min-w-[500px] md:max-w-[500px] md:min-h-[500px] md:max-h-[500px]">
          <Image
            src={KrishanSinglaImage}
            alt="Krishan Single"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
          <div className="bg-sky-700 p-5">
            <span className="text-white font-extrabold">
              The Visionary Mr. Krishan Singhla{" "}
            </span>
            <span className="text-white font-light">(Chairperson)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
