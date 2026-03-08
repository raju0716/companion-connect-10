import { Shield, Lock, UserCheck, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    icon: Shield,
    title: "Age Verification",
    content: "All clients and companions must be 18 years or older. We strictly enforce age verification policies to ensure the safety of all parties.",
  },
  {
    icon: UserCheck,
    title: "Consent & Respect",
    content: "Mutual consent is mandatory for all interactions. Any form of coercion, disrespect, or violation of boundaries will result in immediate termination of service.",
  },
  {
    icon: Lock,
    title: "Privacy & Discretion",
    content: "We never share personal information with third parties. All communications are encrypted and booking data is stored securely with strict access controls.",
  },
  {
    icon: AlertTriangle,
    title: "Client Expectations",
    content: "Clients are expected to maintain hygiene, arrive on time, and treat companions with courtesy. Intoxicated or aggressive behavior is not tolerated.",
  },
];

const SafetyPage = () => (
  <div className="min-h-screen bg-background pt-24 pb-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Safety & <span className="text-gradient-gold">Guidelines</span>
      </h1>
      <p className="text-muted-foreground mb-10">Your safety and privacy are our top priorities</p>

      <div className="space-y-6">
        {sections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-lg bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{s.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default SafetyPage;
