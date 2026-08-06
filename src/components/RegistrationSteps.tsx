import React from 'react';

export const RegistrationSteps: React.FC = () => {
  return (
    <>
      {/* Wave Bridge */}
      <div className="section-bridge bg-[#0f172a]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="#fafafa">
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-jakarta text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-3 block">
              Panduan Pendaftaran
            </span>
            <h2 className="font-garet font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 uppercase">
              Cara Daftar — 3 Langkah Mudah
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-white border border-slate-200 shadow-lg text-blue-600 rounded-2xl flex items-center justify-center font-garet font-bold text-2xl mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                01
              </div>
              <h4 className="font-garet font-bold text-lg text-slate-900 mb-3">
                Klaim ke Admin via WA
              </h4>
              <p className="font-jakarta text-sm text-slate-600 leading-relaxed">
                Hubungi Jessica via WhatsApp. Sebutkan identitas universitas asal untuk proses verifikasi subsidi biaya dosen mitra.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-white border border-slate-200 shadow-lg text-blue-600 rounded-2xl flex items-center justify-center font-garet font-bold text-2xl mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                02
              </div>
              <h4 className="font-garet font-bold text-lg text-slate-900 mb-3">
                Konfirmasi &amp; Bayar
              </h4>
              <p className="font-jakarta text-sm text-slate-600 leading-relaxed">
                Dapat dilakukan via pembayaran individu/institusi. Invoice resmi diterbitkan untuk LPPM atau fakultas Anda jika diperlukan.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-white border border-slate-200 shadow-lg text-blue-600 rounded-2xl flex items-center justify-center font-garet font-bold text-2xl mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                03
              </div>
              <h4 className="font-garet font-bold text-lg text-slate-900 mb-3">
                Terima Kit Persiapan
              </h4>
              <p className="font-jakarta text-sm text-slate-600 leading-relaxed">
                Daftar checklist software dan pembuatan akun gratis dikirim sebelum hari-H agar waktu pelatihan fokus pada praktik.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
