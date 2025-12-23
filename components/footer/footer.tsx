import Logo from "@/assets/icons/mapsko-white-logo.svg";
import InstagramIcon from "./instagram.svg";
import FacebookIcon from "./facebook.svg";
import YoutubeIcon from "./youtube.svg";
import LinkedInIcon from "./linkedin.svg";

const residentialProjects = [
  "Mapsko Mount Ville",
  "Mapsko Royale Ville",
  "Mapsko Paradise",
  "Mapsko Casa Bella",
  "Mapsko City Homes",
  "Mapsko Garden Estate",
  "Krishna APRA Gardens",
  "Krishna Apra Sapphire",
  "Krishna Apra Residency",
];

const completeProjects = [
  "Mapsko Galleria",
  "Mapsko Royale Plaza",
  "Krishna Apra D Mall",
  "Mapsko Shopping Arcade",
  "Krishna Apra Plaza",
  "Apra Plaza",
  "Krishna Apra Royal Plaza",
  "Krishna Apra Park Plaza",
  "Krishna Apra Business Square",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mapskogroup/",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/mapskogroup/",
    icon: FacebookIcon,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@mapskogroup5591",
    icon: YoutubeIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mapskogroup/",
    icon: LinkedInIcon,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B6BB8] text-white">
      <div className="common-frame-box py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 items-start">
          <div className="flex flex-col gap-4 text-sm md:text-base">
            <Logo aria-label="Mapsko logo" className="w-10" />
            <p className="max-w-[340px] leading-relaxed">
              Crafting Luxury & Premium Homes with Mapsko — Shaping Homes,
              Shaping Lives.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-[#8AC028]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-sm md:text-base leading-relaxed">
            <h3 className="text-[#8AC028] font-semibold uppercase tracking-wide">
              Connect with Us
            </h3>
            <p>
              <span className="font-semibold">Corporate Office :</span>
              <br />
              Baani The Address, 1, 6th Floor, Golf Course Rd, Sector 56,
              Gurugram, Haryana 122011
            </p>
            <p>Inquiry : +(91)-(124)-4250610/20/30</p>
            <p>
              sales@mapskogroup.com
              <br />
              info@mapskogroup.com
            </p>
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <h3 className="text-[#8AC028] font-semibold uppercase tracking-wide">
              Residential Projects
            </h3>
            <ul className="space-y-2 leading-relaxed">
              {residentialProjects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <h3 className="text-[#8AC028] font-semibold uppercase tracking-wide">
              Complete Projects
            </h3>
            <ul className="space-y-2 leading-relaxed">
              {completeProjects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#8AC028] text-white text-center text-xs sm:text-sm md:text-base py-3 md:py-4 px-4">
        © 2025 Mapsko Group Pvt. Ltd. | All Rights Reserved. | Privacy Policy |
        Disclaimer
      </div>
    </footer>
  );
};

export default Footer;
