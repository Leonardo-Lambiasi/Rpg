import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import rpgLogo from "@/assets/guildapronta_upscaled.jpg";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Contratos", path: "/contratos" },
    { name: "Personagens", path: "/personagens" },
    { name: "Mapas", path: "/mapas" },
    { name: "Monstros", path: "/monstros" },
    { name: "Jogadores", path: "/jogadores" },
    { name: "Sobre Nós", path: "/sobre" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <img 
            src={rpgLogo} 
            alt="Hellbound RPG" 
            className="w-12 h-12 rounded-full shadow-lg"
          />
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">
              Hellbound RPG Wiki
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;