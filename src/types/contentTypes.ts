export interface AppConfigType {
  topBannerText?: string;
  topBannerSlotText?: string;
  heroBgUrl?: string;
  heroEventBadge?: string;
  heroHeadline1?: string;
  heroHeadline2?: string;
  heroHeadline3?: string;
  heroSubheadline?: string;
  heroBadge1?: string;
  heroBadge2?: string;
  heroBadge3?: string;
  heroCountdownTitle?: string;
  heroCtaText?: string;
  heroCtaLink?: string;
  countdownDays?: number;
  countdownHours?: number;
  countdownMinutes?: number;
  countdownSeconds?: number;
}

export interface ProblemCardItem {
  id: string;
  badgeTag: string;
  title: string;
  description: string;
}

export interface ProblemConfig {
  label: string;
  headline: string;
  cards: ProblemCardItem[];
}

export interface TransformationRowItem {
  id: string;
  conventional: string;
  aiBased: string;
}

export interface TransformationConfig {
  headline: string;
  rows: TransformationRowItem[];
}

export interface AIToolItem {
  id: string;
  name: string;
  role: string;
  category: string;
  brandColor: string;
  subTools?: string[];
}

export interface AgendaModuleItem {
  id: string;
  title: string;
  desc: string;
}

export interface SpeakerItem {
  id: string;
  name: string;
  role: string;
  portfolio: string;
  image: string;
  borderColor?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  university: string;
  quote: string;
  rating?: number;
  videoEmbedUrl?: string;
}

export interface PackageOptionItem {
  id: string;
  badge: string;
  name: string;
  description: string;
  price: string;
  normalPrice?: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CustomSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
}

export interface PopupConfig {
  headline: string;
  subheadline: string;
  mitraPrice: string;
  normalPrice: string;
  buttonText: string;
  footerText: string;
}

export interface WaConfig {
  number: string;
  defaultMsg: string;
}

export interface SiteContentState {
  appConfig: AppConfigType;
  problemConfig: ProblemConfig;
  transformationConfig: TransformationConfig;
  aiTools: AIToolItem[];
  agendaModules: AgendaModuleItem[];
  speakers: SpeakerItem[];
  testimonials: TestimonialItem[];
  packages: PackageOptionItem[];
  faqs: FAQItem[];
  customSections: CustomSection[];
  sectionOrder: string[];
  popupConfig: PopupConfig;
  waConfig: WaConfig;
}
