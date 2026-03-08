import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/companions", label: "Companions" },
  { to: "/cities", label: "Cities" },
  { to: "/safety", label: "Safety" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-gradient-gold font-display text-2xl font-bold tracking-wide">
          ÉLITE
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-body tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/safety">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Shield className="w-4 h-4 mr-1" /> 18+
            </Button>
          </Link>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm py-2 transition-colors ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button size="sm" className="bg-primary text-primary-foreground mt-2">
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
