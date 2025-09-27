import { Home, FileText, Users, Map, Skull, GamepadIcon, Info } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import rpgLogo from "@/assets/CapaJogo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Contratos", url: "/contratos", icon: FileText },
  { title: "Personagens", url: "/personagens", icon: Users },
  { title: "Histórias", url: "/historias", icon: FileText },
  { title: "Mapas", url: "/mapas", icon: Map },
  { title: "Monstros", url: "/monstros", icon: Skull },
  { title: "Jogadores", url: "/jogadores", icon: GamepadIcon },
  { title: "Sobre Nós", url: "/sobre", icon: Info },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      <SidebarContent>
        {/* Logo Section */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center space-x-3">
            <img 
              src={rpgLogo} 
              alt="Hellbound RPG" 
              className="w-8 h-8 rounded-full shadow-lg flex-shrink-0"
            />
            {!isCollapsed && (
              <div className="min-w-0 flex-1">
                <h1 className="text-sm font-bold text-sidebar-foreground truncate">
                  Hellbound
                </h1>
                <p className="text-xs text-sidebar-foreground/70 truncate">
                  RPG Wiki
                </p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={isActive(item.url)}
                    className="w-full"
                  >
                    <NavLink to={item.url}>
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}