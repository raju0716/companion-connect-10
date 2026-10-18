import { createFileRoute } from "@tanstack/react-router";
import AdminProfiles from "@/pages/admin/AdminProfiles";

export const Route = createFileRoute("/admin/profiles")({
  component: AdminProfiles,
});
