import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="bg-card border-border shadow-xl max-w-md w-full">
        <CardContent className="p-8 text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Página Perdida nas Sombras</h2>
          <p className="text-muted-foreground mb-6">
            Esta página se perdeu nas terras sombrias de Hellbound. 
            Retorne ao caminho seguro antes que criaturas das trevas a encontrem.
          </p>
          <Button variant="rpgPrimary" asChild>
            <a href="/">Retornar à Segurança</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
