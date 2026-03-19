'use client';

import Navbar from '../src/components/shared/Navbar';
import Footer from '../src/components/shared/Footer';
import HeroSection from '../src/components/sections/HeroSection';
import FeatureSection from '../src/components/sections/FeatureSection';
import MarketSizeSection from '../src/components/sections/MarketSizeSection';
import ImpactSection from '../src/components/sections/ImpactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <MarketSizeSection />
      <ImpactSection />
      <Footer />
    </main>
  );
}
