import React from 'react';
import { IKU_LIST } from '../data/contentData';

export const IKUMapping: React.FC = () => {
  return (
    <>
      {/* Wave transition into White Section */}
      <div className="section-bridge bg-[#0f172a]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="#ffffff">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <section id="iku-mapping" className="relative overflow-hidden bg-white py-24 lg:py-28">

        {/* Decorative Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(59,130,246,0.06) 0%, transparent 65%)' }}></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(circle at 20% 80%, rgba(37,99,235,0.05) 0%, transparent 65%)' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="mb-16 md:mb-20 max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="font-jakarta text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">Target Indikator Kinerja Utama</span>
            <h2 className="font-garet font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-tight tracking-tight text-slate-900 uppercase mb-6">
              Bukan Pelatihan AI Generik.<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">Langsung ke IKU Anda.</span>
            </h2>
            <p className="font-jakarta text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Setiap materi di kelas ini dirancang untuk menghasilkan <strong className="font-semibold text-slate-800">output konkret</strong> yang dinilai langsung oleh universitas Anda.
            </p>
          </div>

          {/* IKU Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {IKU_LIST.map((iku) => (
              <div 
                key={iku.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-garet font-black text-4xl bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                        {iku.code}
                      </h3>
                      <span className="font-jakarta text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                        {iku.category}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h4 className="font-garet font-bold text-xl text-slate-900 mb-3">
                    {iku.title}
                  </h4>
                  <p className="font-jakarta text-slate-500 text-sm leading-relaxed mb-6">
                    {iku.description}
                  </p>
                </div>

                <div>
                  <span className="inline-block font-jakarta text-[10px] font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full">
                    {iku.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Wave transition into Navy Section */}
      <div style={{ position: 'relative', height: '120px', overflow: 'hidden', background: '#fff' }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '120px' }}>
          <path d="M0,0 C240,120 480,0 720,80 C960,160 1200,20 1440,60 L1440,120 L0,120 Z" fill="#0f172a"/>
        </svg>
      </div>
    </>
  );
};
