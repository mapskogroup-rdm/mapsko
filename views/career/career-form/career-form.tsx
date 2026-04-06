import CareerFormContainer from "./career-form-container";

const CareerForm = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6">
      <div className="mb-8 flex flex-col items-center justify-center space-y-3 text-center md:mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
          General Application
        </p>
        <h3 className="text-2xl font-bold uppercase text-stone-900 md:text-3xl">
          Apply for Future Opportunities
        </h3>
        <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
          If the current vacancy is not the right fit, you can still submit
          your details here for general consideration.
        </p>
      </div>

      <div className="flex gap-14 rounded-[28px] border border-stone-200 bg-stone-50 p-4 md:p-6 lg:p-8 xl:p-12">
        <CareerFormContainer />
      </div>
    </section>
  );
};

export default CareerForm;
