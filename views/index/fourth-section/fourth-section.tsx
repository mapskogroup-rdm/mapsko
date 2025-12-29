import CompanyIcon from "./company.svg";
import InstitutionIcon from "./institution.svg";
import TrainIcon from "./train.svg";
import G966Icon from "./g966.svg";

const benefits = [
  {
    icon: G966Icon,
    label: "Direct connectivity to IGI Airport via UER-2",
  },
  {
    icon: TrainIcon,
    label: "Metro connectivity and major highway access",
  },
  {
    icon: CompanyIcon,
    label: "Proximity to corporate corridors and business hubs",
  },
  {
    icon: InstitutionIcon,
    label: "Educational institutions and healthcare facilities nearby",
  },
];

const FourthSection = () => {
  return (
    <section className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
      <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
        Key Benefits
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-0 *:px-10 pt-16 divide-x divide-[#707070]">
        {benefits.map((benefit) => (
          <div
            key={benefit.label}
            className="flex gap-2 flex-col items-center text-center"
          >
            <benefit.icon className="h-16" />
            <p className="text-neutral-500 text-sm sm:text-base md:text-lg font-light">
              {benefit.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourthSection;
