import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, CheckCircle, Lock } from "lucide-react";
import { Header } from "@/components/header";

const modules = [
  {
    level: "Iniciante",
    title: "O que são Criptomoedas?",
    description: "Introdução básica ao conceito de criptomoedas e blockchain",
    lessons: 5,
    completed: 3,
    locked: false,
  },
  {
    level: "Iniciante",
    title: "Carteiras Digitais",
    description: "Como criar e gerenciar carteiras de criptomoedas",
    lessons: 4,
    completed: 0,
    locked: false,
  },
  {
    level: "Intermediário",
    title: "Exchanges e Trading",
    description: "Como comprar e vender criptomoedas nas exchanges",
    lessons: 6,
    completed: 0,
    locked: true,
  },
  {
    level: "Intermediário",
    title: "Análise Técnica Básica",
    description: "Introdução aos gráficos e indicadores técnicos",
    lessons: 8,
    completed: 0,
    locked: true,
  },
  {
    level: "Avançado",
    title: "DeFi e Yield Farming",
    description: "Explorando finanças descentralizadas",
    lessons: 10,
    completed: 0,
    locked: true,
  },
  {
    level: "Avançado",
    title: "Gestão de Risco",
    description: "Estratégias avançadas de gestão de risco",
    lessons: 7,
    completed: 0,
    locked: true,
  },
];

export default function Educacao() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Educação Interativa</h1>
          <p className="text-muted-foreground">
            Aprenda sobre criptomoedas do básico ao avançado com aulas em vídeo e texto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card key={index} className={module.locked ? "opacity-50" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant={module.locked ? "secondary" : "default"}>
                    {module.level}
                  </Badge>
                  {module.locked && <Lock className="h-4 w-4" />}
                </div>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {module.title}
                </CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    {module.completed}/{module.lessons} aulas
                  </span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: module.lessons }).map((_, i) => (
                      <CheckCircle
                        key={i}
                        className={`h-3 w-3 ${
                          i < module.completed
                            ? "text-green-500 fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <Button
                  className="w-full"
                  disabled={module.locked}
                  variant={module.locked ? "secondary" : "default"}
                >
                  {module.locked ? "Bloqueado" : "Continuar"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Precisa de Ajuda?</CardTitle>
              <CardDescription>
                Tire suas dúvidas com nosso chat IA em português
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Abrir Chat IA
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}