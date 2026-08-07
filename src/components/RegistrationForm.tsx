import React, { useState } from 'react';
import { PRICING_DATA, WA_NUMBER } from '../data/contentData';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    university: '',
    role: '',
    packageId: 'onsite-mitra'
  });

  const selectedPackage = PRICING_DATA.packages.find(p => p.id === formData.packageId) || PRICING_DATA.packages[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Halo, saya ingin mendaftar kelas AI Dosen. Berikut data pendaftaran saya:
- Nama Lengkap: ${formData.fullName}
- No WhatsApp: ${formData.phone}
- Email: ${formData.email}
- Kota Tinggal: ${formData.city}
- Universitas/Institusi: ${formData.university}
- Jabatan: ${formData.role}
- Paket Kelas: ${selectedPackage.name} (${selectedPackage.price})

Mohon konfirmasi ketersediaan slot promo. Terima kasih!`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodedMsg}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div id="registration-form" className="bg-slate-900 border border-blue-500/30 rounded-3xl p-5 sm:p-8 md:p-12 shadow-[0_0_50px_rgba(59,130,246,0.15)] text-white">
      <div className="max-w-2xl mx-auto">
        
        {/* Form Title */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-garet font-bold text-xs tracking-widest uppercase mb-3">
            FORMULIR PENDAFTARAN
          </span>
          <h3 className="font-garet font-black text-2xl sm:text-3xl text-white mb-2">
            Amankan Slot Promo Anda
          </h3>
          <p className="font-jakarta text-slate-300 text-xs sm:text-sm">
            Lengkapi data diri Anda secara valid di bawah ini untuk mengamankan slot diskon.
          </p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-5 font-jakarta text-sm">
          
          {/* Nama Lengkap */}
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Nama Lengkap (beserta Gelar Akademik)*
            </label>
            <input 
              type="text"
              required
              placeholder="Contoh: Dr. Hendra Wijaya, M.Si."
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-colors"
            />
          </div>

          {/* Grid 2-cols: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-slate-300 font-medium mb-1.5">
                Nomor WhatsApp*
              </label>
              <input 
                type="tel"
                required
                placeholder="Contoh: 081234567890"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1.5">
                Email Aktif*
              </label>
              <input 
                type="email"
                required
                placeholder="dosen@universitas.ac.id"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-colors"
              />
            </div>
          </div>

          {/* Grid 2-cols: City & University */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-slate-300 font-medium mb-1.5">
                Kota Tinggal Saat Ini*
              </label>
              <input 
                type="text"
                required
                placeholder="Contoh: Jakarta Selatan"
                value={formData.city}
                onChange={e => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1.5">
                Nama Universitas/Institusi*
              </label>
              <input 
                type="text"
                required
                placeholder="Contoh: Universitas Indonesia"
                value={formData.university}
                onChange={e => setFormData({ ...formData, university: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-colors"
              />
            </div>
          </div>

          {/* Jabatan */}
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Jabatan*
            </label>
            <input 
              type="text"
              required
              placeholder="Contoh: Dosen Pengajar / Kaprodi / Peneliti"
              value={formData.role}
              onChange={e => setFormData({ ...formData, role: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-colors"
            />
          </div>

          {/* Dropdown Select Package */}
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Pilih Paket Kelas yang Diinginkan*
            </label>
            <select
              value={formData.packageId}
              onChange={e => setFormData({ ...formData, packageId: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors cursor-pointer"
            >
              {PRICING_DATA.packages.map(p => (
                <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                  {p.name} — {p.price}
                </option>
              ))}
            </select>
          </div>

          {/* Auto Display Price */}
          <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-4 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Harga Promo yang Didapatkan:</span>
            <div className="text-right">
              <span className="font-garet font-black text-xl text-amber-400 block">{selectedPackage.price}</span>
              {selectedPackage.normalPrice && (
                <span className="text-[11px] text-slate-500 line-through">(Normal {selectedPackage.normalPrice})</span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-center bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-garet font-black text-base uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Konsultasi / Daftar Sekarang &rarr;
          </button>

        </form>
      </div>
    </div>
  );
};
