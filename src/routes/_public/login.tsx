import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "@/pages/LoginPage";

export const Route = createFileRoute("/_public/login")({
  head: () => ({
    meta: [
      { title: "Login — ÉLITE" },
      { name: "description", content: "Sign in to your ÉLITE account." },
      { property: "og:title", content: "Login — ÉLITE" },
      { property: "og:description", content: "Sign in to your ÉLITE account." },
    ],
  }),
  component: LoginPage,
});
