import Link from 'next/link';
import Logo from "@/assets/icons/mapsko-logo.svg";

const LatestNewsCTA = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 xl:py-28 text-center border-t border-b border-gray-100">
            <div className="common-frame-box flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6">
                <Logo className="w-10 sm:w-12 md:w-14" />
                <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase px-4">
                    Latest News
                </h2>
                <p className="text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4 max-w-2xl">
                    Stay informed with the latest updates and insights from Infra News
                </p>
                <div className="pt-6">
                    <Link
                        href="/latest-news"
                        className="inline-block bg-sky-700 hover:bg-sky-800 text-white font-semibold py-3 px-8 transition-colors duration-300"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestNewsCTA;
