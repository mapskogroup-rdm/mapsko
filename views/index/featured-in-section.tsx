import { client } from "@/lib/sanity.client";
import { allFeaturedInQuery } from "@/lib/sanity.queries";
import { FeaturedInDocument } from "@/lib/sanity.types";
import Logo from "@/assets/icons/mapsko-logo.svg";
import SanityImage from "@/components/sanity-image";
import Link from "next/link";

const FeaturedInSection = async () => {
    const featuredInItems = await client.fetch<FeaturedInDocument[]>(allFeaturedInQuery);

    if (!featuredInItems || featuredInItems.length === 0) return null;

    return (
        <section className="bg-[#f9f9f9] overflow-hidden">
            <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
                <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 text-center">
                    <Logo className="w-10 sm:w-12 md:w-14" />
                    <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase px-4">
                        Featured In
                    </h2>
                    <p className="text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
                        Recognized for Excellence in Real Estate
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {featuredInItems.map((item) => (
                        <Link
                            key={item._id}
                            href={item.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col bg-white border border-neutral-200 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Heading */}
                            <div className="p-6 pb-0">
                                <h3 className="text-sky-800 text-lg md:text-xl font-bold line-clamp-2 min-h-[3rem]">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Subheading */}
                            {item.subheading && (
                                <div className="px-6 pb-3">
                                    <p className="text-neutral-500 text-sm md:text-base font-medium">
                                        {item.subheading}
                                    </p>
                                </div>
                            )}

                            {/* Publication Logo */}
                            <div className="p-6 pt-3">
                                <div className="h-10 w-full max-w-[140px] flex items-center">
                                    <SanityImage
                                        image={item.publicationLogo}
                                        alt="Publication logo"
                                        width={200}
                                        className="h-full w-auto object-contain object-left grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* Cover Image */}
                            <div className="relative w-full aspect-[16/9] overflow-hidden">
                                <SanityImage
                                    image={item.coverImage}
                                    alt={item.title}
                                    width={800}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Text and Button */}
                            <div className="p-6 md:p-8 flex flex-col flex-1">
                                <p className="text-neutral-600 text-sm md:text-base line-clamp-3 mb-6 flex-1">
                                    {item.shortDescription}
                                </p>

                                <span className="text-sky-700 font-bold uppercase text-xs sm:text-sm tracking-wider flex items-center gap-2 group-hover:underline">
                                    Read Full Article
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transition-transform group-hover:translate-x-1"
                                    >
                                        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedInSection;
