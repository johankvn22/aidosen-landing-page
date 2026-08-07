import React, { createContext, useContext, useState, useEffect } from "react";
import {
  PROBLEM_DATA,
  TRANSFORMATION_DATA,
  AI_TOOLS_LIST,
  CURRICULUM_DATA,
  SPEAKERS_DATA,
  TESTIMONIALS_DATA,
  PRICING_DATA,
  FAQS_DATA,
  POPUP_DATA,
  WA_NUMBER,
  WA_DEFAULT_MSG
} from "../data/contentData";
import {
  SiteContentState,
  AppConfigType,
  ProblemConfig,
  TransformationConfig,
  AIToolItem,
  AgendaModuleItem,
  SpeakerItem,
  TestimonialItem,
  PackageOptionItem,
  FAQItem,
  CustomSection,
  PopupConfig,
  WaConfig
} from "../types/contentTypes";

export const DEFAULT_APP_CONFIG: AppConfigType = {
  topBannerText: "HARGA KHUSUS MITRA UNIVERSITAS TERBATAS",
  topBannerSlotText: "Tersisa 7 slot promo",
  heroBgUrl: "./img/hero_bg_dosen.png",
  heroEventBadge: "AI-Powered Research & Smart Teaching • 1 Agustus 2026 • Online & Onsite",
  heroHeadline1: "Riset Lebih Cepat.",
  heroHeadline2: "Bahan Ajar Lebih Menarik.",
  heroHeadline3: "Semua dengan AI.",
  heroSubheadline: "AI bukan lagi sekadar alat bantu, melainkan sistem kerja baru bagi akademisi masa kini. Pelajari cara memanfaatkan AI untuk mempercepat proses penelitian, penyusunan proposal & draft jurnal ilmiah, menghasilkan materi & modul pembelajaran, hingga meningkatkan produktivitas publikasi secara lebih efektif dan terstruktur.",
  heroBadge1: "Riset 10x Lebih Cepat",
  heroBadge2: "Sistem Riset Aktif 24/7",
  heroBadge3: "80% Lebih Efisien",
  heroCountdownTitle: "PENAWARAN HARGA KHUSUS MITRA BERAKHIR DALAM:",
  heroCtaText: "Amankan Harga Khusus Mitra Universitas Sekarang →",
  heroCtaLink: `https://wa.me/${WA_NUMBER}?text=${WA_DEFAULT_MSG}`,
  countdownDays: 0,
  countdownHours: 0,
  countdownMinutes: 14,
  countdownSeconds: 11
};

export const DEFAULT_PROBLEM_CONFIG: ProblemConfig = {
  label: PROBLEM_DATA.label,
  headline: PROBLEM_DATA.headline,
  cards: PROBLEM_DATA.cards.map((c) => ({
    id: c.id,
    badgeTag: c.badgeTag,
    title: c.title,
    description: c.description
  }))
};

export const DEFAULT_TRANSFORMATION_CONFIG: TransformationConfig = {
  headline: TRANSFORMATION_DATA.headline,
  rows: TRANSFORMATION_DATA.rows.map((r, i) => ({
    id: `trans-${i + 1}`,
    conventional: r.conventional,
    aiBased: r.aiBased
  }))
};

export const DEFAULT_AI_TOOLS: AIToolItem[] = AI_TOOLS_LIST.map((t) => ({
  id: t.id,
  name: t.name,
  role: t.role,
  category: t.category,
  brandColor: t.brandColor,
  subTools: t.subTools
}));

export const DEFAULT_AGENDA: AgendaModuleItem[] = CURRICULUM_DATA.sessions.map((s, i) => ({
  id: `agenda-${i + 1}`,
  title: `${s.tag}: ${s.title}`,
  desc: s.items.join(" • ")
}));

export const DEFAULT_SPEAKERS: SpeakerItem[] = SPEAKERS_DATA.list.map((sp, i) => ({
  id: `speaker-${i + 1}`,
  name: sp.name,
  role: sp.role,
  portfolio: sp.bio,
  image: sp.image,
  borderColor: i === 0 ? "border-amber-400" : i === 1 ? "border-orange-400" : "border-slate-800"
}));

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = TESTIMONIALS_DATA.featured.map((t, i) => ({
  id: `testi-${i + 1}`,
  name: t.name,
  role: t.role,
  university: "Akademisi MAXY",
  quote: t.quote,
  rating: 5
}));

