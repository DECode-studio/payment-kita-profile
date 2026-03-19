'use client';

import React from 'react';
import Card from '../ui/Card';
import { useTranslator } from '@/lib/translations/TranslatorContext';

export default function FeatureSection() {
  const { t } = useTranslator();

  return (
    <section id="features" className="py-20 md:py-32 bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            {t('common.technology')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            <span className="gradient-text">{t('features.title')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>
        
        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* EVM Card */}
          <Card className="group card-hover border-0 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-start gap-5 p-2">
              <div className="shrink-0 w-14 h-14 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t('features.evm.title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {t('features.evm.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    t('features.evm.networks.ethereum'),
                    t('features.evm.networks.polygon'),
                    t('features.evm.networks.arbitrum'),
                  ].map((network) => (
                    <span
                      key={network}
                      className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors cursor-default"
                    >
                      {network}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          
          {/* SVM Card */}
          <Card className="group card-hover border-0 shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-start gap-5 p-2">
              <div className="shrink-0 w-14 h-14 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {t('features.svm.title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {t('features.svm.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    t('features.svm.features.highTps'),
                    t('features.svm.features.lowGasFees'),
                    t('features.svm.features.fastFinality'),
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors cursor-default"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Benefits section */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              value: t('features.benefits.lowFee.value'),
              label: t('features.benefits.lowFee.label'),
              description: t('features.benefits.lowFee.description'),
            },
            {
              value: t('features.benefits.fastSettlement.value'),
              label: t('features.benefits.fastSettlement.label'),
              description: t('features.benefits.fastSettlement.description'),
            },
            {
              value: t('features.benefits.alwaysAvailable.value'),
              label: t('features.benefits.alwaysAvailable.label'),
              description: t('features.benefits.alwaysAvailable.description'),
            },
          ].map((benefit, index) => (
            <div 
              key={benefit.label}
              className="group text-center p-6 rounded-2xl bg-linear-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                {benefit.value}
              </div>
              <p className="text-slate-900 dark:text-white font-semibold mb-1">{benefit.label}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
