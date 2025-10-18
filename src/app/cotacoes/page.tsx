import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Newspaper } from "lucide-react";
import { Header } from "@/components/header";

const cryptoData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "R$ 350.000,00",
    change: "+2.5%",
    changeValue: "+R$ 8.500,00",
    positive: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "R$ 18.500,00",
    change: "-1.2%",
    changeValue: "-R$ 225,00",
    positive: false,
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    price: "R$ 1.250,00",
    change: "+0.8%",
    changeValue: "+R$ 10,00",
    positive: true,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: "R$ 2.80",
    change: "+5.1%",
    changeValue: "+R$ 0,14",
    positive: true,
  },
];

const newsData = [
  {
    title: "Bitcoin atinge nova máxima histórica",
    source: "CoinDesk",
    time: "2h atrás",
  },
  {
    title: "Ethereum 2.0: O que esperar da atualização",
    source: "Bloomberg",
    time: "4h atrás",
  },
  {
    title: "Brasil aprova regulamentação para criptos",
    source: "Reuters",
    time: "6h atrás",
  },
];

export default function Cotacoes() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Cotações em Tempo Real</h1>
          <p className="text-muted-foreground">
            Preços atualizados das principais criptomoedas
          </p>
        </div>

        {/* Crypto Prices */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cryptoData.map((crypto) => (
              <Card key={crypto.symbol}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{crypto.symbol}</CardTitle>
                    {crypto.positive ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <CardDescription>{crypto.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{crypto.price}</div>
                  <div className={`text-sm ${crypto.positive ? "text-green-500" : "text-red-500"}`}>
                    {crypto.change} ({crypto.changeValue})
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Chart Placeholder */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico BTC/USDT</CardTitle>
              <CardDescription>
                Gráfico de preços em tempo real (integração TradingView em breve)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Gráfico será exibido aqui</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* News */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Notícias do Mercado</h2>
            <Button variant="outline">Ver Todas</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-2">
                    <Newspaper className="h-5 w-5 mt-0.5" />
                    <div>
                      <CardTitle className="text-base leading-tight">
                        {news.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary">{news.source}</Badge>
                        <span>{news.time}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Ler Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}