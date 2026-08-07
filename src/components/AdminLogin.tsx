import React, { useState } from 'react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onBackToSite: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, onBackToSite }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Admin password check
    if (password === 'maxyadmin' || password === 'admin123') {
      sessionStorage.setItem('maxy_aidosen_admin_auth', 'true');
      onLoginSuccess();
    } else {
      setError('Password salah! Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 relative font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-sky-400 font-black text-xl mb-1 shadow-inner">
            ⚡
          </div>
          <h1 className="font-garet font-black text-2xl text-white tracking-tight">
            Admin CMS Login
          </h1>
          <p className="font-jakarta text-xs text-slate-400">
            Kelola Konten &amp; Tampilan AI Dosen Landing Page
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5 font-jakarta text-sm">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Kata Sandi Admin
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Masukkan kata sandi admin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-all font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-semibold"
              >
                {showPassword ? 'Sembunyikan' : 'Lihat'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-garet font-black text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Masuk ke Admin Dashboard &rarr;
          </button>
        </form>

        {/* Back to site */}
        <div className="pt-4 border-t border-slate-800 text-center">
          <button
            onClick={onBackToSite}
            className="font-jakarta text-xs text-slate-400 hover:text-white underline transition-colors"
          >
            &larr; Kembali ke Landing Page AI Dosen
          </button>
        </div>

      </div>
    </div>
  );
};
