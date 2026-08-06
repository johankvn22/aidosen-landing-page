import React from 'react';
import { SPEAKERS_DATA } from '../data/contentData';

export const Speakers: React.FC = () => {
  return (
    <section id="trainers" className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-garet font-bold text-xs tracking-widest uppercase mb-4">
            PEMATERI UTAMA
          </span>
          <h2 className="font-garet font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 uppercase mb-4">
            {SPEAKERS_DATA.headline}
          </h2>
          <p className="font-jakarta text-slate-600 text-sm sm:text-base leading-relaxed">
            {SPEAKERS_DATA.subtext}
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-3 gap-8">
          {SPEAKERS_DATA.list.map((speaker, idx) => (
            <div 
              key={idx}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-slate-200 to-slate-100 hover:from-blue-500 hover:to-sky-400 transition-all duration-500"
            >
              <div className="bg-slate-50 border border-slate-200/80 h-full p-8 rounded-[23px] flex flex-col items-center text-center shadow-lg group-hover:shadow-2xl group-hover:bg-white transition-all duration-500 relative overflow-hidden">
                
                {/* Image Container */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 mb-6 group-hover:-translate-y-1.5 transition-transform duration-500">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-500 rounded-full blur-md opacity-25 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-100 z-10">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-garet font-bold text-lg md:text-xl text-slate-900 mb-1.5 leading-snug">
                  {speaker.name}
                </h3>

                <span className="font-jakarta text-xs font-extrabold text-blue-600 tracking-wider uppercase mb-4">
                  {speaker.role}
                </span>
                
                <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mb-5 opacity-60 group-hover:w-16 transition-all duration-500"></div>

                <p className="font-jakarta text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
