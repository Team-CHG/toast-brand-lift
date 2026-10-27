import { createFileRoute } from "@tanstack/react-router";
import UnlimitedDrinkPass from "@/pages/events/UnlimitedDrinkPass";

export const Route = createFileRoute("/blog/unlimited-drink-pass/")({
  component: UnlimitedDrinkPass,
});
