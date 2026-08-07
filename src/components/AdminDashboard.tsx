import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import {
  ProblemCardItem,
  TransformationRowItem,
  AIToolItem,
  AgendaModuleItem,
  SpeakerItem,
  TestimonialItem,
  PackageOptionItem,
  FAQItem,
  CustomSection
} from '../types/contentTypes';

interface AdminDashboardProps {
  onLogout: () => void;
  onBackToSite: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout, onBackToSite }) => {
  const {
    content,
    updateAppConfig,
    updateProblemConfig,
    updateTransformationConfig,
    setAiTools,
    setAgendaModules,
    setSpeakers,
    setTestimonials,
    setPackages,
    setFaqs,
    setCustomSections,
    setSectionOrder,
    resetToDefault
  } = useContent();

  const [activeTab, setActiveTab] = useState<
    'hero' | 'problems' | 'transformation' | 'tools' | 'agenda' | 'speakers' | 'testimonials' | 'pricing' | 'faqs' | 'custom' | 'reorder' | 'backup'
  >('hero');

  const [saveNotification, setSaveNotification] = useState('');

  const showSaveSuccess = (msg = 'Perubahan berhasil disimpan!') => {
    setSaveNotification(msg);
    setTimeout(() => setSaveNotification(''), 3000);
  };

  // Image Upload helper: converting file to base64 data URL
  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          callback(reader.result);
          showSaveSuccess('Gambar berhasil diunggah!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Helper for JSON Backup/Restore
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(content, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `aidosen-site-config-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], 'UTF-8');
      fileReader.onload = (event) => {
        try {
          if (event.target?.result) {
            const parsed = JSON.parse(event.target.result as string);
            if (parsed.appConfig) updateAppConfig(parsed.appConfig);
            if (parsed.problemConfig) updateProblemConfig(parsed.problemConfig);
            if (parsed.transformationConfig) updateTransformationConfig(parsed.transformationConfig);
            if (parsed.aiTools) setAiTools(parsed.aiTools);
            if (parsed.agendaModules) setAgendaModules(parsed.agendaModules);
            if (parsed.speakers) setSpeakers(parsed.speakers);
            if (parsed.testimonials) setTestimonials(parsed.testimonials);
            if (parsed.packages) setPackages(parsed.packages);
            if (parsed.faqs) setFaqs(parsed.faqs);
            if (parsed.customSections) setCustomSections(parsed.customSections);
            if (parsed.sectionOrder) setSectionOrder(parsed.sectionOrder);
            showSaveSuccess('Konfigurasi JSON berhasil di-import!');
          }
        } catch (err) {
          alert('Gagal membaca file JSON. Format file tidak valid.');
        }
      };
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      
      {/* Top Admin Navbar */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shadow-lg">
            ⚡
          </div>
          <div>
            <h1 className="font-garet font-black text-lg text-white leading-none">
              AI Dosen Admin CMS
            </h1>
            <p className="font-jakarta text-xs text-sky-400 font-semibold mt-1">
              Live Editing &amp; Content Management Dashboard
            </p>
          </div>
        </div>

        {/* Action Buttons Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToSite}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold font-jakarta transition-all border border-slate-700 flex items-center gap-1.5"
          >
            <span>&larr; Lihat Landing Page</span>
          </button>
          <button
            onClick={onLogout}
            className="px-4 py-2 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white text-xs font-bold font-jakarta transition-all"
          >
            Keluar Admin
          </button>
        </div>
      </header>

      {/* Save Notification Floating Toast */}
      {saveNotification && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl font-jakarta text-xs font-black uppercase tracking-wider flex items-center gap-2 border border-emerald-400 animate-bounce">
          <span>✓</span>
          <span>{saveNotification}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Navigation Tabs Bar */}
        <div className="flex flex-wrap gap-2 mb-8 bg-slate-900/80 p-2 rounded-2xl border border-slate-800">
          {[
            { id: 'hero', label: '🚀 Hero & Config' },
            { id: 'problems', label: '⚠️ Kendala / Problems' },
            { id: 'transformation', label: '🔄 Transformasi' },
            { id: 'tools', label: '🤖 AI Tools' },
            { id: 'agenda', label: '📅 Agenda Modul' },
            { id: 'speakers', label: '👤 Pemateri / Trainers' },
            { id: 'testimonials', label: '💬 Testimonial' },
            { id: 'pricing', label: '💰 Paket & Harga' },
            { id: 'faqs', label: '❓ FAQ' },
            { id: 'custom', label: '📑 Custom Section' },
            { id: 'reorder', label: '🔀 Urutan Section' },
            { id: 'backup', label: '💾 Backup & Reset' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl font-garet font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: HERO & GENERAL CONFIG */}
        {activeTab === 'hero' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="font-garet font-black text-xl text-white border-b border-slate-800 pb-4">
              Konfigurasi Hero &amp; Banner Utama
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-jakarta text-sm">
              {/* Running Top Banner */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300 uppercase">Running Top Banner Teks</label>
                <input
                  type="text"
                  value={content.appConfig.topBannerText || ''}
                  onChange={(e) => updateAppConfig({ topBannerText: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>

              {/* Top Banner Slot Badge */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300 uppercase">Slot Promo Teks</label>
                <input
                  type="text"
                  value={content.appConfig.topBannerSlotText || ''}
                  onChange={(e) => updateAppConfig({ topBannerSlotText: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>

              {/* Hero Event Badge */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold text-slate-300 uppercase">Hero Event Badge</label>
                <input
                  type="text"
                  value={content.appConfig.heroEventBadge || ''}
                  onChange={(e) => updateAppConfig({ heroEventBadge: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>

              {/* Headlines 1 - 3 */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300 uppercase">Headline Baris 1</label>
                <input
                  type="text"
                  value={content.appConfig.heroHeadline1 || ''}
                  onChange={(e) => updateAppConfig({ heroHeadline1: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300 uppercase">Headline Baris 2 (Gradien/Highlight)</label>
                <input
                  type="text"
                  value={content.appConfig.heroHeadline2 || ''}
                  onChange={(e) => updateAppConfig({ heroHeadline2: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300 uppercase">Headline Baris 3</label>
                <input
                  type="text"
                  value={content.appConfig.heroHeadline3 || ''}
                  onChange={(e) => updateAppConfig({ heroHeadline3: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>

              {/* Sub-headline */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold text-slate-300 uppercase">Hero Sub-headline Paragraf</label>
                <textarea
                  rows={3}
                  value={content.appConfig.heroSubheadline || ''}
                  onChange={(e) => updateAppConfig({ heroSubheadline: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>

              {/* Background Image URL / File Upload */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold text-slate-300 uppercase">Hero Background Image</label>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="text"
                    placeholder="URL Gambar atau pilih file di samping"
                    value={content.appConfig.heroBgUrl || ''}
                    onChange={(e) => updateAppConfig({ heroBgUrl: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-xs font-mono"
                  />
                  <label className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer shrink-0 transition-colors">
                    Upload File...
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageFileUpload(e, (url) => updateAppConfig({ heroBgUrl: url }))}
                    />
                  </label>
                </div>
              </div>

              {/* CTA Link & Text */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300 uppercase">CTA Button Text</label>
                <input
                  type="text"
                  value={content.appConfig.heroCtaText || ''}
                  onChange={(e) => updateAppConfig({ heroCtaText: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300 uppercase">CTA WhatsApp Link Target</label>
                <input
                  type="text"
                  value={content.appConfig.heroCtaLink || ''}
                  onChange={(e) => updateAppConfig({ heroCtaLink: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-xs font-mono"
                />
              </div>
            </div>

            <button
              onClick={() => showSaveSuccess()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-garet font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg"
            >
              Simpan Konfigurasi Hero
            </button>
          </div>
        )}

        {/* TAB 2: PROBLEMS / PAIN POINTS */}
        {activeTab === 'problems' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="font-garet font-black text-xl text-white">
                Kelola Kartu Kendala (Problem Section)
              </h2>
              <button
                onClick={() => {
                  const newCard: ProblemCardItem = {
                    id: `prob-${Date.now()}`,
                    badgeTag: 'Kategori Baru',
                    title: 'Judul Kendala Baru',
                    description: 'Deskripsi singkat mengenai kendala akademisi.'
                  };
                  updateProblemConfig({ cards: [...content.problemConfig.cards, newCard] });
                  showSaveSuccess('Kartu kendala baru ditambahkan!');
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                + Tambah Kartu Kendala
              </button>
            </div>

            <div className="space-y-4 font-jakarta text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 uppercase">Section Badge Label</label>
                  <input
                    type="text"
                    value={content.problemConfig.label}
                    onChange={(e) => updateProblemConfig({ label: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 uppercase">Section Headline</label>
                  <input
                    type="text"
                    value={content.problemConfig.headline}
                    onChange={(e) => updateProblemConfig({ headline: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white"
                  />
                </div>
              </div>

              {content.problemConfig.cards.map((card, idx) => (
                <div key={card.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-sky-400 text-xs uppercase">Kartu #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const filtered = content.problemConfig.cards.filter((c) => c.id !== card.id);
                        updateProblemConfig({ cards: filtered });
                        showSaveSuccess('Kartu dihapus.');
                      }}
                      className="text-red-400 hover:text-red-300 text-xs font-bold"
                    >
                      Hapus
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Badge Tag"
                      value={card.badgeTag}
                      onChange={(e) => {
                        const updated = [...content.problemConfig.cards];
                        updated[idx].badgeTag = e.target.value;
                        updateProblemConfig({ cards: updated });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Judul Kendala"
                      value={card.title}
                      onChange={(e) => {
                        const updated = [...content.problemConfig.cards];
                        updated[idx].title = e.target.value;
                        updateProblemConfig({ cards: updated });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs font-bold"
                    />
                  </div>

                  <textarea
                    rows={2}
                    placeholder="Deskripsi Kendala"
                    value={card.description}
                    onChange={(e) => {
                      const updated = [...content.problemConfig.cards];
                      updated[idx].description = e.target.value;
                      updateProblemConfig({ cards: updated });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TRANSFORMATION */}
        {activeTab === 'transformation' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="font-garet font-black text-xl text-white">
                Kelola Kartu Transformasi Metode
              </h2>
              <button
                onClick={() => {
                  const newRow: TransformationRowItem = {
                    id: `trans-${Date.now()}`,
                    conventional: 'Metode konvensional manual...',
                    aiBased: 'Solusi cepat berbasis AI...'
                  };
                  updateTransformationConfig({ rows: [...content.transformationConfig.rows, newRow] });
                  showSaveSuccess('Item komparasi baru ditambahkan!');
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                + Tambah Item Komparasi
              </button>
            </div>

            <div className="space-y-4 font-jakarta text-sm">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 uppercase">Headline Transformasi</label>
                <input
                  type="text"
                  value={content.transformationConfig.headline}
                  onChange={(e) => updateTransformationConfig({ headline: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white"
                />
              </div>

              {content.transformationConfig.rows.map((row, idx) => (
                <div key={row.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-amber-400 text-xs uppercase">Komparasi #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const filtered = content.transformationConfig.rows.filter((r) => r.id !== row.id);
                        updateTransformationConfig({ rows: filtered });
                        showSaveSuccess('Item dihapus.');
                      }}
                      className="text-red-400 hover:text-red-300 text-xs font-bold"
                    >
                      Hapus
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-red-400 uppercase">Konvensional (Lama)</label>
                      <textarea
                        rows={2}
                        value={row.conventional}
                        onChange={(e) => {
                          const updated = [...content.transformationConfig.rows];
                          updated[idx].conventional = e.target.value;
                          updateTransformationConfig({ rows: updated });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-sky-400 uppercase">Berbasis AI (MAXY)</label>
                      <textarea
                        rows={2}
                        value={row.aiBased}
                        onChange={(e) => {
                          const updated = [...content.transformationConfig.rows];
                          updated[idx].aiBased = e.target.value;
                          updateTransformationConfig({ rows: updated });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs font-semibold"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: AI TOOLS */}
        {activeTab === 'tools' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="font-garet font-black text-xl text-white">
                Kelola AI Tools Showcase
              </h2>
              <button
                onClick={() => {
                  const newTool: AIToolItem = {
                    id: `tool-${Date.now()}`,
                    name: 'Nama AI Tool',
                    role: 'Peran Tool Akademik',
                    category: 'Kategori Tool',
                    brandColor: '#38BDF8'
                  };
                  setAiTools([...content.aiTools, newTool]);
                  showSaveSuccess('AI Tool baru ditambahkan!');
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                + Tambah AI Tool
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-jakarta text-sm">
              {content.aiTools.map((tool, idx) => (
                <div key={tool.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-sky-400 text-xs uppercase">{tool.name} (#{idx + 1})</span>
                    <button
                      onClick={() => {
                        setAiTools(content.aiTools.filter((t) => t.id !== tool.id));
                        showSaveSuccess('Tool dihapus.');
                      }}
                      className="text-red-400 hover:text-red-300 text-xs font-bold"
                    >
                      Hapus
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Nama Tool"
                      value={tool.name}
                      onChange={(e) => {
                        const updated = [...content.aiTools];
                        updated[idx].name = e.target.value;
                        setAiTools(updated);
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs font-bold"
                    />
                    <input
                      type="text"
                      placeholder="Kategori"
                      value={tool.category}
                      onChange={(e) => {
                        const updated = [...content.aiTools];
                        updated[idx].category = e.target.value;
                        setAiTools(updated);
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Peran Utama Tool"
                    value={tool.role}
                    onChange={(e) => {
                      const updated = [...content.aiTools];
                      updated[idx].role = e.target.value;
                      setAiTools(updated);
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: AGENDA / CURRICULUM */}
        {activeTab === 'agenda' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="font-garet font-black text-xl text-white">
                Kelola Agenda &amp; Modul Pembelajaran
              </h2>
              <button
                onClick={() => {
                  const newMod: AgendaModuleItem = {
                    id: `agenda-${Date.now()}`,
                    title: 'SESI BARU: Judul Sesi Pembelajaran',
                    desc: 'Rincian poin pembelajaran dalam sesi ini...'
                  };
                  setAgendaModules([...content.agendaModules, newMod]);
                  showSaveSuccess('Sesi agenda baru ditambahkan!');
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                + Tambah Sesi Agenda
              </button>
            </div>

            <div className="space-y-4 font-jakarta text-sm">
              {content.agendaModules.map((mod, idx) => (
                <div key={mod.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-amber-400 text-xs uppercase">Sesi #{idx + 1}</span>
                    <button
                      onClick={() => {
                        setAgendaModules(content.agendaModules.filter((m) => m.id !== mod.id));
                        showSaveSuccess('Sesi dihapus.');
                      }}
                      className="text-red-400 hover:text-red-300 text-xs font-bold"
                    >
                      Hapus
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Judul Sesi Agenda"
                    value={mod.title}
                    onChange={(e) => {
                      const updated = [...content.agendaModules];
                      updated[idx].title = e.target.value;
                      setAgendaModules(updated);
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-white text-sm font-bold"
                  />

                  <textarea
                    rows={2}
                    placeholder="Deskripsi Poin Materi"
                    value={mod.desc}
                    onChange={(e) => {
                      const updated = [...content.agendaModules];
                      updated[idx].desc = e.target.value;
                      setAgendaModules(updated);
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-white text-xs"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: SPEAKERS / PEMATERI */}
        {activeTab === 'speakers' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="font-garet font-black text-xl text-white">
                Kelola Pemateri / Trainers
              </h2>
              <button
                onClick={() => {
                  const newSpeaker: SpeakerItem = {
                    id: `speaker-${Date.now()}`,
                    name: 'Nama Pemateri Baru',
                    role: 'Jabatan / Peran Pemateri',
                    portfolio: 'Bio ringkas dan rekam jejak pemateri.',
                    image: './img/tim/Ko_Toro.jpg',
                    borderColor: 'border-amber-400'
                  };
                  setSpeakers([...content.speakers, newSpeaker]);
                  showSaveSuccess('Pemateri baru ditambahkan!');
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                + Tambah Pemateri
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-jakarta text-sm">
              {content.speakers.map((sp, idx) => (
                <div key={sp.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-bold text-sky-400 text-xs uppercase">Pemateri #{idx + 1}</span>
                      <button
                        onClick={() => {
                          setSpeakers(content.speakers.filter((s) => s.id !== sp.id));
                          showSaveSuccess('Pemateri dihapus.');
                        }}
                        className="text-red-400 hover:text-red-300 text-xs font-bold"
                      >
                        Hapus
                      </button>
                    </div>

                    {/* Photo Preview & File Upload */}
                    <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative">
                      <img src={sp.image} alt={sp.name} className="w-full h-full object-cover object-top" />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Foto Image URL / Upload</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={sp.image}
                          onChange={(e) => {
                            const updated = [...content.speakers];
                            updated[idx].image = e.target.value;
                            setSpeakers(updated);
                          }}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-white text-xs font-mono"
                        />
                        <label className="bg-blue-600 text-white font-bold text-[10px] px-3 py-1.5 rounded-xl cursor-pointer shrink-0">
                          Upload
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleImageFileUpload(e, (url) => {
                                const updated = [...content.speakers];
                                updated[idx].image = url;
                                setSpeakers(updated);
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <input
                      type="text"
                      placeholder="Nama Lengkap"
                      value={sp.name}
                      onChange={(e) => {
                        const updated = [...content.speakers];
                        updated[idx].name = e.target.value;
                        setSpeakers(updated);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white font-bold text-sm"
                    />

                    <input
                      type="text"
                      placeholder="Role / Jabatan"
                      value={sp.role}
                      onChange={(e) => {
                        const updated = [...content.speakers];
                        updated[idx].role = e.target.value;
                        setSpeakers(updated);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs"
                    />

                    <textarea
                      rows={3}
                      placeholder="Bio / Portofolio"
                      value={sp.portfolio}
                      onChange={(e) => {
                        const updated = [...content.speakers];
                        updated[idx].portfolio = e.target.value;
                        setSpeakers(updated);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: TESTIMONIALS */}
        {activeTab === 'testimonials' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="font-garet font-black text-xl text-white">
                Kelola Testimonial Peserta
              </h2>
              <button
                onClick={() => {
                  const newTesti: TestimonialItem = {
                    id: `testi-${Date.now()}`,
                    name: 'Nama Alumni Dosen',
                    role: 'Dosen / Peneliti',
                    university: 'Universitas Indonesia',
                    quote: 'Kesan dan pengalaman positif setelah mengikuti kelas AI Dosen.',
                    rating: 5
                  };
                  setTestimonials([...content.testimonials, newTesti]);
                  showSaveSuccess('Testimonial baru ditambahkan!');
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                + Tambah Testimonial
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-jakarta text-sm">
              {content.testimonials.map((testi, idx) => (
                <div key={testi.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-amber-400 text-xs uppercase">{testi.name} (#{idx + 1})</span>
                    <button
                      onClick={() => {
                        setTestimonials(content.testimonials.filter((t) => t.id !== testi.id));
                        showSaveSuccess('Testimonial dihapus.');
                      }}
                      className="text-red-400 hover:text-red-300 text-xs font-bold"
                    >
                      Hapus
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Nama Alumni"
                      value={testi.name}
                      onChange={(e) => {
                        const updated = [...content.testimonials];
                        updated[idx].name = e.target.value;
                        setTestimonials(updated);
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs font-bold"
                    />
                    <input
                      type="text"
                      placeholder="Role / Jabatan"
                      value={testi.role}
                      onChange={(e) => {
                        const updated = [...content.testimonials];
                        updated[idx].role = e.target.value;
                        setTestimonials(updated);
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs"
                    />
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Isi Ulasan Testimonial"
                    value={testi.quote}
                    onChange={(e) => {
                      const updated = [...content.testimonials];
                      updated[idx].quote = e.target.value;
                      setTestimonials(updated);
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs italic"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: PRICING & PACKAGES */}
        {activeTab === 'pricing' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="font-garet font-black text-xl text-white">
                Kelola Paket Kelas &amp; Investasi
              </h2>
              <button
                onClick={() => {
                  const newPkg: PackageOptionItem = {
                    id: `pkg-${Date.now()}`,
                    badge: 'Badge Baru',
                    name: 'Nama Paket Baru',
                    description: 'Deskripsi singkat paket kelas.',
                    price: 'Rp1.225.000',
                    features: ['Benefit 1', 'Benefit 2']
                  };
                  setPackages([...content.packages, newPkg]);
                  showSaveSuccess('Paket kelas baru ditambahkan!');
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                + Tambah Paket Kelas
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-jakarta text-sm">
              {content.packages.map((pkg, idx) => (
                <div key={pkg.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-bold text-amber-400 text-xs uppercase">{pkg.name}</span>
                      <button
                        onClick={() => {
                          setPackages(content.packages.filter((p) => p.id !== pkg.id));
                          showSaveSuccess('Paket dihapus.');
                        }}
                        className="text-red-400 hover:text-red-300 text-xs font-bold"
                      >
                        Hapus
                      </button>
                    </div>

                    <input
                      type="text"
                      placeholder="Badge Tag"
                      value={pkg.badge}
                      onChange={(e) => {
                        const updated = [...content.packages];
                        updated[idx].badge = e.target.value;
                        setPackages(updated);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs"
                    />

                    <input
                      type="text"
                      placeholder="Nama Paket"
                      value={pkg.name}
                      onChange={(e) => {
                        const updated = [...content.packages];
                        updated[idx].name = e.target.value;
                        setPackages(updated);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white font-bold text-sm"
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Harga Promo"
                        value={pkg.price}
                        onChange={(e) => {
                          const updated = [...content.packages];
                          updated[idx].price = e.target.value;
                          setPackages(updated);
                        }}
                        className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-amber-400 font-black text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Harga Normal"
                        value={pkg.normalPrice || ''}
                        onChange={(e) => {
                          const updated = [...content.packages];
                          updated[idx].normalPrice = e.target.value;
                          setPackages(updated);
                        }}
                        className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-400 text-xs line-through"
                      />
                    </div>

                    <textarea
                      rows={2}
                      placeholder="Deskripsi Singkat"
                      value={pkg.description}
                      onChange={(e) => {
                        const updated = [...content.packages];
                        updated[idx].description = e.target.value;
                        setPackages(updated);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 9: FAQ */}
        {activeTab === 'faqs' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="font-garet font-black text-xl text-white">
                Kelola Pertanyaan FAQ
              </h2>
              <button
                onClick={() => {
                  const newFaq: FAQItem = {
                    id: `faq-${Date.now()}`,
                    question: 'Pertanyaan baru mengenai kelas?',
                    answer: 'Jawaban rincinya di sini.'
                  };
                  setFaqs([...content.faqs, newFaq]);
                  showSaveSuccess('FAQ baru ditambahkan!');
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                + Tambah FAQ
              </button>
            </div>

            <div className="space-y-4 font-jakarta text-sm">
              {content.faqs.map((faq, idx) => (
                <div key={faq.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-sky-400 text-xs uppercase">FAQ #{idx + 1}</span>
                    <button
                      onClick={() => {
                        setFaqs(content.faqs.filter((f) => f.id !== faq.id));
                        showSaveSuccess('FAQ dihapus.');
                      }}
                      className="text-red-400 hover:text-red-300 text-xs font-bold"
                    >
                      Hapus
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Pertanyaan"
                    value={faq.question}
                    onChange={(e) => {
                      const updated = [...content.faqs];
                      updated[idx].question = e.target.value;
                      setFaqs(updated);
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-white font-bold text-sm"
                  />

                  <textarea
                    rows={3}
                    placeholder="Jawaban Rinci"
                    value={faq.answer}
                    onChange={(e) => {
                      const updated = [...content.faqs];
                      updated[idx].answer = e.target.value;
                      setFaqs(updated);
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-white text-xs"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 10: CUSTOM SECTIONS */}
        {activeTab === 'custom' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="font-garet font-black text-xl text-white">
                Kelola Section Kustom (Custom Sections)
              </h2>
              <button
                onClick={() => {
                  const newSec: CustomSection = {
                    id: `custom-${Date.now()}`,
                    title: 'Judul Section Kustom Baru',
                    subtitle: 'Subtitle opsional untuk penjelas',
                    content: '<p>Tulis konten atau HTML kustom di sini...</p>'
                  };
                  setCustomSections([...content.customSections, newSec]);
                  showSaveSuccess('Custom section baru ditambahkan!');
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                + Buat Custom Section
              </button>
            </div>

            <div className="space-y-4 font-jakarta text-sm">
              {content.customSections.length === 0 ? (
                <p className="text-slate-500 text-xs italic text-center py-6">
                  Belum ada section kustom. Klik tombol "+ Buat Custom Section" untuk menambahkannya.
                </p>
              ) : (
                content.customSections.map((sec, idx) => (
                  <div key={sec.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-bold text-amber-400 text-xs uppercase">Custom Section #{idx + 1}</span>
                      <button
                        onClick={() => {
                          setCustomSections(content.customSections.filter((s) => s.id !== sec.id));
                          showSaveSuccess('Custom section dihapus.');
                        }}
                        className="text-red-400 hover:text-red-300 text-xs font-bold"
                      >
                        Hapus
                      </button>
                    </div>

                    <input
                      type="text"
                      placeholder="Judul Section"
                      value={sec.title}
                      onChange={(e) => {
                        const updated = [...content.customSections];
                        updated[idx].title = e.target.value;
                        setCustomSections(updated);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-white font-bold text-sm"
                    />

                    <input
                      type="text"
                      placeholder="Subtitle Opsional"
                      value={sec.subtitle || ''}
                      onChange={(e) => {
                        const updated = [...content.customSections];
                        updated[idx].subtitle = e.target.value;
                        setCustomSections(updated);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-white text-xs"
                    />

                    <textarea
                      rows={4}
                      placeholder="Konten (Mendukung Teks / HTML)"
                      value={sec.content}
                      onChange={(e) => {
                        const updated = [...content.customSections];
                        updated[idx].content = e.target.value;
                        setCustomSections(updated);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-white font-mono text-xs"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 11: REORDER SECTIONS */}
        {activeTab === 'reorder' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="font-garet font-black text-xl text-white border-b border-slate-800 pb-4">
              Atur Urutan Tata Letak Section Landing Page
            </h2>

            <div className="space-y-2 font-jakarta text-sm">
              {content.sectionOrder.map((secId, index) => (
                <div key={secId} className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-sky-400 font-bold w-6">{index + 1}.</span>
                    <span className="font-bold text-white uppercase text-xs tracking-wider">{secId}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      disabled={index === 0}
                      onClick={() => {
                        const newOrder = [...content.sectionOrder];
                        const temp = newOrder[index - 1];
                        newOrder[index - 1] = newOrder[index];
                        newOrder[index] = temp;
                        setSectionOrder(newOrder);
                        showSaveSuccess('Urutan dinaikkan!');
                      }}
                      className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg text-xs font-bold"
                    >
                      ▲ Naik
                    </button>

                    <button
                      disabled={index === content.sectionOrder.length - 1}
                      onClick={() => {
                        const newOrder = [...content.sectionOrder];
                        const temp = newOrder[index + 1];
                        newOrder[index + 1] = newOrder[index];
                        newOrder[index] = temp;
                        setSectionOrder(newOrder);
                        showSaveSuccess('Urutan diturunkan!');
                      }}
                      className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg text-xs font-bold"
                    >
                      ▼ Turun
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 12: BACKUP & RESET */}
        {activeTab === 'backup' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="font-garet font-black text-xl text-white border-b border-slate-800 pb-4">
              Backup, Import &amp; Reset Konfigurasi
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-jakarta text-sm">
              {/* Export */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3 text-center">
                <div className="text-3xl">📥</div>
                <h3 className="font-garet font-bold text-white">Export Konfigurasi</h3>
                <p className="text-xs text-slate-400">Unduh seluruh data situs sebagai file backup JSON.</p>
                <button
                  onClick={handleExportJSON}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase py-2.5 rounded-xl shadow-md"
                >
                  Download JSON Backup
                </button>
              </div>

              {/* Import */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3 text-center">
                <div className="text-3xl">📤</div>
                <h3 className="font-garet font-bold text-white">Import Konfigurasi</h3>
                <p className="text-xs text-slate-400">Pulihkan situs dari file backup JSON sebelumnya.</p>
                <label className="block w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase py-2.5 rounded-xl cursor-pointer shadow-md">
                  Pilih File JSON...
                  <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
                </label>
              </div>

              {/* Reset */}
              <div className="bg-slate-950 border border-red-500/30 rounded-2xl p-5 space-y-3 text-center">
                <div className="text-3xl">🔄</div>
                <h3 className="font-garet font-bold text-red-400">Reset ke Default Bawaan</h3>
                <p className="text-xs text-slate-400">Kembalikan seluruh konten situs ke data standar awal.</p>
                <button
                  onClick={() => {
                    if (confirm('Apakah Anda yakin ingin menghapus seluruh editan dan mereset ke konten default bawaan?')) {
                      resetToDefault();
                      showSaveSuccess('Situs dikembalikan ke default!');
                    }
                  }}
                  className="w-full bg-red-600/20 border border-red-500/40 hover:bg-red-600 text-red-400 hover:text-white font-bold text-xs uppercase py-2.5 rounded-xl shadow-md transition-colors"
                >
                  Reset Default Bawaan
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
