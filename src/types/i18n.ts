export type Language = 'ar' | 'en'

export interface NavTranslations {
  home: string
  about: string
  services: string
  hotels: string
  packages: string
  contact: string
  bookNow: string
}

export interface HeroTranslations {
  welcome: string
  title: string
  titleItalic: string
  desc: string
  destLabel: string
  destPlaceholder: string
  makkah: string
  madinah: string
  datesLabel: string
  datesPlaceholder: string
  guestsLabel: string
  adults: string
  children: string
  rooms: string
  done: string
  searchBtn: string
  statHotels: string
  statPilgrims: string
  statSupport: string
}

export interface AboutTranslations {
  breadcrumb: string
  heroTitle: string
  heroSub: string
  heroDesc: string
  storyTitle: string
  storyPara1: string
  storyPara2: string
  missionTitle: string
  missionText: string
  visionTitle: string
  visionText: string
  valuesTitle: string
  v1: string
  v2: string
  v3: string
  v4: string
  v5: string
  v6: string
  legacy: string
  title: string
  titleItalic: string
  desc: string
  missionTitleLegacy: string
  missionDescLegacy: string
  visionTitleLegacy: string
  visionDescLegacy: string
  valuesTitleLegacy: string
  valuesDescLegacy: string
  yearsExp: string
  missionDesc?: string
  visionDesc?: string
}

export interface ServicesTranslations {
  breadcrumb: string
  heroTitle: string
  heroSub: string
  heroDesc: string
  overview: string
  tag: string
  title: string
  s1Title: string
  s1Desc: string
  s2Title: string
  s2Desc: string
  s3Title: string
  s3Desc: string
  s4Title: string
  s4Desc: string
  s5Title: string
  s5Desc: string
  s6Title: string
  s6Desc: string
  s7Title: string
  s7Desc: string
  whyTitle: string
  w1: string
  w2: string
  w3: string
  w4: string
  w5: string
}

export interface HotelsTranslations {
  breadcrumb: string
  heroTitle: string
  heroSub: string
  heroDesc: string
  searchPlaceholder: string
  citySelector: string
  allCities: string
  filterFacilities: string
  makkahSection: string
  madinahSection: string
  featuredBadge: string
  noResults: string
  ctaHelp: string
  ctaConsultant: string
  tag: string
  title: string
  desc: string
  viewAll: string
  starting: string
  night: string
  details: string
  bookNow: string
  saudiArabia: string
  currency: string
  tryDifferent?: string
  tags: Record<string, string>
  names: Record<string, string>
}

export interface PackagesTranslations {
  breadcrumb: string
  heroTitle: string
  heroSub: string
  heroDesc: string
  tag: string
  title: string
  desc: string
  select: string
  from: string
  duration: string
  includes: string
  bookNow: string
  viewDetails: string
  allPackages: string
  hajj: string
  umrah: string
  cultural: string
  names: Record<string, string>
}

export interface WhyTranslations {
  tag: string
  title: string
  p1Title: string
  p1Desc: string
  p2Title: string
  p2Desc: string
  p3Title: string
  p3Desc: string
  p4Title: string
  p4Desc: string
  quote: string
  ceo: string
}

export interface TestimonialsTranslations {
  tag: string
  title: string
}

export interface CtaTranslations {
  title: string
  titleItalic: string
  desc: string
  btn: string
  contact: string
  consult: string
}

export interface FooterTranslations {
  desc: string
  quickLinks: string
  support: string
  contact: string
  rights: string
}

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationSchema
  isRTL: boolean
}

export interface TranslationSchema {
  nav: NavTranslations
  hero: HeroTranslations
  about: AboutTranslations
  services: ServicesTranslations
  hotels: HotelsTranslations
  packages: PackagesTranslations
  why: WhyTranslations
  testimonials: TestimonialsTranslations
  cta: CtaTranslations
  footer: FooterTranslations
}

export interface Translations {
  ar: TranslationSchema
  en: TranslationSchema
}
