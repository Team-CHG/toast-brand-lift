import { createFileRoute } from "@tanstack/react-router";
import Rewards from "@/pages/Rewards";

export const Route = createFileRoute("/rewards/")({
  component: Rewards,
});
