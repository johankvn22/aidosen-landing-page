import React, { useState, useEffect } from 'react';
import { WA_LINK } from '../data/contentData';

export const Hero: React.FC = () => {
  // Dynamic countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 14, seconds: 11 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-b border-blue-500/20 py-2.5 px-4 text-center text-xs sm:text-sm font-jakarta font-semibold tracking-wider relative z-20">
        <span className="font-extrabold text-amber-300 uppercase tracking-widest mr-2">
          HARGA KHUSUS MITRA UNIVERSITAS TERBATAS
        </span>
        <span className="hidden md:inline text-slate-300 font-normal">
          Harga akan kembali normal setelah kuota promo terpenuhi.&nbsp;
        </span>
        <span className="inline-block bg-amber-400/15 border border-amber-400/35 text-amber-300 font-bold px-2.5 py-0.5 rounded-md text-[11px] uppercase tracking-wider">
          Tersisa 7 slot
        </span>
      </div>

      {/* HERO MAIN SECTION */}
      <section 
        id="hero" 
        className="relative min-h-[92vh] flex items-center pt-12 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url('./img/hero_bg_dosen.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right'
        }}
      >
        {/* Horizontal Gradient Overlay: Dark on Left for text readability, Transparent on Right to reveal Avatar */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 md:via-[#020617]/85 to-transparent"></div>
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle at 20% 40%, #1e3a8a 0%, transparent 70%)' }}></div>
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 80%, #2563eb 0%, transparent 50%)' }}></div>

        {/* Top Left Award Badge */}
        <div 
          id="hero-award" 
          className="hidden xl:inline-block absolute top-10 left-10 z-20 bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-sky-500/30"
        >
          <img 
            src="./img/logo_southeast_asia_edtech50.png" 
            className="h-28 w-auto block object-contain rounded" 
            alt="Southeast Asia EdTech 50" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
          <div className="max-w-3xl space-y-7">
            
            {/* Top Label */}
            <div className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl sm:rounded-full border border-sky-400/30 bg-gradient-to-r from-sky-500/15 via-blue-500/10 to-indigo-500/15 backdrop-blur-xl font-jakarta text-[10px] xs:text-xs sm:text-sm font-bold tracking-wider sm:tracking-[0.12em] uppercase text-sky-300 shadow-[0_0_25px_rgba(56,189,248,0.15)] text-center leading-snug">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping shrink-0"></span>
              <span>AI-Powered Research &amp; Smart Teaching &bull; 1 Agustus 2026 &bull; Online &amp; Onsite</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-garet font-black text-3xl sm:text-5xl lg:text-7xl leading-[1.12] text-white uppercase tracking-tight">
              <span className="block text-slate-100 drop-shadow-md">
                Riset Lebih Cepat.
              </span>
              <span className="block bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.45)] py-1">
                Bahan Ajar Lebih Menarik.
              </span>
              <span className="block text-slate-100 drop-shadow-md">
                Semua dengan AI.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="font-jakarta text-sm sm:text-lg font-normal text-slate-300/95 leading-[1.7] max-w-2xl drop-shadow-sm">
              AI bukan lagi sekadar alat bantu, melainkan sistem kerja baru bagi akademisi masa kini. Pelajari cara memanfaatkan AI untuk mempercepat proses penelitian, penyusunan proposal &amp; draft jurnal ilmiah, menghasilkan materi &amp; modul pembelajaran, hingga meningkatkan produktivitas publikasi secara lebih efektif dan terstruktur.
            </p>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-2">
              <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-3.5 flex items-center gap-3 text-left backdrop-blur-md hover:border-sky-500/40 transition-all duration-300 shadow-md group">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition-colors">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-jakarta font-bold text-xs text-slate-100 uppercase tracking-wide leading-snug">
                  Riset 10x Lebih Cepat
                </span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-3.5 flex items-center gap-3 text-left backdrop-blur-md hover:border-blue-500/40 transition-all duration-300 shadow-md group">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-jakarta font-bold text-xs text-slate-100 uppercase tracking-wide leading-snug">
                  Sistem Riset Aktif 24/7
                </span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-3.5 flex items-center gap-3 text-left backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300 shadow-md group">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-jakarta font-bold text-xs text-slate-100 uppercase tracking-wide leading-snug">
                  80% Lebih Efisien
                </span>
              </div>
            </div>

            {/* Dynamic Countdown Timer */}
            <div className="bg-slate-900/85 border border-amber-500/35 rounded-3xl p-4 sm:p-6 w-full max-w-xl backdrop-blur-md shadow-[0_0_35px_rgba(245,158,11,0.15)]">
              <div className="text-amber-400 font-jakarta font-bold text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.16em] mb-2.5 block text-center sm:text-left">
                PENAWARAN HARGA KHUSUS MITRA BERAKHIR DALAM:
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2.5 font-garet">
                <div className="bg-slate-950 border border-amber-500/30 rounded-2xl px-2 sm:px-4 py-1.5 sm:py-2 text-center min-w-[50px] sm:min-w-[68px] shadow-inner">
                  <span className="text-xl sm:text-2xl font-black text-amber-300 block tracking-wider font-mono">{formatNumber(timeLeft.days)}</span>
                  <span className="text-[7px] sm:text-[9px] text-slate-400 uppercase tracking-wider font-jakarta font-bold block mt-0.5">HARI</span>
                </div>
                <span className="text-base sm:text-xl font-black text-amber-500/80 mb-2 sm:mb-3">:</span>
                <div className="bg-slate-950 border border-amber-500/30 rounded-2xl px-2 sm:px-4 py-1.5 sm:py-2 text-center min-w-[50px] sm:min-w-[68px] shadow-inner">
                  <span className="text-xl sm:text-2xl font-black text-amber-300 block tracking-wider font-mono">{formatNumber(timeLeft.hours)}</span>
                  <span className="text-[7px] sm:text-[9px] text-slate-400 uppercase tracking-wider font-jakarta font-bold block mt-0.5">JAM</span>
                </div>
                <span className="text-base sm:text-xl font-black text-amber-500/80 mb-2 sm:mb-3">:</span>
                <div className="bg-slate-950 border border-amber-500/30 rounded-2xl px-2 sm:px-4 py-1.5 sm:py-2 text-center min-w-[50px] sm:min-w-[68px] shadow-inner">
                  <span className="text-xl sm:text-2xl font-black text-amber-300 block tracking-wider font-mono">{formatNumber(timeLeft.minutes)}</span>
                  <span className="text-[7px] sm:text-[9px] text-slate-400 uppercase tracking-wider font-jakarta font-bold block mt-0.5">MENIT</span>
                </div>
                <span className="text-base sm:text-xl font-black text-amber-500/80 mb-2 sm:mb-3">:</span>
                <div className="bg-slate-950 border border-amber-500/30 rounded-2xl px-2 sm:px-4 py-1.5 sm:py-2 text-center min-w-[50px] sm:min-w-[68px] shadow-inner">
                  <span className="text-xl sm:text-2xl font-black text-amber-300 block tracking-wider font-mono">{formatNumber(timeLeft.seconds)}</span>
                  <span className="text-[7px] sm:text-[9px] text-slate-400 uppercase tracking-wider font-jakarta font-bold block mt-0.5">DETIK</span>
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <a 
                href={WA_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-whatsapp-btn font-garet font-extrabold text-xs sm:text-base tracking-wider"
              >
                <span>Amankan Harga Khusus Mitra Universitas Sekarang &rarr;</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
