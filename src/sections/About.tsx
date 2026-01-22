'use client'

import React from 'react'
import Image from 'next/image'
import { Target, Eye, ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface AboutProps {
  onReadMore?: () => void
}

export default function About({ onReadMore }: AboutProps) {
  const { t, isRTL } = useLanguage()

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore()
    } else {
      // Navigate to about page
      window.location.href = '/about'
    }
  }

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visuals */}
          <ScrollReveal animation="fade-up" delay={0.1} className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative w-full h-96 rounded-[40px] shadow-2xl transition-transform hover:scale-105 duration-700 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=800&auto=format&fit=crop"
                  alt="Madinah"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative w-full h-80 mt-16 rounded-[40px] shadow-2xl transition-transform hover:scale-105 duration-700 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1590076212971-55078508e31a?q=80&w=800&auto=format&fit=crop"
                  alt="Makkah"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div
              className={`absolute -bottom-8 ${
                isRTL ? 'left-0 lg:-left-8' : 'right-0 lg:-right-8'
              } bg-brand-gold p-10 rounded-[32px] shadow-2xl hidden md:block border-4 border-white`}
            >
              <div className="text-brand-burgundy text-5xl font-bold leading-none">15+</div>
              <div className="text-brand-burgundy/80 text-sm font-bold mt-1 uppercase tracking-widest">
                {t?.about?.yearsExp || 'سنوات خبرة'}
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal animation="fade-up" delay={0.3} className="flex flex-col">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase mb-6 block border-l-4 border-brand-gold pl-4 ltr:border-r-4 ltr:pl-0 ltr:pr-4 ltr:border-l-0">
              {t?.about?.legacy || 'إرثنا'}
            </span>
            <h2 className="text-5xl md:text-6xl text-brand-burgundy mb-8 leading-[1.1]">
              {t?.about?.title || 'من نحن'}{' '}
              <span className="italic text-brand-gold block mt-2">
                {t?.about?.titleItalic || 'مسرا'}
              </span>
            </h2>
            <p className="text-brand-wine/80 text-xl mb-10 leading-relaxed font-medium">
              {t?.about?.desc ||
                'تلتزم مؤسسة مسرا بتحقيق رؤيتها الطموحة بأن تكون الرائدة في تقديم خدمات السفر والسياحة المتكاملة'}
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-beige/30 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-burgundy group-hover:text-white transition-all duration-500 text-brand-burgundy shadow-sm">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-brand-burgundy font-bold text-xl mb-2">
                    {t?.about?.missionTitleLegacy || 'مهمتنا'}
                  </h4>
                  <p className="text-brand-wine/70 leading-relaxed">
                    {t?.about?.missionDescLegacy ||
                      'تقديم أفضل خدمات السفر والسياحة مع الالتزام بالجودة والأمان'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-beige/30 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-burgundy group-hover:text-white transition-all duration-500 text-brand-burgundy shadow-sm">
                  <Eye className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-brand-burgundy font-bold text-xl mb-2">
                    {t?.about?.visionTitleLegacy || 'رؤيتنا'}
                  </h4>
                  <p className="text-brand-wine/70 leading-relaxed">
                    {t?.about?.visionDescLegacy ||
                      'أن نكون الرائدين في مجال السياحة الدينية والسياحة المتكاملة'}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleReadMore}
              className="flex items-center gap-4 text-brand-burgundy font-black uppercase tracking-widest text-sm hover:text-brand-gold transition-colors group"
            >
              <span>{isRTL ? 'إقرأ المزيد' : 'Read More'}</span>
              {isRTL ? (
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              ) : (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              )}
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
