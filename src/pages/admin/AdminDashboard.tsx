import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, UserCheck, Eye, DollarSign, TrendingUp, ArrowUpRight, Clock, MapPin } from "lucide-react";

const stats = [
  { label: "Total Users", value: "2,847", change: "+12%", icon: Users, trend: "up" },
  { label: "Active Profiles", value: "1,423", change: "+8%", icon: UserCheck, trend: "up" },
  { label: "Total Views", value: "89.2K", change: "+24%", icon: Eye, trend: "up" },
  { label: "Revenue", value: "₹4.2L", change: "+18%", icon: DollarSign, trend: "up" },
];

const recentProfiles = [
  { id: 1, name: "Priya S.", city: "Mumbai", category: "Independent", status: "pending", date: "2 hours ago" },
  { id: 2, name: "Anita R.", city: "Delhi", category: "Escort", status: "active", date: "5 hours ago" },
  { id: 3, name: "Meera K.", city: "Bangalore", category: "Hotel", status: "pending", date: "1 day ago" },
  { id: 4, name: "Kavya P.", city: "Hyderabad", category: "Independent", status: "active", date: "1 day ago" },
  { id: 5, name: "Riya M.", city: "Chennai", category: "Hookup", status: "rejected", date: "2 days ago" },
];

const recentUsers = [
  { id: 1, name: "Rahul S.", email: "rahul@email.com", plan: "Gold", joined: "Today" },
  { id: 2, name: "Amit K.", email: "amit@email.com", plan: "Silver", joined: "Yesterday" },
  { id: 3, name: "Vikram P.", email: "vikram@email.com", plan: "Free", joined: "2 days ago" },
  { id: 4, name: "Suresh R.", email: "suresh@email.com", plan: "Diamond", joined: "3 days ago" },
];

const topCities = [
  { name: "Mumbai", profiles: 342, views: "23.1K" },
  { name: "Delhi", profiles: 289, views: "19.8K" },
  { name: "Bangalore", profiles: 234, views: "15.2K" },
  { name: "Hyderabad", profiles: 198, views: "12.7K" },
  { name: "Chennai", profiles: 167, views: "10.3K" },
];

const AdminDashboard = () => {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Overview of your platform</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs text-emerald-600 bg-emerald-50">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> {stat.change}
                </Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent Profiles */}
        <Card className="lg:col-span-2 border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-display">Recent Profiles</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs text-primary">View All <ArrowUpRight className="w-3 h-3 ml-1" /></Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Name</TableHead>
                  <TableHead className="text-xs hidden sm:table-cell">City</TableHead>
                  <TableHead className="text-xs hidden sm:table-cell">Category</TableHead>
                  <TableHead className="text-xs">Status</TableHead>
                  <TableHead className="text-xs hidden md:table-cell">Submitted</TableHead>
                  <TableHead className="text-xs text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentProfiles.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium text-sm">{p.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground hidden sm:table-cell">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{p.city}</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground hidden sm:table-cell">{p.category}</TableCell>
                    <TableCell>
                      <Badge
                        variant={p.status === "active" ? "default" : p.status === "pending" ? "secondary" : "destructive"}
                        className="text-xs"
                      >
                        {p.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground hidden md:table-cell">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.date}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-xs h-7">
                        {p.status === "pending" ? "Review" : "View"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Top Cities */}
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-display">Top Cities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topCities.map((city, i) => (
                <div key={city.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground">{city.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{city.profiles} profiles</p>
                    <p className="text-xs text-primary font-medium">{city.views} views</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Users */}
          <Card className="border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-display">New Users</CardTitle>
                <Button variant="ghost" size="sm" className="text-xs text-primary">View All</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentUsers.map((u) => (
                <div key={u.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{u.name}</p>
                    <p className="text-xs text-muted-foreground">{u.email}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">{u.plan}</Badge>
                    <p className="text-xs text-muted-foreground mt-0.5">{u.joined}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
