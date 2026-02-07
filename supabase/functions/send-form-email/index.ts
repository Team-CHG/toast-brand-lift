import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface FormRequest {
  formType: "contact" | "franchise";
  turnstileToken: string;
  data: Record<string, string>;
}

const verifyTurnstile = async (token: string): Promise<boolean> => {
  const secretKey = Deno.env.get("TURNSTILE_SECRET_KEY");
  if (!secretKey) {
    throw new Error("TURNSTILE_SECRET_KEY is not configured");
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    }
  );

  const result = await response.json();
  return result.success === true;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { formType, turnstileToken, data }: FormRequest = await req.json();

    // Verify Turnstile token
    const isValid = await verifyTurnstile(turnstileToken);
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: "Spam verification failed. Please try again." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(resendApiKey);
    let subject: string;
    let htmlContent: string;

    if (formType === "contact") {
      subject = `Contact Form Submission from ${data.name}`;
      htmlContent = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <h2>Message:</h2>
        <p>${data.message}</p>
      `;
    } else if (formType === "franchise") {
      subject = `Franchise Inquiry from ${data.firstName} ${data.lastName}`;
      htmlContent = `
        <h1>New Franchise Inquiry</h1>
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h2>Location</h2>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>State:</strong> ${data.state}</p>
        <h2>Investment Details</h2>
        <p><strong>Available Capital:</strong> ${data.investmentCapital}</p>
        <p><strong>Experience:</strong> ${data.experience || "Not provided"}</p>
        <h2>Message:</h2>
        <p>${data.message}</p>
      `;
    } else {
      throw new Error("Invalid form type");
    }

    const emailResponse = await resend.emails.send({
      from: "Toast All Day <noreply@toastallday.com>",
      to: ["toast@teamchg.com"],
      subject,
      html: htmlContent,
      replyTo: data.email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending form email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
