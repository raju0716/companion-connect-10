import { createFileRoute } from "@tanstack/react-router";
import RegisterPage from "@/pages/RegisterPage";

export const Route = createFileRoute("/_public/register")({
  head: () => ({
    meta: [
      { title: "Create Account — ÉLITE" },
      { name: "description", content: "Register for an ÉLITE account." },
      { property: "og:title", content: "Create Account — ÉLITE" },
      { property: "og:description", content: "Register for an ÉLITE account." },
    ],
  }),
  component: RegisterPage,
});
