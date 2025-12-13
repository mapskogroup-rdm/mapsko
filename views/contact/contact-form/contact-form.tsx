"use client";

import React, { useState } from "react";
import Logo from "@/assets/icons/mapsko-logo.svg";

type FormState = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  address: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  address: "",
  message: "",
};

const inputBaseClass =
  "w-full border border-stone-300 px-3 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-sky-700 rounded-sm bg-white";

const ContactForm = () => {
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
    console.log("Contact form submitted:", formState);

    try {
      const response = await fetch("/api/contact", {
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
            "We could not submit your message. Please try again.",
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully.",
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
    <section className="bg-stone-50">
      <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <Logo className="w-10 sm:w-12 md:w-14" />
          <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
            Contact Form
          </h2>
        </div>

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formState.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`${inputBaseClass} ${
                    errors.name ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby="name-error"
                  required
                />
                {errors.name ? (
                  <p id="name-error" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formState.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`${inputBaseClass} ${
                    errors.phone ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby="phone-error"
                  required
                />
                {errors.phone ? (
                  <p id="phone-error" className="mt-1 text-xs text-red-600">
                    {errors.phone}
                  </p>
                ) : null}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className={`${inputBaseClass} ${
                    errors.subject ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby="subject-error"
                  required
                />
                {errors.subject ? (
                  <p id="subject-error" className="mt-1 text-xs text-red-600">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Address"
                  value={formState.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className={`${inputBaseClass} ${
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
            </div>

            <div>
              <textarea
                placeholder="Message"
                value={formState.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`${inputBaseClass} min-h-[140px] resize-none ${
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

            <button
              type="submit"
              className="inline-flex cursor-pointer w-full items-center justify-center px-10 py-3 border border-sky-700 text-sky-700 text-base font-semibold rounded-sm hover:bg-sky-700 hover:text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
