'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { useTranslator } from '@/lib/translations/TranslatorContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { t } = useTranslator();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-slate-200/50 dark:border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Payment Kita
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <a
                href="#features"
                className="text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
              >
                {t('navbar.features')}
              </a>
              <a
                href="#market"
                className="text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
              >
                {t('navbar.market')}
              </a>
              <a
                href="#impact"
                className="text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
              >
                {t('navbar.impact')}
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button size="sm" className="btn-glow shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
              {t('navbar.launchApp')}
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white p-2 rounded-lg hover:bg-blue-50/50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 animate-fade-in-up">
          <div className="px-4 py-4 space-y-2">
            <a
              href="#features"
              className="block text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-lg text-base font-medium transition-all hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navbar.features')}
            </a>
            <a
              href="#market"
              className="block text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-lg text-base font-medium transition-all hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navbar.market')}
            </a>
            <a
              href="#impact"
              className="block text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-lg text-base font-medium transition-all hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navbar.impact')}
            </a>
            <div className="flex items-center gap-3 px-4 py-3">
              <LanguageSwitcher />
            </div>
            <div className="pt-4">
              <Button size="md" className="w-full btn-glow">{t('navbar.launchApp')}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
