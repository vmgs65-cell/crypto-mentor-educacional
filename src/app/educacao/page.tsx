'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Lock, 
  Star, 
  Clock, 
  Users, 
  Trophy,
  Brain,
  Target,
  Zap,
  Award,
  PlayCircle,
  FileText,
  HelpCircle as QuizIcon,
  MessageCircle,
  TrendingUp
} from "lucide-react";
import { Header } from "@/components/header";
import { useLanguage } from "@/lib/language-context";

export default function Educacao() {
  const { t } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      level: t("beginner"),
      title: t("cryptoFundamentals"),
      description: t("understandCrypto"),
      lessons: 8,
      completed: 6,
      duration: "2h 30min",
      students: "12.5K",
      rating: 4.9,
      locked: false,
      gradient: "from-green-500 to-emerald-600",
      topics: [t("whatIsBitcoinTopic"), t("blockchainExplained"), t("typesOfCryptos"), t("cryptoHistory")]
    },
    {
      level: t("beginner"),
      title: t("walletsAndSecurity"),
      description: t("learnWallets"),
      lessons: 6,
      completed: 3,
      duration: "1h 45min",
      students: "10.2K",
      rating: 4.8,
      locked: false,
      gradient: "from-blue-500 to-cyan-600",
      topics: [t("walletTypes"), t("publicPrivateKeys"), t("backupRecovery"), t("bestPractices")]
    },
    {
      level: t("intermediate"),
      title: t("tradingAndExchanges"),
      description: t("masterExchanges"),
      lessons: 10,
      completed: 0,
      duration: "4h 15min",
      students: "8.7K",
      rating: 4.9,
      locked: false,
      gradient: "from-purple-500 to-pink-600",
      topics: [t("choosingExchanges"), t("orderTypes"), t("marketAnalysisBasic"), t("riskManagement")]
    },
    {
      level: t("intermediate"),
      title: t("technicalAnalysis"),
      description: t("learnCharts"),
      lessons: 12,
      completed: 0,
      duration: "5h 30min",
      students: "6.3K",
      rating: 4.7,
      locked: true,
      gradient: "from-orange-500 to-red-600",
      topics: [t("candlesticks"), t("supportResistance"), t("movingAverages"), t("rsiMacd")]
    },
    {
      level: t("advanced"),
      title: t("defiYieldFarming"),
      description: t("exploreDefi"),
      lessons: 15,
      completed: 0,
      duration: "7h 20min",
      students: "4.1K",
      rating: 4.8,
      locked: true,
      gradient: "from-indigo-500 to-purple-600",
      topics: [t("defiProtocols"), t("liquidityPools"), t("yieldFarming"), t("impermanentLoss")]
    },
    {
      level: t("advanced"),
      title: t("advancedStrategies"),
      description: t("professionalTechniques"),
      lessons: 18,
      completed: 0,
      duration: "8h 45min",
      students: "2.8K",
      rating: 4.9,
      locked: true,
      gradient: "from-pink-500 to-rose-600",
      topics: [t("arbitrage"), t("scalping"), t("swingTrading"), t("portfolioManagement")]
    }
  ];

  const achievements = [
    { title: t("firstStep"), description: t("completeFirstLesson"), icon: Trophy, unlocked: true },
    { title: t("dedicatedStudent"), description: t("complete10Lessons"), icon: BookOpen, unlocked: true },
    { title: t("quizMaster"), description: t("score90Percent"), icon: Target, unlocked: false },
    { title: t("beginnerTrader"), description: t("completeTradingModule"), icon: TrendingUp, unlocked: false }
  ];

  const filteredModules = selectedLevel === "all" 
    ? modules 
    : modules.filter(module => module.level.toLowerCase() === selectedLevel.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            {t("cryptoAcademy")}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t("learnCryptoDescription")}
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">{t("completedLessons")}</p>
                  <p className="text-3xl font-bold">9/69</p>
                </div>
                <BookOpen className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">{t("studiedHours")}</p>
                  <p className="text-3xl font-bold">4.2h</p>
                </div>
                <Clock className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">{t("currentStreak")}</p>
                  <p className="text-3xl font-bold">7 {t("days")}</p>
                </div>
                <Zap className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">{t("achievements")}</p>
                  <p className="text-3xl font-bold">2/12</p>
                </div>
                <Award className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Tabs */}
        <Tabs value={selectedLevel} onValueChange={setSelectedLevel} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
            <TabsTrigger value="all">{t("all")}</TabsTrigger>
            <TabsTrigger value={t("beginner").toLowerCase()}>{t("beginner")}</TabsTrigger>
            <TabsTrigger value={t("intermediate").toLowerCase()}>{t("intermediate")}</TabsTrigger>
            <TabsTrigger value={t("advanced").toLowerCase()}>{t("advanced")}</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredModules.map((module, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105 ${
                module.locked ? "opacity-60" : ""
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant={module.locked ? "secondary" : "default"}
                    className={`${!module.locked ? `bg-gradient-to-r ${module.gradient} text-white border-0` : ''}`}
                  >
                    {module.level}
                  </Badge>
                  {module.locked && <Lock className="h-4 w-4 text-slate-400" />}
                </div>

                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${module.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <BookOpen className="h-7 w-7" />
                </div>

                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {module.title}
                </CardTitle>
                
                <CardDescription className="text-slate-600 dark:text-slate-300 text-base mb-4">
                  {module.description}
                </CardDescription>

                {/* Module Stats */}
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    {module.lessons} {t("lessons")}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {module.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {module.students}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(module.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {module.rating}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                {/* Progress Bar */}
                {!module.locked && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {t("progress")}
                      </span>
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                        {module.completed}/{module.lessons}
                      </span>
                    </div>
                    <Progress 
                      value={(module.completed / module.lessons) * 100} 
                      className="h-2"
                    />
                  </div>
                )}

                {/* Topics Preview */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {t("youWillLearn")}
                  </p>
                  <ul className="space-y-1">
                    {module.topics.slice(0, 3).map((topic, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                    {module.topics.length > 3 && (
                      <li className="text-sm text-slate-500 dark:text-slate-500 ml-5">
                        +{module.topics.length - 3} {t("topics")}
                      </li>
                    )}
                  </ul>
                </div>

                <Button
                  className={`w-full py-6 text-base font-semibold ${
                    module.locked 
                      ? 'bg-slate-200 text-slate-500 cursor-not-allowed' 
                      : module.completed > 0
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0'
                        : `bg-gradient-to-r ${module.gradient} hover:opacity-90 text-white border-0`
                  }`}
                  disabled={module.locked}
                >
                  {module.locked ? (
                    <>
                      <Lock className="h-4 w-4 mr-2" />
                      {t("locked")}
                    </>
                  ) : module.completed > 0 ? (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      {t("continue")}
                    </>
                  ) : (
                    <>
                      <PlayCircle className="h-4 w-4 mr-2" />
                      {t("startLesson")}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <Card className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Trophy className="h-6 w-6 text-yellow-500" />
              {t("yourAchievements")}
            </CardTitle>
            <CardDescription>
              {t("unlockAchievements")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    achievement.unlocked 
                      ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300 dark:from-yellow-900/20 dark:to-orange-900/20 dark:border-yellow-700' 
                      : 'bg-slate-50 border-slate-200 dark:bg-slate-800 dark:border-slate-700 opacity-60'
                  }`}
                >
                  <achievement.icon className={`h-8 w-8 mb-2 ${achievement.unlocked ? 'text-yellow-600' : 'text-slate-400'}`} />
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Brain className="h-6 w-6 text-blue-600" />
                {t("needHelp")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("aiAssistantAvailable")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  {t("aiChat")}
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {t("glossary")}
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <QuizIcon className="h-4 w-4" />
                  {t("quickQuiz")}
                </Button>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 py-6">
                <Play className="h-5 w-5 mr-2" />
                {t("startNextLesson")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}