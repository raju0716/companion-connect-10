import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MoreHorizontal, Mail, Ban, Eye } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const mockUsers = [
  { id: 1, name: "Rahul Sharma", email: "rahul@email.com", phone: "+91 98765 43210", plan: "Gold", profiles: 3, status: "active", joined: "Mar 1, 2026" },
  { id: 2, name: "Amit Kumar", email: "amit@email.com", phone: "+91 87654 32109", plan: "Silver", profiles: 1, status: "active", joined: "Feb 28, 2026" },
  { id: 3, name: "Vikram Patel", email: "vikram@email.com", phone: "+91 76543 21098", plan: "Free", profiles: 1, status: "active", joined: "Feb 25, 2026" },
  { id: 4, name: "Suresh Reddy", email: "suresh@email.com", phone: "+91 65432 10987", plan: "Diamond", profiles: 8, status: "active", joined: "Feb 20, 2026" },
  { id: 5, name: "Deepak Singh", email: "deepak@email.com", phone: "+91 54321 09876", plan: "Gold", profiles: 2, status: "suspended", joined: "Feb 15, 2026" },
  { id: 6, name: "Manish Gupta", email: "manish@email.com", phone: "+91 43210 98765", plan: "Silver", profiles: 1, status: "active", joined: "Feb 10, 2026" },
];

const AdminUsers = () => {
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState("all");

  const filtered = mockUsers.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchPlan = planFilter === "all" || u.plan.toLowerCase() === planFilter;
    return matchSearch && matchPlan;
  });

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Users</h1>
        <p className="text-sm text-muted-foreground">Manage registered users</p>
      </div>

      <Card className="border-border">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <CardTitle className="text-base font-display">All Users ({mockUsers.length})</CardTitle>
            <div className="flex gap-2">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 h-9"
                />
              </div>
              <Select value={planFilter} onValueChange={setPlanFilter}>
                <SelectTrigger className="w-28 h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Plans</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="silver">Silver</SelectItem>
                  <SelectItem value="gold">Gold</SelectItem>
                  <SelectItem value="diamond">Diamond</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">User</TableHead>
                <TableHead className="text-xs hidden md:table-cell">Phone</TableHead>
                <TableHead className="text-xs">Plan</TableHead>
                <TableHead className="text-xs hidden sm:table-cell">Profiles</TableHead>
                <TableHead className="text-xs">Status</TableHead>
                <TableHead className="text-xs hidden lg:table-cell">Joined</TableHead>
                <TableHead className="text-xs text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((u) => (
                <TableRow key={u.id}>
                  <TableCell>
                    <p className="text-sm font-medium text-foreground">{u.name}</p>
                    <p className="text-xs text-muted-foreground">{u.email}</p>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground hidden md:table-cell">{u.phone}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{u.plan}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground hidden sm:table-cell">{u.profiles}</TableCell>
                  <TableCell>
                    <Badge variant={u.status === "active" ? "default" : "destructive"} className="text-xs">
                      {u.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground hidden lg:table-cell">{u.joined}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem><Eye className="w-3.5 h-3.5 mr-2" /> View Details</DropdownMenuItem>
                        <DropdownMenuItem><Mail className="w-3.5 h-3.5 mr-2" /> Send Email</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive"><Ban className="w-3.5 h-3.5 mr-2" /> Suspend</DropdownMenuItem>
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

export default AdminUsers;
