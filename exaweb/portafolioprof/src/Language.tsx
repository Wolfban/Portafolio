
import React, { createContext, useState, useContext, ReactNode } from 'react';
import texto_es from './textos/textosEsp.json';
import texto_en from './textos/textosEng.json';

interface LanguageContextType {
  idioma: string;
  cambiarIdioma: () => void;
 
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [idioma, setIdioma] = useState('es');

  const cambiarIdioma = () => {
    setIdioma(idioma === 'es' ? 'en' : 'es');
  };

  const textos = idioma === 'es' ? texto_es : texto_en;

  return (
    <LanguageContext.Provider value={{ idioma, cambiarIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext)!;

