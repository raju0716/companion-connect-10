import { useState } from "react";
import { Link, useNavigate } from "@/lib/router-compat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const LoginPage = () => {
  const { toast } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailForm, setEmailForm] = useState({ email: "", password: "" });
  const [phoneForm, setPhoneForm] = useState({ phone: "", otp: "" });
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name: emailForm.email.split("@")[0] ?? emailForm.email, email: emailForm.email, phone: "", joinedDate: "March 2026" });
    toast({ title: "Login Successful", description: "Welcome back!" });
    navigate("/profile");
  };

  const handleSendOtp = () => {
    if (!phoneForm.phone) return;
    setOtpSent(true);
    toast({ title: "OTP Sent", description: `Verification code sent to ${phoneForm.phone}` });
  };

  const handlePhoneLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name: "User", email: "", phone: phoneForm.phone, joinedDate: "March 2026" });
    toast({ title: "Login Successful", description: "Welcome back!" });
    navigate("/profile");
  };

  const handleGoogleLogin = () => {
    login({ name: "Google User", email: "user@gmail.com", phone: "", joinedDate: "March 2026" });
    toast({ title: "Google Sign-In", description: "Welcome!" });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 pt-20 pb-10">
      <Card className="w-full max-w-md border-border shadow-lg">
        <CardHeader className="text-center space-y-1">
          <Link to="/" className="text-gradient-rose font-display text-2xl font-bold tracking-wide inline-block">
            ÉLITE
          </Link>
          <CardTitle className="text-xl font-display">Welcome Back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Google Sign-In */}
          <Button
            variant="outline"
            className="w-full mb-4 border-border hover:bg-accent"
            onClick={handleGoogleLogin}
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </Button>

          <div className="relative mb-4">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground">
              or
            </span>
          </div>

          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email" className="text-xs sm:text-sm">
                <Mail className="w-3.5 h-3.5 mr-1.5" /> Email
              </TabsTrigger>
              <TabsTrigger value="phone" className="text-xs sm:text-sm">
                <Phone className="w-3.5 h-3.5 mr-1.5" /> Phone
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <form onSubmit={handleEmailLogin} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    value={emailForm.email}
                    onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="login-password">Password</Label>
                    <button type="button" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={emailForm.password}
                      onChange={(e) => setEmailForm({ ...emailForm, password: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="w-full">Sign In</Button>
              </form>
            </TabsContent>

            <TabsContent value="phone">
              <form onSubmit={handlePhoneLogin} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="login-phone">Phone Number</Label>
                  <div className="flex gap-2">
                    <Input
                      id="login-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phoneForm.phone}
                      onChange={(e) => setPhoneForm({ ...phoneForm, phone: e.target.value })}
                      required
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleSendOtp}
                      disabled={!phoneForm.phone}
                      className="shrink-0"
                    >
                      {otpSent ? "Resend" : "Send OTP"}
                    </Button>
                  </div>
                </div>
                {otpSent && (
                  <div className="space-y-2">
                    <Label htmlFor="login-otp">Enter OTP</Label>
                    <Input
                      id="login-otp"
                      type="text"
                      placeholder="123456"
                      maxLength={6}
                      value={phoneForm.otp}
                      onChange={(e) => setPhoneForm({ ...phoneForm, otp: e.target.value })}
                      required
                    />
                  </div>
                )}
                <Button type="submit" className="w-full" disabled={!otpSent}>
                  Verify & Sign In
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
