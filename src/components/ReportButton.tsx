import { useState } from "react";
import { Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const REASONS = [
  "Fake profile",
  "Inappropriate content",
  "Spam or scam",
  "Harassment",
  "Other",
];

interface ReportButtonProps {
  targetType: "profile" | "hotel" | "listing";
  targetId: string | number;
  targetName?: string;
}

const ReportButton = ({ targetType, targetId, targetName }: ReportButtonProps) => {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!reason) {
      toast.error("Please select a reason");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      console.log("Report submitted:", { targetType, targetId, reason, details });
      toast.success("Report submitted. We'll review it shortly.");
      setOpen(false);
      setReason("");
      setDetails("");
      setSubmitting(false);
    }, 800);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="text-muted-foreground hover:text-destructive gap-1.5"
        onClick={() => setOpen(true)}
      >
        <Flag className="w-4 h-4" />
        Report
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md border-border bg-card">
          <DialogHeader>
            <DialogTitle className="font-display">Report {targetName || "this " + targetType}</DialogTitle>
            <DialogDescription>
              Help us keep the community safe. Select a reason for your report.
            </DialogDescription>
          </DialogHeader>

          <RadioGroup value={reason} onValueChange={setReason} className="gap-2.5 my-2">
            {REASONS.map((r) => (
              <div key={r} className="flex items-center gap-2.5">
                <RadioGroupItem value={r} id={`reason-${r}`} />
                <Label htmlFor={`reason-${r}`} className="text-sm cursor-pointer">{r}</Label>
              </div>
            ))}
          </RadioGroup>

          <Textarea
            placeholder="Additional details (optional)"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="resize-none"
            rows={3}
          />

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {submitting ? "Submitting..." : "Submit Report"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReportButton;
