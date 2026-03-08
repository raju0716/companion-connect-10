import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

const AdminPlaceholder = ({ title }: { title: string }) => (
  <div className="p-4 sm:p-6">
    <h1 className="font-display text-2xl font-bold text-foreground mb-2">{title}</h1>
    <Card className="border-border">
      <CardContent className="p-12 flex flex-col items-center justify-center text-center">
        <Construction className="w-12 h-12 text-muted-foreground mb-3" />
        <p className="text-foreground font-medium">Coming Soon</p>
        <p className="text-sm text-muted-foreground mt-1">This section is under development</p>
      </CardContent>
    </Card>
  </div>
);

export default AdminPlaceholder;
