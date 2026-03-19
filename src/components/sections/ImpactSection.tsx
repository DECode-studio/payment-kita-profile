'use client';

import React from 'react';
import { useTranslator } from '@/lib/translations/TranslatorContext';

export default function ImpactSection() {
  const { t } = useTranslator();

  return (
    <section id="impact" className="py-20 md:py-32 bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-linear-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
            {t('common.economicImpact')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t('impact.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('impact.subtitle')}
          </p>
        </div>
        
        {/* Impact cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: t('impact.points.inflow.title'),
              description: t('impact.points.inflow.description'),
            },
            {
              title: t('impact.points.umkm.title'),
              description: t('impact.points.umkm.description'),
            },
            {
              title: t('impact.points.middleman.title'),
              description: t('impact.points.middleman.description'),
            },
          ].map((point, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-200 dark:border-slate-700 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Number badge */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-14 h-14 bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {index + 1}
                </div>
                
                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {point.description}
                  </p>
                  
                  {/* Arrow icon */}
                  <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium mr-2">{t('hero.ctaSecondary')}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Impact stats banner */}
        <div className="relative rounded-3xl overflow-hidden animate-fade-in-up delay-500">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 animate-gradient" />
          
          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  $190T+
                </div>
                <p className="text-blue-100 font-medium">{t('impact.stats.tam')}</p>
                <p className="text-blue-200 text-sm mt-1">{t('impact.stats.globalPaymentVolume')}</p>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  $20B+
                </div>
                <p className="text-blue-100 font-medium">{t('impact.stats.sam')}</p>
                <p className="text-blue-200 text-sm mt-1">{t('impact.stats.indonesiaInflow')}</p>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  $500M+
                </div>
                <p className="text-blue-100 font-medium">{t('impact.stats.targetYear1')}</p>
                <p className="text-blue-200 text-sm mt-1">{t('impact.stats.transactionProcessing')}</p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-10 text-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl">
                {t('impact.cta')}
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
