import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageHeader from "@/components/ui/PageHeader";
import { Users, Heart, BookOpen, Shield, Sword, Scroll } from "lucide-react";

const Sobre = () => {
  const equipe = [
    {
      nome: "Marcus Drakemoor",
      cargo: "Mestre do Jogo Principal",
      descricao: "Veterano com 15 anos de experiência em RPG, criador do universo Hellbound.",
      especialidade: "Narrativa & Worldbuilding"
    },
    {
      nome: "Elena Silverwind",
      cargo: "Desenvolvedora & DM",
      descricao: "Programadora e mestre experiente, responsável pela plataforma digital.",
      especialidade: "Tecnologia & Mecânicas"
    },
    {
      nome: "Thorin Ironforge",
      cargo: "Designer de Sistemas",
      descricao: "Especialista em balanceamento e criação de sistemas de combate únicos.",
      especialidade: "Game Design & Balance"
    },
    {
      nome: "Lyanna Moonwhisper",
      cargo: "Artista & Illustradora",
      descricao: "Responsável por toda arte conceitual e visual do universo Hellbound.",
      especialidade: "Arte & Design Visual"
    }
  ];


  return (
    <div className="space-y-8">
      <PageHeader 
        title="Sobre Nós" 
        description="Conheça a equipe por trás do universo Hellbound"
      />

      {/* Como Somos no RPG */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground flex items-center">
            <Sword className="w-6 h-6 mr-3 text-accent" />
            Como Somos no RPG
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-base leading-relaxed">
            No <strong className="text-accent">Hellbound RPG</strong>, acreditamos que cada aventura é única e especial. 
            Somos mestres e jogadores apaixonados que valorizam a narrativa colaborativa, onde cada decisão 
            importa e cada personagem tem sua história para contar.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Nossa abordagem ao RPG é centrada na imersão e na criatividade. Criamos mundos detalhados onde 
            a magia é palpável, os perigos são reais e as amizades forjadas na mesa se estendem para além 
            do jogo. Cada sessão é uma oportunidade de explorar não apenas territórios desconhecidos, 
            mas também aspectos profundos da personalidade dos personagens.
          </p>
        </CardContent>
      </Card>

      {/* Nossa Filosofia */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground flex items-center">
            <Scroll className="w-6 h-6 mr-3 text-accent" />
            Nossa Filosofia
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-base leading-relaxed">
            Acreditamos que o RPG é mais do que um jogo - é uma forma de arte narrativa coletiva. 
            Aqui, não há protagonistas únicos, mas sim um grupo de heróis cujas jornadas se entrelaçam 
            para criar épicos inesquecíveis.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Valorizamos a improvisação, a colaboração e o respeito mútuo. Cada jogador contribui para 
            a construção do mundo e da história, seja através das ações do seu personagem, das ideias 
            criativas ou simplesmente da energia positiva que traz para a mesa.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            O fracasso é tão importante quanto o sucesso em nossas aventuras. É através dos desafios 
            e das consequências que os personagens crescem e as histórias se tornam memoráveis.
          </p>
        </CardContent>
      </Card>

      {/* Equipe */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Nossa Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {equipe.map((membro, index) => (
            <Card key={index} className="bg-card/50 border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {membro.nome}
                    </CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {membro.cargo}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {membro.descricao}
                </p>
                <div className="flex items-center">
                  <span className="text-xs text-accent font-semibold">
                    {membro.especialidade}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Valores */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground text-center">
            Nossos Valores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Inclusão</h3>
              <p className="text-sm text-muted-foreground">
                Todos são bem-vindos em nossa mesa, independente de experiência ou background.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Paixão</h3>
              <p className="text-sm text-muted-foreground">
                Criamos com amor cada detalhe do mundo, das menores vilas aos maiores dragões.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Narrativa</h3>
              <p className="text-sm text-muted-foreground">
                Cada sessão é uma história única, moldada pelas escolhas dos jogadores.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default Sobre;