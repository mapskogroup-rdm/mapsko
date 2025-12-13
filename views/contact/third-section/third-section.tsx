import React from "react";

const ThirdSection = () => {
  return (
    <section className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="text-center">
        <p className="text-neutral-500 text-4xl font-normal">
          Corporate Identification No. of
        </p>

        <p className="text-neutral-500 text-4xl font-bold">
          MAPSKO Builders Pvt. Ltd. U45203HR2003PTC107241
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-5xl overflow-hidden p-2 border-4 border-neutral-200">
          <div className="relative pb-[62%]">
            <iframe
              title="Mapsko Group Location"
              src="https://www.google.com/maps?q=Mapsko%20Group%2C%20Golf%20Course%20Rd%2C%20Gurugram&output=embed"
              className="absolute left-0 top-0 h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
