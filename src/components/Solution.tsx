import React from 'react';
import { SOLUTION_DATA } from '../data/contentData';

export const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-garet font-bold text-xs tracking-widest uppercase mb-4">
            SOLUSI MAXY ACADEMY
          </span>
          <h2 className="font-garet font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight uppercase">
            {SOLUTION_DATA.headline}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTION_DATA.benefits.map((b) => (
            <div 
              key={b.number}
              className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8 hover:-translate-y-1 hover:border-blue-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white font-garet font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                  {b.number}
                </div>

                <h3 className="font-garet font-bold text-xl text-white mb-4 leading-snug">
                  {b.title}
                </h3>

                <p className="font-jakarta text-slate-300 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-700/50 flex items-center gap-2 text-xs font-jakarta text-sky-400 font-bold uppercase tracking-wider">
                <span>Solusi Terukur</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
