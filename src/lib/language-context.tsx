'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');
  const [isHydrated, setIsHydrated] = useState(false);

  // Hidratação segura e otimizada
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHydrated(true);
      
      // Carrega idioma salvo apenas após hidratação
      if (typeof window !== 'undefined') {
        try {
          const savedLanguage = window.localStorage.getItem('language') as Language;
          if (savedLanguage && translations[savedLanguage]) {
            setLanguage(savedLanguage);
          }
        } catch (error) {
          // Ignora erros de localStorage silenciosamente
          console.warn('Erro ao carregar idioma do localStorage:', error);
        }
      }
    }, 100); // Pequeno delay para evitar problemas de hidratação

    return () => clearTimeout(timer);
  }, []);

  // Salva idioma no localStorage de forma segura
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    
    if (isHydrated && typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('language', newLanguage);
      } catch (error) {
        // Ignora erros de localStorage silenciosamente
        console.warn('Erro ao salvar idioma no localStorage:', error);
      }
    }
  };

  // Função de tradução com fallback robusto
  const t = (key: TranslationKey): string => {
    if (!isHydrated) {
      // Durante SSR, usa português como padrão
      return translations.pt[key] || key;
    }
    
    try {
      const translation = translations[language]?.[key] || translations.pt[key] || key;
      return translation;
    } catch (error) {
      console.warn(`Erro na tradução para chave "${key}":`, error);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleLanguageChange, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}