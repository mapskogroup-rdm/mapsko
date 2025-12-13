import Logo from "@/assets/icons/mapsko-logo.svg";
import NextProjectCard from "./next-project-card";

const FirstSection = () => {
  return (
    <section className="bg-stone-50 w-full">
      <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <Logo className="w-10 sm:w-12 md:w-14" />
          <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
            Building What&apos;s Next
          </h2>
          <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
            Future-ready communities, delivered with integrity and innovation
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <NextProjectCard
            title="Group Housing Delhi N Zone"
            location="Delhi"
            href=""
            cardColor="#8AC028"
          />
          <NextProjectCard
            title="Group Housing Delhi L Zone"
            location="Delhi"
            href=""
            cardColor="#0B6BB8"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
