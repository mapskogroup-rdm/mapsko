"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/icons/mapsko-logo-with-name.svg";
import Link from "next/link";
import { ProjectDocument } from "@/lib/sanity.types";
import SanityImage from "../sanity-image";

interface PropertyNavbarProps {
  property: ProjectDocument;
}

const PropertyNavbar = ({ property }: PropertyNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const links = [
    {
      label: "About Us",
      href: `/project/${property.slug}/about`,
    },
    {
      label: "Location",
      href: `/project/${property.slug}/location`,
    },
    {
      label: "Floor Plans",
      href: `/project/${property.slug}/floor-plans`,
    },
    {
      label: "Image Gallery",
      href: `/project/${property.slug}/image-gallery`,
    },
    {
      label: "Video Gallery",
      href: `/project/${property.slug}/video-gallery`,
    },
    {
      label: "Contact Us",
      href: `/contact`,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMenuOpen) return;
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const linkClasses =
    "uppercase text-xs md:text-xs lg:text-sm xl:text-base tracking-wide hover:text-[#8AC028] transition-colors whitespace-nowrap";

  return (
    <header className="w-full">
      <div className="common-frame-box flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        <Link
          href={`/project/${property.slug}`}
          className="bg-white flex px-3 py-4 md:py-8 rounded-b-2xl"
        >
          <SanityImage
            image={property.propertyLogo}
            alt={property.name}
            className="md:h-[100px] md:w-[230px] h-[50px] w-[120px]"
            width={230}
            height={100}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-2 md:gap-3 lg:gap-5 xl:gap-8 flex-wrap lg:flex-nowrap">
          {links.map((link, index) => {
            return (
              <Link
                key={`${link.label}-${index}`}
                href={link.href}
                className={linkClasses}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block shrink-0">
          <Link href="/" className="shrink-0">
            <Logo className="w-24 sm:w-32 lg:w-48 xl:w-[200px]" />
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:hidden">
          <button
            ref={toggleRef}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center border border-gray-200 text-white shadow-sm transition hover:border-[#8AC028] hover:text-[#8AC028] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#8AC028]"
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-full bg-current transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            ref={menuRef}
            onClick={(e) => e.stopPropagation()}
            className="absolute left-3 right-3 sm:left-4 sm:right-4 top-6 rounded-2xl bg-black p-6 shadow-xl text-white"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center border border-gray-200 text-white transition hover:border-[#8AC028] hover:text-[#8AC028] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#8AC028]"
                aria-label="Close menu"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1.5 block h-0.5 w-full rotate-45 bg-current" />
                  <span className="absolute left-0 top-1.5 block h-0.5 w-full -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {links.map((link, index) => {
                return (
                  <Link
                    key={`${link.label}-${index}`}
                    href={link.href}
                    className="uppercase text-base font-semibold tracking-wide hover:text-[#8AC028] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default PropertyNavbar;
