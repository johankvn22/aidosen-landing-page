import React from 'react';
import { PROBLEM_DATA } from '../data/contentData';

export const PainPoints: React.FC = () => {
  return (
    <section id="problem-section" className="relative overflow-hidden bg-[#0f172a] pt-24 pb-28 text-white">

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 15% 30%, rgba(30,64,175,0.18) 0%, transparent 55%)' }}></div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 85% 75%, rgba(59, 130, 246,0.15) 0%, transparent 50%)' }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Label & Headline */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-garet font-bold text-xs tracking-widest uppercase mb-4">
            {PROBLEM_DATA.label}
          </span>
          <h2 className="font-garet font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-white uppercase mb-6">
            Kerja Keras Saja Tidak Cukup<br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              jika Waktu Anda Masih Habis untuk Kerja Konvensional
            </span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROBLEM_DATA.cards.map((card, idx) => (
            <div 
              key={card.id}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:border-blue-500/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900/80 border border-slate-700/50 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                    <span className="font-garet font-black text-lg text-blue-400 group-hover:text-white">
                      0{idx + 1}
                    </span>
                  </div>
                  <span className="font-jakarta text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
                    {card.badgeTag}
                  </span>
                </div>

                <h3 className="font-garet font-bold text-xl md:text-2xl text-white leading-tight mb-4 group-hover:text-sky-300 transition-colors">
                  {card.title}
                </h3>
                
                <p className="font-jakarta text-slate-300 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
