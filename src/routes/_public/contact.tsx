import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/pages/ContactPage";

export const Route = createFileRoute("/_public/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ÉLITE" },
      { name: "description", content: "Get in touch via form, email, WhatsApp or Telegram." },
      { property: "og:title", content: "Contact Us — ÉLITE" },
      { property: "og:description", content: "Get in touch via form, email, WhatsApp or Telegram." },
    ],
  }),
  component: ContactPage,
});
