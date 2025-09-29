import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/PageHeader";
import { Skull, Sword, Shield, Zap, Heart, Eye } from "lucide-react";

const Monstros = () => {
  const monstros = [
    {
      id: 1,
      nome: "Dragão Ancião",
      tipo: "Dragão",
      nivel: 50,
      hp: 2500,
      ataque: 180,
      defesa: 120,
      habilidades: ["Sopro Flamejante", "Voo", "Magia Ancestral"],
      habitat: "Montanhas Gélidas",
      raridade: "Lendário",
      descricao: "Dragão milenar de escamas douradas, guardião de tesouros inimagináveis."
    },
    {
      id: 2,
      nome: "Lobo Sombrio",
      tipo: "Fera",
      nivel: 15,
      hp: 450,
      ataque: 65,
      defesa: 40,
      habilidades: ["Mordida Venenosa", "Furtividade", "Uivo Aterrorizante"],
      habitat: "Floresta Sombria",
      raridade: "Comum",
      descricao: "Lobo de pelagem negra que se move nas sombras da floresta."
    },
    {
      id: 3,
      nome: "Golem de Pedra",
      tipo: "Construto",
      nivel: 25,
      hp: 800,
      ataque: 90,
      defesa: 150,
      habilidades: ["Punho Esmagador", "Resistência Mágica", "Regeneração"],
      habitat: "Ruínas Antigas",
      raridade: "Raro",
      descricao: "Guardião de pedra animado por magia antiga para proteger tesouros."
    },
    {
      id: 4,
      nome: "Esqueleto Guerreiro",
      tipo: "Morto-Vivo",
      nivel: 8,
      hp: 180,
      ataque: 45,
      defesa: 25,
      habilidades: ["Ataque Duplo", "Imunidade a Veneno", "Reformar"],
      habitat: "Cemitérios",
      raridade: "Comum",
      descricao: "Guerreiro morto há muito tempo, ainda empunha suas armas."
    },
    {
      id: 5,
      nome: "Basilisco Real",
      tipo: "Réptil Mágico",
      nivel: 35,
      hp: 1200,
      ataque: 120,
      defesa: 80,
      habilidades: ["Olhar Petrificante", "Veneno Mortal", "Escamas Resistentes"],
      habitat: "Cavernas Profundas",
      raridade: "Épico",
      descricao: "Serpente gigantesca cujo olhar transforma inimigos em pedra."
    },
    {
      id: 6,
      nome: "Orc Chefe",
      tipo: "Humanoide",
      nivel: 20,
      hp: 600,
      ataque: 85,
      defesa: 60,
      habilidades: ["Berserker", "Comando de Guerra", "Machado Duplo"],
      habitat: "Fortalezas Orcas",
      raridade: "Incomum",
      descricao: "Líder tribal orc de força descomunal e ferocidade implacável."
    }
  ];

  const getRaridadeColor = (raridade) => {
    switch (raridade) {
      case "Comum": return "bg-zinc-500/20 text-zinc-300 border-zinc-500/30";
      case "Incomum": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Raro": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Épico": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Lendário": return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getNivelColor = (nivel) => {
    if (nivel < 10) return "text-emerald-400";
    if (nivel < 25) return "text-amber-400";
    if (nivel < 40) return "text-red-400";
    return "text-purple-400";
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Bestiário" 
        description="Conheça as criaturas que habitam nosso mundo"
      >
        <Button variant="rpgPrimary">
          <Eye className="w-4 h-4 mr-2" />
          Adicionar Avistamento
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {monstros.map((monstro) => (
          <Card key={monstro.id} className="bg-card/50 border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Skull className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {monstro.nome}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{monstro.tipo}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={getRaridadeColor(monstro.raridade)}>
                    {monstro.raridade}
                  </Badge>
                  <p className={`text-sm font-bold mt-1 ${getNivelColor(monstro.nivel)}`}>
                    Nível {monstro.nivel}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {monstro.descricao}
              </p>
              
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-red-500/10 rounded-lg p-2">
                  <Heart className="w-4 h-4 mx-auto mb-1 text-red-400" />
                  <p className="text-xs text-red-400 font-semibold">{monstro.hp}</p>
                  <p className="text-xs text-muted-foreground">HP</p>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-2">
                  <Sword className="w-4 h-4 mx-auto mb-1 text-orange-400" />
                  <p className="text-xs text-orange-400 font-semibold">{monstro.ataque}</p>
                  <p className="text-xs text-muted-foreground">ATK</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-2">
                  <Shield className="w-4 h-4 mx-auto mb-1 text-blue-400" />
                  <p className="text-xs text-blue-400 font-semibold">{monstro.defesa}</p>
                  <p className="text-xs text-muted-foreground">DEF</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                  <Zap className="w-4 h-4 mr-1" />
                  Habilidades:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {monstro.habilidades.map((habilidade, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {habilidade}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="pt-2 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-2">
                  <strong>Habitat:</strong> {monstro.habitat}
                </p>
                <Button variant="rpgAccent" size="sm" className="w-full">
                  Ver Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Monstros;