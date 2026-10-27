import { createFileRoute } from "@tanstack/react-router";
import BlackFridayGiftCard from "@/pages/events/BlackFridayGiftCard";

export const Route = createFileRoute("/blog/black-friday-gift-card/")({
  component: BlackFridayGiftCard,
});
