'use client';

import React from 'react';
import { useTranslator } from '@/lib/translations/TranslatorContext';

const marketDataKeys = ['tam', 'sam', 'som'] as const;

export default function MarketSizeSection() {
  const { t } = useTranslator();

  return (
    <section id="market" className="py-20 md:py-32 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium mb-4 border border-blue-800">
            {t('common.marketOpportunity')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('market.title')}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('market.description')}
          </p>
        </div>

        {/* Funnel visualization */}
        <div className="flex flex-col items-center gap-6">
          {marketDataKeys.map((key, index) => {
            const widthClass = key === 'tam' ? 'w-full' : key === 'sam' ? 'w-[90%] md:w-[80%]' : 'w-[80%] md:w-[60%]';
            const colorClass = key === 'tam' ? 'from-slate-700 to-slate-900' : key === 'sam' ? 'from-blue-700 to-blue-900' : 'from-blue-600 to-cyan-600';
            const accentClass = key === 'tam' ? 'bg-slate-500' : key === 'sam' ? 'bg-blue-400' : 'bg-cyan-400';
            
            return (
              <div
                key={key}
                className={`${widthClass} group relative`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div 
                  className={`relative rounded-2xl p-8 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/20 overflow-hidden bg-linear-to-r ${colorClass} border border-white/10`}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 animate-shimmer" />
                  
                  {/* Content */}
                  <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-3 h-3 rounded-full ${accentClass} animate-pulse`} />
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {t(`market.${key}.title`)}
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {t(`market.${key}.description`)}
                      </p>
                    </div>
                    <div className="text-left md:text-right shrink-0">
                      <div className="text-4xl md:text-5xl font-black text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                        {t(`market.${key}.value`)}
                      </div>
                      <div className={`text-sm font-medium ${accentClass.replace('bg-', 'text-')}`}>
                        {t(`market.${key}.tier`)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <div 
                      className={`h-full ${accentClass} transition-all duration-1000`}
                      style={{ width: `${100 - (index * 20)}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional info */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {[
            { label: t('market.stats.globalReach'), value: '190T+', description: t('market.stats.totalMarketSize') },
            { label: t('market.stats.focusRegion'), value: 'SEA', description: t('market.stats.southeastAsia') },
            { label: t('market.stats.targetYear1'), value: '$500M', description: t('market.stats.transactionVolume') },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
