import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const EXCLUDED_PATHS = ["/login", "/register", "/profile"];

const AgeConfirmationDialog = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const confirmed = sessionStorage.getItem("age_confirmed");
    if (confirmed || isLoggedIn || EXCLUDED_PATHS.includes(location.pathname)) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoggedIn, location.pathname]);

  const handleConfirm = () => {
    sessionStorage.setItem("age_confirmed", "true");
    setOpen(false);
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  if (isLoggedIn || EXCLUDED_PATHS.includes(location.pathname)) return null;

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        className="sm:max-w-md border-primary/20 bg-card"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="items-center text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Shield className="h-7 w-7 text-primary" />
          </div>
          <DialogTitle className="text-xl font-display">Age Verification Required</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            This website contains content intended for adults aged 18 and above. By entering, you confirm that you are at least 18 years old.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          <Button onClick={handleConfirm} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            I am 18 or older — Enter
          </Button>
          <Button onClick={handleDeny} variant="outline" className="w-full text-muted-foreground">
            I am under 18 — Leave
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeConfirmationDialog;
