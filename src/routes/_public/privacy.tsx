import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";

export const Route = createFileRoute("/_public/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ÉLITE" },
      { name: "description", content: "How ÉLITE collects, uses and protects your data." },
      { property: "og:title", content: "Privacy Policy — ÉLITE" },
      { property: "og:description", content: "How ÉLITE collects, uses and protects your data." },
    ],
  }),
  component: PrivacyPolicyPage,
});
