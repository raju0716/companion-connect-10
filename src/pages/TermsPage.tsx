import { motion } from "framer-motion";
import { FileText, AlertTriangle, ShieldAlert } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const TermsPage = () => (
  <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground">Terms & Conditions</h1>
            <p className="text-muted-foreground text-sm">Last updated: March 8, 2026</p>
          </div>
        </div>

        {/* Critical Disclaimer Banner */}
        <Card className="mb-6 border-destructive/40 bg-destructive/5">
          <CardContent className="p-4 md:p-6">
            <div className="flex gap-3 mb-3">
              <ShieldAlert className="w-6 h-6 text-destructive flex-shrink-0" />
              <h3 className="font-display text-lg font-bold text-destructive">Critical Liability Disclaimer</h3>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-3">
              By using ÉLITE, you acknowledge and agree that <strong>this company, its owners, directors, employees, and affiliates are NOT responsible or liable</strong> for any of the following activities or consequences arising from your use of this platform or interactions with other users:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-foreground">
              <li><strong>Violence & Physical Harm:</strong> Any form of violence, assault, physical harm, or threats between users.</li>
              <li><strong>Fraud & Scams:</strong> Any financial fraud, cheating, scams, money theft, or deceptive activities.</li>
              <li><strong>Illegal Activities:</strong> Any illegal activities including but not limited to drug use, trafficking, theft, blackmail, or extortion.</li>
              <li><strong>Sexual Harassment:</strong> Any sexual harassment, molestation, non-consensual acts, or abuse of any kind.</li>
              <li><strong>Mental & Emotional Harm:</strong> Any mental distress, emotional abuse, manipulation, stalking, or psychological harassment.</li>
              <li><strong>Video & Photo Leaks:</strong> Any unauthorized recording, photography, or distribution of private/intimate content, videos, or images.</li>
              <li><strong>Sexual Activities:</strong> Any sexual encounters, activities, or related consequences. All interactions between users are consensual and at their own risk.</li>
              <li><strong>Legal Cases & Disputes:</strong> Any court cases, police complaints, legal disputes, or criminal charges arising from user interactions.</li>
              <li><strong>Health Consequences:</strong> Any sexually transmitted diseases (STDs), infections, pregnancy, or health-related issues.</li>
              <li><strong>Property Damage:</strong> Any theft, loss, or damage to personal property during meetings.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              By accessing or using ÉLITE, you confirm that you are <strong className="text-foreground">at least 18 years of age</strong> and agree to be bound by these Terms & Conditions. If you do not agree to these terms, you must immediately stop using our platform.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">2. Nature of Service</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ÉLITE is strictly a <strong className="text-foreground">connection and companionship platform</strong>. We provide a space where adults can connect with other adults for social companionship purposes. We do NOT promote, encourage, or facilitate any illegal activities. What happens between consenting adults is entirely their own responsibility.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">3. User Responsibility</h2>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <p className="text-sm text-foreground leading-relaxed mb-3">
                  <strong>YOU are solely responsible for:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Your own actions, behavior, and decisions when using this platform</li>
                  <li>Verifying the identity and intentions of anyone you choose to meet</li>
                  <li>Your personal safety during any meetings or interactions</li>
                  <li>Any consequences — legal, physical, emotional, or financial — arising from your interactions</li>
                  <li>Ensuring all your activities comply with local, state, and national laws</li>
                  <li>Any content (photos, videos, messages) you share with other users</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">4. Prohibited Activities</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">Users must NOT:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
              <li>Use the platform for any illegal purposes or activities</li>
              <li>Upload fake profiles, stolen photos, or impersonate others</li>
              <li>Harass, threaten, stalk, or abuse other users</li>
              <li>Record, photograph, or distribute private content without explicit consent</li>
              <li>Engage in blackmail, extortion, or financial fraud</li>
              <li>Involve minors in any way (strictly 18+ only)</li>
              <li>Use the platform for human trafficking or exploitation</li>
              <li>Violate any applicable local, state, national, or international law</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">5. No Guarantee of Safety</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              While we encourage all users to follow our safety guidelines, <strong className="text-foreground">ÉLITE cannot and does not guarantee the safety of any meeting or interaction</strong> between users. We strongly recommend meeting in public places, informing a trusted person of your plans, and trusting your instincts.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">6. Content & Media Disclaimer</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Any photos, videos, voice notes, or messages exchanged between users are done so at their own risk. <strong className="text-foreground">ÉLITE is NOT responsible for any leaked, shared, or distributed private content.</strong> Users who leak intimate content without consent may face criminal prosecution under applicable cyber crime and privacy laws. We cooperate with law enforcement when legally required.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">7. Limitation of Liability</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To the maximum extent permitted by law, ÉLITE and its operators shall NOT be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this platform or any interactions with other users. This includes but is not limited to physical harm, emotional distress, financial loss, legal consequences, health issues, or any other damages.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">8. Indemnification</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You agree to indemnify and hold harmless ÉLITE, its owners, employees, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from your use of the platform, violation of these terms, or any disputes with other users.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">9. Account Termination</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We reserve the right to suspend or terminate any user account at our sole discretion, without prior notice, for violations of these terms or any behavior we deem harmful, fraudulent, or inappropriate.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">10. Dispute Resolution</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Any disputes arising from the use of this platform shall be resolved through arbitration in accordance with applicable laws. Users waive the right to participate in class-action lawsuits against ÉLITE.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">11. Changes to Terms</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We may update these Terms & Conditions at any time. Continued use of the platform after changes constitutes your acceptance of the updated terms.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">12. Contact</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              For questions about these terms, contact us at: <strong className="text-primary">legal@elite.com</strong>
            </p>
          </section>

          <Card className="border-destructive/30 bg-destructive/5 mt-8">
            <CardContent className="p-4 md:p-6 flex gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Final Notice:</strong> By continuing to use ÉLITE, you confirm that you have read, understood, and agreed to all terms above. You accept that ÉLITE is a platform only and bears NO responsibility for any actions, consequences, or disputes arising between users. <strong>You and the person you contact (or who contacts you) are solely responsible for all outcomes.</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  </div>
);

export default TermsPage;
