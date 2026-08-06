import React from 'react';
import { CURRICULUM_DATA, WA_LINK } from '../data/contentData';

export const Agenda: React.FC = () => {
  return (
    <section id="curriculum" className="relative overflow-hidden bg-[#0f172a] py-24 lg:py-28 text-white">

      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 10% 30%, rgba(30,64,175,0.2) 0%, transparent 55%)' }}></div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 90% 70%, rgba(59, 130, 246,0.15) 0%, transparent 50%)' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-garet font-bold text-xs tracking-widest uppercase mb-4">
            {CURRICULUM_DATA.label}
          </span>
          <h2 className="font-garet font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-white uppercase mb-4 tracking-tight">
            {CURRICULUM_DATA.headline}
          </h2>
        </div>

        {/* Sessions list */}
        <div className="flex flex-col border-t border-blue-500/20">
          {CURRICULUM_DATA.sessions.map((session) => (
            <div 
              key={session.sessionNumber}
              className="grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr] gap-4 sm:gap-8 py-8 sm:py-10 border-b border-blue-500/18 transition-colors duration-200 hover:bg-white/4"
            >
              {/* Session Number */}
              <div className="flex flex-col items-center pt-1">
                <div className="font-garet font-black text-2xl sm:text-3xl leading-none bg-gradient-to-br from-blue-400 to-sky-400 bg-clip-text text-transparent">
                  {session.sessionNumber}
                </div>
                <div className="w-px flex-1 bg-gradient-to-b from-blue-500/40 to-transparent mt-3 min-h-[24px]"></div>
              </div>

              {/* Session Details */}
              <div>
                <span className="inline-block font-jakarta text-[10px] font-bold tracking-widest uppercase text-blue-300 bg-blue-500/15 border border-blue-400/25 px-3 py-1 rounded-full mb-3">
                  {session.tag}
                </span>
                
                <h3 className="font-garet font-bold text-xl sm:text-2xl text-slate-100 mb-4">
                  {session.title}
                </h3>

                <ul className="space-y-2.5">
                  {session.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base font-jakarta">
                      <span className="text-sky-400 font-bold mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 bg-slate-900 border border-slate-800 p-6 rounded-3xl">
          <div>
            <h4 className="font-garet font-bold text-white text-lg">Siap Mempraktikkan Kurikulum Ini?</h4>
            <p className="font-jakarta text-xs text-slate-400">Daftar sekarang untuk mengamankan slot kelas Onsite/Online.</p>
          </div>

          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-garet font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-2xl shadow-lg transition-all"
          >
            <span>Daftar Sekarang &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
