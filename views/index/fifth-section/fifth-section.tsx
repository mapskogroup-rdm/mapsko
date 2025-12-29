import Logo from "@/assets/icons/mapsko-white-logo.svg";
import TestimonialVideo from "@/components/testimonial-video";

const FifthSection = () => {
  const testimonials = [
    {
      videoUrl: "/assets/testimonials/1.mp4",
      id: "1",
      title: "",
    },
    {
      videoUrl: "/assets/testimonials/2.mp4",
      id: "2",
      title: "",
    },
    {
      videoUrl: "/assets/testimonials/3.mp4",
      id: "3",
      title: "",
    },
    {
      videoUrl: "/assets/testimonials/4.mp4",
      id: "4",
      title: "",
    },
  ];

  return (
    <div className="w-full bg-[#0B6BB8]">
      <section className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <Logo className="w-10 sm:w-12 md:w-14" />
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-center px-4">
            Voices of Satisfaction
          </h2>
          <p className="text-center text-white text-sm sm:text-base md:text-lg font-light uppercase px-4">
            What our customers say about us
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {testimonials.map((testimonial) => (
            <TestimonialVideo
              key={testimonial.id}
              src={testimonial.videoUrl}
              title={testimonial.title}
              className="w-full aspect-9/16 max-h-[720px]"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FifthSection;
