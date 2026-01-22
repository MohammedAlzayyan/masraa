'use client'

import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export default function CTA() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="py-24 bg-white px-4 overflow-hidden">
      <ScrollReveal
        animation="fade-up"
        className="max-w-7xl mx-auto premium-gradient rounded-[80px] p-12 md:p-28 relative overflow-hidden text-center shadow-[0_40px_100px_-15px_rgba(101,28,48,0.3)]"
      >
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f2cba7_0%,_transparent_70%)] opacity-30"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl text-white mb-10 leading-[1.1]">
            {t?.cta?.title || 'ابدأ رحلتك الروحانية'}
            <br />
            <span className="text-brand-gold italic">{t?.cta?.titleItalic || 'اليوم'}</span>
          </h2>
          <p className="text-brand-beige/80 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            {t?.cta?.desc || 'احجز رحلتك الآن واستمتع بخدمات سياحية مميزة مع ضمان الجودة والأمان'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button
              variant="gold"
              size="xl"
              icon={isRTL ? ArrowLeft : ArrowRight}
              iconPosition="right"
              className="px-12 py-6 rounded-full"
            >
              {t?.cta?.btn || 'احجز الآن'}
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="px-12 py-6 rounded-full border-white/20 text-white hover:border-brand-gold hover:text-brand-gold"
            >
              {t?.cta?.consult || 'استشارة مجانية'}
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
