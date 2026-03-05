import Image from "next/image";
import BuisnessManSmiling from "./2de8f61005eb0cb02503cdd732946c96c6404886.png";
import CareerFormContainer from "./career-form-container";

const CareerForm = () => {
  return (
    <div className="flex bg-stone-50 p-4 md:p-6 lg:p-8 xl:p-24 gap-14">
      <CareerFormContainer />

      <div className="-mb-24 xl:flex items-end justify-end hidden min-w-[500px]">
        <Image
          src={BuisnessManSmiling}
          alt="Buisness Man Smiling"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default CareerForm;
