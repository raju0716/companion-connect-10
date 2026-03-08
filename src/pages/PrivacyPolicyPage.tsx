import { motion } from "framer-motion";
import { Shield, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm">Last updated: March 8, 2026</p>
          </div>
        </div>

        <Card className="mb-6 border-destructive/30 bg-destructive/5">
          <CardContent className="p-4 md:p-6 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">
              <strong>Important Disclaimer:</strong> ÉLITE is a platform that connects individuals. We are NOT responsible for any actions, behavior, or outcomes that occur between users. By using this platform, you accept full responsibility for your own actions and interactions.
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">We may collect the following personal information when you use our platform:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
              <li>Name, email address, phone number</li>
              <li>Profile photos and biographical information</li>
              <li>Location data and city preferences</li>
              <li>Booking history and communication logs</li>
              <li>Device information, IP address, and browser type</li>
              <li>Payment and transaction details</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
              <li>To provide and maintain our services</li>
              <li>To process bookings and facilitate connections</li>
              <li>To verify user identity and age (18+ only)</li>
              <li>To improve and personalize user experience</li>
              <li>To communicate service updates and promotions</li>
              <li>To comply with legal obligations when required</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">3. Data Sharing & Third Parties</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We do not sell your personal data. We may share limited information with payment processors, hosting providers, and law enforcement agencies when legally required. Any data shared with third parties is strictly for the purpose of providing our services.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">4. Data Security</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We implement industry-standard security measures to protect your data. However, no method of electronic transmission or storage is 100% secure. You acknowledge that you provide your personal information at your own risk.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">5. Cookies & Tracking</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We use cookies and similar tracking technologies to enhance your browsing experience. You can choose to disable cookies in your browser settings, but this may affect the functionality of our platform.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">6. User Rights</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
              <li>Right to access, correct, or delete your personal data</li>
              <li>Right to withdraw consent at any time</li>
              <li>Right to request data portability</li>
              <li>Right to lodge complaints with data protection authorities</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">7. Video, Photo & Content Privacy</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Any private photos, videos, or intimate content shared between users is solely the responsibility of the parties involved. <strong className="text-foreground">ÉLITE is NOT responsible for any leaking, sharing, distribution, or misuse of private photos, videos, or recordings</strong> made by or between users. Recording or distributing intimate content without consent is a criminal offense under applicable laws.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">8. Contact Us</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              For privacy-related inquiries, contact us at: <strong className="text-primary">privacy@elite.com</strong>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  </div>
);

export default PrivacyPolicyPage;
