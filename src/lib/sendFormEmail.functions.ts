import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  formType: z.enum(["contact", "franchise"]),
  turnstileToken: z.string().min(1),
  data: z.record(z.string(), z.string()),
});

const escapeHtml = (value: string | undefined) =>
  (value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

async function verifyTurnstile(token: string): Promise<boolean> {
  const secretKey = process.env["TURNSTILE_SECRET_KEY"];
  if (!secretKey) {
    throw new Error("TURNSTILE_SECRET_KEY is not configured");
  }
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: token }).toString(),
  });
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

// Verifies the Turnstile token, then emails the contact or franchise form via Resend.
export const sendFormEmail = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data: input }) => {
    const resendApiKey = process.env["RESEND_API_KEY"];
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const isValid = await verifyTurnstile(input.turnstileToken);
    if (!isValid) {
      throw new Error("Spam verification failed. Please try again.");
    }

    const d = input.data;
    const e = (key: string) => escapeHtml(d[key]);
    let subject: string;
    let html: string;

    if (input.formType === "contact") {
      subject = `Contact Form Submission from ${d["name"] ?? ""}`;
      html = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${e("name")}</p>
        <p><strong>Email:</strong> ${e("email")}</p>
        <p><strong>Phone:</strong> ${e("phone") || "Not provided"}</p>
        <h2>Message:</h2>
        <p>${e("message")}</p>
      `;
    } else {
      subject = `Franchise Inquiry from ${d["firstName"] ?? ""} ${d["lastName"] ?? ""}`;
      html = `
        <h1>New Franchise Inquiry</h1>
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> ${e("firstName")} ${e("lastName")}</p>
        <p><strong>Email:</strong> ${e("email")}</p>
        <p><strong>Phone:</strong> ${e("phone")}</p>
        <h2>Location</h2>
        <p><strong>City:</strong> ${e("city")}</p>
        <p><strong>State:</strong> ${e("state")}</p>
        <h2>Investment Details</h2>
        <p><strong>Available Capital:</strong> ${e("investmentCapital")}</p>
        <p><strong>Experience:</strong> ${e("experience") || "Not provided"}</p>
        <h2>Message:</h2>
        <p>${e("message")}</p>
      `;
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Toast All Day <noreply@toastallday.com>",
        to: ["toast@teamchg.com"],
        subject,
        html,
        reply_to: d["email"],
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", res.status, await res.text());
      throw new Error("Failed to send message. Please try again.");
    }

    return { success: true };
  });
