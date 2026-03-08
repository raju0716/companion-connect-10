import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Shield, ChevronDown, MapPin, Heart, Plus, LogIn, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { cities, categories } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";

const top20Cities = cities.slice(0, 20);

const Navbar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const citiesRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    setCitiesOpen(false);
    setCategoriesOpen(false);
    setSheetOpen(false);
  }, [location.pathname]);

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
      <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="text-gradient-rose font-display text-xl md:text-2xl font-bold tracking-wide">
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
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] bg-card/95 backdrop-blur-xl border border-primary/15 rounded-xl shadow-rose glow-rose overflow-hidden"
                >
                  <div className="p-2">
                    <div className="px-3 py-2 mb-1">
                      <h3 className="text-xs font-semibold text-primary uppercase tracking-widest">Browse Categories</h3>
                    </div>
                    {categories.map((cat, i) => (
                      <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          to={`/category/${cat.id}`}
                          className="group flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/8 transition-all duration-200"
                        >
                          <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <Heart className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{cat.name}</p>
                            <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{cat.description}</p>
                          </div>
                          <span className="text-[11px] font-medium text-primary/60 bg-primary/8 px-2 py-0.5 rounded-full mt-1 flex-shrink-0">{cat.count}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
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
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute top-full -left-40 mt-3 bg-card/95 backdrop-blur-xl border border-primary/15 rounded-xl shadow-rose glow-rose overflow-hidden"
                  style={{ width: "560px" }}
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xs font-semibold text-primary uppercase tracking-widest">Top 20 Cities</h3>
                      <Link to="/cities" className="text-xs text-primary hover:underline font-medium flex items-center gap-1">
                        View all {cities.length} <span>→</span>
                      </Link>
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                      {top20Cities.map((city, i) => (
                        <motion.div
                          key={city.id}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.02 }}
                        >
                          <Link
                            to={`/city/${city.id}`}
                            className="group flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm text-foreground hover:bg-primary/8 hover:text-primary transition-all duration-200"
                          >
                            <MapPin className="w-3 h-3 text-primary/60 group-hover:text-primary transition-colors flex-shrink-0" />
                            <span className="truncate">{city.name}</span>
                          </Link>
                        </motion.div>
                      ))}
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
          {isLoggedIn ? (
            <Link to="/profile">
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {(user?.name || "U")[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                My Profile
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                <LogIn className="w-4 h-4 mr-1" /> Login
              </Button>
            </Link>
          )}
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book Now
          </Button>
        </div>

        {/* Mobile: Sheet */}
        <div className="flex lg:hidden items-center gap-2">
          {isLoggedIn ? (
            <Link to="/profile">
              <Button size="sm" variant="ghost" className="text-primary px-2">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {(user?.name || "U")[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </Link>
          ) : null}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-foreground px-2">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Main navigation links</SheetDescription>
              <ScrollArea className="h-full">
                <div className="p-6 pt-8">
                  <Link to="/" onClick={() => setSheetOpen(false)} className="text-gradient-rose font-display text-xl font-bold tracking-wide">
                    ÉLITE
                  </Link>

                  <Separator className="my-4" />

                  <div className="flex flex-col gap-1">
                    <Link to="/" onClick={() => setSheetOpen(false)} className="text-sm py-2.5 px-3 rounded-md text-foreground hover:bg-accent transition-colors">
                      Home
                    </Link>
                    <Link to="/companions" onClick={() => setSheetOpen(false)} className="text-sm py-2.5 px-3 rounded-md text-foreground hover:bg-accent transition-colors">
                      Companions
                    </Link>

                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="categories" className="border-0">
                        <AccordionTrigger className="text-sm py-2.5 px-3 rounded-md hover:bg-accent hover:no-underline font-normal">
                          Categories
                        </AccordionTrigger>
                        <AccordionContent className="pb-1">
                          <div className="flex flex-col gap-0.5 pl-3">
                            {categories.map((cat) => (
                              <Link
                                key={cat.id}
                                to={`/category/${cat.id}`}
                                onClick={() => setSheetOpen(false)}
                                className="flex items-center justify-between text-sm py-2 px-3 rounded-md text-muted-foreground hover:bg-accent hover:text-primary transition-colors"
                              >
                                <span className="flex items-center gap-2">
                                  <Heart className="w-3.5 h-3.5 text-primary" />
                                  {cat.name}
                                </span>
                                <span className="text-xs text-muted-foreground">{cat.count}</span>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="cities" className="border-0">
                        <AccordionTrigger className="text-sm py-2.5 px-3 rounded-md hover:bg-accent hover:no-underline font-normal">
                          Cities
                        </AccordionTrigger>
                        <AccordionContent className="pb-1">
                          <div className="flex flex-col gap-0.5 pl-3">
                            {top20Cities.map((city) => (
                              <Link
                                key={city.id}
                                to={`/city/${city.id}`}
                                onClick={() => setSheetOpen(false)}
                                className="flex items-center gap-2 text-sm py-2 px-3 rounded-md text-muted-foreground hover:bg-accent hover:text-primary transition-colors"
                              >
                                <MapPin className="w-3.5 h-3.5 text-primary" />
                                {city.name}
                              </Link>
                            ))}
                            <Link
                              to="/cities"
                              onClick={() => setSheetOpen(false)}
                              className="text-sm py-2 px-3 text-primary font-medium"
                            >
                              View all {cities.length} cities →
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Link to="/safety" onClick={() => setSheetOpen(false)} className="text-sm py-2.5 px-3 rounded-md text-foreground hover:bg-accent transition-colors">
                      Safety & Guidelines
                    </Link>
                    <Link to="/contact" onClick={() => setSheetOpen(false)} className="text-sm py-2.5 px-3 rounded-md text-foreground hover:bg-accent transition-colors">
                      Contact
                    </Link>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex flex-col gap-2">
                    {isLoggedIn ? (
                      <>
                        <Link to="/profile" onClick={() => setSheetOpen(false)}>
                          <Button variant="outline" className="w-full">
                            <UserCircle className="w-4 h-4 mr-2" /> My Profile
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/login" onClick={() => setSheetOpen(false)}>
                          <Button variant="outline" className="w-full">
                            <LogIn className="w-4 h-4 mr-2" /> Login
                          </Button>
                        </Link>
                        <Link to="/register" onClick={() => setSheetOpen(false)}>
                          <Button variant="ghost" className="w-full text-muted-foreground">
                            Create Account
                          </Button>
                        </Link>
                      </>
                    )}
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Book Now
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
