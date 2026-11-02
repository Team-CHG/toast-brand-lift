import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import dinner from "@/assets/thanksgiving-dinner.avif.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      // Preload the seasonal campaign's exact LCP source.
      {
        rel: "preload",
        as: "image",
        href: dinner.url,
        type: "image/avif",
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});
