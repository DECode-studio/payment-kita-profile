'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Locale, defaultLocale, createTranslator, TranslatorFunction } from '../translations/translator';

interface TranslatorContextType {
  locale: Locale;
  t: TranslatorFunction;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const TranslatorContext = createContext<TranslatorContextType | undefined>(undefined);

interface TranslatorProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export function TranslatorProvider({ children, initialLocale = defaultLocale }: TranslatorProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const t = createTranslator(locale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === 'id' ? 'en' : 'id'));
  }, []);

  return (
    <TranslatorContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </TranslatorContext.Provider>
  );
}

export function useTranslator(): TranslatorContextType {
  const context = useContext(TranslatorContext);
  if (context === undefined) {
    throw new Error('useTranslator must be used within a TranslatorProvider');
  }
  return context;
}

export { defaultLocale, availableLocales, getLocaleName } from '../translations/translator';
export type { Locale };
