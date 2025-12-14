import Logo from "@/assets/icons/mapsko-logo.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const data = [
  {
    image: "/assets/residential-projects/casa-bella.png",
    alt: "Casa Bella",
    href: "/",
  },
  {
    image: "/assets/residential-projects/city-homes.png",
    alt: "City Homes",
    href: "/",
  },
  {
    image: "/assets/residential-projects/garden-estate.png",
    alt: "Garden Estate",
    href: "/",
  },
  {
    image: "/assets/residential-projects/krishna-apra-gardens.png",
    alt: "Krishna Apra Gardens",
    href: "/",
  },
  {
    image: "/assets/residential-projects/krishna-apra.png",
    alt: "Krishna Apra",
    href: "/",
  },
  {
    image: "/assets/residential-projects/mount-ville.png",
    alt: "Mount Ville",
    href: "/",
  },
  {
    image: "/assets/residential-projects/paradise.png",
    alt: "Paradise",
    href: "/",
  },
  {
    image: "/assets/residential-projects/royale-ville.png",
    alt: "Royale Ville",
    href: "/",
  },
  {
    image: "/assets/residential-projects/sapphire.png",
    alt: "Sapphire",
    href: "/",
  },
];

const ThirdSection = (props: Props) => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Built. Handed Over. Cherished.
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          A portfolio of finished spaces crafted to MAPSKO standards
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {data.map((item, index) => (
          <Link href={item.href} key={index} className="cursor-pointer flex">
            <Image
              key={index}
              src={item.image}
              alt={item.alt}
              width={500}
              height={500}
              className="w-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
