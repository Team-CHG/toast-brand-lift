import { createFileRoute } from "@tanstack/react-router";
import ToastKing from "@/pages/locations/ToastKing";

export const Route = createFileRoute("/locations/toast-king/")({
  component: ToastKing,
});
