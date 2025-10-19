'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  Wallet,
  Target,
  AlertTriangle,
  Plus,
  Minus,
  BarChart3,
  Activity,
  Eye,
  Settings
} from "lucide-react";
import { Header } from "@/components/header";
import { useLanguage } from "@/lib/language-context";

const portfolioData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    amount: "0.5847",
    value: "R$ 204.789,23",
    change: "+2.5%",
    changeValue: "+R$ 4.987,45",
    positive: true,
    allocation: 45.2,
    color: "from-orange-500 to-yellow-500"
  },
  {
    symbol: "ETH",
    name: "Ethereum", 
    amount: "8.234",
    value: "R$ 152.847,67",
    change: "-1.2%",
    changeValue: "-R$ 1.856,23",
    positive: false,
    allocation: 33.7,
    color: "from-blue-500 to-purple-500"
  },
  {
    symbol: "ADA",
    name: "Cardano",
    amount: "15.847",
    value: "R$ 45.478,89",
    change: "+5.1%",
    changeValue: "+R$ 2.234,12",
    positive: true,
    allocation: 10.0,
    color: "from-green-500 to-emerald-500"
  },
  {
    symbol: "SOL",
    name: "Solana",
    amount: "89.23",
    value: "R$ 50.623,45",
    change: "+3.7%",
    changeValue: "+R$ 1.789,34",
    positive: true,
    allocation: 11.1,
    color: "from-purple-500 to-pink-500"
  }
];

export default function Portfolio() {
  const { t } = useLanguage();
  const [selectedTimeframe, setSelectedTimeframe] = useState("1m");

  const transactions = [
    {
      type: "buy",
      symbol: "BTC",
      amount: "0.0234",
      price: "R$ 348.567,89",
      total: "R$ 8.156,49",
      date: "2024-01-15 14:32",
      status: "completed"
    },
    {
      type: "sell",
      symbol: "ETH",
      amount: "2.1",
      price: "R$ 18.234,56",
      total: "R$ 38.292,58",
      date: "2024-01-15 11:28",
      status: "completed"
    },
    {
      type: "buy",
      symbol: "ADA",
      amount: "1000",
      price: "R$ 2.87",
      total: "R$ 2.870,00",
      date: "2024-01-14 16:45",
      status: "pending"
    }
  ];

  const performanceMetrics = [
    { label: t("totalValue"), value: "R$ 453.739,24", change: "+12.4%", positive: true },
    { label: t("profitLoss"), value: "+R$ 89.234,67", change: "+24.7%", positive: true },
    { label: t("totalROI"), value: "24.5%", change: "+2.1%", positive: true },
    { label: t("bestAsset"), value: "ADA (+45.2%)", change: t("thisMonth"), positive: true }
  ];

  const totalValue = portfolioData.reduce((sum, asset) => sum + parseFloat(asset.value.replace(/[R$\s.]/g, '').replace(',', '.')), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-slate-900 via-green-800 to-emerald-800 dark:from-white dark:via-green-200 dark:to-emerald-200 bg-clip-text text-transparent">
              {t("myPortfolio")}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {t("manageInvestments")}
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              {t("configure")}
            </Button>
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0">
              <Plus className="h-4 w-4 mr-2" />
              {t("addAsset")}
            </Button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {performanceMetrics.map((metric, index) => (
            <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {metric.label}
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {metric.value}
                </div>
                <div className={`text-sm flex items-center ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.positive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                  {metric.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Allocation */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Wallet className="h-5 w-5" />
                      {t("portfolioAllocation")}
                    </CardTitle>
                    <CardDescription>
                      {t("distributionByAsset")}
                    </CardDescription>
                  </div>
                  <Tabs value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                    <TabsList className="grid grid-cols-4">
                      <TabsTrigger value="1d">1D</TabsTrigger>
                      <TabsTrigger value="1w">1S</TabsTrigger>
                      <TabsTrigger value="1m">1M</TabsTrigger>
                      <TabsTrigger value="1y">1A</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolioData.map((asset, index) => (
                    <div key={asset.symbol} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${asset.color} flex items-center justify-center text-white font-bold`}>
                            {asset.symbol[0]}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{asset.symbol}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{asset.name}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{asset.value}</div>
                          <div className={`text-sm ${asset.positive ? 'text-green-600' : 'text-red-600'}`}>
                            {asset.change} ({asset.changeValue})
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <div className="text-xs text-slate-500">{t("amount")}</div>
                          <div className="font-semibold">{asset.amount} {asset.symbol}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500">{t("allocation")}</div>
                          <div className="font-semibold">{asset.allocation}%</div>
                        </div>
                      </div>

                      <div className="mb-2">
                        <div className="flex justify-between text-xs text-slate-500 mb-1">
                          <span>{t("allocation")}</span>
                          <span>{asset.allocation}%</span>
                        </div>
                        <Progress value={asset.allocation} className="h-2" />
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Plus className="h-3 w-3 mr-1" />
                          {t("buyAction")}
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Minus className="h-3 w-3 mr-1" />
                          {t("sellAction")}
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Summary & Transactions */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  {t("summary")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    R$ 453.739,24
                  </div>
                  <div className="text-green-600 font-semibold">
                    +R$ 89.234,67 (+24.5%)
                  </div>
                </div>

                <div className="space-y-3">
                  {portfolioData.map((asset, index) => (
                    <div key={asset.symbol} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${asset.color}`} />
                        <span className="text-sm font-medium">{asset.symbol}</span>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {asset.allocation}%
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-green-800 dark:text-green-200">{t("monthlyGoal")}</span>
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300 mb-2">
                    {t("reach500k")}
                  </div>
                  <Progress value={90.7} className="h-2" />
                  <div className="text-xs text-green-600 mt-1">90.7% {t("completed")}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  {t("recentTransactions")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((tx, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          tx.type === 'buy' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {tx.type === 'buy' ? <Plus className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
                        </div>
                        <div>
                          <div className="font-semibold text-sm">
                            {tx.type === 'buy' ? t("buy") : t("sell")} {tx.symbol}
                          </div>
                          <div className="text-xs text-slate-500">
                            {tx.amount} • {tx.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-sm">{tx.total}</div>
                        <Badge 
                          variant={tx.status === 'completed' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {tx.status === 'completed' ? t("completed") : t("pending")}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  {t("viewAllTransactions")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}