export const DEFAULT_PACKAGES: PackageOptionItem[] = PRICING_DATA.packages.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  description: p.description,
  price: p.price,
  normalPrice: p.normalPrice,
  features: p.features,
  isPopular: p.isPopular
}));

export const DEFAULT_FAQS: FAQItem[] = FAQS_DATA.list.map((f, i) => ({
  id: `faq-${i + 1}`,
  question: f.question,
  answer: f.answer
}));

export const DEFAULT_SECTION_ORDER = [
  "hero",
  "trustBanner",
  "painPoints",
  "transformation",
  "solution",
  "aiTools",
  "agenda",
  "hasilNyata",
  "speakers",
  "testimonials",
  "pricing",
  "valueComparison",
  "faq"
];

export const DEFAULT_POPUP_CONFIG: PopupConfig = {
  headline: POPUP_DATA.headline,
  subheadline: POPUP_DATA.subheadline,
  mitraPrice: POPUP_DATA.mitraPrice,
  normalPrice: POPUP_DATA.normalPrice,
  buttonText: POPUP_DATA.buttonText,
  footerText: POPUP_DATA.footerText
};

export const DEFAULT_WA_CONFIG: WaConfig = {
  number: WA_NUMBER,
  defaultMsg: "Halo, saya dosen/akademisi ingin klaim Harga Khusus Mitra Universitas untuk kelas AI Dosen."
};

const STORAGE_KEY = "maxy_aidosen_site_content_v1";

