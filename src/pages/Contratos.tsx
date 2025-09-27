import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contratos = () => {
  // ... keep existing code (contratos data and functions)
  
  const contratos = [
    {
      id: 1,
      titulo: "Pacata Vila de Nidalf",
      descricao: "Uma pequena vila no interior chamada Nidalf. O ancião da vida, Ytsfar pediu o serviço da Guilda Hellbound, segundo ele alguns moradores estão bem estranhos. Desde então algumas pessoas desapareceram, afirma que formaram uma espécie de culto. O dever da Guilda é investigar e erradicar o culto blásfemo",
      recompensa: "800 PO",
      dificuldade: "Alto",
      status: "Concluído",
      localizacao: "Terras Fronteiriças de Valdris"
    },
    {
      id: 2,
      titulo: "Fazenda Churrascada do Big Bob",
      descricao: "A fazenda é dirigida pelo conhecido Big Bob Creek com sua família. Os Creek pediram ajuda, acusam a fazenda de ter sido amaldiçoada. Segundo o Big Bob uma série de infortúnios os atingiu. Estão pagando uma boa quantia para retirarem essa maldição.",
      recompensa: "1000 PO",
      dificuldade: "Extremo",
      status: "Em Andamento",
      localizacao: "Estrada do Norte"
    },
    {
      id: 3,
      titulo: "O Cultista da Lua Vermelha",
      descricao: "Rituais sombrios têm sido realizados nos arredores da cidade. Testemunhas relatam figuras encapuzadas e símbolos estranhos gravados em pedras antigas.",
      recompensa: "2.000 moedas de ouro",
      dificuldade: "Extremo",
      status: "Disponível",
      localizacao: "Arredores de Pedravale"
    },
    {
      id: 4,
      titulo: "Tesouro dos Anões Perdidos",
      descricao: "Mapas antigos indicam a localização de uma mina abandonada dos anões, repleta de gemas preciosas e artefatos mágicos.",
      recompensa: "1.200 moedas de ouro + % do tesouro",
      dificuldade: "Alto",
      status: "Concluído",
      localizacao: "Montanhas de Ferro"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponível": return "bg-green-600";
      case "Em Andamento": return "bg-yellow-600";
      case "Concluído": return "bg-gray-600";
      default: return "bg-gray-600";
    }
  };

  const getDifficultyColor = (dificuldade: string) => {
    switch (dificuldade) {
      case "Médio": return "bg-yellow-500";
      case "Alto": return "bg-orange-500";
      case "Extremo": return "bg-red-600";
      default: return "bg-green-500";
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader 
        title="Contratos & Missões"
        description="Aventuras épicas aguardam os corajosos que ousarem aceitar estes contratos"
      />

      <div className="grid gap-6">
        {contratos.map((contrato) => (
          <Card key={contrato.id} className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {contrato.titulo}
                  </CardTitle>
                  <div className="flex gap-2 mb-3">
                    <Badge className={`${getStatusColor(contrato.status)} text-white`}>
                      {contrato.status}
                    </Badge>
                    <Badge className={`${getDifficultyColor(contrato.dificuldade)} text-white`}>
                      {contrato.dificuldade}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Recompensa</p>
                  <p className="text-lg font-bold text-rpg-gold">{contrato.recompensa}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {contrato.descricao}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Local:</span>
                  <span className="text-sm font-medium text-rpg-silver">
                    {contrato.localizacao}
                  </span>
                </div>
                <Button 
                  disabled={contrato.status !== "Disponível"}
                  className={contrato.status === "Disponível" ? "bg-rpgPrimary text-white" : "bg-secondary text-white"}
                >
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Como Funcionam os Contratos
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• <strong>Dificuldade:</strong> Indica o nível de perigo e complexidade da missão</li>
              <li>• <strong>Recompensa:</strong> Pagamento garantido ao completar o contrato</li>
              <li>• <strong>Status:</strong> Situação atual do contrato (Disponível, Em Andamento, Concluído)</li>
              <li>• <strong>Localização:</strong> Onde a aventura se desenvolve no mundo de Hellbound</li>
              <li>• <strong>PO:</strong> Peças de ouro</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contratos;