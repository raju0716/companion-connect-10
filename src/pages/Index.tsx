import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Clock, Eye, MapPin, MessageCircle, Heart, Sparkles, PartyPopper, Users, Star, ArrowRight, Flame, Moon, Crown, Zap, Wine, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/HeroSection";
import CompanionCard from "@/components/CompanionCard";
import { companions, cities, categories } from "@/data/mockData";

const features = [
  { icon: Eye, title: "Browse Profiles", desc: "Explore curated companion profiles with verified photos." },
  { icon: MessageCircle, title: "Connect", desc: "Reach out directly via WhatsApp or our booking system." },
  { icon: Clock, title: "Book & Enjoy", desc: "Schedule your encounter at a time and place that suits you." },
  { icon: Shield, title: "100% Discreet", desc: "Your privacy is our highest priority. Always." },
];

const serviceTypes = [
  { icon: Heart, title: "Dating Companion", desc: "Find the perfect date for dinner, events, or a romantic evening out. Our companions are elegant, charming, and great conversationalists.", color: "from-pink-500/20 to-rose-500/20", link: "/category/dating" },
  { icon: Flame, title: "Intimate Encounters", desc: "Private, passionate experiences with stunning companions. Complete discretion guaranteed for unforgettable intimate moments.", color: "from-red-500/20 to-orange-500/20", link: "/category/intimate" },
  { icon: Users, title: "Partner Swap", desc: "Explore new connections with like-minded couples. Safe, consensual, and exciting experiences for adventurous partners.", color: "from-purple-500/20 to-violet-500/20", link: "/category/couples" },
  { icon: PartyPopper, title: "Night Party Girls", desc: "The hottest party companions for clubs, VIP lounges, and private parties. They know how to make every night legendary.", color: "from-amber-500/20 to-yellow-500/20", link: "/category/party" },
  { icon: Crown, title: "VIP Escort", desc: "Premium elite companions for high-profile events, business dinners, and luxury travel. Class and sophistication guaranteed.", color: "from-emerald-500/20 to-teal-500/20", link: "/category/vip" },
  { icon: Moon, title: "Overnight Stay", desc: "Extended companionship for those who want more than just a few hours. Wake up to a beautiful morning together.", color: "from-blue-500/20 to-indigo-500/20", link: "/category/overnight" },
];

const testimonials = [
  { name: "Raj K.", city: "Mumbai", rating: 5, text: "Absolutely amazing experience. The companion was elegant, fun, and made my evening unforgettable. Highly recommend!", avatar: "R" },
  { name: "Vikram S.", city: "Delhi", rating: 5, text: "Best party companion service. Showed up on time, looked stunning, and was the life of the party. Will book again!", avatar: "V" },
  { name: "Amit P.", city: "Bangalore", rating: 5, text: "Discreet, professional, and incredibly charming. The perfect date for my corporate gala. Thank you ÉLITE!", avatar: "A" },
  { name: "Suresh M.", city: "Goa", rating: 4, text: "Had an incredible night out in Goa. My companion knew all the best spots. Great conversation and company.", avatar: "S" },
];

const whyChooseUs = [
  { icon: Shield, title: "Verified Profiles", desc: "Every companion is personally verified with ID checks and real photos." },
  { icon: Eye, title: "100% Real Photos", desc: "No catfishing. What you see is exactly what you get." },
  { icon: Clock, title: "24/7 Availability", desc: "Book anytime, day or night. Our companions are always ready." },
  { icon: Zap, title: "Instant Booking", desc: "Quick response times. Get confirmed within minutes, not hours." },
  { icon: Wine, title: "Premium Quality", desc: "Only the finest companions make it to our exclusive roster." },
  { icon: Music, title: "Any Occasion", desc: "Parties, dates, events, travel — we have the right companion for every moment." },
];

