import Link from 'next/link';

const LatestNewsCTA = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 xl:py-24">
            <div className="common-frame-box">
                <div className="relative overflow-hidden rounded-[2rem] bg-[#0B6BB8] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-center min-h-[350px] shadow-2xl">
                    {/* Concentric circles background effect */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[20%] md:translate-x-[10%] pointer-events-none opacity-30">
                        <div className="w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full bg-white/10 flex items-center justify-center transition-transform">
                            <div className="w-[450px] md:w-[600px] h-[450px] md:h-[600px] rounded-full bg-white/20 flex items-center justify-center">
                                <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-white/40 flex items-center justify-center">
                                    <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-full bg-white flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.5)]">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
                            Latest News
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-sky-50 font-light mb-10 max-w-lg leading-relaxed">
                            Stay informed with the latest updates and insights from Infra News.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/latest-news"
                                className="group flex items-center justify-between gap-6 bg-gray-900 hover:bg-black text-white text-sm md:text-base font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 w-fit md:min-w-[200px]"
                            >
                                <span>View All</span>
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 group-hover:scale-110 transition-transform duration-300 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.3)]"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestNewsCTA;
