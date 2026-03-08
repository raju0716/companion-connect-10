import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-gradient-gold font-display text-xl font-bold mb-4">ÉLITE</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium companion services with discretion, elegance, and absolute privacy guaranteed.
          </p>
        </div>
        <div>
          <h4 className="text-foreground font-semibold mb-3 text-sm">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[["Home", "/"], ["Companions", "/companions"], ["Cities", "/cities"], ["Contact", "/contact"]].map(([label, to]) => (
              <Link key={to} to={to} className="text-muted-foreground text-sm hover:text-primary transition-colors">{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-foreground font-semibold mb-3 text-sm">Legal</h4>
          <div className="flex flex-col gap-2">
            {[["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"], ["Safety Guidelines", "/safety"]].map(([label, to]) => (
              <Link key={to} to={to} className="text-muted-foreground text-sm hover:text-primary transition-colors">{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-foreground font-semibold mb-3 text-sm">Contact</h4>
          <p className="text-muted-foreground text-sm">WhatsApp: +1 (555) 000-0000</p>
          <p className="text-muted-foreground text-sm">Email: contact@elite.com</p>
          <p className="text-muted-foreground text-sm mt-2">Available 24/7</p>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-xs">© 2026 ÉLITE. All rights reserved. 18+ only.</p>
        <p className="text-muted-foreground text-xs flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-primary" /> for discerning clients
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
