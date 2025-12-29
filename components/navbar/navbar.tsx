"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/icons/mapsko-logo-with-name.svg";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const links = [
    {
      label: "About Us",
      href: "",
      subRoutes: [
        {
          label: "Company Profile",
          href: "/about-us/company-profile",
        },
        {
          label: "Corporate Philosophy",
          href: "/about-us/corporate-philosophy",
        },
      ],
    },
    {
      label: "Projects",
      href: "",
      subRoutes: [
        {
          label: "Residential Projects",
          href: "/projects/residential-projects",
        },
        {
          label: "Commercial Projects",
          href: "/projects/commercial-projects",
        },
        {
          label: "Project Updates",
          href: "/projects/project-updates",
        },
      ],
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Ready to move in",
      href: "/ready-to-move-in",
    },
    {
      label: "Blogs",
      href: "/blog",
    },
    {
      label: "Careers",
      href: "/career",
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
      if (closeDropdownTimeout.current) {
        clearTimeout(closeDropdownTimeout.current);
      }
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleAccordion = (index: number) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  const openDropdownMenu = (index: number) => {
    if (closeDropdownTimeout.current) {
      clearTimeout(closeDropdownTimeout.current);
    }
    setOpenDropdown(index);
  };

  const scheduleCloseDropdown = () => {
    if (closeDropdownTimeout.current) {
      clearTimeout(closeDropdownTimeout.current);
    }
    closeDropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  const linkClasses =
    "uppercase text-xs md:text-xs lg:text-sm xl:text-base tracking-wide hover:text-[#8AC028] transition-colors whitespace-nowrap";

  return (
    <header className="w-full">
      <div className="common-frame-box mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6 py-3 sm:py-4">
        <Link href="/" className="shrink-0">
          <Logo className="w-24 sm:w-32 lg:w-48 xl:w-[200px]" />
        </Link>

        <nav className="hidden md:flex items-center gap-2 md:gap-3 lg:gap-5 xl:gap-8 flex-wrap lg:flex-nowrap">
          {links.map((link, index) => {
            const hasSubRoutes = link.subRoutes && link.subRoutes.length > 0;

            if (hasSubRoutes) {
              return (
                <div
                  key={`${link.label}-${index}`}
                  className="relative"
                  onMouseEnter={() => openDropdownMenu(index)}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  <button
                    className={`${linkClasses} flex items-center gap-1`}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === index}
                    type="button"
                  >
                    {link.label}
                  </button>

                  {openDropdown === index && (
                    <div
                      className="absolute left-0 top-full w-56 pt-2"
                      onMouseEnter={() => openDropdownMenu(index)}
                      onMouseLeave={scheduleCloseDropdown}
                    >
                      <div className="overflow-hidden border border-gray-100 bg-white shadow-lg shadow-black/5">
                        <div className="py-3">
                          {link.subRoutes?.map((sub, subIdx) => (
                            <Link
                              key={`${sub.href}-${subIdx}`}
                              href={sub.href}
                              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#8AC028] hover:bg-gray-50 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

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
          <Link
            href="/contact"
            className="border uppercase border-[#8AC028] hover:bg-[#8AC028] hover:text-black cursor-pointer transition-all duration-300 py-2 px-4 md:px-5 lg:px-6 xl:px-8 text-[#8AC028] font-bold text-xs md:text-xs lg:text-sm xl:text-base whitespace-nowrap"
          >
            Contact Us
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
            className="absolute left-3 right-3 sm:left-4 sm:right-4 top-6 bg-black p-6 shadow-xl text-white"
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
                const hasSubRoutes =
                  link.subRoutes && link.subRoutes.length > 0;

                if (hasSubRoutes) {
                  const isOpen = openAccordion === index;
                  return (
                    <div
                      key={`${link.label}-${index}`}
                      className="border-b border-white/10 pb-2"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="flex w-full items-center justify-between text-left uppercase text-base font-semibold tracking-wide hover:text-[#8AC028] transition-colors"
                        aria-expanded={isOpen}
                        type="button"
                      >
                        {link.label}
                        <span
                          className={`inline-block h-2.5 w-2.5 border-b border-r border-current transition-transform duration-200 ${
                            isOpen ? "-rotate-135" : "rotate-45"
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="mt-3 flex flex-col gap-2 pl-3">
                          {link.subRoutes?.map((sub, subIdx) => (
                            <Link
                              key={`${sub.href}-${subIdx}`}
                              href={sub.href}
                              className="text-sm font-medium hover:text-[#8AC028] transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenAccordion(null);
                              }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

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

            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center border border-[#8AC028] py-3 text-[#8AC028] font-bold transition hover:bg-[#8AC028] hover:text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
