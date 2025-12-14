import React from "react";
import ReadyToMoveInPropertyCard from "./ready-to-move-in-property-card";

type Props = {};

const properties = [
  {
    imageSrc: "/assets/residential-projects/mount-ville.png",
    logoSrc: "/assets/residential-projects/logos/mount-ville.png",
    title: "MAPSKO MOUNT VILLE",
    address: "Sector 79, Gurgaon",
    description:
      "Mapsko MountVille is an artistic representation customized for those who apprehend the merit of luxury and abundance of greenery. Nestled in sector-79, Gurugram, offering 3-4 BHK luxury apartments in gurgaon is a pure model of urban architecture, which is designed to perfection. Aravali is a quintessential complement to this wonderful project, which has been marvelously arranged by the World's leading landscape architects- LSG Inc, USA and structured by Shapoorji Pallonji.",
    linkHref: "/",
  },
  {
    imageSrc: "/assets/residential-projects/casa-bella.png",
    logoSrc: "/assets/residential-projects/logos/casa-bella.png",
    title: "MAPSKO CASA BELLA",
    address: "Sector 82, Sector Road, NH-8, Gurgaon",
    description:
      "Enjoy a heavenly experience living at MapskoCasabella. This residential project in Gurgaon by Mapsko is surrounded by beautiful garden and parks; the place is one of the most luxurious residences in the city. It has beautiful interiors infused with the modern comforts, furnished with finest settings, especially designed by highly experienced architects that will make you look twice. The apartment has a perfect blend of natural beauty and lavish amenities where the family bond and relations get much deepened like never before.",
    linkHref: "/",
  },
  {
    imageSrc: "/assets/residential-projects/royale-ville.png",
    logoSrc: "/assets/residential-projects/logos/royale-ville.png",
    title: "MAPSKO ROYALE VILLE",
    address: "Sector 82, Gurgaon",
    description:
      "This breathtaking residential project by Mapsko is all set to win the hearts of all the individuals out there. The residence has more greenery that leads to clean air, natural mild temperature with enough parking spaces for your automobiles. The villa features top quality materials, efficient lighting, and controls with very low effusion paint on the walls. Just relax and experience the living of heaven at an affordable price like never before.",
    linkHref: "/",
  },
  {
    imageSrc: "/assets/residential-projects/paradise.png",
    logoSrc: "/assets/residential-projects/logos/paradise.png",
    title: "MAPSKO PARADISE",
    address: "Sector 83, Gurgaon",
    description:
      "Turn your dreams into reality and live like a king at Mapsko Paradise. Among all the residential projects in Gurgaon, this residency stands tall with respect to luxury and comfort. Here, all ready to move in apartments have spectacular and professionally constructed interiors, spacious rooms and modular kitchens that offer you an amazing heavenly experience.",
    linkHref: "/",
  },
  {
    imageSrc: "/assets/residential-projects/city-homes.png",
    logoSrc: "/assets/residential-projects/logos/city-homes.png",
    title: "MAPSKO CITY HOMES",
    address: "Sector 27, Sonipat",
    description:
      "Nested in the heart of the city, this residential project is highly inspired by the many celebrated avenues. At Mapsko City Homes, all ready to move in flats are infused with highly decorated interiors, well-furnished rooms and spacious kitchens and bathrooms that bound to amaze you at very first look.",
    linkHref: "/",
  },
  {
    imageSrc: "/assets/residential-projects/garden-estate.png",
    logoSrc: "/assets/residential-projects/logos/garden-estate.png",
    title: "MAPSKO GARDEN ESTATE",
    address: "Sector 26 & 27, Sonipat",
    description:
      "This residential project has world-class facilities just a few walks away from all the comfortable lifestyles such as spas, fitness centers, hospitals, banks, metro stations, supermarkets, etc. With wide space and comfortable lifestyle, the Garden Estate by Mapsko is bound to fascinate you at its very first look.",
    linkHref: "/",
  },
  {
    imageSrc: "/assets/residential-projects/royale-plaza.png",
    logoSrc: "/assets/residential-projects/logos/royale-plaza.png",
    title: "MAPSKO ROYALE PLAZA",
    address: "Delivered Project",
    description:
      "Mapsko being a true visionary, has redefined Comfort by presenting 15 convenient shopping stores, Royale Plaza, provided for easy lifestyle offering food joints and outlets catering to other essential commodities. The commercial project by Mapsko Group clearly understands the fact and thus providing a royal plaza in the heart of the city so that you can enjoy hassle free shopping experience like never before.",
    linkHref: "/",
  },
  {
    imageSrc: "/assets/residential-projects/shopping-arcade.png",
    logoSrc: "/assets/residential-projects/logos/shopping-arcade.png",
    title: "MAPSKO SHOPPING ARCADE",
    address: "Sector-82 Gurgaon",
    description:
      "Mapsko presents an all-in-one commercial project in Gurgaon that offers multiple shopping outlets, food court, entertainment, and other essential merchandises that suit the needs of every individual. This shopping complex offers numerous lavish facilities to the customers and caters to their demands so that an individual loves to come here again and again.",
    linkHref: "/",
  },
];

const ReadyToMoveInProperties = (props: Props) => {
  return (
    <div className="">
      {properties.map((property, index) => (
        <ReadyToMoveInPropertyCard key={index} {...property} index={index} />
      ))}
    </div>
  );
};

export default ReadyToMoveInProperties;
