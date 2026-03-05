import Logo from "@/assets/icons/mapsko-white-logo.svg";
import Link from "next/link";

type Props = {
  title: string;
  location: string;
  href: string;
  cardColor: string;
};

const NextProjectCard = ({ title, location, href, cardColor }: Props) => {
  return (
    <div
      style={{ backgroundColor: cardColor }}
      className="p-12 flex flex-col items-center justify-center"
    >
      <Logo className="w-10 sm:w-12 md:w-14" />
      <div className="text-center text-white text-4xl font-normal uppercase pt-9 pb-8">
        {title}
      </div>

      <div className="text-center text-white text-2xl font-light pb-6">
        Delhi
      </div>

      <Link
        href={href}
        className="flex hover:bg-white hover:text-black cursor-pointer transition-all duration-300 items-center justify-center text-center text-white text-2xl border border-white py-3 px-8"
      >
        Visit Website
      </Link>
    </div>
  );
};

export default NextProjectCard;
