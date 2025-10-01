import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/PageHeader";
import { Skull, Zap, Eye, MapPin } from "lucide-react";

const Monstros = () => {
  const monstros = [
    {
      id: 1,
      nome: "Multação Oblex",
      tipo: "Limo Grande",
      nivel: 3,
      habilidades: ["Pseudopods", "Devorar Memorias", "Simulacrum"],
      habitat: "Desconhecido",
      raridade: "Lendário",
      descricao: "Um Oblex que foi modificado por multagênicos, a transformação o deixou mais forte do que o normal com habilidades que um Oblex normal não tem",
      encontrado: "Vila de Nidalf, estava no subsolo da vila, em um labirinto de tuneis"
    },
    {
      id: 2,
      nome: "Simulacrum Aldeão",
      tipo: "Limo",
      nivel: 3,
      habilidades: ["Fortitude"],
      habitat: "Desconhecido",
      raridade: "Raro",
      descricao: "Uma extenção de um Oblex Mutante, criado a partir de uma memoria devorada de algum aldeão.",
      encontrado: "Vila de Nidalf, eram as pessoas do vilarejo"
    },
    {
      id: 3,
      nome: "Simulacrum Cão",
      tipo: "Limo",
      nivel: 3,
      habilidades: ["Fortitude","Faro","Táticas de Matilha"],
      habitat: "Desconhecido",
      raridade: "Raro",
      descricao: "Uma extenção de um Oblex Mutante, criado a partir de uma memoria devorada de algum cachorro.",
      encontrado: "Vila de Nidalf, no vilarejo"
    },
    {
      id: 4,
      nome: "Simulacrum Perseguidor",
      tipo: "Limo",
      nivel: 3,
      habilidades: ["Fortitude","Criar Túneis","Audição Aguçada","Mordida Atropeladora"],
      habitat: "Desconhecido",
      raridade: "Lendário",
      descricao: "Uma extenção de um Oblex Mutante, sua obrigação é expandir o território e devorar qualquer intruso no covil",
      encontrado: "Vila de Nidalf, no subsolo da vila, em um labirinto de tuneis"
    },
    {
      id: 5,
      nome: "Casa Mimico",
      tipo: "Monstruosidade Grande",
      nivel: 3,
      habilidades: ["Troca de Forma", "Agarrão de Lingua", "Atropelar"],
      habitat: "Desconhecido",
      raridade: "Lendário",
      descricao: "Um dos maiores mimicos já encontrados, capaz de se passar por uma casa inteira, com varias armadilhas e ataques poderosos. Além de servir de abrigo para outros mimicos menores.",
      encontrado: "Fazenda Churrascada do Big Bob Creek, estava disfarçado de casa abandonada."
    },
    {
      id: 6,
      nome: "Mimico Mutante",
      tipo: "Monstruosidade Média",
      nivel: 3,
      habilidades: ["Troca de Forma","Adesivo", "Agarrador", "Mordida Surpresa"],
      habitat: "Desconhecido",
      raridade: "Raro",
      descricao: "Um mimico modificado que vira uma objeto quase perfeito, consegue extrair propriedades da sua forma transformada",
      encontrado: "Fazenda Churrascada do Big Bob Creek, fazia parte de uma colônia de mimicos."
    },
    {
      id: 7,
      nome: "Pequeno Mimico Mutante",
      tipo: "Monstruosidade Pequena",
      nivel: 3,
      habilidades: ["Troca de Forma","Adesivo", "Agarrador", "Mordida Surpresa Superior", "Inteligente"],
      habitat: "Desconhecido",
      raridade: "Lendário",
      descricao: "O primeiro Mimico a poder entender e falar algum idioma, pequeno de mais para caçar igual seus semelhantes, compensa com sua inteligencia se misturando na sociedade. Realiza um papel de comensalismo, multualismo ou inquilinismo, dependendo da situação.",
      encontrado: "Fazenda Churrascada do Big Bob Creek, estava desfarçado de ursinho o qual era de uma criança."
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