import Logo from "@/assets/icons/mapsko-white-logo-with-name.svg";
import InstagramIcon from "./instagram.svg";
import FacebookIcon from "./facebook.svg";
import YoutubeIcon from "./youtube.svg";
import LinkedInIcon from "./linkedin.svg";
import AtSymbolIcon from "@/assets/icons/at-symbol.svg";
import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { projectsForFooterQuery } from "@/lib/sanity.queries";
import type { ProjectFooterItem } from "@/lib/sanity.types";
import { ImageBackground } from "../image-background";

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

const Footer = async () => {
  const projects = await client.fetch<ProjectFooterItem[]>(
    projectsForFooterQuery
  );

  const residentialProjects = projects.filter(
    (p) => p.projectType === "residential"
  );
  const commercialProjects = projects.filter(
    (p) => p.projectType === "commercial"
  );

  return (
    <footer className="bg-[#0B6BB8] text-white">
      <ImageBackground
        src="/assets/buildings-line-drawing.webp"
        width={1920}
        height={1080}
        alt="Footer background"
      >
        <div className="common-frame-box py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 items-start">
            <div className="flex flex-col gap-4 text-sm md:text-base">
              <Logo aria-label="Mapsko logo" className="md:w-[260px] w-32" />
              <p className="max-w-[340px] leading-relaxed">
                Experience unmatched comfort and luxury with GHD Infra -
                redefining living for you.
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
              <div className="flex flex-col">
                <p className="font-semibold">Inquiry :</p>
                <Link
                  href="tel:+911244250610"
                  className="hover:underline underline-offset-4"
                >
                  +(91)-(124)-4250610
                </Link>
                <Link
                  href="tel:+911244250620"
                  className="hover:underline underline-offset-4"
                >
                  +(91)-(124)-4250620
                </Link>
                <Link
                  href="tel:+911244250630"
                  className="hover:underline underline-offset-4"
                >
                  +(91)-(124)-4250630
                </Link>
              </div>
              <p>
                sales
                <AtSymbolIcon
                  className="inline-block mx-0.5 w-4 h-4 align-middle"
                  aria-label="at"
                  aria-hidden="true"
                />
                mapskogroup.com
                <br />
                info
                <AtSymbolIcon
                  className="inline-block mx-0.5 w-4 h-4 align-middle"
                  aria-label="at"
                  aria-hidden="true"
                />
                mapskogroup.com
              </p>
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <h3 className="text-[#8AC028] font-semibold uppercase tracking-wide">
                Residential Projects
              </h3>
              <ul className="space-y-2 leading-relaxed">
                {residentialProjects.map((project) => (
                  <li key={project._id}>
                    <Link
                      href={`/project/${project.slug}`}
                      className="hover:underline underline-offset-4"
                    >
                      Mapsko {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <h3 className="text-[#8AC028] font-semibold uppercase tracking-wide">
                Commercial Projects
              </h3>
              <ul className="space-y-2 leading-relaxed">
                {commercialProjects.map((project) => (
                  <li key={project._id}>
                    <Link
                      href={`/project/${project.slug}`}
                      className="hover:underline underline-offset-4"
                    >
                      Mapsko {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ImageBackground>

      <div className="bg-[#8AC028] flex justify-center gap-2 text-white text-center text-xs sm:text-sm md:text-base py-3 md:py-4 px-4">
        <p>© 2025 Mapsko Group Pvt. Ltd. | All Rights Reserved. |</p>
        <Link href={"/privacy-policy"}>Privacy Policy & Disclaimer</Link> |
        <Link href={"https://www.reddashmedia.com"} target="_blank">
          Powered by Red Dash Media
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
