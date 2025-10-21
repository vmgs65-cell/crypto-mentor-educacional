'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Newspaper, 
  BarChart3, 
  DollarSign,
  Globe,
  Zap,
  Eye,
  Star,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  PieChart,
  LineChart
} from "lucide-react";
import { Header } from "@/components/header";
import { useLanguage } from "@/lib/language-context";

const cryptoData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "R$ 350.245,67",
    change: "+2.5%",
    changeValue: "+R$ 8.567,89",
    positive: true,
    volume: "R$ 45.2B",
    marketCap: "R$ 6.8T",
    icon: "₿"
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "R$ 18.567,23",
    change: "-1.2%",
    changeValue: "-R$ 225,45",
    positive: false,
    volume: "R$ 23.1B",
    marketCap: "R$ 2.2T",
    icon: "Ξ"
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    price: "R$ 1.267,89",
    change: "+0.8%",
    changeValue: "+R$ 10,12",
    positive: true,
    volume: "R$ 2.8B",
    marketCap: "R$ 195B",
    icon: "⬡"
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: "R$ 2.87",
    change: "+5.1%",
    changeValue: "+R$ 0,14",
    positive: true,
    volume: "R$ 1.2B",
    marketCap: "R$ 102B",
    icon: "₳"
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "R$ 567,34",
    change: "+3.7%",
    changeValue: "+R$ 20,23",
    positive: true,
    volume: "R$ 3.4B",
    marketCap: "R$ 267B",
    icon: "◎"
  },
  {
    symbol: "DOT",
    name: "Polkadot",
    price: "R$ 45,67",
    change: "-2.1%",
    changeValue: "-R$ 0,98",
    positive: false,
    volume: "R$ 890M",
    marketCap: "R$ 67B",
    icon: "●"
  }
];

