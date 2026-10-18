import { createFileRoute } from "@tanstack/react-router";
import AdminLayout from "@/pages/admin/AdminLayout";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin Panel — ÉLITE" }, { name: "robots", content: "noindex" }],
  }),
  component: AdminLayout,
});
