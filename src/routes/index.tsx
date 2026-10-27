import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      // Preload the seasonal campaign's exact LCP source.
      {
        rel: "preload",
        as: "image",
        href: "/hero/flaky-season-new.avif",
        type: "image/avif",
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});
