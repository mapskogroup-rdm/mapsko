import { Quote } from "lucide-react";

type Props = {
    text: string;
    author: string;
    position?: string;
    index: number;
};

const TestimonialCardV2 = ({ text, author, position, index }: Props) => {
    // Alternate colors based on index: Blue for even, Green for odd
    const isEven = index % 2 === 0;
    const themeColor = isEven ? "#0B6BB8" : "#8AC028";
    const bgOpacity = isEven ? "bg-sky-50" : "bg-lime-50";
    const textColor = isEven ? "text-sky-900" : "text-lime-900";
    const borderColor = isEven ? "border-sky-200" : "border-lime-200";

    return (
        <div className={`relative group p-8 md:p-10 rounded-3xl border ${borderColor} ${bgOpacity} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full`}>
            {/* Quote Icon with Theme Background */}
            <div
                className="absolute -top-6 left-10 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                style={{ backgroundColor: themeColor }}
            >
                <Quote size={24} fill="white" />
            </div>

            {/* Main Content */}
            <div className="flex-1 mt-4">
                <p className={`${textColor} text-lg md:text-xl font-medium leading-relaxed italic`}>
                    "{text}"
                </p>
            </div>

            {/* Author Details */}
            <div className="mt-8 pt-6 border-t border-black/5">
                <h4 className={`text-xl font-bold uppercase tracking-wide ${textColor}`}>
                    {author}
                </h4>
                {position && (
                    <p className="text-neutral-500 text-sm md:text-base font-medium mt-1">
                        {position}
                    </p>
                )}
            </div>

            {/* Subtle Background Accent */}
            <div
                className="absolute bottom-4 right-6 text-9xl font-bold opacity-5 pointer-events-none select-none transition-all duration-500 group-hover:opacity-10"
                style={{ color: themeColor }}
            >
                {isEven ? "B" : "G"}
            </div>
        </div>
    );
};

export default TestimonialCardV2;
