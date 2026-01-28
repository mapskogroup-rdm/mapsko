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
            <p className="text-sky-700 text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
              A Legacy Continued,
              <br />A Future Accelerated
            </p>
            <p className="text-neutral-500 text-base md:text-lg font-light">
              <br />
              Built on decades of vision, commitment, and entrepreneurial excellence, MAPSKO&apos;s journey reflects a seamless transition from a strong foundation to progressive leadership. The group continues to evolve with a forward-looking approach, guided by experience, strategic insight, and a clear focus on long-term growth.
              <br />
              <br />
              With deep-rooted expertise in real estate since the late 1990s, MAPSKO has emerged as a trusted force in North India&apos;s development landscape. Over the years, the group has successfully delivered nearly <strong>22+ residential and commercial projects</strong> across North India, contributing significantly to urban transformation. This legacy of consistency, innovation, and execution excellence continues to drive MAPSKO&apos;s expansion and industry leadership.
            </p>
          </div>
        </div>
        {/* <div className="md:min-w-[500px] md:max-w-[500px] md:min-h-[500px] md:max-h-[500px]">
          <Image
            src={KrishanSinglaImage}
            alt="Krishan Single"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
          <div className="bg-sky-700 p-5">
            <span className="text-white font-bold">
              The Visionary Mr. Krishan Singla{" "}
            </span>
            <span className="text-white font-light">(Chairperson)</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SecondSection;
