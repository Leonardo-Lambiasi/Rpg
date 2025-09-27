import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Map, Skull, GamepadIcon, BookOpen } from "lucide-react";
import medievalBanner from "@/assets/guildapronta_upscaled.jpg";

const Index = () => {
  const themes = [
    { 
      title: "Histórias do Mundo", 
      description: "Crônicas épicas e lendas ancestrais",
      path: "/historias", 
      icon: BookOpen 
    },
    { 
      title: "Lista de Personagens", 
      description: "Heróis e aventureiros do reino",
      path: "/personagens", 
      icon: Users 
    },
    { 
      title: "Contratos", 
      description: "Missões e desafios disponíveis",
      path: "/contratos", 
      icon: FileText 
    },
    { 
      title: "Mapas", 
      description: "Territórios e regiões exploradas",
      path: "/mapas", 
      icon: Map 
    },
    { 
      title: "Monstros", 
      description: "Bestiário de criaturas perigosas",
      path: "/monstros", 
      icon: Skull 
    },
    { 
      title: "Jogadores do Rpg", 
      description: "Aventureiros ativos no reino",
      path: "/jogadores", 
      icon: GamepadIcon 
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Hellbound Rpg Wiki
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Bem-vindo ao compêndio definitivo de aventuras, heróis e lendas do reino. 
            Explore histórias épicas, conheça personagens lendários e descubra os segredos de nosso mundo.
          </p>
        </div>
        
        {/* Banner */}
        <div className="hidden lg:block">
          <img 
            src={medievalBanner} 
            alt="Banner Medieval Hellbound" 
            className="w-60 h-60 object-cover rounded-lg shadow-xl border border-border"
          />
        </div>
      </div>

      {/* Temas Section */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Temas</h2>
          <p className="text-muted-foreground">
            Escolha uma categoria para explorar o vasto conteúdo da wiki
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-3">
                  <theme.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {theme.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm text-muted-foreground mb-4">
                  {theme.description}
                </p>
                <Button className="w-full">
                  <a href={theme.path}>Explorar</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
