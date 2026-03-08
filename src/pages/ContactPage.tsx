import { useState } from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Get in <span className="text-gradient-gold">Touch</span>
        </h1>
        <p className="text-muted-foreground mb-10">We're available 24/7 for your inquiries</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 000-0000" },
              { icon: Mail, label: "Email", value: "contact@elite.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-card border-border resize-none"
            />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
