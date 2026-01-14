'use client'

import React from 'react'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function AboutStory() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-beige/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="slide-right" className="relative">
            <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1590076212971-55078508e31a?q=80&w=1200&auto=format&fit=crop"
                alt="Makkah View"
                fill
                className="object-cover hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-10 left-10 md:left-auto md:right-10 right-10 md:right-auto text-white p-6 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 max-w-xs">
                <p className="font-serif text-2xl mb-2">2030</p>
                <p className="text-sm opacity-90">
                  {isRTL ? 'رؤية متوافقة مع المملكة' : 'Aligned with Vision 2030'}
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center shadow-xl z-20 hidden md:flex animate-bounce-slow">
              <div className="text-brand-burgundy font-black text-xl">10+</div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-left">
            <span className="text-brand-gold font-bold tracking-[0.2em] uppercase mb-4 block">
              {t?.about?.storyTitle || 'قصة مسرا'}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-8 leading-tight">
              {t?.about?.title || 'صناع تجارب'}{' '}
              <span className="text-brand-gold italic">{t?.about?.titleItalic || 'استثنائية'}</span>
            </h2>
            <div className="prose prose-lg text-brand-wine/80 mb-8">
              <p className="mb-6 leading-relaxed">
                {t?.about?.storyPara1 ||
                  'تأسست مسراء لتكون الوجهة الأولى لخدمات السفر والسياحة المتكاملة...'}
              </p>
              <p className="leading-relaxed">
                {t?.about?.storyPara2 || 'بفضل رؤيتنا المتوافقة مع رؤية المملكة 2030...'}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="py-2 px-4 rounded-full bg-brand-beige/20 text-brand-burgundy text-sm font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                {isRTL ? 'خدمات متكاملة' : 'Integrated Services'}
              </span>
              <span className="py-2 px-4 rounded-full bg-brand-beige/20 text-brand-burgundy text-sm font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                {isRTL ? 'فريق احترافي' : 'Professional Team'}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
