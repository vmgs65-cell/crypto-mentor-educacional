'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  BookOpen, 
  MessageCircle, 
  BarChart3, 
  DollarSign, 
  Shield,
  Play,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Brain,
  Target,
  Award,
  Users,
  Sparkles
} from "lucide-react";
import { Header } from "@/components/header";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: BookOpen,
      title: t("interactiveEducation"),
      description: t("interactiveEducationDesc"),
      highlights: [t("levelSystem"), t("quizFeedback"), t("aiChatPortuguese")],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: t("realTimeQuotes"),
      description: t("realTimeQuotesDesc"),
      highlights: [t("coinMarketCapIntegration"), t("bloombergNews"), t("tradingViewCharts")],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Brain,
      title: t("advancedAiTrader"),
      description: t("advancedAiTraderDesc"),
      highlights: [t("demoMode"), t("backtesting"), t("riskAdjustment")],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: t("multilingualTranslator"),
      description: t("multilingualTranslatorDesc"),
      highlights: [t("englishSpanishFrench"), t("contextualTranslation"), t("blockchainDefi")],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: t("premiumSecurity"),
      description: t("premiumSecurityDesc"),
      highlights: [t("blockchainSecurity"), t("riskManagement"), t("bestPractices")],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: DollarSign,
      title: t("flexiblePayments"),
      description: t("flexiblePaymentsDesc"),
      highlights: [t("bitcoinEthereumUsdt"), t("stripePaypal"), t("automaticConversion")],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "50K+", label: t("activeStudents"), icon: Users },
    { number: "95%", label: t("successRate"), icon: Target },
    { number: "24/7", label: t("aiSupport"), icon: Zap },
    { number: "100+", label: t("premiumClasses"), icon: Award }
  ];

  const plans = [
    {
      id: 'basic',
      name: t("basic"),
      price: t("free"),
      description: t("perfectToStart"),
      features: [
        t("completeBeginnerModule"),
        t("basicQuotes"),
        t("limitedAiSupport"),
        t("discordCommunity")
      ],
      popular: false,
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      id: 'pro',
      name: t("pro"),
      price: 'R$ 49,70',
      period: '/mês',
      description: t("idealForSeriousTraders"),
      features: [
        t("completeEducation"),
        t("unlimitedQuotesNews"),
        t("basicAiTrader"),
        t("limitedBacktesting"),
        t("prioritySupport"),
        t("monthlyWebinars")
      ],
      popular: true,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'premium',
      name: t("premium"),
      price: 'R$ 199,70',
      period: '/mês',
      description: t("forAdvancedProfessionals"),
      features: [
        t("fullPlatformAccess"),
        t("advancedAiTraderFeature"),
        t("completeBacktesting"),
        t("portfolioAnalysis"),
        t("vipSupport24_7"),
        t("weeklyWebinars"),
        t("oneOnOneConsulting"),
        t("developerApi")
      ],
      popular: false,
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
              <Sparkles className="h-3 w-3 mr-1" />
              {t("platformNumber1")}
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              {t("masterCryptoWorld")}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("cryptocurrencies")}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {t("heroDescription")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg">
                <Play className="h-5 w-5 mr-2" />
                {t("startFree")}
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2">
                {t("watchLiveDemo")}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-3">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.number}</div>
                  <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              {t("revolutionaryFeatures")}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t("featuresDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105">
                <CardHeader className="pb-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              {t("premiumPlans")}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t("pricingDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer border-2 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/25' 
                    : selectedPlan === plan.id 
                      ? 'border-purple-500 shadow-xl' 
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    <Star className="h-4 w-4 inline mr-1" />
                    {t("mostPopular")}
                  </div>
                )}
                
                <CardHeader className={plan.popular ? "pt-12" : "pt-6"}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} text-white mb-4 mx-auto`}>
                    <Award className="h-8 w-8" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-center text-slate-900 dark:text-white">
                    {plan.name}
                  </CardTitle>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-900 dark:text-white">
                      {plan.price}
                      {plan.period && <span className="text-lg text-slate-600 dark:text-slate-400">{plan.period}</span>}
                    </div>
                    <CardDescription className="mt-2 text-base">
                      {plan.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-6 text-lg font-semibold ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0' 
                        : plan.id === 'basic'
                          ? 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300'
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0'
                    }`}
                  >
                    {plan.id === 'basic' ? t("startFreeAction") : `${t("subscribePlan")} ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              💳 {t("acceptedPayments")}
            </p>
            <Badge variant="outline" className="text-green-600 border-green-600">
              <Shield className="h-3 w-3 mr-1" />
              {t("moneyBackGuarantee")}
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("readyToTransform")}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t("ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold">
              <Zap className="h-5 w-5 mr-2" />
              {t("startNowFree")}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              {t("talkToSpecialist")}
              <MessageCircle className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}