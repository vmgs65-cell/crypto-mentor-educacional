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

  // Hidratação segura e otimizada - executa apenas uma vez
  useEffect(() => {
    let isMounted = true;
    
    const initializeLanguage = () => {
      if (!isMounted) return;
      
      setIsHydrated(true);
      
      // Carrega idioma salvo apenas após hidratação
      if (typeof window !== 'undefined') {
        try {
          const savedLanguage = window.localStorage.getItem('language') as Language;
          if (savedLanguage && translations[savedLanguage] && isMounted) {
            setLanguage(savedLanguage);
          }
        } catch (error) {
          // Ignora erros de localStorage silenciosamente
        }
      }
    };

    // Executa imediatamente se já estiver no cliente
    if (typeof window !== 'undefined') {
      initializeLanguage();
    } else {
      // Pequeno delay apenas durante SSR
      const timer = setTimeout(initializeLanguage, 50);
      return () => {
        clearTimeout(timer);
        isMounted = false;
      };
    }

    return () => {
      isMounted = false;
    };
  }, []); // Array vazio - executa apenas uma vez

  // Salva idioma no localStorage de forma segura
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    
    if (isHydrated && typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('language', newLanguage);
      } catch (error) {
        // Ignora erros de localStorage silenciosamente
      }
    }
  };

  // Função de tradução com fallback robusto
  const t = (key: TranslationKey): string => {
    try {
      // Sempre retorna uma tradução válida
      const translation = translations[language]?.[key] || translations.pt[key] || key;
      return translation;
    } catch (error) {
      // Fallback para a chave original em caso de erro
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