import React from 'react';

export const HasilNyata: React.FC = () => {
  return (
    <>
      {/* Wave Bridge */}
      <div className="section-bridge bg-[#0f172a]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="#f8fafc">
          <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <section id="hasil-nyata" className="py-20 lg:py-28 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-garet font-bold text-xs tracking-widest uppercase mb-4">
              HASIL IMPLEMENTASI BATCH 1
            </span>
            <h2 className="font-garet font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight uppercase">
              Tidak Hanya Teori, Berikut Hasil Implementasi AI dari Peserta
            </h2>
            <p className="font-jakarta text-slate-600 text-sm sm:text-base mt-4">
              Berdasarkan Dokumen Evaluasi Resmi MAXY AI Dosen Batch 1
            </p>
          </div>

          {/* Highlights & Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl text-center hover:-translate-y-1 transition-transform">
              <div className="font-garet font-black text-5xl text-emerald-600 mb-2">98.4%</div>
              <h4 className="font-garet font-bold text-slate-900 text-lg mb-2">Kepuasan Peserta</h4>
              <p className="font-jakarta text-xs text-slate-500 leading-relaxed">
                Peserta menilai materi sangat terstruktur, mudah dipraktikkan, dan berdampak langsung pada tugas dosen.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl text-center hover:-translate-y-1 transition-transform">
              <div className="font-garet font-black text-5xl text-blue-600 mb-2">100%</div>
              <h4 className="font-garet font-bold text-slate-900 text-lg mb-2">Praktik Direct Output</h4>
              <p className="font-jakarta text-xs text-slate-500 leading-relaxed">
                Setiap peserta menyelesaikan sesi pelatihan dengan membawa draft proposal, modul ajar, atau research gap sendiri.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl text-center hover:-translate-y-1 transition-transform">
              <div className="font-garet font-black text-5xl text-sky-600 mb-2">32 JP</div>
              <h4 className="font-garet font-bold text-slate-900 text-lg mb-2">Sertifikat &amp; RTL</h4>
              <p className="font-jakarta text-xs text-slate-500 leading-relaxed">
                Dilengkapi Rencana Tindak Lanjut (RTL) yang dapat diakui dalam portofolio kinerja akademisi.
              </p>
            </div>

          </div>

          {/* Batch Evaluation Summary Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 md:p-10 border border-slate-700 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-2xl">
                ✓
              </div>
              <div>
                <span className="font-jakarta text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                  TERBUKTI EFEKTIF
                </span>
                <h3 className="font-garet font-bold text-lg md:text-xl text-white">
                  Evaluasi MAXY AI Dosen Batch 1
                </h3>
                <p className="font-jakarta text-xs sm:text-sm text-slate-300 mt-1">
                  Hasil evaluasi membuktikan bahwa metode RCTFA &amp; Scientific Paper Extraction mengurangi waktu pengerjaan dokumen hingga 80%.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-block bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-garet font-bold text-xs uppercase px-4 py-2 rounded-full">
                Terverifikasi Lembaga
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
