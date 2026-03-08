import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Clock, Eye, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CompanionCard from "@/components/CompanionCard";
import { companions, cities } from "@/data/mockData";

const features = [
  { icon: Eye, title: "Browse Profiles", desc: "Explore curated companion profiles with verified photos." },
  { icon: MessageCircle, title: "Connect", desc: "Reach out directly via WhatsApp or our booking system." },
  { icon: Clock, title: "Book & Enjoy", desc: "Schedule your encounter at a time and place that suits you." },
  { icon: Shield, title: "100% Discreet", desc: "Your privacy is our highest priority. Always." },
];

const Index = () => {
  const featured = companions.filter((c) => c.featured);

  return (
    <div>
      <HeroSection />

      {/* Featured Companions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Featured <span className="text-gradient-rose">Companions</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Handpicked profiles offering exceptional experiences
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featured.map((c, i) => (
              <CompanionCard key={c.id} companion={c} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/companions">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Companions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-14"
          >
            How It <span className="text-gradient-rose">Works</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
          >
            Explore <span className="text-gradient-rose">Cities</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {cities.map((city, i) => (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/city/${city.id}`}
                  className="block p-4 rounded-lg bg-card border border-border text-center hover:border-primary/40 hover:shadow-rose transition-all"
                >
                  <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                  <h3 className="font-display text-foreground font-semibold">{city.name}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{city.count} companions</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready for an <span className="text-gradient-rose">Unforgettable</span> Experience?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us via WhatsApp for immediate assistance or browse our collection of premium companions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
            </Button>
            <Link to="/companions">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Browse Companions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
