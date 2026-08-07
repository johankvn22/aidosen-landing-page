import React from 'react';
import { useContent } from '../context/ContentContext';

export const Transformation: React.FC = () => {
  const { content } = useContent();
  const { transformationConfig } = content;

  return (
    <>
      {/* Wave transition into White Section */}
      <div className="section-bridge bg-[#0f172a]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="#ffffff">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <section id="transformation" className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-garet font-bold text-xs tracking-widest uppercase mb-4">
              TRANSFORMASI METODE
            </span>
            <h2 className="font-garet font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight uppercase">
              {transformationConfig.headline}
            </h2>
          </div>

          {/* Desktop View (md:block) - Side by Side Comparison Table */}
          <div className="hidden md:block bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
            
            {/* Headers */}
            <div className="grid grid-cols-2 bg-slate-900 text-white font-garet font-bold text-base sm:text-lg">
              <div className="p-6 md:p-8 bg-red-950/40 border-r border-slate-800 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                  ✕
                </div>
                <span>Pendekatan Konvensional</span>
              </div>
              <div className="p-6 md:p-8 bg-blue-950/40 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>Pendekatan Berbasis AI</span>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-200">
              {transformationConfig.rows.map((row, idx) => (
                <div key={row.id || idx} className="grid grid-cols-2 hover:bg-slate-100/80 transition-colors">
                  
                  {/* Left: Conventional (Red X icon) */}
                  <div className="p-6 md:p-8 flex items-start gap-4 border-r border-slate-200">
                    <div className="w-6 h-6 rounded-full bg-red-100 border border-red-200 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✕
                    </div>
                    <p className="font-jakarta text-slate-600 text-sm sm:text-base leading-relaxed">
                      {row.conventional}
                    </p>
                  </div>

                  {/* Right: AI-based (Blue checkmark icon) */}
                  <div className="p-6 md:p-8 flex items-start gap-4 bg-blue-50/40">
                    <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <p className="font-jakarta font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                      {row.aiBased}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Mobile View (< md) - Stacked Interactive Comparison Cards */}
          <div className="block md:hidden space-y-6">
            {transformationConfig.rows.map((row, idx) => (
              <div 
                key={row.id || idx} 
                className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4 relative overflow-hidden"
              >
                {/* Row Item Number Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-garet font-bold text-[10px] uppercase tracking-wider">
                  Perbandingan #{idx + 1}
                </div>

                {/* Konvensional Card */}
                <div className="bg-red-950/30 border border-red-500/30 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-red-400 font-garet font-bold text-xs uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center font-bold text-[10px]">
                      ✕
                    </span>
                    <span>Metode Konvensional (Lama)</span>
                  </div>
                  <p className="font-jakarta text-slate-300 text-sm leading-relaxed">
                    {row.conventional}
                  </p>
                </div>

                {/* Arrow Down Divider */}
                <div className="flex items-center justify-center -my-1 relative z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full p-2 shadow-lg border border-sky-400/40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* AI-Based Card */}
                <div className="bg-gradient-to-br from-blue-950/60 to-slate-900 border border-sky-500/40 rounded-2xl p-4 space-y-2 shadow-md">
                  <div className="flex items-center gap-2 text-sky-300 font-garet font-bold text-xs uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold text-[10px]">
                      ✓
                    </span>
                    <span>Solusi Berbasis AI (MAXY)</span>
                  </div>
                  <p className="font-jakarta font-semibold text-white text-sm sm:text-base leading-relaxed">
                    {row.aiBased}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};
