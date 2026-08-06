import React from 'react';
import { PopUp } from './components/PopUp';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { PainPoints } from './components/PainPoints';
import { Transformation } from './components/Transformation';
import { Solution } from './components/Solution';
import { AITools } from './components/AITools';
import { Agenda } from './components/Agenda';
import { HasilNyata } from './components/HasilNyata';
import { Speakers } from './components/Speakers';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { ValueComparison } from './components/ValueComparison';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { FloatingWaCs } from './components/FloatingWaCs';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* 1. Exit Intent Promo Modal */}
      <PopUp />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Intro Video & Institutional Proof */}
      <TrustBanner />

      {/* 4. Problem Section */}
      <PainPoints />

      {/* 5. Transformation Comparison */}
      <Transformation />

      {/* 6. Solution Benefits */}
      <Solution />

      {/* 7. AI Tools Showcase */}
      <AITools />

      {/* 8. Curriculum / Agenda */}
      <Agenda />

      {/* 9. Hasil Nyata Peserta */}
      <HasilNyata />

      {/* 10. Pemateri Utama */}
      <Speakers />

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. Pricing & Registration Form */}
      <Pricing />

      {/* 13. Value Comparison */}
      <ValueComparison />

      {/* 14. FAQ */}
      <FAQ />

      {/* Final Call To Action & Floating Button */}
      <FinalCTA />
      <FloatingWaCs />
    </div>
  );
};

export default App;
