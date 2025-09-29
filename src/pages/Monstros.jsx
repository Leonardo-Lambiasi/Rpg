import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/PageHeader";
import { Skull, Zap, Eye, MapPin } from "lucide-react";

const Monstros = () => {
  const monstros = [
    {
      id: 1,
      nome: "Dragão Ancião",
      tipo: "Dragão",
      nivel: 50,
      habilidades: ["Sopro Flamejante", "Voo", "Magia Ancestral"],
      habitat: "Montanhas Gélidas",
      raridade: "Lendário",
      descricao: "Dragão milenar de escamas douradas, guardião de tesouros inimagináveis.",
      encontrado: "Avistado no Pico Gélido durante a expedição de inverno. A criatura estava guardando uma caverna cheia de relíquias antigas. O grupo teve que recuar devido ao seu poder."
    },
    {
      id: 2,
      nome: "Lobo Sombrio",
      tipo: "Fera",
      nivel: 15,
      habilidades: ["Mordida Venenosa", "Furtividade", "Uivo Aterrorizante"],
      habitat: "Floresta Sombria",
      raridade: "Comum",
      descricao: "Lobo de pelagem negra que se move nas sombras da floresta.",
      encontrado: "Encontrado na entrada da Floresta Sombria, caçando em matilha. Foram necessários 3 aventureiros para derrotá-lo."
    },
    {
      id: 3,
      nome: "Golem de Pedra",
      tipo: "Construto",
      nivel: 25,
      habilidades: ["Punho Esmagador", "Resistência Mágica", "Regeneração"],
      habitat: "Ruínas Antigas",
      raridade: "Raro",
      descricao: "Guardião de pedra animado por magia antiga para proteger tesouros.",
      encontrado: "Descoberto nas Ruínas do Templo Esquecido, protegendo um altar místico. Permaneceu inativo até que tentamos tocar no artefato central."
    },
    {
      id: 4,
      nome: "Esqueleto Guerreiro",
      tipo: "Morto-Vivo",
      nivel: 8,
      habilidades: ["Ataque Duplo", "Imunidade a Veneno", "Reformar"],
      habitat: "Cemitérios",
      raridade: "Comum",
      descricao: "Guerreiro morto há muito tempo, ainda empunha suas armas.",
      encontrado: "Patrulhando o Cemitério Antigo à noite. Aparentemente guarda o túmulo de um nobre esquecido."
    },
    {
      id: 5,
      nome: "Basilisco Real",
      tipo: "Réptil Mágico",
      nivel: 35,
      habilidades: ["Olhar Petrificante", "Veneno Mortal", "Escamas Resistentes"],
      habitat: "Cavernas Profundas",
      raridade: "Épico",
      descricao: "Serpente gigantesca cujo olhar transforma inimigos em pedra.",
      encontrado: "Localizado nas Cavernas de Cristal, cercado por estátuas de pedra que antes eram aventureiros. Conseguimos escapar usando espelhos para desviar seu olhar."
    },
    {
      id: 6,
      nome: "Orc Chefe",
      tipo: "Humanoide",
      nivel: 20,
      habilidades: ["Berserker", "Comando de Guerra", "Machado Duplo"],
      habitat: "Fortalezas Orcas",
      raridade: "Incomum",
      descricao: "Líder tribal orc de força descomunal e ferocidade implacável.",
      encontrado: "Confrontado na Fortaleza da Montanha Negra, liderando um exército de 50 orcs. A batalha durou horas."
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
              <p className="text-sm text-muted-foreground leading-relaxed">
                {monstro.descricao}
              </p>
              
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
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Habitat:</span>
                  <span className="text-foreground font-medium">{monstro.habitat}</span>
                </div>
                
                <div className="bg-accent/5 rounded-lg p-3 border border-accent/20">
                  <p className="text-xs font-semibold text-accent mb-2">📍 Registro de Avistamento</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {monstro.encontrado}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Monstros;