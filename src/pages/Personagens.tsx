import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Personagens = () => {
  // ... keep existing code (personagens data and functions)
  
  const personagens = [
    {
      id: 1,
      nome: "Zarlak Nola-Kageane",
      classe: "Bárbaro Goliath",
      nivel: 3,
      origem: "Torre de Cristal",
      descricao: "Um podero Bárbaro que se transforma que vira um animal em todos os sentidos",
      habilidades: ["Fúria", "Ataque Descuidado", "Forma de Urso"],
      status: "Ativo",
      localizacao: "Cidade de Pedravale"
    },
    {
      id: 2,
      nome: "Okazir",
      classe: "Monge/Bárbaro Humano",
      nivel: 4,
      origem: "Herói do Povo",
      descricao: "Um monge do jogo da capoeira que no tempo livre toca cavaquinho para relaxar",
      habilidades: ["Mantra", "Golpes Velozes", "Passo Rápido","Defesa Paciente"],
      status: "Ativo",
      localizacao: "Cidade de Sanguma, Capital de Zairin"
    },
    {
      id: 3,
      nome: "Pelgard",
      classe: "Paladino da Tempestade Humano",
      nivel: 3,
      origem: "Acólito",
      descricao: "Um paladino da tempestade que busca fazer a justiça com as próprias mãos.",
      habilidades: ["Divini Smite", "Poço de Cura", "Golpe Trovejante", "Canalizar Juramento"],
      status: "Ativo",
      localizacao: "Havelok"
    },
    {
      id: 4,
      nome: "Sohtriv",
      classe: "Clérigo da Morte Dragonborn",
      nivel: 4,
      origem: "Culto das Montanhas",
      descricao: "Um clérigo com sede de conhecimento e poder, agora ele busca dominar a necromancia em nome do seu deus",
      habilidades: ["Cura Divina", "Banir Mortos-vivos", "Bênção Sagrada", "Canalizar Divindade: Toque necrotico", ],
      status: "Ativo",
      localizacao: "Templo Central"
    },
    {
      id: 5,
      nome: "Mazda",
      classe: "Feiticeiro Alma Divina Humano",
      nivel: 4,
      origem: "Acólito",
      descricao: "Um homem intelectual e frágil, em busca de uma forma de servir o seu deus",
      habilidades: ["Farpas de Prata", "Sono", "Reflexoes", "Sortudo"],
      status: "Inativo",
      localizacao: "Haverlok"
    },
    {
      id: 6,
      nome: "Rat",
      classe: "Bardo Camundongo",
      nivel: 4,
      origem: "Artista",
      descricao: "Um bardo camundongo que viaja o mundo em busca de histórias para contar e canções para cantar",
      habilidades: ["Inspiração de Bardo", "Baralho do Destino", "Saraivada de Cartas"],
      status: "Ativo",
      localizacao: "Haverlok"
    },
    {
      id: 7,
      nome: "Eliel, Filho da Luz",
      classe: "Clérigo da Luz Meio-Elfo",
      nivel: 3,
      origem: "Acólito",
      descricao: "Um clérigo devoto que busca espalhar a luz e a esperança em um mundo sombrio",
      habilidades: ["Curar Ferimentos", "Palavra Curativa", "Canalizar Divindade: Luz Radiante"],
      status: "Ativo",
      localizacao: "Haverlok"
    },
    {
      id: 8,
      nome: "Aldaron",
      classe: "Patrulheiro Humano",
      nivel: 3,
      origem: "Forasteiro",
      descricao: "Um patrulheiro que tenta ganhar a vida como mercenário, para dar uma vida melhor para sua família",
      habilidades: ["Curar Ferimentos", "Marca do Caçador", "Explorador Natural"],
      status: "Ativo",
      localizacao: "Haverlok"
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
    if (classe.includes("Monge/Bárbaro")) return "#A0522D-700"
    if (classe.includes("Bárbaro")) return "bg-purple-600";
    if (classe.includes("Monge")) return "bg-orange-600";
    if (classe.includes("Assassina")) return "bg-gray-700";
    if (classe.includes("Clérigo")) return "bg-yellow-600";
    if (classe.includes("Patrulheiro")) return "bg-green-700";
    if (classe.includes("Paladino")) return "bg-blue-700";
    if (classe.includes("Bardo")) return "bg-rose-700";
    if (classe.includes("Feiticeiro")) return "bg-red-700";
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