import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MoreHorizontal, CheckCircle, XCircle, Eye, MapPin } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const mockProfiles = [
  { id: 1, name: "Priya S.", city: "Mumbai", category: "Independent Girl", status: "active", views: 1240, price: 300, user: "Rahul S.", date: "Mar 5, 2026" },
  { id: 2, name: "Anita R.", city: "Delhi", category: "Escort", status: "pending", views: 0, price: 250, user: "Amit K.", date: "Mar 6, 2026" },
  { id: 3, name: "Meera K.", city: "Bangalore", category: "Hotel Companion", status: "pending", views: 0, price: 400, user: "Vikram P.", date: "Mar 7, 2026" },
  { id: 4, name: "Kavya P.", city: "Hyderabad", category: "Independent Girl", status: "active", views: 890, price: 350, user: "Suresh R.", date: "Mar 4, 2026" },
  { id: 5, name: "Riya M.", city: "Chennai", category: "Hookup Women", status: "rejected", views: 0, price: 200, user: "Deepak S.", date: "Mar 3, 2026" },
  { id: 6, name: "Sonia D.", city: "Pune", category: "Divorce Women", status: "active", views: 567, price: 280, user: "Manish G.", date: "Mar 2, 2026" },
  { id: 7, name: "Neha T.", city: "Jaipur", category: "Escort", status: "active", views: 2100, price: 500, user: "Rahul S.", date: "Mar 1, 2026" },
  { id: 8, name: "Divya L.", city: "Kolkata", category: "Hotel Companion", status: "pending", views: 0, price: 320, user: "Amit K.", date: "Mar 8, 2026" },
];

const AdminProfiles = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = mockProfiles.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.city.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const pendingCount = mockProfiles.filter((p) => p.status === "pending").length;

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Profiles</h1>
          <p className="text-sm text-muted-foreground">Manage companion profiles</p>
        </div>
        {pendingCount > 0 && (
          <Badge variant="secondary" className="text-sm">
            {pendingCount} pending review
          </Badge>
        )}
      </div>

      <Card className="border-border">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <CardTitle className="text-base font-display">All Profiles ({mockProfiles.length})</CardTitle>
            <div className="flex gap-2">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search profiles..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-8 h-9" />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-28 h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Name</TableHead>
                <TableHead className="text-xs hidden sm:table-cell">City</TableHead>
                <TableHead className="text-xs hidden md:table-cell">Category</TableHead>
                <TableHead className="text-xs">Status</TableHead>
                <TableHead className="text-xs hidden lg:table-cell">Views</TableHead>
                <TableHead className="text-xs hidden md:table-cell">Price</TableHead>
                <TableHead className="text-xs hidden lg:table-cell">Owner</TableHead>
                <TableHead className="text-xs text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium text-sm">{p.name}</TableCell>
                  <TableCell className="text-sm text-muted-foreground hidden sm:table-cell">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{p.city}</span>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground hidden md:table-cell">{p.category}</TableCell>
                  <TableCell>
                    <Badge
                      variant={p.status === "active" ? "default" : p.status === "pending" ? "secondary" : "destructive"}
                      className="text-xs"
                    >
                      {p.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground hidden lg:table-cell">{p.views.toLocaleString()}</TableCell>
                  <TableCell className="text-sm text-primary font-medium hidden md:table-cell">₹{p.price}/hr</TableCell>
                  <TableCell className="text-xs text-muted-foreground hidden lg:table-cell">{p.user}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem><Eye className="w-3.5 h-3.5 mr-2" /> View</DropdownMenuItem>
                        {p.status === "pending" && (
                          <>
                            <DropdownMenuItem onClick={() => toast.success(`${p.name} approved`)}>
                              <CheckCircle className="w-3.5 h-3.5 mr-2 text-emerald-600" /> Approve
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => toast.error(`${p.name} rejected`)} className="text-destructive">
                              <XCircle className="w-3.5 h-3.5 mr-2" /> Reject
                            </DropdownMenuItem>
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminProfiles;
