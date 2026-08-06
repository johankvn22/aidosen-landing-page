import React, { useEffect, useState } from 'react';
import { POPUP_DATA, WA_LINK } from '../data/contentData';

export const PopUp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Exit intent detection on desktop
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Auto popup fallback after 20 seconds
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 20000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-amber-500/30 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(245,158,11,0.25)] text-center overflow-hidden">
        
        {/* Top Glow Accent */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Icon Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Tutup Pop-up"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 font-jakarta">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Penawaran Terbatas Mitra Kampus
        </div>

        {/* Headline */}
        <h3 className="font-garet font-black text-2xl md:text-3xl text-white mb-4 leading-tight">
          {POPUP_DATA.headline}
        </h3>

        {/* Sub-headline */}
        <p className="font-jakarta text-slate-300 text-sm leading-relaxed mb-6">
          {POPUP_DATA.subheadline}
        </p>

        {/* Price Card */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 mb-6">
          <span className="font-jakarta text-xs text-slate-400 block mb-1">Harga Khusus Mitra Universitas</span>
          <div className="flex items-center justify-center gap-3">
            <span className="font-garet font-black text-3xl md:text-4xl text-amber-400">
              {POPUP_DATA.mitraPrice}
            </span>
            <span className="font-jakarta text-sm text-slate-400 line-through">
              (Normal {POPUP_DATA.normalPrice})
            </span>
          </div>
        </div>

        {/* Action Button */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-garet font-black text-sm uppercase tracking-widest py-4 px-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 mb-4"
        >
          {POPUP_DATA.buttonText}
        </a>

        {/* Footer Dismiss Option */}
        <button
          onClick={() => setIsOpen(false)}
          className="font-jakarta text-xs text-slate-400 hover:text-slate-200 underline transition-colors"
        >
          {POPUP_DATA.footerText}
        </button>

      </div>
    </div>
  );
};
