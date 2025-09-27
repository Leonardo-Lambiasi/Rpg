import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Personagens = () => {
  // ... keep existing code (personagens data and functions)
  
  const personagens = [
    {
      id: 1,
      nome: "Zalak Nola-Kageane",
      classe: "Bárbaro Goaliath",
      nivel: 3,
      origem: "Torre de Cristal",
      descricao: "Um podero Bárbaro que se transforma que vira um animal em todos os sentidos",
      habilidades: ["Fúria", "Ataque Descuidado", "Forma de Urso"],
      status: "Ativo",
      localizacao: "Cidade de Pedravale"
    },
    {
      id: 2,
      nome: "Gareth Forjaferro",
      classe: "Guerreiro Anão",
      nivel: 15,
      origem: "Clã Forjaferro",
      descricao: "Um veterano guerreiro anão com décadas de experiência em batalha. Mestre na arte da forja e portador do martelo ancestral de seu clã.",
      habilidades: ["Golpe Devastador", "Resistência Férrea", "Forja Mágica"],
      status: "Ativo",
      localizacao: "Montanhas de Ferro"
    },
    {
      id: 3,
      nome: "Sombra Prateada",
      classe: "Assassina Élfica",
      nivel: 10,
      origem: "Floresta Sombria",
      descricao: "Uma assassina élfica misteriosa que trabalha nas sombras. Pouco se sabe sobre seu passado, mas sua lealdade aos contratantes é inquestionável.",
      habilidades: ["Invisibilidade", "Ataque Furtivo", "Venenos Letais"],
      status: "Desconhecido",
      localizacao: "????"
    },
    {
      id: 4,
      nome: "Padre Marcus",
      classe: "Clérigo da Luz",
      nivel: 8,
      origem: "Templo da Luz Eterna",
      descricao: "Um clérigo devoto dedicado a curar feridos e banir as trevas. Marcus é conhecido por sua compaixão e coragem mesmo diante do mal absoluto.",
      habilidades: ["Cura Divina", "Banir Mortos-vivos", "Bênção Sagrada"],
      status: "Ativo",
      localizacao: "Templo Central"
    },
    {
      id: 5,
      nome: "Kael Ventolâmina",
      classe: "Ranger Humano",
      nivel: 13,
      origem: "Terras Selvagens",
      descricao: "Um ranger experiente que conhece cada trilha e segredo das terras selvagens. Kael é acompanhado por seu fiel lobo, Tempestade.",
      habilidades: ["Rastreamento Avançado", "Tiro Certeiro", "Companheiro Animal"],
      status: "Em Missão",
      localizacao: "Floresta do Norte"
    },
    {
      id: 6,
      nome: "Morgana Sanguesombrio",
      classe: "Necromante",
      nivel: 16,
      origem: "Terras Amaldiçoadas",
      descricao: "Uma poderosa necromante que caminha na linha tênue entre a luz e as trevas. Morgana busca conhecimento proibido para derrotar uma ameaça ainda maior.",
      habilidades: ["Controle de Mortos", "Drenar Vida", "Portal Sombrio"],
      status: "Suspeita",
      localizacao: "Torre Negra"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-600";
      case "Em Missão": return "bg-blue-600";
      case "Desconhecido": return "bg-gray-600";
      case "Suspeita": return "bg-red-600";
      default: return "bg-gray-600";
    }
  };

  const getClasseColor = (classe: string) => {
    if (classe.includes("Bárbaro")) return "bg-purple-600";
    if (classe.includes("Guerreiro")) return "bg-orange-600";
    if (classe.includes("Assassina")) return "bg-gray-700";
    if (classe.includes("Clérigo")) return "bg-yellow-600";
    if (classe.includes("Ranger")) return "bg-green-700";
    return "bg-blue-600";
  };

   

  return (
    <div className="space-y-8">
      <PageHeader 
        title="Personagens Lendários"
        description="Conheça os heróis e vilões que moldam o destino de Hellbound"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {personagens.map((personagem) => (
          <Card key={personagem.id} className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <CardTitle className="text-xl font-bold text-foreground mb-1">
                    {personagem.nome}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Nível {personagem.nivel} • {personagem.origem}
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <Badge className={`${getClasseColor(personagem.classe)} text-white`}>
                    {personagem.classe}
                  </Badge>
                  <Badge className={`${getStatusColor(personagem.status)} text-white text-xs`}>
                    {personagem.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {personagem.descricao}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Habilidades:</h4>
                <div className="flex flex-wrap gap-1">
                  {personagem.habilidades.map((habilidade, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {habilidade}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">
                  <strong>Local:</strong> {personagem.localizacao}
                </span>
                <span className="text-rpg-gold font-medium">
                  Nível {personagem.nivel}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Classes de Personagens
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• <strong>Bárbaro</strong> Urso Fúrioso</li>
              <li>• <strong>Guerreiro:</strong> Combatentes corpo a corpo</li>
              <li>• <strong>Assassino:</strong> Especialistas em ataques furtivos</li>
              <li>• <strong>Clérigo:</strong> Curandeiros e banidores de trevas</li>
              <li>• <strong>Ranger:</strong> Exploradores das terras selvagens</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Status dos Personagens
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• <strong>Ativo:</strong> Disponível para contratos</li>
              <li>• <strong>Em Missão:</strong> Atualmente ocupado</li>
              <li>• <strong>Desconhecido:</strong> Paradeiro incerto</li>
              <li>• <strong>Suspeita:</strong> Lealdade questionável</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Personagens;