interface ContentContextType {
  content: SiteContentState;
  updateAppConfig: (partial: Partial<AppConfigType>) => void;
  updateProblemConfig: (partial: Partial<ProblemConfig>) => void;
  updateTransformationConfig: (partial: Partial<TransformationConfig>) => void;
  setAiTools: (aiTools: AIToolItem[]) => void;
  setAgendaModules: (modules: AgendaModuleItem[]) => void;
  setSpeakers: (speakers: SpeakerItem[]) => void;
  setTestimonials: (testimonials: TestimonialItem[]) => void;
  setPackages: (packages: PackageOptionItem[]) => void;
  setFaqs: (faqs: FAQItem[]) => void;
  setCustomSections: (sections: CustomSection[]) => void;
  setSectionOrder: (order: string[]) => void;
  updatePopupConfig: (partial: Partial<PopupConfig>) => void;
  updateWaConfig: (partial: Partial<WaConfig>) => void;
  resetToDefault: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContentState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          appConfig: { ...DEFAULT_APP_CONFIG, ...(parsed.appConfig || {}) },
          problemConfig: {
            ...DEFAULT_PROBLEM_CONFIG,
            ...(parsed.problemConfig || {}),
            cards: Array.isArray(parsed.problemConfig?.cards)
              ? parsed.problemConfig.cards
              : DEFAULT_PROBLEM_CONFIG.cards
          },
          transformationConfig: {
            ...DEFAULT_TRANSFORMATION_CONFIG,
            ...(parsed.transformationConfig || {}),
            rows: Array.isArray(parsed.transformationConfig?.rows)
              ? parsed.transformationConfig.rows
              : DEFAULT_TRANSFORMATION_CONFIG.rows
          },
          aiTools: Array.isArray(parsed.aiTools) ? parsed.aiTools : DEFAULT_AI_TOOLS,
          agendaModules: Array.isArray(parsed.agendaModules) ? parsed.agendaModules : DEFAULT_AGENDA,
          speakers: Array.isArray(parsed.speakers) ? parsed.speakers : DEFAULT_SPEAKERS,
          testimonials: Array.isArray(parsed.testimonials) ? parsed.testimonials : DEFAULT_TESTIMONIALS,
          packages: Array.isArray(parsed.packages) ? parsed.packages : DEFAULT_PACKAGES,
          faqs: Array.isArray(parsed.faqs) ? parsed.faqs : DEFAULT_FAQS,
          customSections: Array.isArray(parsed.customSections) ? parsed.customSections : [],
          sectionOrder: Array.isArray(parsed.sectionOrder) && parsed.sectionOrder.length > 0
            ? parsed.sectionOrder
            : DEFAULT_SECTION_ORDER,
          popupConfig: { ...DEFAULT_POPUP_CONFIG, ...(parsed.popupConfig || {}) },
          waConfig: { ...DEFAULT_WA_CONFIG, ...(parsed.waConfig || {}) }
        };
      }
    } catch (e) {
      console.error("Failed to load custom aidosen content:", e);
    }
    return {
      appConfig: DEFAULT_APP_CONFIG,
      problemConfig: DEFAULT_PROBLEM_CONFIG,
      transformationConfig: DEFAULT_TRANSFORMATION_CONFIG,
      aiTools: DEFAULT_AI_TOOLS,
      agendaModules: DEFAULT_AGENDA,
      speakers: DEFAULT_SPEAKERS,
      testimonials: DEFAULT_TESTIMONIALS,
      packages: DEFAULT_PACKAGES,
      faqs: DEFAULT_FAQS,
      customSections: [],
      sectionOrder: DEFAULT_SECTION_ORDER,
      popupConfig: DEFAULT_POPUP_CONFIG,
      waConfig: DEFAULT_WA_CONFIG
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (e) {
      console.error("Failed to save aidosen site content:", e);
    }
  }, [content]);

  const updateAppConfig = (partial: Partial<AppConfigType>) => {
    setContent((prev) => ({
      ...prev,
      appConfig: { ...prev.appConfig, ...partial }
    }));
  };

  const updateProblemConfig = (partial: Partial<ProblemConfig>) => {
    setContent((prev) => ({
      ...prev,
      problemConfig: { ...prev.problemConfig, ...partial }
    }));
  };

  const updateTransformationConfig = (partial: Partial<TransformationConfig>) => {
    setContent((prev) => ({
      ...prev,
      transformationConfig: { ...prev.transformationConfig, ...partial }
    }));
  };

  const setAiTools = (aiTools: AIToolItem[]) => {
    setContent((prev) => ({ ...prev, aiTools }));
  };

  const setAgendaModules = (agendaModules: AgendaModuleItem[]) => {
    setContent((prev) => ({ ...prev, agendaModules }));
  };

  const setSpeakers = (speakers: SpeakerItem[]) => {
    setContent((prev) => ({ ...prev, speakers }));
  };

  const setTestimonials = (testimonials: TestimonialItem[]) => {
    setContent((prev) => ({ ...prev, testimonials }));
  };

  const setPackages = (packages: PackageOptionItem[]) => {
    setContent((prev) => ({ ...prev, packages }));
  };

  const setFaqs = (faqs: FAQItem[]) => {
    setContent((prev) => ({ ...prev, faqs }));
  };

  const setCustomSections = (customSections: CustomSection[]) => {
    setContent((prev) => ({ ...prev, customSections }));
  };

  const setSectionOrder = (sectionOrder: string[]) => {
    setContent((prev) => ({ ...prev, sectionOrder }));
  };

  const updatePopupConfig = (partial: Partial<PopupConfig>) => {
    setContent((prev) => ({
      ...prev,
      popupConfig: { ...prev.popupConfig, ...partial }
    }));
  };

  const updateWaConfig = (partial: Partial<WaConfig>) => {
    setContent((prev) => ({
      ...prev,
      waConfig: { ...prev.waConfig, ...partial }
    }));
  };

  const resetToDefault = () => {
    const defaultState: SiteContentState = {
      appConfig: DEFAULT_APP_CONFIG,
      problemConfig: DEFAULT_PROBLEM_CONFIG,
      transformationConfig: DEFAULT_TRANSFORMATION_CONFIG,
      aiTools: DEFAULT_AI_TOOLS,
      agendaModules: DEFAULT_AGENDA,
      speakers: DEFAULT_SPEAKERS,
      testimonials: DEFAULT_TESTIMONIALS,
      packages: DEFAULT_PACKAGES,
      faqs: DEFAULT_FAQS,
      customSections: [],
      sectionOrder: DEFAULT_SECTION_ORDER,
      popupConfig: DEFAULT_POPUP_CONFIG,
      waConfig: DEFAULT_WA_CONFIG
    };
    setContent(defaultState);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ContentContext.Provider
      value={{
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
        updatePopupConfig,
        updateWaConfig,
        resetToDefault
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return ctx;
};
