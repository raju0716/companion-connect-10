import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, ChevronDown, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cities, categories } from "@/data/mockData";

const top20Cities = cities.slice(0, 20);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const citiesRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setCitiesOpen(false);
    setCategoriesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (citiesRef.current && !citiesRef.current.contains(e.target as Node)) setCitiesOpen(false);
      if (categoriesRef.current && !categoriesRef.current.contains(e.target as Node)) setCategoriesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinkClass = (active: boolean) =>
    `text-sm font-body tracking-wide transition-colors hover:text-primary ${active ? "text-primary" : "text-muted-foreground"}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-gradient-rose font-display text-2xl font-bold tracking-wide">
          ÉLITE
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className={navLinkClass(location.pathname === "/")}>Home</Link>

          {/* Categories mega menu */}
          <div ref={categoriesRef} className="relative">
            <button
              onClick={() => { setCategoriesOpen(!categoriesOpen); setCitiesOpen(false); }}
              className={`flex items-center gap-1 ${navLinkClass(location.pathname.startsWith("/category"))}`}
            >
              Categories <ChevronDown className={`w-3 h-3 transition-transform ${categoriesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-rose overflow-hidden"
                >
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.id}`}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-accent transition-colors border-b border-border last:border-0"
                    >
                      <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{cat.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{cat.description}</p>
                      </div>
                      <span className="text-xs text-muted-foreground ml-auto flex-shrink-0">{cat.count}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cities mega menu */}
          <div ref={citiesRef} className="relative">
            <button
              onClick={() => { setCitiesOpen(!citiesOpen); setCategoriesOpen(false); }}
              className={`flex items-center gap-1 ${navLinkClass(location.pathname.startsWith("/city") || location.pathname === "/cities")}`}
            >
              Cities <ChevronDown className={`w-3 h-3 transition-transform ${citiesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {citiesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-20 mt-2 bg-card border border-border rounded-lg shadow-rose overflow-hidden"
                  style={{ width: "520px" }}
                >
                  <div className="p-4">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Top 20 Cities</h3>
                    <div className="grid grid-cols-4 gap-1">
                      {top20Cities.map((city) => (
                        <Link
                          key={city.id}
                          to={`/city/${city.id}`}
                          className="flex items-center gap-1.5 px-2.5 py-2 rounded-md text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                        >
                          <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="truncate">{city.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-border mt-3 pt-3">
                      <Link to="/cities" className="text-sm text-primary hover:underline font-medium">
                        View all {cities.length} cities →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/companions" className={navLinkClass(location.pathname === "/companions")}>Companions</Link>
          <Link to="/safety" className={navLinkClass(location.pathname === "/safety")}>Safety</Link>
          <Link to="/contact" className={navLinkClass(location.pathname === "/contact")}>Contact</Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/safety">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Shield className="w-4 h-4 mr-1" /> 18+
            </Button>
          </Link>
          <Link to="/add-profile">
            <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Plus className="w-4 h-4 mr-1" /> Add Profile
            </Button>
          </Link>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm py-2 text-foreground">Home</Link>

              {/* Categories accordion */}
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex items-center justify-between text-sm py-2 text-foreground"
              >
                Categories <ChevronDown className={`w-4 h-4 transition-transform ${categoriesOpen ? "rotate-180" : ""}`} />
              </button>
              {categoriesOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm py-1.5 text-muted-foreground hover:text-primary"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Cities accordion */}
              <button
                onClick={() => setCitiesOpen(!citiesOpen)}
                className="flex items-center justify-between text-sm py-2 text-foreground"
              >
                Cities <ChevronDown className={`w-4 h-4 transition-transform ${citiesOpen ? "rotate-180" : ""}`} />
              </button>
              {citiesOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {top20Cities.map((city) => (
                    <Link
                      key={city.id}
                      to={`/city/${city.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm py-1.5 text-muted-foreground hover:text-primary"
                    >
                      {city.name}
                    </Link>
                  ))}
                  <Link to="/cities" onClick={() => setMobileOpen(false)} className="block text-sm py-1.5 text-primary font-medium">
                    View all cities →
                  </Link>
                </div>
              )}

              <Link to="/companions" onClick={() => setMobileOpen(false)} className="text-sm py-2 text-foreground">Companions</Link>
              <Link to="/safety" onClick={() => setMobileOpen(false)} className="text-sm py-2 text-foreground">Safety</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-sm py-2 text-foreground">Contact</Link>
              <Button size="sm" className="bg-primary text-primary-foreground mt-2">Book Now</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
