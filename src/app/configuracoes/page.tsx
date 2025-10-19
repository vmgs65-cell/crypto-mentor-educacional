'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  CreditCard,
  Globe,
  Smartphone,
  Mail,
  Key,
  Trash2,
  Download,
  Upload,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { Header } from "@/components/header";

export default function ConfigPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    trading: true,
    news: false
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    biometric: true,
    sessionTimeout: "30"
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-slate-500 to-slate-600 text-white mb-4">
            <Settings className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
            Configurações
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Personalize sua experiência na plataforma Crypto Mentor Brasil
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
              <TabsTrigger value="security">Segurança</TabsTrigger>
              <TabsTrigger value="billing">Cobrança</TabsTrigger>
              <TabsTrigger value="preferences">Preferências</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Informações Pessoais
                  </CardTitle>
                  <CardDescription>
                    Gerencie suas informações de perfil e dados pessoais
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                      JD
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Alterar Foto
                      </Button>
                      <p className="text-sm text-slate-500">JPG, PNG ou GIF. Máximo 2MB.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">Nome</Label>
                      <Input id="firstName" defaultValue="João" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input id="lastName" defaultValue="Silva" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="joao@email.com" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" defaultValue="+55 11 99999-9999" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="country">País</Label>
                      <select className="w-full mt-2 p-2 border rounded-md bg-white dark:bg-slate-700">
                        <option value="BR">Brasil</option>
                        <option value="US">Estados Unidos</option>
                        <option value="UK">Reino Unido</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timezone">Fuso Horário</Label>
                      <select className="w-full mt-2 p-2 border rounded-md bg-white dark:bg-slate-700">
                        <option value="America/Sao_Paulo">São Paulo (GMT-3)</option>
                        <option value="America/New_York">Nova York (GMT-5)</option>
                        <option value="Europe/London">Londres (GMT+0)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                      Salvar Alterações
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Preferências de Notificação
                  </CardTitle>
                  <CardDescription>
                    Configure como e quando você quer receber notificações
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium">Notificações por Email</p>
                          <p className="text-sm text-slate-500">Receba atualizações importantes por email</p>
                        </div>
                      </div>
                      <Switch 
                        checked={notifications.email}
                        onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-5 w-5 text-green-500" />
                        <div>
                          <p className="font-medium">Notificações Push</p>
                          <p className="text-sm text-slate-500">Receba alertas no seu dispositivo</p>
                        </div>
                      </div>
                      <Switch 
                        checked={notifications.push}
                        onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-5 w-5 text-purple-500" />
                        <div>
                          <p className="font-medium">SMS</p>
                          <p className="text-sm text-slate-500">Alertas importantes via SMS</p>
                        </div>
                      </div>
                      <Switch 
                        checked={notifications.sms}
                        onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Sinais de Trading</p>
                          <p className="text-sm text-slate-500">Alertas da IA sobre oportunidades</p>
                        </div>
                      </div>
                      <Switch 
                        checked={notifications.trading}
                        onCheckedChange={(checked) => setNotifications({...notifications, trading: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-red-500" />
                        <div>
                          <p className="font-medium">Notícias do Mercado</p>
                          <p className="text-sm text-slate-500">Atualizações sobre o mercado cripto</p>
                        </div>
                      </div>
                      <Switch 
                        checked={notifications.news}
                        onCheckedChange={(checked) => setNotifications({...notifications, news: checked})}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Segurança da Conta
                  </CardTitle>
                  <CardDescription>
                    Proteja sua conta com configurações de segurança avançadas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Key className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium">Autenticação de Dois Fatores (2FA)</p>
                          <p className="text-sm text-slate-500">Adicione uma camada extra de segurança</p>
                        </div>
                      </div>
                      <Switch 
                        checked={security.twoFactor}
                        onCheckedChange={(checked) => setSecurity({...security, twoFactor: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-5 w-5 text-green-500" />
                        <div>
                          <p className="font-medium">Login Biométrico</p>
                          <p className="text-sm text-slate-500">Use impressão digital ou Face ID</p>
                        </div>
                      </div>
                      <Switch 
                        checked={security.biometric}
                        onCheckedChange={(checked) => setSecurity({...security, biometric: checked})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="sessionTimeout">Timeout da Sessão (minutos)</Label>
                    <Input 
                      id="sessionTimeout" 
                      value={security.sessionTimeout}
                      onChange={(e) => setSecurity({...security, sessionTimeout: e.target.value})}
                      className="mt-2 max-w-xs" 
                    />
                  </div>

                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Key className="h-4 w-4 mr-2" />
                      Alterar Senha
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar Códigos de Backup
                    </Button>
                  </div>

                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-yellow-800 dark:text-yellow-200">Importante</p>
                        <p className="text-yellow-700 dark:text-yellow-300">
                          Mantenha suas configurações de segurança sempre atualizadas para proteger seus investimentos.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing" className="space-y-6">
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Plano e Cobrança
                  </CardTitle>
                  <CardDescription>
                    Gerencie seu plano e métodos de pagamento
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-green-800 dark:text-green-200">Plano Básico</h3>
                        <p className="text-green-600 dark:text-green-400">Gratuito</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-300">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Ativo
                      </Badge>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                      Você está no plano gratuito. Faça upgrade para desbloquear recursos premium.
                    </p>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                      Fazer Upgrade
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Métodos de Pagamento</h4>
                    <div className="space-y-3">
                      <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-blue-500" />
                            <div>
                              <p className="font-medium">Cartão de Crédito</p>
                              <p className="text-sm text-slate-500">**** **** **** 1234</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Editar</Button>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Adicionar Método de Pagamento
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Histórico de Cobrança</h4>
                    <div className="text-center py-8 text-slate-500">
                      <p>Nenhuma cobrança encontrada</p>
                      <p className="text-sm">Você está no plano gratuito</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-6">
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Preferências Gerais
                  </CardTitle>
                  <CardDescription>
                    Personalize sua experiência na plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="language">Idioma</Label>
                      <select className="w-full mt-2 p-2 border rounded-md bg-white dark:bg-slate-700">
                        <option value="pt-BR">Português (Brasil)</option>
                        <option value="en-US">English (US)</option>
                        <option value="es-ES">Español</option>
                        <option value="fr-FR">Français</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="currency">Moeda Padrão</Label>
                      <select className="w-full mt-2 p-2 border rounded-md bg-white dark:bg-slate-700">
                        <option value="BRL">Real Brasileiro (R$)</option>
                        <option value="USD">Dólar Americano ($)</option>
                        <option value="EUR">Euro (€)</option>
                        <option value="BTC">Bitcoin (₿)</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="theme">Tema</Label>
                      <select className="w-full mt-2 p-2 border rounded-md bg-white dark:bg-slate-700">
                        <option value="system">Sistema</option>
                        <option value="light">Claro</option>
                        <option value="dark">Escuro</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="dateFormat">Formato de Data</Label>
                      <select className="w-full mt-2 p-2 border rounded-md bg-white dark:bg-slate-700">
                        <option value="DD/MM/YYYY">DD/MM/AAAA</option>
                        <option value="MM/DD/YYYY">MM/DD/AAAA</option>
                        <option value="YYYY-MM-DD">AAAA-MM-DD</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4 text-red-600">Zona de Perigo</h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start text-red-600 border-red-300 hover:bg-red-50">
                        <Download className="h-4 w-4 mr-2" />
                        Exportar Dados
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-red-600 border-red-300 hover:bg-red-50">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Excluir Conta
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}