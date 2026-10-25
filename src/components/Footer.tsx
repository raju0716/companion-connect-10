import { Link } from "@/lib/router-compat";
import { Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-gradient-rose font-display text-xl font-bold mb-3">ÉLITE</h3>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Premium companion services with discretion, elegance, and absolute privacy guaranteed.
          </p>
        </div>
        <div>
          <h4 className="text-foreground font-semibold mb-2 md:mb-3 text-xs md:text-sm">Quick Links</h4>
          <div className="flex flex-col gap-1.5">
            {[["Home", "/"], ["Companions", "/companions"], ["Cities", "/cities"], ["Contact", "/contact"]] as const}.map(([label, to]) => (
              <Link key={to} to={to} className="text-muted-foreground text-xs md:text-sm hover:text-primary transition-colors">{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-foreground font-semibold mb-2 md:mb-3 text-xs md:text-sm">Legal</h4>
          <div className="flex flex-col gap-1.5">
            {[["Privacy Policy", "/privacy"], ["Terms", "/terms"], ["Safety", "/safety"]] as const}.map(([label, to]) => (
              <Link key={to} to={to} className="text-muted-foreground text-xs md:text-sm hover:text-primary transition-colors">{label}</Link>
            ))}
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-foreground font-semibold mb-2 md:mb-3 text-xs md:text-sm">Contact</h4>
          <p className="text-muted-foreground text-xs md:text-sm">WhatsApp: +1 (555) 000-0000</p>
          <p className="text-muted-foreground text-xs md:text-sm">Email: contact@elite.com</p>
          <p className="text-muted-foreground text-xs md:text-sm mt-1">Available 24/7</p>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-muted-foreground text-[10px] md:text-xs">© 2026 ÉLITE. All rights reserved. 18+ only.</p>
        <p className="text-muted-foreground text-[10px] md:text-xs flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-primary" /> for discerning clients
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
