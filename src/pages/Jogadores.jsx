import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/PageHeader";
import { GamepadIcon, Star, Trophy, Clock, Users, UserPlus } from "lucide-react";

const Jogadores = () => {
  const jogadores = [
    {
      id: 1,
      nome: "Robert",
      nickname: "RobertMion",
      nivel: 0,
      classe: "??",
      guild: "??",
      status: "Online",
      personagemPrincipal: "Mestre",
      ultimaConexao: "Agora"
    },
    {
      id: 2,
      nome: "Leonardo",
      nickname: "leoldl15",
      nivel: 3,
      classe: "Bárbaro",
      guild: "Círculo Arcano",
      status: "Online",
      pontuacao: 22100,
      conquistas: 31,
      horasJogadas: 203,
      personagemPrincipal: "Zarlak Nola-Kageane",
      ultimaConexao: "Agora"
    },
    {
      id: 3,
      nome: "Ricardo",
      nickname: "IronShield",
      nivel: 28,
      classe: "Guerreiro",
      guild: "Guardiões do Reino",
      status: "Ausente",
      pontuacao: 11850,
      conquistas: 18,
      horasJogadas: 124,
      personagemPrincipal: "Thorin Machado de Ferro",
      ultimaConexao: "2 horas atrás"
    },
    {
      id: 4,
      nome: "Carla",
      nickname: "NatureWisper",
      nivel: 38,
      classe: "Druida",
      guild: "Filhos da Natureza",
      status: "Online",
      pontuacao: 18600,
      conquistas: 27,
      horasJogadas: 178,
      personagemPrincipal: "Elara Folhaverde",
      ultimaConexao: "Agora"
    },
    {
      id: 5,
      nome: "Diego",
      nickname: "HolyPaladin",
      nivel: 31,
      classe: "Paladino",
      guild: "Ordem da Luz",
      status: "Offline",
      pontuacao: 13200,
      conquistas: 20,
      horasJogadas: 145,
      personagemPrincipal: "Marcus Luzverde",
      ultimaConexao: "1 dia atrás"
    },
    {
      id: 6,
      nome: "Ana",
      nickname: "SwiftArrow",
      nivel: 26,
      classe: "Arqueira",
      guild: "Caçadores Selvagens",
      status: "Online",
      pontuacao: 9800,
      conquistas: 15,
      horasJogadas: 98,
      personagemPrincipal: "Artemis Ventolâmina",
      ultimaConexao: "Agora"
    },

      {
      id: 7,
      nome: "Ana",
      nickname: "SwiftArrow",
      nivel: 26,
      classe: "Arqueira",
      guild: "Caçadores Selvagens",
      status: "Online",
      pontuacao: 9800,
      conquistas: 15,
      horasJogadas: 98,
      personagemPrincipal: "Artemis Ventolâmina",
      ultimaConexao: "Agora"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Online": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Ausente": return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      case "Offline": return "bg-zinc-500/20 text-zinc-300 border-zinc-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getClasseColor = (classe) => {
    switch (classe) {
      case "Bárbaro": return "text-purple-400";
      case "Mago": return "text-blue-400";
      case "Guerreiro": return "text-red-400";
      case "Druida": return "text-emerald-400";
      case "Paladino": return "text-amber-400";
      case "Arqueira": return "text-cyan-400";
      default: return "text-foreground";
    }
  };

  const getNivelColor = (nivel) => {
    if (nivel < 3) return "text-emerald-400";
    if (nivel < 5) return "text-amber-400";
    return "text-purple-400";
  };

  return (

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {jogadores.map((jogador) => (
          <Card key={jogador.id} className="bg-card/50 border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <GamepadIcon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {jogador.nome}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">@{jogador.nickname}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={getStatusColor(jogador.status)}>
                    {jogador.status}
                  </Badge>
                  <p className={`text-sm font-bold mt-1 ${getNivelColor(jogador.nivel)}`}>
                    Nível {jogador.nivel}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Classe:</span>
                  <span className={`text-sm font-semibold ${getClasseColor(jogador.classe)}`}>
                    {jogador.classe}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Guild:</span>
                  <span className="text-sm font-medium text-foreground">{jogador.guild}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Personagem:</span>
                  <span className="text-sm font-medium text-accent">{jogador.personagemPrincipal}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
  
  );
};

export default Jogadores;