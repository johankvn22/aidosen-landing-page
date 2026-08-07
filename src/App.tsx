import React, { useState, useEffect } from 'react';
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
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { useContent } from './context/ContentContext';

export const App: React.FC = () => {
  const { content } = useContent();

  // Route state checking: /admin path or #admin hash
  const [isAdminRoute, setIsAdminRoute] = useState(() => {
    return (
      window.location.pathname.toLowerCase() === '/admin' ||
      window.location.hash.toLowerCase() === '#admin'
    );
  });

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('maxy_aidosen_admin_auth') === 'true';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const isAdmin =
        window.location.pathname.toLowerCase() === '/admin' ||
        window.location.hash.toLowerCase() === '#admin';
      setIsAdminRoute(isAdmin);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('maxy_aidosen_admin_auth');
    setIsAuthenticated(false);
  };

  const handleBackToSite = () => {
    window.location.hash = '';
    if (window.location.pathname.toLowerCase() === '/admin') {
      window.history.pushState({}, '', '/');
    }
    setIsAdminRoute(false);
  };

  // Helper map for reorderable standard sections
  const renderSection = (secId: string) => {
    switch (secId) {
      case 'hero':
        return <Hero key="hero" />;
      case 'trustBanner':
        return <TrustBanner key="trustBanner" />;
      case 'painPoints':
        return <PainPoints key="painPoints" />;
      case 'transformation':
        return <Transformation key="transformation" />;
      case 'solution':
        return <Solution key="solution" />;
      case 'aiTools':
        return <AITools key="aiTools" />;
      case 'agenda':
        return <Agenda key="agenda" />;
      case 'hasilNyata':
        return <HasilNyata key="hasilNyata" />;
      case 'speakers':
        return <Speakers key="speakers" />;
      case 'testimonials':
        return <Testimonials key="testimonials" />;
      case 'pricing':
        return <Pricing key="pricing" />;
      case 'valueComparison':
        return <ValueComparison key="valueComparison" />;
      case 'faq':
        return <FAQ key="faq" />;
      default:
        return null;
    }
  };

  // If on /admin route: render Admin Page or Login Screen
  if (isAdminRoute) {
    if (!isAuthenticated) {
      return (
        <AdminLogin
          onLoginSuccess={handleLoginSuccess}
          onBackToSite={handleBackToSite}
        />
      );
    }

    return (
      <AdminDashboard
        onLogout={handleLogout}
        onBackToSite={handleBackToSite}
      />
    );
  }

  // Otherwise render CLEAN PUBLIC LANDING PAGE
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* 1. TOP ANNOUNCEMENT RUNNING BAR */}
      {content.appConfig.topBannerText && (
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-b border-blue-500/20 py-2.5 px-4 text-center text-xs sm:text-sm font-jakarta font-semibold tracking-wider relative z-20">
          <span className="font-extrabold text-amber-300 uppercase tracking-widest mr-2">
            {content.appConfig.topBannerText}
          </span>
          {content.appConfig.topBannerSlotText && (
            <span className="inline-block bg-amber-400/15 border border-amber-400/35 text-amber-300 font-bold px-2.5 py-0.5 rounded-md text-[11px] uppercase tracking-wider ml-2">
              {content.appConfig.topBannerSlotText}
            </span>
          )}
        </div>
      )}

      {/* Exit Intent Promo Modal */}
      <PopUp />

      {/* RENDER DYNAMICALLY ORDERED SECTIONS */}
      {content.sectionOrder.map((secId) => renderSection(secId))}

      {/* RENDER CUSTOM SECTIONS CREATED BY ADMIN */}
      {content.customSections.map((sec) => (
        <section key={sec.id} className="py-16 bg-slate-900 border-t border-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-garet font-black text-2xl sm:text-4xl text-white mb-2">{sec.title}</h2>
            {sec.subtitle && (
              <p className="font-jakarta text-slate-400 text-sm mb-6">{sec.subtitle}</p>
            )}
            <div
              className="font-jakarta text-slate-300 text-sm leading-relaxed text-left bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl"
              dangerouslySetInnerHTML={{ __html: sec.content }}
            />
          </div>
        </section>
      ))}

      {/* Final Call To Action & Floating Button */}
      <FinalCTA />
      <FloatingWaCs />
    </div>
  );
};

export default App;
