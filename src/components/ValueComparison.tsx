import React from 'react';
import { VALUE_COMPARISON_DATA, WA_LINK } from '../data/contentData';

export const ValueComparison: React.FC = () => {
  return (
    <section id="value-comparison" className="py-24 md:py-32 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-garet font-bold text-xs tracking-widest uppercase mb-4">
            TOTAL VALUE PROGRAM
          </span>
          <h2 className="font-garet font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-white uppercase">
            {VALUE_COMPARISON_DATA.headline}
          </h2>
        </div>

        {/* Value Items List */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl divide-y divide-slate-800">
          {VALUE_COMPARISON_DATA.items.map((item, idx) => (
            <div key={idx} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/20 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-garet font-bold text-base text-white">{item.title}</h4>
                  <p className="font-jakarta text-xs text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>

              <div className="font-garet font-bold text-sky-400 text-sm sm:text-base shrink-0 self-end sm:self-center">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Summary Box */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/15 to-amber-500/10 border border-amber-500/40 rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(245,158,11,0.15)]">
          <div className="font-jakarta text-xs text-slate-400 uppercase tracking-widest mb-1">Total Nilai Keseluruhan Program</div>
          <div className="font-garet font-black text-3xl sm:text-4xl text-slate-400 line-through mb-4">
            {VALUE_COMPARISON_DATA.totalValue}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 pt-4 border-t border-amber-500/20">
            <div>
              <span className="font-jakarta text-xs text-slate-400 block">HARGA STANDAR</span>
              <span className="font-garet font-bold text-xl text-slate-300 line-through">{VALUE_COMPARISON_DATA.standardPrice}</span>
            </div>

            <div className="text-2xl text-amber-500 font-bold hidden sm:block">&rarr;</div>

            <div>
              <span className="font-jakarta text-xs text-amber-400 font-bold uppercase tracking-wider block">Harga Khusus Mitra Universitas</span>
              <span className="font-garet font-black text-4xl text-amber-300">Hanya {VALUE_COMPARISON_DATA.mitraPrice}</span>
            </div>
          </div>

          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-garet font-black text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest py-3.5 sm:py-4 px-5 sm:px-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-center"
          >
            Amankan Harga Khusus Mitra Universitas &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
