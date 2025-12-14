import { NextResponse } from "next/server";
import { Resend } from "resend";

// Required env: RESEND_API_KEY
// Optional env: RESEND_FROM (e.g., "Careers <careers@yourdomain.com>")
const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "vmbansal2001@gmail.com";
const DEFAULT_FROM = "Careers <onboarding@resend.dev>";

const requiredFields = [
  "firstName",
  "lastName",
  "email",
  "contact",
  "position",
  "qualification",
  "experience",
  "salary",
  "address",
  "city",
  "pincode",
  "message",
] as const;

type FormPayload = Record<(typeof requiredFields)[number], string>;

type ValidationResult =
  | {
      ok: true;
      data: FormPayload;
    }
  | {
      ok: false;
      errors: Record<string, string>;
    };

const validate = (payload: Partial<FormPayload>): ValidationResult => {
  const errors: Record<string, string> = {};

  requiredFields.forEach((field) => {
    const value = payload[field];
    if (!value || !value.toString().trim()) {
      errors[field] = "This field is required";
    }
  });

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data: payload as FormPayload };
};

const formatHtml = (data: FormPayload) => {
  const item = (label: string, value: string) =>
    `<p style="margin:4px 0;"><strong>${label}:</strong> ${value}</p>`;

  return `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
      <h2 style="margin-bottom: 12px;">Career Application Form Submission</h2>
      <div style="margin-bottom: 12px;">
        <h3 style="margin: 0 0 6px;">Personal Information</h3>
        ${item("First Name", data.firstName)}
        ${item("Last Name", data.lastName)}
        ${item("Email", data.email)}
        ${item("Contact No.", data.contact)}
      </div>
      <div style="margin-bottom: 12px;">
        <h3 style="margin: 0 0 6px;">Application Details</h3>
        ${item("Position Applied For", data.position)}
        ${item("Qualification", data.qualification)}
        ${item("Experience", data.experience)}
        ${item("Salary", data.salary)}
      </div>
      <div style="margin-bottom: 12px;">
        <h3 style="margin: 0 0 6px;">Location</h3>
        ${item("Address", data.address)}
        ${item("City", data.city)}
        ${item("Pincode", data.pincode)}
      </div>
      <div>
        <h3 style="margin: 0 0 6px;">Message</h3>
        <p style="margin: 4px 0; white-space: pre-line;">${data.message}</p>
      </div>
    </div>
  `;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<FormPayload>;
    const validation = validate(body);

    if (!validation.ok) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const payload = validation.data;
    const fromAddress = process.env.RESEND_FROM || DEFAULT_FROM;

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [RECIPIENT],
      subject: `New Career Application - ${
        payload.position || "Unknown Position"
      }`,
      replyTo: payload.email,
      html: formatHtml(payload),
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Unexpected error" },
      { status: 500 }
    );
  }
}
