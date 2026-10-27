import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://toastallday.com/" },
      // Preload the seasonal campaign's exact LCP source.
      {
        rel: "preload",
        as: "image",
        href: "/hero/flaky-season-new.avif",
        type: "image/avif",
        fetchPriority: "high",
      },
    ],
    meta: [{ property: "og:url", content: "https://toastallday.com/" }],
  }),
  component: Index,
});
