import React, { useState } from 'react';

export const TrustBanner: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<'youtube' | 'instagram'>('youtube');

  return (
    <>
      {/* Wave Bridge from Hero */}
      <div className="section-bridge bg-[#0f172a]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <section className="py-16 lg:py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Top Label & Sub-label */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-garet font-bold text-xs tracking-widest uppercase mb-4">
              BUKTI KAMI HADIR &bull; UNTUK MEMAJUKAN AKADEMISI INDONESIA
            </span>
            <h2 className="font-garet font-black text-2xl sm:text-4xl text-slate-900 leading-tight mb-4">
              Gambaran Materi, Pendekatan Pembelajaran &amp; Manfaat Kelas
            </h2>
            <p className="font-jakarta text-slate-600 text-sm sm:text-base leading-relaxed">
              Berikut gambaran mengenai materi, pendekatan pembelajaran, serta manfaat yang akan diperoleh selama mengikuti kelas.
            </p>
          </div>

          {/* Media Switcher Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 sm:p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner max-w-full">
              <button
                onClick={() => setActiveMedia('youtube')}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl font-garet font-bold text-[11px] sm:text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeMedia === 'youtube'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube Video</span>
              </button>

              <button
                onClick={() => setActiveMedia('instagram')}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl font-garet font-bold text-[11px] sm:text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeMedia === 'instagram'
                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Reels Instagram</span>
              </button>
            </div>
          </div>

          {/* Main Grid: Media Display & Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            
            {/* Left: Media Display Container */}
            <div className="lg:col-span-7 relative group flex justify-center">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-sky-500 to-pink-600 rounded-[2.5rem] opacity-25 group-hover:opacity-40 blur-xl transition duration-500"></div>
              
              {activeMedia === 'youtube' ? (
                /* YouTube Video (Landscape 16:9) */
                <div className="relative w-full rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-950 shadow-2xl flex flex-col justify-between">
                  <div className="aspect-video relative flex items-center justify-center bg-slate-900 group-hover:scale-[1.01] transition-transform duration-500">
                    <iframe 
                      className="w-full h-full border-0" 
                      src="https://www.youtube.com/embed/VsutSB6AyXQ?rel=0&modestbranding=1" 
                      title="Beyond Tolerance Faith and Prosperity in the Digital Era | MAXY X TBN X UIN Jakarta" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="font-jakarta text-xs text-sky-400 font-bold uppercase tracking-wider block mb-1">
                        MAXY X TBN X UIN Jakarta
                      </span>
                      <h3 className="font-garet font-bold text-sm sm:text-base text-white">
                        Beyond Tolerance Faith and Prosperity in the Digital Era
                      </h3>
                    </div>

                    <a 
                      href="https://www.youtube.com/watch?v=VsutSB6AyXQ" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-garet font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shrink-0 shadow-lg transition-all"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span>Tonton Video</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Instagram Reels (Full Top Video Visible, Cropped ONLY Bottom Like/Comment/Share Bar) */
                <div className="relative w-full max-w-[290px] xs:max-w-[340px] flex flex-col items-center">
                  {/* Smartphone Case */}
                  <div className="w-full bg-slate-950 p-3 rounded-[2.8rem] border-4 border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    
                    {/* Top Speaker Notch / Dynamic Island */}
                    <div className="w-28 h-4 bg-slate-900 rounded-b-xl mx-auto mb-2 flex items-center justify-center gap-2 border-b border-slate-800 relative z-20">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-950"></div>
                    </div>

                    {/* Screen Viewport: Top starts at 0 (full top visible), Bottom 80px cropped out */}
                    <div className="w-full h-[450px] rounded-[2rem] overflow-hidden bg-slate-900 relative shadow-inner">
                      <iframe 
                        className="w-full h-[530px] border-0 rounded-[2rem] relative -top-1" 
                        src="https://www.instagram.com/reel/DZ4wZfWlZia/embed" 
                        title="Reels Instagram Video" 
                        allowTransparency={true}
                        allowFullScreen={true}
                      ></iframe>
                    </div>

                    {/* Bottom Home Indicator Line */}
                    <div className="w-24 h-1 bg-slate-700/80 rounded-full mx-auto mt-2 relative z-20"></div>
                  </div>
                </div>
              )}

            </div>

            {/* Right: Institutional Trust Highlights */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-garet font-bold text-slate-900 text-lg">
                        Rekam Jejak &amp; Kemitraan
                      </h4>
                      <span className="font-jakarta text-xs text-blue-600 font-semibold uppercase tracking-wider">
                        Teruji di 350+ Kampus
                      </span>
                    </div>
                  </div>

                  <p className="font-jakarta text-slate-600 text-sm leading-relaxed mb-6">
                    MAXY Academy dipercaya oleh ratusan institusi pendidikan tinggi dalam menghadirkan pelatihan teknologi praktis yang berdampak langsung pada akselerasi Tridharma Perguruan Tinggi.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 text-center">
                  <div>
                    <div className="font-garet font-black text-2xl text-blue-600">350+</div>
                    <span className="font-jakarta text-xs text-slate-500 font-medium">Universitas Mitra</span>
                  </div>
                  <div>
                    <div className="font-garet font-black text-2xl text-blue-600">100+</div>
                    <span className="font-jakarta text-xs text-slate-500 font-medium">Institusi &amp; Organisasi</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Trust Banner Strip */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
            <div className="flex items-center gap-5">
              <img 
                src="/img/logo_southeast_asia_edtech50.png" 
                alt="HolonIQ SE Asia EdTech Top 50" 
                className="h-14 w-auto object-contain shrink-0" 
              />
              <div>
                <span className="font-garet font-bold text-sm text-sky-400 uppercase tracking-wider block">
                  HolonIQ Southeast Asia EdTech Top 50
                </span>
                <p className="font-jakarta text-xs text-slate-300 mt-1">
                  Penghargaan resmi platform teknologi pendidikan paling inovatif di Asia Tenggara.
                </p>
              </div>
            </div>

            <div className="h-px w-full md:w-px md:h-12 bg-slate-800"></div>

            <div className="text-center md:text-right shrink-0">
              <span className="font-garet font-extrabold text-white text-sm sm:text-base block">
                350+ Universitas Mitra &bull; 100+ Institusi
              </span>
              <span className="font-jakarta text-xs text-slate-400">
                Terhubung dan Berkolaborasi di MAXY AI Hub
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Wave Bridge into Problem Section */}
      <div className="section-bridge bg-[#0f172a]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="white" style={{ position: 'absolute', top: 0, bottom: 'auto', width: '100%', height: '80px' }}>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>
    </>
  );
};
