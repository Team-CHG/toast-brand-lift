import { createFileRoute } from "@tanstack/react-router";
import CharlestonBrunchCocktails from "@/pages/blog/CharlestonBrunchCocktails";

export const Route = createFileRoute("/blog/charleston-brunch-cocktails/")({
  component: CharlestonBrunchCocktails,
});
