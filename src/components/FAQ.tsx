import React, { useState } from 'react';
import { FAQS_DATA } from '../data/contentData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-garet font-bold text-xs tracking-widest uppercase mb-4">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-garet font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 uppercase">
            {FAQS_DATA.headline}
          </h2>
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-4">
          {FAQS_DATA.list.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:border-blue-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left p-6 outline-none focus:outline-none cursor-pointer group"
                >
                  <span className="font-garet font-bold text-slate-900 text-base sm:text-lg pr-4 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <span className={`text-blue-600 text-2xl font-light transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 font-jakarta text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
