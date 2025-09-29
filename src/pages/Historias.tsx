import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/PageHeader";
import { BookOpen, Scroll, Crown, Sword, Shield, Star, Eye, Clock } from "lucide-react";

const Historias = () => {
  const historias = [
    {
      id: 1,
      titulo: "A Queda do Reino Sombrio",
      categoria: "Lenda Épica",
      autor: "Chronista Eldarian",
      dataPublicacao: "Era dos Heróis, Ano 1247",
      status: "Completa",
      capitulos: 12,
      visualizacoes: 3420,
      resumo: "A saga épica sobre como cinco heróis improváveis uniram forças para derrotar o Lorde das Sombras e libertar o reino de mil anos de escuridão.",
      personagens: ["Kael Luzverde", "Marina Tempestade", "Thorin Machadoferro"],
      icone: Crown,
      dificuldade: "Épica"
    },
    {
      id: 2,
      titulo: "O Mistério da Floresta Sussurrante",
      categoria: "Aventura Investigativa",
      autor: "Sábia Moonwhisper",
      dataPublicacao: "Era Atual, Ano 1",
      status: "Em Andamento",
      capitulos: 7,
      visualizacoes: 1850,
      resumo: "Uma investigação sobre os estranhos desaparecimentos na Floresta Sombria revela segredos antigos e criaturas há muito esquecidas.",
      personagens: ["Elara Folhaverde", "Marcus Luzverde", "Artemis Ventolâmina"],
      icone: Eye,
      dificuldade: "Intermediária"
    },
    {
      id: 3,
      titulo: "As Crônicas do Dragão Ancião",
      categoria: "História Ancestral",
      autor: "Arquivista Drakemoor",
      dataPublicacao: "Era Mítica, Ano 3000",
      status: "Lendária",
      capitulos: 24,
      visualizacoes: 8750,
      resumo: "Os registros milenares sobre Pyrothus, o último dragão dourado, e suas interações com as civilizações mortais ao longo das eras.",
      personagens: ["Pyrothus Asadourada", "Rei Valdris I", "Arcanus Supremo"],
      icone: Star,
      dificuldade: "Lendária"
    },
    {
      id: 4,
      titulo: "A Fundação de Valdris",
      categoria: "História do Reino",
      autor: "Historiador Real",
      dataPublicacao: "Era da Fundação, Ano 1",
      status: "Completa",
      capitulos: 15,
      visualizacoes: 2340,
      resumo: "A história de como o Reino de Valdris foi fundado após a Grande Guerra, estabelecendo as bases da civilização atual.",
      personagens: ["Rei Valdris I", "Conselho dos Sábios", "Generais Fundadores"],
      icone: Shield,
      dificuldade: "Básica"
    },
    {
      id: 5,
      titulo: "A Rebelião dos Órfãos",
      categoria: "Drama Heroico",
      autor: "Bardo Itinerante",
      dataPublicacao: "Era dos Heróis, Ano 890",
      status: "Completa",
      capitulos: 9,
      visualizacoes: 1620,
      resumo: "A comovente história de um grupo de órfãos de guerra que se tornaram heróis improváveis, salvando sua cidade de invasores orcs.",
      personagens: ["Lily Corvalente", "Tom Machafirme", "Sara Luzverde"],
      icone: Sword,
      dificuldade: "Intermediária"
    },
    {
      id: 6,
      titulo: "O Códice dos Feitiços Perdidos",
      categoria: "Mistério Arcano",
      autor: "Mago Silverwind",
      dataPublicacao: "Era Arcana, Ano 2156",
      status: "Em Andamento",
      capitulos: 11,
      visualizacoes: 2890,
      resumo: "A busca por um antigo grimório que contém magias há muito perdidas, e os perigos que aguardam aqueles que ousam procurá-lo.",
      personagens: ["Elena Silverwind", "Consortium Arcano", "Guardiões do Saber"],
      icone: BookOpen,
      dificuldade: "Avançada"
    }
  ];

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "Lenda Épica": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Aventura Investigativa": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "História Ancestral": return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      case "História do Reino": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Drama Heroico": return "bg-red-500/20 text-red-300 border-red-500/30";
      case "Mistério Arcano": return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completa": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Em Andamento": return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      case "Lendária": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getDificuldadeColor = (dificuldade: string) => {
    switch (dificuldade) {
      case "Básica": return "text-emerald-400";
      case "Intermediária": return "text-amber-400";
      case "Avançada": return "text-red-400";
      case "Épica": return "text-purple-400";
      case "Lendária": return "text-cyan-400";
      default: return "text-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Histórias do Mundo" 
        description="Crônicas épicas, lendas ancestrais e aventuras memoráveis"
      >
        <div className="flex gap-2">
          <Button variant="outline">
            <Scroll className="w-4 h-4 mr-2" />
            Filtrar
          </Button>
          <Button variant="rpgPrimary">
            <BookOpen className="w-4 h-4 mr-2" />
            Nova História
          </Button>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {historias.map((historia) => (
          <Card key={historia.id} className="bg-card/50 border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <historia.icone className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-lg font-bold text-foreground line-clamp-1">
                      {historia.titulo}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">por {historia.autor}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Badge className={getCategoriaColor(historia.categoria)}>
                    {historia.categoria}
                  </Badge>
                  <Badge className={getStatusColor(historia.status)}>
                    {historia.status}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold ${getDificuldadeColor(historia.dificuldade)}`}>
                  {historia.dificuldade}
                </span>
                <span className="text-xs text-muted-foreground">
                  {historia.dataPublicacao}
                </span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {historia.resumo}
              </p>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Personagens Principais:</h4>
                <div className="flex flex-wrap gap-1">
                  {historia.personagens.map((personagem, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {personagem}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>{historia.capitulos} cap.</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{historia.visualizacoes.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Prévia
                  </Button>
                  <Button variant="rpgAccent" size="sm">
                    Ler História
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Seção de Destaque */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground flex items-center">
            <Star className="w-6 h-6 mr-3 text-accent" />
            História em Destaque
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                A Grande Aliança: O Retorno dos Dragões
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Uma nova era está prestes a começar. Após séculos de ausência, os dragões retornaram ao mundo, 
                trazendo consigo tanto esperança quanto terror. Esta épica saga acompanha a formação de uma 
                aliança improvável entre humanos, elfos, anões e até mesmo alguns dragões benevolentes para 
                enfrentar uma ameaça que pode destruir toda a realidade conhecida.
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Saga Épica
                </Badge>
                <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                  Em Breve
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Lançamento: Próxima Era
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-accent/10 rounded-lg p-6 text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                <p className="text-lg font-bold text-foreground mb-1">Em Breve</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Seja notificado quando a história for lançada
                </p>
                <Button variant="rpgPrimary" className="w-full">
                  Me Notificar
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Historias;