import { useParams } from "react-router-dom";
import habilidades from "../pages/habilidades";


const HabilidadeDetalhe = () => {
  const { nome } = useParams();

  // Procurar a habilidade pelo nome da URL
  const habilidade = habilidades.find(
    (h) => h.nome.toLowerCase() === decodeURIComponent(nome).toLowerCase()
  );

  if (!habilidade) {
    return <p className="p-6 text-red-500">❌ Habilidade não encontrada!</p>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-foreground">{habilidade.nome}</h1>

      <p className="text-muted-foreground">{habilidade.descricao}</p>

      <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
        <h2 className="font-semibold text-accent">Efeito</h2>
        <p className="text-sm text-muted-foreground">{habilidade.efeito}</p>
      </div>
      
    </div>
  );
};

export default HabilidadeDetalhe;