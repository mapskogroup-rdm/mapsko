"use client";

import React, { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  position: string;
  qualification: string;
  experience: string;
  salary: string;
  address: string;
  city: string;
  pincode: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  position: "",
  qualification: "",
  experience: "",
  salary: "",
  address: "",
  city: "",
  pincode: "",
  message: "",
};

const inputBaseClass =
  "w-full border border-stone-300 px-3 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-sky-700 rounded-sm bg-white";

const CareerFormContainer = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (field: keyof FormState, value: string): void => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = (): FormErrors => {
    const validationErrors: FormErrors = {};

    (Object.keys(formState) as Array<keyof FormState>).forEach((key) => {
      if (!formState[key].trim()) {
        validationErrors[key] = "This field is required";
      }
    });

    return validationErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSubmitStatus({ type: null, message: "" });
    setIsSubmitting(true);
    console.log("Career form submitted:", formState);

    try {
      const response = await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = (await response.json().catch(() => null)) as {
        success?: boolean;
        errors?: FormErrors;
        message?: string;
      } | null;

      if (!response.ok) {
        if (data?.errors) {
          setErrors(data.errors);
        }
        setSubmitStatus({
          type: "error",
          message:
            data?.message ||
            "We could not submit your application. Please try again.",
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        message: "Application submitted successfully.",
      });
      setFormState(initialState);
      setErrors({});
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong while submitting. Please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        {submitStatus.type ? (
          <div
            className={`rounded-sm border px-3 py-2 text-sm ${
              submitStatus.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
            aria-live="polite"
          >
            {submitStatus.message}
          </div>
        ) : null}

        <fieldset disabled={isSubmitting} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={formState.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className={`${inputBaseClass} ${
                  errors.firstName ? "border-red-500 focus:border-red-500" : ""
                }`}
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby="firstName-error"
                required
              />
              {errors.firstName ? (
                <p id="firstName-error" className="mt-1 text-xs text-red-600">
                  {errors.firstName}
                </p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={formState.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className={`${inputBaseClass} ${
                  errors.lastName ? "border-red-500 focus:border-red-500" : ""
                }`}
                aria-invalid={Boolean(errors.lastName)}
                aria-describedby="lastName-error"
                required
              />
              {errors.lastName ? (
                <p id="lastName-error" className="mt-1 text-xs text-red-600">
                  {errors.lastName}
                </p>
              ) : null}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Id"
                value={formState.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`${inputBaseClass} ${
                  errors.email ? "border-red-500 focus:border-red-500" : ""
                }`}
                aria-invalid={Boolean(errors.email)}
                aria-describedby="email-error"
                required
              />
              {errors.email ? (
                <p id="email-error" className="mt-1 text-xs text-red-600">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Contact No."
                value={formState.contact}
                onChange={(e) => handleChange("contact", e.target.value)}
                className={`${inputBaseClass} ${
                  errors.contact ? "border-red-500 focus:border-red-500" : ""
                }`}
                aria-invalid={Boolean(errors.contact)}
                aria-describedby="contact-error"
                required
              />
              {errors.contact ? (
                <p id="contact-error" className="mt-1 text-xs text-red-600">
                  {errors.contact}
                </p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                placeholder="Position Applied For"
                value={formState.position}
                onChange={(e) => handleChange("position", e.target.value)}
                className={`${inputBaseClass} ${
                  errors.position ? "border-red-500 focus:border-red-500" : ""
                }`}
                aria-invalid={Boolean(errors.position)}
                aria-describedby="position-error"
                required
              />
              {errors.position ? (
                <p id="position-error" className="mt-1 text-xs text-red-600">
                  {errors.position}
                </p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                placeholder="Qualification"
                value={formState.qualification}
                onChange={(e) => handleChange("qualification", e.target.value)}
                className={`${inputBaseClass} ${
                  errors.qualification
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }`}
                aria-invalid={Boolean(errors.qualification)}
                aria-describedby="qualification-error"
                required
              />
              {errors.qualification ? (
                <p
                  id="qualification-error"
                  className="mt-1 text-xs text-red-600"
                >
                  {errors.qualification}
                </p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                placeholder="Experience"
                value={formState.experience}
                onChange={(e) => handleChange("experience", e.target.value)}
                className={`${inputBaseClass} ${
                  errors.experience ? "border-red-500 focus:border-red-500" : ""
                }`}
                aria-invalid={Boolean(errors.experience)}
                aria-describedby="experience-error"
                required
              />
              {errors.experience ? (
                <p id="experience-error" className="mt-1 text-xs text-red-600">
                  {errors.experience}
                </p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                placeholder="Salary"
                value={formState.salary}
                onChange={(e) => handleChange("salary", e.target.value)}
                className={`${inputBaseClass} ${
                  errors.salary ? "border-red-500 focus:border-red-500" : ""
                }`}
                aria-invalid={Boolean(errors.salary)}
                aria-describedby="salary-error"
                required
              />
              {errors.salary ? (
                <p id="salary-error" className="mt-1 text-xs text-red-600">
                  {errors.salary}
                </p>
              ) : null}
            </div>

            <div className="md:col-span-2">
              <textarea
                placeholder="Address"
                value={formState.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className={`${inputBaseClass} min-h-[110px] resize-none ${
                  errors.address ? "border-red-500 focus:border-red-500" : ""
                }`}
                aria-invalid={Boolean(errors.address)}
                aria-describedby="address-error"
                required
              />
              {errors.address ? (
                <p id="address-error" className="mt-1 text-xs text-red-600">
                  {errors.address}
                </p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                placeholder="City"
                value={formState.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className={`${inputBaseClass} ${
                  errors.city ? "border-red-500 focus:border-red-500" : ""
                }`}
                aria-invalid={Boolean(errors.city)}
                aria-describedby="city-error"
                required
              />
              {errors.city ? (
                <p id="city-error" className="mt-1 text-xs text-red-600">
                  {errors.city}
                </p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                placeholder="Pincode"
                value={formState.pincode}
                onChange={(e) => handleChange("pincode", e.target.value)}
                className={`${inputBaseClass} ${
                  errors.pincode ? "border-red-500 focus:border-red-500" : ""
                }`}
                aria-invalid={Boolean(errors.pincode)}
                aria-describedby="pincode-error"
                required
              />
              {errors.pincode ? (
                <p id="pincode-error" className="mt-1 text-xs text-red-600">
                  {errors.pincode}
                </p>
              ) : null}
            </div>

            <div className="md:col-span-2">
              <textarea
                placeholder="Message"
                value={formState.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`${inputBaseClass} min-h-[110px] resize-none ${
                  errors.message ? "border-red-500 focus:border-red-500" : ""
                }`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby="message-error"
                required
              />
              {errors.message ? (
                <p id="message-error" className="mt-1 text-xs text-red-600">
                  {errors.message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="inline-flex cursor-pointer w-full items-center justify-center px-10 py-3 border border-sky-700 text-sky-700 text-base font-semibold rounded-sm hover:bg-sky-700 hover:text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CareerFormContainer;
