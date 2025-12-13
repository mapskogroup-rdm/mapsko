import Logo from "@/assets/icons/mapsko-logo.svg";
import Image from "next/image";
import ImageOne from "./images/image (-1.png";
import ImageTwo from "./images/image (-2.png";
import ImageThree from "./images/image (-3.png";
import ImageFour from "./images/image (-4.png";
import ImageFive from "./images/image (-5.png";
import ImageSix from "./images/image (-6.png";
import ImageSeven from "./images/image (-7.png";
import ImageEight from "./images/image (-8.png";
import ImageNine from "./images/image (7).png";

type Props = {};

const data = [
  { image: ImageOne, alt: "Image One", href: "/" },
  { image: ImageTwo, alt: "Image Two", href: "/" },
  { image: ImageThree, alt: "Image Three", href: "/" },
  { image: ImageFour, alt: "Image Four", href: "/" },
  { image: ImageFive, alt: "Image Five", href: "/" },
  { image: ImageSix, alt: "Image Six", href: "/" },
  { image: ImageSeven, alt: "Image Seven", href: "/" },
  { image: ImageEight, alt: "Image Eight", href: "/" },
  { image: ImageNine, alt: "Image Nine", href: "/" },
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
          <Image
            key={index}
            src={item.image}
            alt={item.alt}
            width={500}
            height={500}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
