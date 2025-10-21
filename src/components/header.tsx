'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { Language } from "@/lib/translations";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Gerenciamento de tema simplificado e otimizado
  useEffect(() => {
    let isMounted = true;
    
    const initializeTheme = () => {
      if (!isMounted) return;
      
      setMounted(true);
      
      // Verifica tema inicial de forma mais robusta
      try {
        if (typeof window !== 'undefined') {
          const savedTheme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
          
          if (isMounted) {
            setIsDark(shouldBeDark);
            document.documentElement.classList.toggle('dark', shouldBeDark);
          }
        }
      } catch (error) {
        // Fallback para tema claro se houver erro
        if (isMounted) {
          setIsDark(false);
          if (typeof document !== 'undefined') {
            document.documentElement.classList.remove('dark');
          }
        }
      }
    };

    initializeTheme();
    
    return () => {
      isMounted = false;
    };
  }, []); // Array vazio - executa apenas uma vez

  const toggleTheme = () => {
    if (!mounted) return;
    
    try {
      const newTheme = !isDark;
      setIsDark(newTheme);
      
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', newTheme);
      }
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      }
    } catch (error) {
      // Ignora erros de localStorage
    }
  };

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("education"), href: "/educacao" },
    { name: t("quotes"), href: "/cotacoes" },
    { name: t("trading"), href: "/trading" },
    { name: t("portfolio"), href: "/portfolio" },
    { name: t("chat"), href: "/chat" },
  ];

  const languages = [
    { code: "pt" as Language, name: "Português", flag: "🇧🇷" },
    { code: "en" as Language, name: "English", flag: "🇺🇸" },
    { code: "es" as Language, name: "Español", flag: "🇪🇸" },
  ];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsLanguageOpen(false);
  };

  // Skeleton loading durante hidratação
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">₿</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Crypto Mentor Brasil
                </h1>
                <p className="text-xs text-slate-600 dark:text-slate-400 -mt-1">
                  Educação Premium em Crypto
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
              <div className="w-20 h-10 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">₿</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Crypto Mentor Brasil
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400 -mt-1">
                {t("premiumEducation")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Plan Badge */}
            <Badge 
              variant="outline" 
              className="hidden sm:flex bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-300 dark:border-green-700 text-green-700 dark:text-green-400"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
              {t("basicPlan")}
            </Badge>

            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-3 py-2 h-10"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">
                  {languages.find(lang => lang.code === language)?.flag}
                </span>
                <ChevronDown className="w-3 h-3" />
              </Button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-3 ${
                        language === lang.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-10 h-10 p-0"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Login Button */}
            <Button 
              variant="outline" 
              className="hidden sm:flex border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              {t("login")}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden w-10 h-10 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-800">
            <nav className="flex flex-col gap-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <Button 
                  variant="outline" 
                  className="w-full border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  {t("login")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}