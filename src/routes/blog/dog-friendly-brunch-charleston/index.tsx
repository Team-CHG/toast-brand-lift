import { createFileRoute } from "@tanstack/react-router";
import DogFriendlyBrunchCharleston from "@/pages/blog/DogFriendlyBrunchCharleston";

export const Route = createFileRoute("/blog/dog-friendly-brunch-charleston/")({
  component: DogFriendlyBrunchCharleston,
});
