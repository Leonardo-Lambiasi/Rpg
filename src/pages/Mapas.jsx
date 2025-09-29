import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/PageHeader";
import { Map, MapPin, Compass, Mountain, Trees, Castle } from "lucide-react";

const Mapas = () => {
  const mapas = [
    {
      id: 1,
      nome: "Reino de Valdris",
      tipo: "Reino Principal",
      dificuldade: "Iniciante",
      descricao: "Terra natal dos heróis, com cidades prósperas e campos verdejantes.",
      localizacoes: ["Capital Valdris", "Porto Dourado", "Vila Esperança"],
      icone: Castle,
      status: "Explorado"
    },
    {
      id: 2,
      nome: "Floresta Sombria",
      tipo: "Dungeon Natural",
      dificuldade: "Intermediário",
      descricao: "Floresta ancestral habitada por criaturas místicas e segredos antigos.",
      localizacoes: ["Clareira dos Sussurros", "Lago Espelhado", "Árvore Ancestral"],
      icone: Trees,
      status: "Parcialmente Explorado"
    },
    {
      id: 3,
      nome: "Montanhas Gélidas",
      tipo: "Região Hostil",
      dificuldade: "Avançado",
      descricao: "Picos nevados onde dragões antigos fazem seus ninhos.",
      localizacoes: ["Pico do Dragão", "Cavernas de Gelo", "Fortaleza Abandonada"],
      icone: Mountain,
      status: "Inexplorado"
    },
    {
      id: 4,
      nome: "Deserto dos Ventos",
      tipo: "Terra Desolada",
      dificuldade: "Avançado",
      descricao: "Vastidão árida com ruínas de civilizações perdidas.",
      localizacoes: ["Oásis Miragem", "Pirâmide Perdida", "Cidade Soterrada"],
      icone: Compass,
      status: "Lendário"
    }
  ];

  const getDifficultyColor = (dificuldade) => {
    switch (dificuldade) {
      case "Iniciante": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Intermediário": return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      case "Avançado": return "bg-red-500/20 text-red-300 border-red-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Explorado": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Parcialmente Explorado": return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      case "Inexplorado": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Lendário": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Mapas do Reino" 
        description="Explore territórios conhecidos e descubra novos horizontes"
      >
        <Button variant="rpgPrimary">
          <MapPin className="w-4 h-4 mr-2" />
          Nova Exploração
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mapas.map((mapa) => (
          <Card key={mapa.id} className="bg-card/50 border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <mapa.icone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {mapa.nome}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{mapa.tipo}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge className={getDifficultyColor(mapa.dificuldade)}>
                    {mapa.dificuldade}
                  </Badge>
                  <Badge className={getStatusColor(mapa.status)}>
                    {mapa.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {mapa.descricao}
              </p>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Localizações Conhecidas:</h4>
                <div className="flex flex-wrap gap-1">
                  {mapa.localizacoes.map((local, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {local}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button variant="rpgAccent" size="sm" className="flex-1">
                  <Map className="w-4 h-4 mr-2" />
                  Ver Mapa
                </Button>
                <Button variant="outline" size="sm">
                  Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Mapas;