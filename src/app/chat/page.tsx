'use client'

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Brain, 
  Zap, 
  MessageCircle,
  Globe,
  TrendingUp,
  BookOpen,
  Shield,
  DollarSign,
  Mic,
  Image,
  Paperclip,
  MoreHorizontal
} from "lucide-react";
import { Header } from "@/components/header";
import { useLanguage } from "@/lib/language-context";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  type?: 'text' | 'suggestion' | 'analysis';
}

export default function Chat() {
  const { t, language } = useLanguage();
  
  const quickSuggestions = [
    { text: t("whatIsBitcoin"), icon: DollarSign, category: "Básico" },
    { text: t("howToBuyFirstCrypto"), icon: TrendingUp, category: "Iniciante" },
    { text: t("bestWallet"), icon: Shield, category: "Segurança" },
    { text: t("btcTechnicalAnalysis"), icon: Brain, category: "Análise" },
    { text: t("howDeFiWorks"), icon: Sparkles, category: "Avançado" },
    { text: t("tradingStrategies"), icon: BookOpen, category: "Trading" }
  ];

  const aiCapabilities = [
    { title: t("personalizedEducation"), description: t("learnAtYourPace"), icon: BookOpen },
    { title: t("marketAnalysis"), description: t("realTimeInsights"), icon: TrendingUp },
    { title: t("support24_7"), description: t("alwaysAvailable"), icon: Zap },
    { title: t("multilingual"), description: t("nativePortuguese"), icon: Globe }
  ];

  // Função para obter mensagem inicial da IA no idioma correto
  const getInitialMessage = () => {
    const greetings = {
      pt: `Olá! 👋 Sou o **${t("cryptoMentorAI")}**, seu assistente especializado em criptomoedas. Estou aqui para ajudar você a:

• Aprender sobre Bitcoin, Ethereum e outras cryptos
• Entender análise técnica e fundamentalista
• Descobrir estratégias de trading seguras
• Navegar no mundo DeFi com confiança

Como posso ajudar você hoje?`,
      en: `Hello! 👋 I'm **${t("cryptoMentorAI")}**, your specialized cryptocurrency assistant. I'm here to help you:

• Learn about Bitcoin, Ethereum and other cryptos
• Understand technical and fundamental analysis
• Discover safe trading strategies
• Navigate the DeFi world with confidence

How can I help you today?`,
      es: `¡Hola! 👋 Soy **${t("cryptoMentorAI")}**, tu asistente especializado en criptomonedas. Estoy aquí para ayudarte a:

• Aprender sobre Bitcoin, Ethereum y otras cryptos
• Entender análisis técnico y fundamental
• Descubrir estrategias de trading seguras
• Navegar el mundo DeFi con confianza

¿Cómo puedo ayudarte hoy?`
    };
    return greetings[language] || greetings.pt;
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: getInitialMessage(),
      role: 'assistant',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Atualizar mensagem inicial quando idioma mudar
  useEffect(() => {
    setMessages([
      {
        id: '1',
        content: getInitialMessage(),
        role: 'assistant',
        timestamp: new Date(),
        type: 'text'
      }
    ]);
  }, [language]);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Função para gerar resposta da IA no idioma correto
  const generateAIResponse = (textToSend: string) => {
    const lowerText = textToSend.toLowerCase();
    
    const responses = {
      pt: {
        bitcoin: `**Bitcoin (BTC)** é a primeira e maior criptomoeda do mundo! 🚀

**Pontos principais:**
• Criado em 2009 por Satoshi Nakamoto
• Limitado a 21 milhões de moedas
• Funciona como "ouro digital"
• Preço atual: ~R$ 350.000

**Para iniciantes:**
1. Comece estudando sobre blockchain
2. Use exchanges confiáveis (Binance, Coinbase)
3. Nunca invista mais do que pode perder

Quer saber mais sobre como comprar seu primeiro Bitcoin?`,
        wallet: `**Carteiras de Criptomoedas** são essenciais para sua segurança! 🔐

**Tipos principais:**
• **Hot Wallets**: Online, práticas (MetaMask, Trust Wallet)
• **Cold Wallets**: Offline, mais seguras (Ledger, Trezor)
• **Paper Wallets**: Chaves impressas no papel

**Recomendações:**
✅ Para iniciantes: Trust Wallet ou MetaMask
✅ Para valores altos: Ledger Nano S/X
✅ Sempre faça backup das seed phrases

**Nunca compartilhe suas chaves privadas!**`,
        defi: `**DeFi (Finanças Descentralizadas)** é o futuro das finanças! 🌟

**O que é:**
• Serviços financeiros sem bancos tradicionais
• Baseado em smart contracts
• Você mantém controle total dos seus ativos

**Principais protocolos:**
• **Uniswap**: Troca descentralizada
• **Aave**: Empréstimos e rendimentos
• **Compound**: Yield farming
• **MakerDAO**: Stablecoin DAI

**Cuidados:**
⚠️ Riscos de impermanent loss
⚠️ Taxas de gas podem ser altas
⚠️ Sempre pesquise antes de investir`,
        trading: `**Estratégias de Trading** para maximizar seus lucros! 📈

**Para iniciantes:**
• **DCA (Dollar Cost Average)**: Compre regularmente
• **HODL**: Mantenha a longo prazo
• **Stop Loss**: Limite suas perdas

**Intermediário:**
• **Swing Trading**: Aproveite tendências
• **Análise Técnica**: RSI, MACD, Médias Móveis
• **Suporte e Resistência**: Identifique pontos-chave

**Regras de ouro:**
🎯 Nunca invista mais de 5% em uma operação
🎯 Sempre tenha um plano de saída
🎯 Controle suas emoções (medo e ganância)`,
        default: `Entendi sua pergunta sobre "${textToSend}"! 🤖

Como especialista em criptomoedas, posso ajudar você com:

• **Educação**: Conceitos básicos até avançados
• **Análise**: Mercado e oportunidades
• **Segurança**: Melhores práticas
• **Trading**: Estratégias e indicadores
• **DeFi**: Protocolos e yield farming

Poderia ser mais específico sobre o que gostaria de aprender? Assim posso dar uma resposta mais detalhada e personalizada para você! 💡`
      },
      en: {
        bitcoin: `**Bitcoin (BTC)** is the world's first and largest cryptocurrency! 🚀

**Key points:**
• Created in 2009 by Satoshi Nakamoto
• Limited to 21 million coins
• Works as "digital gold"
• Current price: ~$70,000

**For beginners:**
1. Start by studying blockchain
2. Use reliable exchanges (Binance, Coinbase)
3. Never invest more than you can lose

Want to know more about how to buy your first Bitcoin?`,
        wallet: `**Cryptocurrency Wallets** are essential for your security! 🔐

**Main types:**
• **Hot Wallets**: Online, practical (MetaMask, Trust Wallet)
• **Cold Wallets**: Offline, more secure (Ledger, Trezor)
• **Paper Wallets**: Keys printed on paper

**Recommendations:**
✅ For beginners: Trust Wallet or MetaMask
✅ For high amounts: Ledger Nano S/X
✅ Always backup your seed phrases

**Never share your private keys!**`,
        defi: `**DeFi (Decentralized Finance)** is the future of finance! 🌟

**What it is:**
• Financial services without traditional banks
• Based on smart contracts
• You maintain full control of your assets

**Main protocols:**
• **Uniswap**: Decentralized exchange
• **Aave**: Lending and yields
• **Compound**: Yield farming
• **MakerDAO**: DAI stablecoin

**Cautions:**
⚠️ Impermanent loss risks
⚠️ Gas fees can be high
⚠️ Always research before investing`,
        trading: `**Trading Strategies** to maximize your profits! 📈

**For beginners:**
• **DCA (Dollar Cost Average)**: Buy regularly
• **HODL**: Hold long term
• **Stop Loss**: Limit your losses

**Intermediate:**
• **Swing Trading**: Take advantage of trends
• **Technical Analysis**: RSI, MACD, Moving Averages
• **Support and Resistance**: Identify key points

**Golden rules:**
🎯 Never invest more than 5% in one trade
🎯 Always have an exit plan
🎯 Control your emotions (fear and greed)`,
        default: `I understand your question about "${textToSend}"! 🤖

As a cryptocurrency specialist, I can help you with:

• **Education**: Basic to advanced concepts
• **Analysis**: Market and opportunities
• **Security**: Best practices
• **Trading**: Strategies and indicators
• **DeFi**: Protocols and yield farming

Could you be more specific about what you'd like to learn? This way I can give you a more detailed and personalized answer! 💡`
      },
      es: {
        bitcoin: `**Bitcoin (BTC)** es la primera y más grande criptomoneda del mundo! 🚀

**Puntos clave:**
• Creado en 2009 por Satoshi Nakamoto
• Limitado a 21 millones de monedas
• Funciona como "oro digital"
• Precio actual: ~$70,000

**Para principiantes:**
1. Comienza estudiando blockchain
2. Usa exchanges confiables (Binance, Coinbase)
3. Nunca inviertas más de lo que puedes perder

¿Quieres saber más sobre cómo comprar tu primer Bitcoin?`,
        wallet: `**Billeteras de Criptomonedas** son esenciales para tu seguridad! 🔐

**Tipos principales:**
• **Hot Wallets**: Online, prácticas (MetaMask, Trust Wallet)
• **Cold Wallets**: Offline, más seguras (Ledger, Trezor)
• **Paper Wallets**: Claves impresas en papel

**Recomendaciones:**
✅ Para principiantes: Trust Wallet o MetaMask
✅ Para cantidades altas: Ledger Nano S/X
✅ Siempre haz backup de tus seed phrases

**¡Nunca compartas tus claves privadas!**`,
        defi: `**DeFi (Finanzas Descentralizadas)** es el futuro de las finanzas! 🌟

**Qué es:**
• Servicios financieros sin bancos tradicionales
• Basado en smart contracts
• Mantienes control total de tus activos

**Principales protocolos:**
• **Uniswap**: Intercambio descentralizado
• **Aave**: Préstamos y rendimientos
• **Compound**: Yield farming
• **MakerDAO**: Stablecoin DAI

**Precauciones:**
⚠️ Riesgos de pérdida impermanente
⚠️ Las tarifas de gas pueden ser altas
⚠️ Siempre investiga antes de invertir`,
        trading: `**Estrategias de Trading** para maximizar tus ganancias! 📈

**Para principiantes:**
• **DCA (Dollar Cost Average)**: Compra regularmente
• **HODL**: Mantén a largo plazo
• **Stop Loss**: Limita tus pérdidas

**Intermedio:**
• **Swing Trading**: Aprovecha tendencias
• **Análisis Técnico**: RSI, MACD, Medias Móviles
• **Soporte y Resistencia**: Identifica puntos clave

**Reglas de oro:**
🎯 Nunca inviertas más del 5% en una operación
🎯 Siempre ten un plan de salida
🎯 Controla tus emociones (miedo y codicia)`,
        default: `¡Entiendo tu pregunta sobre "${textToSend}"! 🤖

Como especialista en criptomonedas, puedo ayudarte con:

• **Educación**: Conceptos básicos hasta avanzados
• **Análisis**: Mercado y oportunidades
• **Seguridad**: Mejores prácticas
• **Trading**: Estrategias e indicadores
• **DeFi**: Protocolos y yield farming

¿Podrías ser más específico sobre lo que te gustaría aprender? ¡Así puedo darte una respuesta más detallada y personalizada! 💡`
      }
    };

    const langResponses = responses[language] || responses.pt;
    
    if (lowerText.includes('bitcoin') || lowerText.includes('btc')) {
      return langResponses.bitcoin;
    } else if (lowerText.includes('carteira') || lowerText.includes('wallet') || lowerText.includes('billetera')) {
      return langResponses.wallet;
    } else if (lowerText.includes('defi')) {
      return langResponses.defi;
    } else if (lowerText.includes('trading') || lowerText.includes('estratégia') || lowerText.includes('estrategia')) {
      return langResponses.trading;
    } else {
      return langResponses.default;
    }
  };

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: textToSend,
      role: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setIsTyping(true);

    // Simular resposta da IA com delay realista
    setTimeout(() => {
      setIsTyping(false);
      
      const aiResponse = generateAIResponse(textToSend);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500 + Math.random() * 1000); // Delay variável para parecer mais natural
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
            <Brain className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            {t("cryptoMentorAI")}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t("aiAssistantDescription")}
          </p>
        </div>

        {/* AI Capabilities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {aiCapabilities.map((capability, index) => (
            <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 text-center">
              <CardContent className="p-4">
                <capability.icon className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
                  {capability.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <Card className="h-[600px] flex flex-col bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="border-b border-slate-200 dark:border-slate-700">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-900 dark:text-white">{t("cryptoMentorAI")}</span>
                    <Badge className="bg-green-100 text-green-700 border-green-300">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-1 animate-pulse" />
                      {t("online")}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {t("cryptoSpecialist")}
                  </p>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
                <div className="space-y-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-4 ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}
                      
                      <div
                        className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white'
                        }`}
                      >
                        <div className="text-sm leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </div>
                        <p className={`text-xs mt-2 ${
                          message.role === 'user' 
                            ? 'text-blue-100' 
                            : 'text-slate-500 dark:text-slate-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString(language === 'pt' ? 'pt-BR' : language === 'en' ? 'en-US' : 'es-ES', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>

                      {message.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex gap-4 justify-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-4 py-3">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Quick Suggestions */}
              {messages.length === 1 && (
                <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    💡 {t("quickSuggestions")}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {quickSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="justify-start text-left h-auto py-2 px-3"
                        onClick={() => handleSuggestionClick(suggestion.text)}
                      >
                        <suggestion.icon className="h-3 w-3 mr-2 flex-shrink-0" />
                        <span className="text-xs truncate">{suggestion.text}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Input
                      ref={inputRef}
                      placeholder={t("typeYourQuestion")}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      disabled={isLoading}
                      className="pr-24 py-6 text-base border-2 focus:border-blue-500"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Mic className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleSend()} 
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 py-6"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between mt-3 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-4">
                    <span>🤖 {t("aiTrainedPortuguese")}</span>
                    <span>🔒 {t("privateSecureChats")}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Text */}
          <div className="text-center mt-6">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              💎 {t("specializedCrypto")}
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-500">
              <span>✅ {t("personalizedEducationFeature")}</span>
              <span>✅ {t("marketAnalysisFeature")}</span>
              <span>✅ {t("tradingStrategiesFeature")}</span>
              <span>✅ {t("defiSupport")}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}