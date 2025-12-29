import Logo from "@/assets/icons/mapsko-logo.svg";
import CustomerFirst from "./customer-first.svg";
import TimelyDelivery from "./timely-delivery.svg";
import QualityAssurance from "./quality-assurance.svg";
import LegacyOfTrust from "./legacy-of-trust.svg";

const points = [
  {
    icon: LegacyOfTrust,
    title: "Legacy of Trust",
    descriptionPointOne: "3+ Decades of building excellence",
    descriptionPointTwo: "Family values, corporate standards",
  },
  {
    icon: QualityAssurance,
    title: "Quality Assurance",
    descriptionPointOne: "ISO 9001:2000 certified processes",
    descriptionPointTwo: "Premium materials, superior construction",
  },
  {
    icon: TimelyDelivery,
    title: "Timely Delivery",
    descriptionPointOne: "Reputation for executing projects in record time",
    descriptionPointTwo: "Accurate planning and resource deployment",
  },
  {
    icon: CustomerFirst,
    title: "Customer First",
    descriptionPointOne: "Customer is the ambassador of our brand",
    descriptionPointTwo: "Trust and integrity built on fairness",
  },
];

const ThirdSection = () => {
  return (
    <section className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Why Mapsko Stands Apart
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          Premium projects designed for modern living
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        {points.map((point) => (
          <div
            key={point.title}
            className="flex flex-col items-center justify-center"
          >
            <point.icon className="h-16 sm:h-20 md:h-24 lg:h-[100px] w-auto" />

            <h3 className="text-sky-700 text-base sm:text-lg font-bold pt-4 sm:pt-5 md:pt-6">
              {point.title}
            </h3>
            <p className="text-neutral-500 text-sm sm:text-base font-medium leading-relaxed">
              {point.descriptionPointOne}
              <br />
              {point.descriptionPointTwo}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;
