import React from "react";
import Link from "next/link";

type RouteType = {
  label: string;
  href: string;
};

type Props = {
  routes: RouteType[];
};

const Navigator = ({ routes }: Props) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="py-4 px-4 sm:px-6 md:px-0 text-sm sm:text-base md:text-lg"
    >
      <ol className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-[#111217]">
        {routes.map((route, index) => {
          const isLast = index === routes.length - 1;

          return (
            <React.Fragment key={route.href}>
              <li className="flex items-center">
                {isLast ? (
                  <span className="font-semibold text-[#005CA8]">
                    {route.label}
                  </span>
                ) : (
                  <Link
                    href={route.href}
                    className="hover:text-[#005CA8] transition-colors duration-150"
                  >
                    {route.label}
                  </Link>
                )}
              </li>
              {!isLast && (
                <li aria-hidden className="text-[#111217] px-1">
                  &gt;
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Navigator;