export default function Cotacoes() {
  const { t } = useLanguage();
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLive, setIsLive] = useState(true);

  // Simular atualizações em tempo real - otimizado para evitar loops
  useEffect(() => {
    let isMounted = true;
    
    const interval = setInterval(() => {
      if (isMounted) {
        setIsLive(prev => !prev);
      }
    }, 2000);
    
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []); // Array vazio - executa apenas uma vez

  const newsData = [
    {
      title: "Bitcoin atinge nova máxima histórica após aprovação de ETF",
      source: "CoinDesk",
      time: "2h atrás",
      category: t("bitcoin"),
      importance: "high",
      summary: "O Bitcoin registrou um novo recorde após a aprovação de mais ETFs institucionais..."
    },
    {
      title: "Ethereum 2.0: Atualização Shanghai reduz taxas em 40%",
      source: "Bloomberg Crypto",
      time: "4h atrás",
      category: t("ethereum"),
      importance: "high",
      summary: "A nova atualização da rede Ethereum promete revolucionar as transações DeFi..."
    },
    {
      title: "Brasil aprova marco regulatório para criptomoedas",
      source: "Reuters Brasil",
      time: "6h atrás",
      category: "Regulação",
      importance: "medium",
      summary: "Congresso Nacional aprova lei que regulamenta uso de criptomoedas no país..."
    },
    {
      title: "Binance anuncia nova funcionalidade de staking automático",
      source: "CryptoNews",
      time: "8h atrás",
      category: t("defi"),
      importance: "medium",
      summary: "Usuários poderão ganhar rendimentos passivos automaticamente..."
    },
    {
      title: "Análise: Altcoins podem superar Bitcoin em 2024",
      source: "CoinTelegraph",
      time: "12h atrás",
      category: "Análise",
      importance: "low",
      summary: "Especialistas apontam potencial de crescimento das altcoins..."
    }
  ];

  const marketStats = [
    { label: t("totalCap"), value: "R$ 12.4T", change: "+2.1%", positive: true },
    { label: t("volume24h"), value: "R$ 89.2B", change: "+5.7%", positive: true },
    { label: t("btcDominance"), value: "54.8%", change: "-0.3%", positive: false },
    { label: t("fearGreed"), value: "72", change: t("greed"), positive: true }
  ];

  const filteredNews = selectedCategory === "all" 
    ? newsData 
    : newsData.filter(news => news.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              {t("cryptoMarket")}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {t("realTimeQuotesAnalysis")}
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Badge 
              variant="outline" 
              className={`${isLive ? 'border-green-500 text-green-600' : 'border-slate-300'} transition-colors duration-500`}
            >
              <div className={`w-2 h-2 rounded-full mr-2 ${isLive ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`} />
              {isLive ? t("live") : t("connecting")}
            </Badge>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              {t("watchlist")}
            </Button>
          </div>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {marketStats.map((stat, index) => (
            <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {stat.label}
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className={`text-sm flex items-center ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.positive ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeframe Selector */}
        <Tabs value={selectedTimeframe} onValueChange={setSelectedTimeframe} className="mb-8">
          <TabsList className="grid w-full grid-cols-5 max-w-md">
            <TabsTrigger value="1h">1H</TabsTrigger>
            <TabsTrigger value="24h">24H</TabsTrigger>
            <TabsTrigger value="7d">7D</TabsTrigger>
            <TabsTrigger value="30d">30D</TabsTrigger>
            <TabsTrigger value="1y">1A</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Crypto Prices Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t("mainCryptos")}
            </h2>
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              {t("viewCharts")}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoData.map((crypto, index) => (
              <Card key={crypto.symbol} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                        {crypto.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                          {crypto.symbol}
                        </CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-400">
                          {crypto.name}
                        </CardDescription>
                      </div>
                    </div>
                    {crypto.positive ? (
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    ) : (
                      <TrendingDown className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        {crypto.price}
                      </div>
                      <div className={`text-sm font-semibold ${crypto.positive ? "text-green-600" : "text-red-600"}`}>
                        {crypto.change} ({crypto.changeValue})
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-slate-500 dark:text-slate-400">{t("volume24h")}</div>
                        <div className="font-semibold text-slate-900 dark:text-white">{crypto.volume}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 dark:text-slate-400">Market Cap</div>
                        <div className="font-semibold text-slate-900 dark:text-white">{crypto.marketCap}</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <LineChart className="h-3 w-3 mr-1" />
                        {t("chart")}
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Star className="h-3 w-3 mr-1" />
                        {t("favorite")}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Chart Section */}
        <section className="mb-12">
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t("btcUsdtChart")}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t("realTimeTechnicalAnalysis")}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Activity className="h-4 w-4 mr-2" />
                    {t("indicators")}
                  </Button>
                  <Button variant="outline" size="sm">
                    <PieChart className="h-4 w-4 mr-2" />
                    {t("analysis")}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-2">
                    {t("tradingViewChart")}
                  </p>
                  <p className="text-slate-500 dark:text-slate-500">
                    {t("tradingViewIntegration")}
                  </p>
                  <Button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    <Zap className="h-4 w-4 mr-2" />
                    {t("activateProCharts")}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* News Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t("marketNews")}
            </h2>
            <div className="flex gap-2">
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList>
                  <TabsTrigger value="all">{t("allNews")}</TabsTrigger>
                  <TabsTrigger value={t("bitcoin").toLowerCase()}>{t("bitcoin")}</TabsTrigger>
                  <TabsTrigger value={t("ethereum").toLowerCase()}>{t("ethereum")}</TabsTrigger>
                  <TabsTrigger value={t("defi").toLowerCase()}>{t("defi")}</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge 
                      variant="outline"
                      className={`${
                        news.importance === 'high' 
                          ? 'border-red-500 text-red-600' 
                          : news.importance === 'medium'
                            ? 'border-yellow-500 text-yellow-600'
                            : 'border-green-500 text-green-600'
                      }`}
                    >
                      {news.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="h-3 w-3" />
                      {news.time}
                    </div>
                  </div>

                  <CardTitle className="text-lg leading-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {news.title}
                  </CardTitle>
                  
                  <CardDescription className="text-slate-600 dark:text-slate-400 line-clamp-2">
                    {news.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Newspaper className="h-4 w-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {news.source}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      {t("readMore")}
                      <ArrowUpRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Globe className="h-4 w-4 mr-2" />
              {t("viewAllNews")}
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}