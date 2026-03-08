import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, User, MapPin, Clock, MoreHorizontal, Eye, XCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const mockBookings = [
  { id: 1, client: "Client A", companion: "Priya S.", city: "Mumbai", date: "Mar 10, 2026", time: "7:00 PM", duration: "3 hrs", amount: "₹900", status: "confirmed" },
  { id: 2, client: "Client B", companion: "Neha T.", city: "Jaipur", date: "Mar 11, 2026", time: "8:00 PM", duration: "2 hrs", amount: "₹1,000", status: "pending" },
  { id: 3, client: "Client C", companion: "Kavya P.", city: "Hyderabad", date: "Mar 9, 2026", time: "6:00 PM", duration: "4 hrs", amount: "₹1,400", status: "completed" },
  { id: 4, client: "Client D", companion: "Sonia D.", city: "Pune", date: "Mar 8, 2026", time: "9:00 PM", duration: "2 hrs", amount: "₹560", status: "cancelled" },
  { id: 5, client: "Client E", companion: "Anita R.", city: "Delhi", date: "Mar 12, 2026", time: "5:00 PM", duration: "3 hrs", amount: "₹750", status: "pending" },
];

const AdminBookings = () => {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Bookings</h1>
        <p className="text-sm text-muted-foreground">Manage all bookings</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total", value: "5", color: "text-foreground" },
          { label: "Pending", value: "2", color: "text-yellow-600" },
          { label: "Confirmed", value: "1", color: "text-emerald-600" },
          { label: "Revenue", value: "₹4,610", color: "text-primary" },
        ].map((s) => (
          <Card key={s.label} className="border-border">
            <CardContent className="p-4 text-center">
              <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-display">All Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Client</TableHead>
                <TableHead className="text-xs">Companion</TableHead>
                <TableHead className="text-xs hidden sm:table-cell">City</TableHead>
                <TableHead className="text-xs hidden md:table-cell">Date & Time</TableHead>
                <TableHead className="text-xs hidden lg:table-cell">Duration</TableHead>
                <TableHead className="text-xs">Amount</TableHead>
                <TableHead className="text-xs">Status</TableHead>
                <TableHead className="text-xs text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockBookings.map((b) => (
                <TableRow key={b.id}>
                  <TableCell className="text-sm font-medium">{b.client}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{b.companion}</TableCell>
                  <TableCell className="text-sm text-muted-foreground hidden sm:table-cell">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{b.city}</span>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground hidden md:table-cell">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{b.date}</span>
                    <span className="flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" />{b.time}</span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground hidden lg:table-cell">{b.duration}</TableCell>
                  <TableCell className="text-sm font-medium text-primary">{b.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        b.status === "confirmed" ? "default" :
                        b.status === "pending" ? "secondary" :
                        b.status === "completed" ? "outline" : "destructive"
                      }
                      className="text-xs"
                    >
                      {b.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem><Eye className="w-3.5 h-3.5 mr-2" /> View Details</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive"><XCircle className="w-3.5 h-3.5 mr-2" /> Cancel</DropdownMenuItem>
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

export default AdminBookings;
