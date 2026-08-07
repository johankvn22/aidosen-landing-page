import React from 'react';
import { useContent } from '../context/ContentContext';
import { TESTIMONIALS_DATA } from '../data/contentData';

export const Testimonials: React.FC = () => {
  const { content } = useContent();
  const { testimonials } = content;

  return (
    <>
      {/* Wave Bridge */}
      <div className="section-bridge bg-white">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="#f8fafc">
          <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <section id="testimonials" className="py-20 lg:py-28 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-garet font-bold text-xs tracking-widest uppercase mb-4">
              TESTIMONI PESERTA
            </span>
            <h2 className="font-garet font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight uppercase mb-4">
              Ini Cerita dan Pengalaman Mereka
            </h2>
            <p className="font-jakarta text-slate-600 text-sm sm:text-base leading-relaxed">
              Ratusan dosen telah mengikuti pelatihan AI bersama MAXY Academy dan mulai menerapkan AI untuk penelitian &amp; pengajaran.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {testimonials.map((testi, idx) => (
              <div 
                key={testi.id || idx}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-lg relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span className="font-serif text-8xl text-slate-200 absolute top-2 left-5 pointer-events-none select-none opacity-80 leading-none">
                  &ldquo;
                </span>
                
                <p className="font-jakarta text-slate-600 leading-relaxed mb-8 relative z-10 italic text-sm sm:text-base">
                  {testi.quote}
                </p>

                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center font-bold text-white font-garet shadow-md uppercase">
                    {testi.name.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-garet font-bold text-slate-900 text-base">
                      {testi.name}
                    </h4>
                    <span className="font-jakarta text-xs text-slate-500">
                      {testi.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notion Link CTA Button */}
          <div className="text-center">
            <a 
              href={TESTIMONIALS_DATA.notionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border border-slate-300 hover:border-blue-500 text-slate-800 hover:text-blue-600 font-garet font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shadow-md transition-all hover:-translate-y-0.5"
            >
              <span>Lihat Seluruh Dokumentasi &amp; Testimoni di Notion</span>
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};
