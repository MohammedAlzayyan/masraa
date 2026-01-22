'use client'

import React from 'react'
import { Award, Moon } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function AboutVisionMission() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-brand-burgundy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <ScrollReveal
            animation="fade-up"
            delay={0.1}
            className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-burgundy mb-8 shadow-lg shadow-brand-gold/20">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-3xl mb-4 flex items-center gap-3">
              {t?.about?.missionTitle || 'رسالتنا'}
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              {t?.about?.missionText || 'توفير تجربة سفر فاخرة وآمنة...'}
            </p>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal
            animation="fade-up"
            delay={0.3}
            className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-burgundy mb-8 shadow-lg">
              <Moon className="w-8 h-8" />
            </div>
            <h3 className="text-3xl mb-4 text-brand-gold flex items-center gap-3">
              {t?.about?.visionTitle || 'رؤيتنا'}
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              {t?.about?.visionText || 'الريادة في تقديم خدمات السفر والسياحة المتكاملة...'}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
