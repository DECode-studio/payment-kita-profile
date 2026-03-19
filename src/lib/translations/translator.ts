'use client';

import { translations, TranslationType } from './index';

export type Locale = keyof typeof translations;
export type TranslatorFunction = (key: string) => string;

function getNestedValue(obj: Record<string, unknown>, key: string): string {
  const keys = key.split('.');
  let current: unknown = obj;
  
  for (const k of keys) {
    if (typeof current === 'object' && current !== null && k in current) {
      current = (current as Record<string, unknown>)[k];
    } else {
      return key; // Return key if path not found
    }
  }
  
  return typeof current === 'string' ? current : key;
}

export function createTranslator(locale: Locale): TranslatorFunction {
  const localeTranslations = translations[locale] as unknown as Record<string, unknown>;
  
  return function t(key: string): string {
    return getNestedValue(localeTranslations, key);
  };
}

export function getTranslation(locale: Locale, key: string): string {
  const t = createTranslator(locale);
  return t(key);
}

export const defaultLocale: Locale = 'id';
export const availableLocales: Locale[] = ['id', 'en'];

export function getLocaleName(locale: Locale): string {
  const names: Record<Locale, string> = {
    id: 'Bahasa Indonesia',
    en: 'English',
  };
  return names[locale];
}
