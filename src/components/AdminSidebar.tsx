import { LayoutDashboard, Users, UserCheck, MapPin, Tag, CreditCard, Settings, Shield, BarChart3, MessageSquare, ChevronLeft } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation, Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const mainItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Users", url: "/admin/users", icon: Users },
  { title: "Profiles", url: "/admin/profiles", icon: UserCheck },
  { title: "Bookings", url: "/admin/bookings", icon: CreditCard },
];

const contentItems = [
  { title: "Cities", url: "/admin/cities", icon: MapPin },
  { title: "Categories", url: "/admin/categories", icon: Tag },
  { title: "Reports", url: "/admin/reports", icon: BarChart3 },
  { title: "Messages", url: "/admin/messages", icon: MessageSquare },
];

const systemItems = [
  { title: "Subscriptions", url: "/admin/subscriptions", icon: CreditCard },
  { title: "Moderation", url: "/admin/moderation", icon: Shield },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const renderGroup = (label: string, items: typeof mainItems) => (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.url}
                  end
                  className="hover:bg-accent/50"
                  activeClassName="bg-accent text-primary font-medium"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {!collapsed && <span>{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4 pb-2">
          {!collapsed ? (
            <Link to="/admin" className="text-gradient-rose font-display text-lg font-bold tracking-wide">
              ÉLITE <span className="text-xs text-muted-foreground font-body font-normal ml-1">Admin</span>
            </Link>
          ) : (
            <Link to="/admin" className="text-gradient-rose font-display text-lg font-bold">É</Link>
          )}
        </div>
        {renderGroup("Main", mainItems)}
        {renderGroup("Content", contentItems)}
        {renderGroup("System", systemItems)}
      </SidebarContent>
      <SidebarFooter>
        {!collapsed && (
          <div className="p-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground text-xs">
                <ChevronLeft className="w-3.5 h-3.5 mr-1.5" /> Back to Site
              </Button>
            </Link>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
