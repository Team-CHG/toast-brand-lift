import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import dinner from "@/assets/thanksgiving-dinner.avif.asset.json";
import share from "@/assets/thanksgiving-share.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toast All Day - Award-Winning Breakfast, Brunch & Lunch in Charleston" },
      { name: "description", content: "Toast All Day serves gourmet breakfast, brunch, and lunch with fresh, locally-sourced ingredients. TripAdvisor Top 25 Best Brunches in the U.S. Visit our Charleston, Mt. Pleasant, Summerville & Savannah locations." },
      { property: "og:title", content: "Toast All Day - Award-Winning Breakfast, Brunch & Lunch in Charleston" },
      { property: "og:description", content: "Toast All Day serves gourmet breakfast, brunch, and lunch with fresh, locally-sourced ingredients. TripAdvisor Top 25 Best Brunches in the U.S. Visit our Charleston, Mt. Pleasant, Summerville & Savannah locations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://toastallday.com/" },
      { property: "og:image", content: share.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: share.url },
      { name: "twitter:title", content: "Toast All Day - Award-Winning Breakfast, Brunch & Lunch in Charleston" },
      { name: "twitter:description", content: "Toast All Day serves gourmet breakfast, brunch, and lunch in Charleston, Mt. Pleasant, Summerville & Savannah." },
      { name: "keywords", content: "breakfast Charleston, brunch Charleston, best breakfast SC, award winning brunch, mimosas, french toast, eggs benedict" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://toastallday.com/" },
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
