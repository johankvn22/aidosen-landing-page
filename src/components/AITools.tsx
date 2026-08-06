import React from 'react';
import { AI_TOOLS_LIST, AIToolItem } from '../data/contentData';

const ToolLogo: React.FC<{ toolId: string }> = ({ toolId }) => {
  switch (toolId) {
    case 'chatgpt':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#10A37F] fill-current" aria-label="ChatGPT Logo">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 23.35a6.0414 6.0414 0 0 0 5.7702-4.1818 5.9847 5.9847 0 0 0 3.9977-2.9 6.0462 6.0462 0 0 0-.745-7.4471zM13.4308 21.758a4.526 4.526 0 0 1-2.955-1.082l.1428-.0823 4.9272-2.8443a.774.774 0 0 0 .3896-.671v-6.9452l2.085 1.2037a.148.148 0 0 1 .0757.1147v5.7766a4.551 4.551 0 0 1-4.6653 4.5303zM3.4795 17.5255a4.526 4.526 0 0 1-.5398-3.093l.1428.0847 4.9272 2.8443a.774.774 0 0 0 .7792 0l6.0142-3.4726v2.4074a.148.148 0 0 1-.0598.1243l-5.0028 2.8879a4.551 4.551 0 0 1-6.2608-1.783zM2.261 8.8711a4.526 4.526 0 0 1 2.4153-2.011l.0001.1646v5.6886a.774.774 0 0 0 .3896.671l6.0142 3.4726-2.085 1.2037a.148.148 0 0 1-.138.0096L3.8544 15.18a4.551 4.551 0 0 1-1.5934-6.3089zm17.697 3.7578l-6.0142-3.4726 2.085-1.2037a.148.148 0 0 1 .138-.0096l5.0028 2.8879a4.5398 4.5398 0 0 1-.7346 8.212l-.1428-.0847-4.9272-2.8443a.774.774 0 0 0-.3896-.671v-2.8139zM20.2592 7.7471l-.1428-.0847-4.9272-2.8443a.774.774 0 0 0-.7792 0L8.3958 8.2907V5.8833a.148.148 0 0 1 .0598-.1243l5.0028-2.8879a4.551 4.551 0 0 1 6.8008 4.876zm-11.458-3.0847a4.526 4.526 0 0 1 2.955 1.082l-.1428.0823-4.9272 2.8443a.774.774 0 0 0-.3896.671v6.9452L4.2116 15.084a.148.148 0 0 1-.0757-.1147V9.1927a4.551 4.551 0 0 1 4.6653-4.5303z"/>
        </svg>
      );
    case 'claude':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#D97757] fill-current" aria-label="Claude Logo">
          <path d="M12 2L13.7 9.3L20.5 6.5L15.3 12L20.5 17.5L13.7 14.7L12 22L10.3 14.7L3.5 17.5L8.7 12L3.5 6.5L10.3 9.3L12 2Z" />
        </svg>
      );
    case 'gemini':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7" aria-label="Google Gemini Logo">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-logo-grad)" />
          <defs>
            <linearGradient id="gemini-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="45%" stopColor="#9B72CB" />
              <stop offset="100%" stopColor="#D9657B" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'notebooklm':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7" aria-label="NotebookLM Logo">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M7 7h10M7 11h7M7 15h5" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17 11C17 13.2 15.2 15 13 15C15.2 15 17 16.8 17 19C17 16.8 18.8 15 21 15C18.8 15 17 13.2 17 11Z" fill="url(#notebooklm-logo-grad)" />
          <defs>
            <linearGradient id="notebooklm-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'googleflow':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7" aria-label="Google Flow Logo">
          <circle cx="5" cy="12" r="3.5" fill="#4285F4" />
          <circle cx="19" cy="6" r="3.5" fill="#EA4335" />
          <circle cx="19" cy="18" r="3.5" fill="#34A853" />
          <path d="M8.5 12C11 12 13.5 8.5 15.5 6.5" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" />
          <path d="M8.5 12C11 12 13.5 15.5 15.5 17.5" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'toolspendukung':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7" aria-label="Tools Pendukung Logo">
          <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V7l-9-5z" fill="#4F46E5" fillOpacity="0.2" stroke="#6366F1" strokeWidth="1.5" />
          <path d="M9 12l2 2 4-4" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="17" cy="7" r="3" fill="#818CF8" />
          <path d="M16 7l1 1 2-2" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

export const AITools: React.FC = () => {
  return (
    <section id="ai-tools" className="py-20 lg:py-24 bg-slate-950 text-white relative border-t border-slate-800">
      {/* Radial Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_30%,#1e3a8a_0%,transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-garet font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
            TEKNOLOGI &amp; INTEGRASI
          </span>
          <h2 className="font-garet font-black text-3xl sm:text-4xl text-white leading-tight uppercase tracking-tight">
            Berikut AI Tools yang Akan Digunakan
          </h2>
          <p className="font-jakarta text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            Pelajari &amp; integrasikan ekosistem AI terdepan untuk meningkatkan produktivitas riset dan pengajaran Anda.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {AI_TOOLS_LIST.map((tool: AIToolItem) => (
            <div 
              key={tool.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(56,189,248,0.15)] group flex flex-col justify-between"
            >
              <div>
                {/* Logo Badge Container */}
                <div 
                  className="w-14 h-14 mx-auto rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-sky-500/40 shadow-inner relative overflow-hidden"
                  style={{ boxShadow: `0 0 15px ${tool.brandColor}15` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: tool.brandColor }}></div>
                  <ToolLogo toolId={tool.id} />
                </div>
                
                {/* Category Badge */}
                <span className="inline-block px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 font-jakarta font-semibold text-[10px] text-slate-300 uppercase tracking-wider mb-2">
                  {tool.category}
                </span>

                {/* Tool Name */}
                <h4 className="font-garet font-bold text-base text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                  {tool.name}
                </h4>

                {/* Tool Role */}
                <p className="font-jakarta text-[11.5px] text-slate-400 leading-snug">
                  {tool.role}
                </p>
              </div>

              {/* Optional Sub-tools list for Support Toolkit */}
              {tool.subTools && (
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1 justify-center">
                  {tool.subTools.map((sub, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 text-[9.5px] font-medium border border-indigo-500/20">
                      {sub}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