const Index = () => {
  const featured = companions.filter((c) => c.featured);
  const allCompanions = companions.slice(0, 6);
  const topCities = cities.slice(0, 12);

  return (
    <div>
      <HeroSection />

      {/* Service Types */}
      <section className="py-14 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Our Services
            </Badge>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
              What Are You <span className="text-gradient-rose">Looking For?</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto">
              From romantic dates to wild party nights — we have the perfect companion for every desire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {serviceTypes.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={service.link}>
                  <Card className="group h-full hover:border-primary/40 hover:shadow-rose transition-all duration-300 overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <CardContent className="relative p-5 md:p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companions */}
      <section className="py-14 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1">
              <Crown className="w-3.5 h-3.5 mr-1.5" /> Handpicked
            </Badge>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-2">
              Featured <span className="text-gradient-rose">Companions</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
              Our top-rated companions offering exceptional experiences
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
            {featured.map((c, i) => (
              <CompanionCard key={c.id} companion={c} index={i} />
            ))}
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Link to="/companions">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Companions <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
              How It <span className="text-gradient-rose">Works</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
              Getting started is simple — just 4 easy steps
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative mx-auto mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <f.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Night Party Banner */}
      <section className="py-14 md:py-20 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(ellipse at 30% 50%, hsl(0, 52%, 61%) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, hsl(350, 50%, 55%) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 text-center lg:text-left"
            >
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1">
                <PartyPopper className="w-3.5 h-3.5 mr-1.5" /> Hot Tonight
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Make Tonight <br /><span className="text-gradient-rose">Unforgettable</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-lg mb-6 max-w-lg">
                Book a stunning party girl for tonight's event. VIP club access, private parties, or just a wild night out — our companions bring the energy.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Flame className="w-5 h-5 mr-2" /> Book for Tonight
                </Button>
                <Link to="/companions">
                  <Button size="lg" variant="outline" className="border-primary text-primary">
                    Browse All
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 grid grid-cols-3 gap-3"
            >
              {allCompanions.slice(0, 3).map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/companion/${c.id}`}>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden border border-primary/20 shadow-rose group">
                      <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <p className="text-center text-xs md:text-sm font-medium text-foreground mt-2">{c.name}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
              Why Choose <span className="text-gradient-rose">ÉLITE</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-lg mx-auto">
              We're not just another service — we're the gold standard
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="h-full border-border hover:border-primary/30 hover:shadow-rose transition-all">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-sm md:text-base font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1">
              <Star className="w-3.5 h-3.5 mr-1.5" /> Reviews
            </Badge>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
              What Our <span className="text-gradient-rose">Clients Say</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
                    <Separator className="mb-3" />
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.city}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-14 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
              Explore <span className="text-gradient-rose">Cities</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
              Find companions in your city — we're available across India
            </p>
          </motion.div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 max-w-5xl mx-auto">
            {topCities.map((city, i) => (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <Link to={`/city/${city.id}`}>
                  <Card className="hover:border-primary/40 hover:shadow-rose transition-all text-center group">
                    <CardContent className="p-3 md:p-4">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-foreground font-semibold text-xs md:text-sm">{city.name}</h3>
                      <p className="text-muted-foreground text-[10px] md:text-xs mt-0.5">{city.count}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/cities" className="text-sm text-primary hover:underline font-medium">
              View all {cities.length} cities →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Quick Access */}
      <section className="py-14 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
              Browse by <span className="text-gradient-rose">Category</span>
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/category/${cat.id}`}>
                  <Badge
                    variant="outline"
                    className="px-5 py-2.5 text-sm font-medium border-primary/20 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 mr-1.5 text-primary" />
                    {cat.name}
                    <span className="ml-2 text-xs text-muted-foreground">({cat.count})</span>
                  </Badge>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ background: "radial-gradient(ellipse at center, hsl(0, 52%, 61%) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready for an <span className="text-gradient-rose">Unforgettable</span> Night?
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg mb-8 max-w-lg mx-auto">
              Contact us via WhatsApp for immediate assistance or browse our collection of premium companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
              </Button>
              <Link to="/companions">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto px-8">
                  Browse Companions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
