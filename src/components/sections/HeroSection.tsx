'use client';

import React from 'react';
import Button from '../ui/Button';
import { useTranslator } from '@/lib/translations/TranslatorContext';

export default function HeroSection() {
  const { t } = useTranslator();

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
            {t('hero.badge')}
          </span>
        </div>
        
        {/* Main heading with gradient */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
          <span className="gradient-text">{t('hero.headline')}</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          {t('hero.subheadline')}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Button 
            size="lg" 
            className="w-full sm:w-auto btn-glow shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            {t('hero.ctaPrimary')}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-105 transition-all duration-300"
          >
            {t('hero.ctaSecondary')}
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up delay-500">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">&lt;1%</div>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{t('hero.stats.transactionFee')}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">&lt;5s</div>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{t('hero.stats.settlement')}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">24/7</div>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{t('hero.stats.availability')}</p>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 mb-6">{t('common.supportedNetworks')}</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              t('hero.networks.ethereum'),
              t('hero.networks.polygon'),
              t('hero.networks.solana'),
              t('hero.networks.arbitrum'),
              t('hero.networks.optimism'),
            ].map((network, index) => (
              <div 
                key={network}
                className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 group-hover:scale-125 transition-transform" />
                <span className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {network}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
