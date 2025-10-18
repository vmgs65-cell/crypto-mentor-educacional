import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BookOpen, MessageCircle, BarChart3, DollarSign, Shield } from "lucide-react";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Aprenda a Investir em Criptomoedas de Forma Segura
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Educação interativa, cotações em tempo real e IA para te guiar no mundo das criptos
          </p>
          <Button size="lg">Começar Agora</Button>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 mb-2" />
              <CardTitle>Educação Interativa</CardTitle>
              <CardDescription>
                Aulas em vídeo e texto sobre criptomoedas, desde básico até avançado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Sistema de níveis</li>
                <li>• Quiz com feedback</li>
                <li>• Chat IA em português</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 mb-2" />
              <CardTitle>Cotações em Tempo Real</CardTitle>
              <CardDescription>
                Preços, gráficos e notícias do mercado cripto atualizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Integração CoinMarketCap</li>
                <li>• Notícias Bloomberg</li>
                <li>• Gráficos TradingView</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 mb-2" />
              <CardTitle>IA Trader</CardTitle>
              <CardDescription>
                Robô de negociação com sugestões baseadas em análise técnica
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Modo demo</li>
                <li>• Backtesting</li>
                <li>• Ajuste de risco</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageCircle className="h-8 w-8 mb-2" />
              <CardTitle>Tradutor Multilíngue</CardTitle>
              <CardDescription>
                Conteúdo traduzido automaticamente preservando termos técnicos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Inglês, Espanhol, Francês</li>
                <li>• Tradução contextual</li>
                <li>• Blockchain, DeFi, etc.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 mb-2" />
              <CardTitle>Segurança e Gestão</CardTitle>
              <CardDescription>
                Aprenda sobre carteiras, exchanges e gestão de risco
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Segurança blockchain</li>
                <li>• Gestão de risco</li>
                <li>• Melhores práticas</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <DollarSign className="h-8 w-8 mb-2" />
              <CardTitle>Pagamentos Flexíveis</CardTitle>
              <CardDescription>
                Planos com suporte a criptomoedas e cartões tradicionais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Bitcoin, Ethereum, USDT</li>
                <li>• Stripe, PayPal</li>
                <li>• Conversão automática</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Plans Section */}
        <section className="text-center">
          <h3 className="text-3xl font-bold mb-8">Escolha Seu Plano</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Plano Básico</CardTitle>
                <CardDescription>Gratuito</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4">
                  <li>• Módulo iniciante</li>
                  <li>• Cotações limitadas</li>
                  <li>• Suporte IA básico</li>
                </ul>
                <Button variant="outline" className="w-full">Começar Grátis</Button>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Plano Pro</CardTitle>
                <CardDescription>R$ 50/mês</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4">
                  <li>• Educação completa</li>
                  <li>• Cotações ilimitadas</li>
                  <li>• IA Trader básico</li>
                  <li>• Backtesting limitado</li>
                </ul>
                <Button className="w-full">Assinar Pro</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Plano Premium</CardTitle>
                <CardDescription>R$ 195/mês</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4">
                  <li>• Acesso total</li>
                  <li>• IA Trader avançado</li>
                  <li>• Backtesting completo</li>
                  <li>• Webinars e suporte VIP</li>
                </ul>
                <Button variant="outline" className="w-full">Assinar Premium</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}