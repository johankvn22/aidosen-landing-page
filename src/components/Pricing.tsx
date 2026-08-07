import React from 'react';
import { useContent } from '../context/ContentContext';
import { RegistrationForm } from './RegistrationForm';

export const Pricing: React.FC = () => {
  const { content } = useContent();
  const { packages } = content;

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-garet font-bold text-xs tracking-widest uppercase mb-4">
            PAKET KELAS
          </span>
          <h2 className="font-garet font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-white uppercase">
            Program Disesuaikan Kebutuhan Anda
          </h2>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative bg-slate-900/90 border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular 
                  ? 'border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.2)] md:-translate-y-2' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-garet font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                  Paling Diminati
                </div>
              )}

              <div>
                <span className="inline-block font-jakarta text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full mb-4">
                  {pkg.badge}
                </span>

                <h3 className="font-garet font-bold text-xl text-white mb-2 leading-snug">
                  {pkg.name}
                </h3>

                <p className="font-jakarta text-xs text-slate-400 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="font-garet font-black text-3xl text-amber-400 mb-1">
                    {pkg.price}
                  </div>
                  {pkg.normalPrice && (
                    <span className="font-jakarta text-xs text-slate-500 line-through">
                      Normal {pkg.normalPrice}
                    </span>
                  )}
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-jakarta text-xs text-slate-300">
                      <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#registration-form"
                className={`block text-center font-garet font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all ${
                  pkg.isPopular
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                Pilih Paket Ini
              </a>

            </div>
          ))}
        </div>

        {/* Embedded Registration Form */}
        <RegistrationForm />

      </div>
    </section>
  );
};
