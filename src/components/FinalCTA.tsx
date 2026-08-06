import React from 'react';
import { WA_LINK } from '../data/contentData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden bg-[#0f172a] text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 px-6">
        <div className="bg-slate-900/90 backdrop-blur-sm border border-blue-500/30 rounded-[2.5rem] py-16 px-8 md:py-20 md:px-16 text-center shadow-2xl overflow-hidden relative">
          
          {/* Rotating dashed decor */}
          <div className="border-dashed-spin absolute -inset-20 border-[2px] border-dashed border-blue-500/20 rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-garet font-bold text-xs tracking-widest uppercase mb-6">
              KUOTA TERBATAS HARGA MITRA
            </span>

            <h2 className="font-garet font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-6">
              Akselerasi Riset &amp; Publikasi Anda.<br/>
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Semua dengan AI Dalam 1 Hari.
              </span>
            </h2>
            
            <p className="font-jakarta text-base sm:text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
              Amankan Harga Khusus Mitra Universitas sebesar <strong className="text-amber-400">Rp1.225.000</strong> (Normal Rp1.750.000) sebelum batas kuota promo berakhir.
            </p>
            
            <div className="flex justify-center">
              <a 
                href={WA_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-whatsapp-btn"
              >
                <span>Amankan Harga Khusus Mitra Universitas Sekarang &rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
