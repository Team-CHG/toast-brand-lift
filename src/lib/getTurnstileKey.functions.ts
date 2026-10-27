import { createServerFn } from "@tanstack/react-start";

// Returns the public Cloudflare Turnstile site key the forms render with.
export const getTurnstileKey = createServerFn({ method: "GET" }).handler(async () => {
  const siteKey = process.env["TURNSTILE_SITE_KEY"];
  if (!siteKey) {
    throw new Error("TURNSTILE_SITE_KEY is not configured");
  }
  return { siteKey };
});
