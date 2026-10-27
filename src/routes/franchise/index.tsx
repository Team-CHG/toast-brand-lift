import { createFileRoute } from "@tanstack/react-router";
import Franchise from "@/pages/Franchise";

export const Route = createFileRoute("/franchise/")({
  component: Franchise,
});
