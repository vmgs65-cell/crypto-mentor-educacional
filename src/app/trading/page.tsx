'use client'

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  DollarSign,
  Zap,
  Brain,
  Target,
  Settings,
  Play,
  Pause,
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  Activity,
  PieChart
} from "lucide-react";
import { Header } from "@/components/header";
import { useLanguage } from "@/lib/language-context";

// Componente do Widget TradingView completamente refatorado
function TradingViewWidget() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const loadWidget = async () => {
      if (!containerRef.current || !isMounted) return;

      try {
        // Limpa qualquer conteúdo anterior
        const container = containerRef.current;
        container.innerHTML = '';

        // Cria o script do TradingView
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.async = true;

        // Configuração do widget
        const config = {
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "America/Sao_Paulo",
          theme: "light",
          style: "1",
          locale: "pt_BR",
          enable_publishing: false,
          allow_symbol_change: true,
          calendar: false,
          support_host: "https://www.tradingview.com"
        };

        script.innerHTML = JSON.stringify(config);

        // Event listeners
        script.onload = () => {
          if (isMounted) {
            setIsLoaded(true);
            setHasError(false);
          }
        };

        script.onerror = () => {
          if (isMounted) {
            setHasError(true);
            setIsLoaded(false);
          }
        };

        // Adiciona o script ao container
        container.appendChild(script);

      } catch (error) {
        console.warn('Erro ao carregar TradingView:', error);
        if (isMounted) {
          setHasError(true);
          setIsLoaded(false);
        }
      }
    };

    // Delay para garantir que o DOM esteja pronto
    const timer = setTimeout(loadWidget, 500);

    return () => {
      setIsMounted(false);
      clearTimeout(timer);
      
      // Limpeza segura do container
      if (containerRef.current) {
        try {
          containerRef.current.innerHTML = '';
        } catch (e) {
          // Ignora erros de limpeza
        }
      }
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="h-[500px] flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">
            {t("initializing")}
          </p>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="h-[500px] flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-lg">
        <div className="text-center">
          <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400">
            {t("chartUnavailable")}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
            {t("checkConnection")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="tradingview-widget-container h-[500px]">
      <div 
        ref={containerRef} 
        className="h-full"
        style={{ minHeight: '500px' }}
      >
        {!isLoaded && (
          <div className="h-full flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-slate-600 dark:text-slate-400">
                {t("loadingChart")}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="tradingview-widget-copyright mt-2">
        <a 
          href="https://www.tradingview.com/" 
          rel="noopener nofollow" 
          target="_blank" 
          className="text-xs text-slate-500 hover:text-blue-600"
        >
          <span>{t("monitorMarkets")}</span>
        </a>
      </div>
    </div>
  );
}

export default function Trading() {
  const { t, language } = useLanguage();
  const [isTrading, setIsTrading] = useState(false);
  const [riskLevel, setRiskLevel] = useState([3]);
  const [capital, setCapital] = useState("10000");
  const [selectedStrategy, setSelectedStrategy] = useState("rsi-macd");

  // Dados dos sinais traduzidos dinamicamente
  const tradingSignals = [
    {
      pair: "BTC/USDT",
      action: t("buy"),
      confidence: 85,
      price: language === 'en' ? "$67,245" : language === 'es' ? "$67.245" : "R$ 350.245",
      target: language === 'en' ? "$70,000" : language === 'es' ? "$70.000" : "R$ 365.000",
      stopLoss: language === 'en' ? "$65,000" : language === 'es' ? "$65.000" : "R$ 340.000",
      timeframe: "4h",
      positive: true,
      reason: t("signalReasons")["Rompimento de resistência + RSI oversold"] || "Resistance breakout + RSI oversold"
    },
    {
      pair: "ETH/USDT",
      action: t("sell"),
      confidence: 72,
      price: language === 'en' ? "$3,567" : language === 'es' ? "$3.567" : "R$ 18.567",
      target: language === 'en' ? "$3,200" : language === 'es' ? "$3.200" : "R$ 17.200",
      stopLoss: language === 'en' ? "$3,800" : language === 'es' ? "$3.800" : "R$ 19.500",
      timeframe: "1h",
      positive: false,
      reason: t("signalReasons")["Divergência bearish no MACD"] || "Bearish divergence in MACD"
    },
    {
      pair: "ADA/USDT",
      action: t("wait"),
      confidence: 45,
      price: language === 'en' ? "$0.87" : language === 'es' ? "$0,87" : "R$ 2.87",
      target: "-",
      stopLoss: "-",
      timeframe: "1d",
      positive: null,
      reason: t("signalReasons")["Mercado lateral, aguardar definição"] || "Sideways market, wait for definition"
    }
  ];

  const backtestResults = [
    { strategy: t("strategies")["rsi-macd"], profit: "+24.5%", trades: 156, winRate: "68%", maxDrawdown: "-8.2%" },
    { strategy: t("strategies")["moving-averages"], profit: "+18.3%", trades: 89, winRate: "72%", maxDrawdown: "-5.1%" },
    { strategy: t("strategies")["bollinger"], profit: "+31.2%", trades: 203, winRate: "64%", maxDrawdown: "-12.4%" },
    { strategy: t("strategies")["fibonacci"], profit: "+15.7%", trades: 67, winRate: "75%", maxDrawdown: "-4.8%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 text-white mb-4">
            <Brain className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent">
            {t("advancedAiTrader")}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t("intelligentTradingBot")}
          </p>
        </div>

        {/* Trading Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className={`${isTrading ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-slate-500 to-slate-600'} text-white border-0`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">{t("robotStatus")}</p>
                  <p className="text-2xl font-bold">{isTrading ? t("active") : t("stopped")}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${isTrading ? 'bg-green-300 animate-pulse' : 'bg-slate-300'}`} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">{t("profitToday")}</p>
                  <p className="text-2xl font-bold">
                    {language === 'en' ? '+$247' : language === 'es' ? '+$247' : '+R$ 1.247'}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">{t("tradesToday")}</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Activity className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">{t("hitRate")}</p>
                  <p className="text-2xl font-bold">74%</p>
                </div>
                <Target className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* TradingView Chart */}
        <div className="mb-8">
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                {t("tradingViewChart")}
              </CardTitle>
              <CardDescription>
                {t("realTimeAnalysis")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TradingViewWidget />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trading Controls */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  {t("robotSettings")}
                </CardTitle>
                <CardDescription>
                  {t("configureAiParameters")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="capital">{t("initialCapital")}</Label>
                  <Input
                    id="capital"
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                    placeholder="10000"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>{t("riskLevel")}: {riskLevel[0]}/5</Label>
                  <Slider
                    value={riskLevel}
                    onValueChange={setRiskLevel}
                    max={5}
                    min={1}
                    step={1}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>{t("conservative")}</span>
                    <span>{t("aggressive")}</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="strategy">{t("mainStrategy")}</Label>
                  <select 
                    id="strategy"
                    value={selectedStrategy}
                    onChange={(e) => setSelectedStrategy(e.target.value)}
                    className="w-full mt-2 p-2 border rounded-md bg-white dark:bg-slate-700"
                  >
                    <option value="rsi-macd">{t("strategies")["rsi-macd"]}</option>
                    <option value="moving-averages">{t("strategies")["moving-averages"]}</option>
                    <option value="bollinger">{t("strategies")["bollinger"]}</option>
                    <option value="fibonacci">{t("strategies")["fibonacci"]}</option>
                  </select>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => setIsTrading(!isTrading)}
                    className={`flex-1 ${
                      isTrading 
                        ? 'bg-red-600 hover:bg-red-700' 
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                    } text-white border-0`}
                  >
                    {isTrading ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        {t("stop")}
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        {t("start")}
                      </>
                    )}
                  </Button>
                  <Button variant="outline">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200">{t("demoMode")}</p>
                      <p className="text-yellow-700 dark:text-yellow-300">
                        {t("demoModeDescription")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trading Signals & Backtesting */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="signals" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signals">{t("tradingSignals")}</TabsTrigger>
                <TabsTrigger value="backtest">{t("backtesting")}</TabsTrigger>
              </TabsList>

              <TabsContent value="signals" className="space-y-6">
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      {t("realTimeAiSignals")}
                    </CardTitle>
                    <CardDescription>
                      {t("technicalAnalysisRecommendations")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tradingSignals.map((signal, index) => (
                        <div key={index} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <h3 className="font-bold text-lg">{signal.pair}</h3>
                              <Badge 
                                variant={signal.positive === true ? "default" : signal.positive === false ? "destructive" : "secondary"}
                                className={
                                  signal.positive === true 
                                    ? "bg-green-100 text-green-800 border-green-300" 
                                    : signal.positive === false 
                                      ? "bg-red-100 text-red-800 border-red-300"
                                      : "bg-yellow-100 text-yellow-800 border-yellow-300"
                                }
                              >
                                {signal.action}
                              </Badge>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-slate-500">{t("confidence")}</div>
                              <div className="text-lg font-bold">{signal.confidence}%</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                            <div>
                              <div className="text-xs text-slate-500">{t("currentPrice")}</div>
                              <div className="font-semibold">{signal.price}</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-500">{t("target")}</div>
                              <div className="font-semibold text-green-600">{signal.target}</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-500">{t("stopLoss")}</div>
                              <div className="font-semibold text-red-600">{signal.stopLoss}</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-500">{t("timeframe")}</div>
                              <div className="font-semibold">{signal.timeframe}</div>
                            </div>
                          </div>

                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>{t("analysis")}:</strong> {signal.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="backtest" className="space-y-6">
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                      {t("backtestingResults")}
                    </CardTitle>
                    <CardDescription>
                      {t("historicalPerformance")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {backtestResults.map((result, index) => (
                        <div key={index} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-lg">{result.strategy}</h3>
                            <Badge className="bg-green-100 text-green-800 border-green-300">
                              {result.profit}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div>
                              <div className="text-xs text-slate-500">{t("totalTrades")}</div>
                              <div className="font-semibold">{result.trades}</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-500">{t("hitRate")}</div>
                              <div className="font-semibold text-green-600">{result.winRate}</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-500">{t("maxDrawdown")}</div>
                              <div className="font-semibold text-red-600">{result.maxDrawdown}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-semibold text-blue-800 dark:text-blue-200">{t("reliableBacktesting")}</p>
                          <p className="text-blue-700 dark:text-blue-300">
                            {t("reliableBacktestingDescription")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}