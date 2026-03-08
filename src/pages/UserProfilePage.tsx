import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, Plus, Eye, Edit2, Trash2, MapPin, LogOut, Heart, Clock, CreditCard, Crown, Check, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import AddProfilePage from "./AddProfilePage";

// Mock saved profiles
const mockMyProfiles = [
  {
    id: 1,
    name: "Priya S.",
    city: "Mumbai",
    category: "Independent Girl",
    status: "active",
    views: 1240,
    price: 300,
    photo: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Anita R.",
    city: "Delhi",
    category: "Escort",
    status: "pending",
    views: 0,
    price: 250,
    photo: "/placeholder.svg",
  },
];

const UserProfilePage = () => {
  const { user, logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [editingSettings, setEditingSettings] = useState(false);
  const [settingsForm, setSettingsForm] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "john@example.com",
    phone: user?.phone || "+91 98765 43210",
  });

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleSaveSettings = () => {
    setEditingSettings(false);
    toast.success("Profile settings updated");
  };

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <Avatar className="w-16 h-16 border-2 border-primary">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className="bg-primary/10 text-primary text-xl font-display">
              {(user?.name || "U")[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {user?.name || "User"}
            </h1>
            <p className="text-muted-foreground text-sm">
              Member since {user?.joinedDate || "March 2026"}
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground hover:text-destructive">
            <LogOut className="w-4 h-4 mr-1" /> Logout
          </Button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Active Profiles", value: "1", icon: User },
            { label: "Total Views", value: "1,240", icon: Eye },
            { label: "Bookings", value: "8", icon: Heart },
            { label: "Pending", value: "1", icon: Clock },
          ].map((stat) => (
            <Card key={stat.label} className="border-border">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground leading-none">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="overview" className="text-xs sm:text-sm">
              <User className="w-3.5 h-3.5 mr-1.5" /> Overview
            </TabsTrigger>
            <TabsTrigger value="my-profiles" className="text-xs sm:text-sm">
              <Heart className="w-3.5 h-3.5 mr-1.5" /> My Profiles
            </TabsTrigger>
            <TabsTrigger value="add-profile" className="text-xs sm:text-sm">
              <Plus className="w-3.5 h-3.5 mr-1.5" /> Add Profile
            </TabsTrigger>
            <TabsTrigger value="subscription" className="text-xs sm:text-sm">
              <Crown className="w-3.5 h-3.5 mr-1.5" /> Subscription
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-xs sm:text-sm">
              <Settings className="w-3.5 h-3.5 mr-1.5" /> Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base font-display">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { text: "Profile 'Priya S.' received 45 new views", time: "2 hours ago" },
                    { text: "Booking request from a client in Mumbai", time: "5 hours ago" },
                    { text: "Profile 'Anita R.' submitted for review", time: "1 day ago" },
                    { text: "Account created successfully", time: "3 days ago" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm text-foreground">{activity.text}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base font-display">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-border"
                    onClick={() => setActiveTab("add-profile")}
                  >
                    <Plus className="w-4 h-4 mr-2 text-primary" /> Add New Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-border"
                    onClick={() => setActiveTab("my-profiles")}
                  >
                    <Eye className="w-4 h-4 mr-2 text-primary" /> View My Profiles
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-border"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="w-4 h-4 mr-2 text-primary" /> Account Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* My Profiles */}
          <TabsContent value="my-profiles" className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg font-semibold text-foreground">My Profiles</h2>
              <Button size="sm" onClick={() => setActiveTab("add-profile")} className="bg-primary text-primary-foreground">
                <Plus className="w-4 h-4 mr-1" /> Add New
              </Button>
            </div>

            {mockMyProfiles.length === 0 ? (
              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <User className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-foreground font-medium mb-1">No profiles yet</p>
                  <p className="text-muted-foreground text-sm mb-4">Create your first profile to get started</p>
                  <Button onClick={() => setActiveTab("add-profile")} className="bg-primary text-primary-foreground">
                    <Plus className="w-4 h-4 mr-1" /> Add Profile
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {mockMyProfiles.map((profile) => (
                  <Card key={profile.id} className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-border shrink-0">
                          <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-display font-semibold text-foreground">{profile.name}</h3>
                            <Badge
                              variant={profile.status === "active" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {profile.status === "active" ? "Active" : "Pending Review"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3" /> {profile.city} · {profile.category}
                          </p>
                          <div className="flex items-center gap-4 mt-1.5 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" /> {profile.views} views
                            </span>
                            <span className="text-primary font-semibold">${profile.price}/hr</span>
                          </div>
                        </div>
                        <div className="flex gap-1.5 shrink-0">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                            <Edit2 className="w-3.5 h-3.5" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Add Profile - reuses existing AddProfilePage */}
          <TabsContent value="add-profile" className="mt-6">
            <AddProfilePage embedded />
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="mt-6">
            <Card className="border-border max-w-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-display">Account Settings</CardTitle>
                  {!editingSettings && (
                    <Button variant="ghost" size="sm" onClick={() => setEditingSettings(true)}>
                      <Edit2 className="w-3.5 h-3.5 mr-1" /> Edit
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input
                    value={settingsForm.name}
                    onChange={(e) => setSettingsForm({ ...settingsForm, name: e.target.value })}
                    disabled={!editingSettings}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={settingsForm.email}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    disabled={!editingSettings}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    disabled={!editingSettings}
                  />
                </div>
                {editingSettings && (
                  <div className="flex gap-2 pt-2">
                    <Button onClick={handleSaveSettings} className="bg-primary text-primary-foreground">
                      Save Changes
                    </Button>
                    <Button variant="ghost" onClick={() => setEditingSettings(false)}>
                      Cancel
                    </Button>
                  </div>
                )}

                <Separator className="my-4" />

                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">Danger Zone</h3>
                  <Button variant="outline" size="sm" className="text-destructive border-destructive/30 hover:bg-destructive/10">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfilePage;
