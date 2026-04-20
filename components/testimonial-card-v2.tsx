
import Image from "next/image";

type Props = {
    text: string;
    author: string;
    position?: string;
    imageUrl?: string;
    index: number;
    /** White background with blue/green borders and highlights only */
    variant?: "default" | "white";
};

const TestimonialCardV2 = ({ text, author, position, imageUrl, index, variant = "default" }: Props) => {
    // Alternate colors based on index: Blue for even, Green for odd
    const isEven = index % 2 === 0;
    const themeColor = isEven ? "#0B6BB8" : "#22c55e";
    const borderColor = isEven ? "border-sky-400" : "border-green-400";
    const accentColor = isEven ? "text-sky-600" : "text-green-600";
    const bgClass = variant === "white" ? "bg-white" : isEven ? "bg-sky-50" : "bg-lime-50";
    const textColor = variant === "white" ? "text-neutral-800" : isEven ? "text-sky-900" : "text-lime-900";

    return (
        <div className={`relative group p-6 md:p-7 rounded-3xl border-2 ${borderColor} ${bgClass} transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full overflow-hidden`}>
            {/* Quote Icon with Theme Background */}
            <div
                className="left-10 w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 z-10"
                style={{ backgroundColor: themeColor }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 5 3 6" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c1 0 1.25.25 1.25 1.25V15c0 2.5 1 5 3 6" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="flex-1 mt-3">
                <p className={`${textColor} text-base md:text-lg font-medium leading-relaxed italic`}>
                    "{text}"
                </p>
            </div>

            {/* Author Details with Profile Image */}
            <div className={`mt-6 pt-4 border-t flex items-center gap-4 ${variant === "white" ? "border-sky-100" : "border-black/5"}`}>
                {/* <div className={`w-14 h-14 rounded-full border-2 ${borderColor} overflow-hidden shrink-0 bg-white`}>
                    <Image
                        src={imageUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`}
                        alt={author}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                </div> */}
                <div className="flex flex-col">
                    <h4 className={`text-base md:text-lg font-bold uppercase tracking-wide ${variant === "white" ? accentColor : textColor}`}>
                        {author}
                    </h4>
                    {position && (
                        <p className="text-neutral-500 text-sm md:text-base font-medium">
                            {position}
                        </p>
                    )}
                </div>
            </div>

            {/* Subtle Background Accent */}
            <div
                className="absolute -bottom-6 -right-4 text-[10rem] font-bold opacity-5 pointer-events-none select-none transition-all duration-500 group-hover:opacity-10 group-hover:scale-110"
                style={{ color: themeColor }}
            >
                “
            </div>
        </div>
    );
};

export default TestimonialCardV2;
