import { createFileRoute } from "@tanstack/react-router";
import CompanionProfile from "@/pages/CompanionProfile";

export const Route = createFileRoute("/_public/companion/$id")({
  component: CompanionProfile,
});
