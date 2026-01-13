'use client'

import React from 'react'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import IconRenderer from '@/components/ui/IconRenderer'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface ServicesProps {
  onSeeMore?: () => void
}

export default function Services({ onSeeMore }: ServicesProps) {
  const router = useRouter()
  const { t, isRTL } = useLanguage()

  const handleSeeMore = () => {
    if (onSeeMore) {
      onSeeMore()
    } else {
      router.push('/services')
    }
  }

  const servicesList = [
    {
      id: 's1',
      title: t?.services?.s1Title || 'حجوزات الفنادق',
      desc: t?.services?.s1Desc || 'أفضل الفنادق بالقرب من الحرمين الشريفين',
      icon: 'hotel',
    },
    {
      id: 's2',
      title: t?.services?.s2Title || 'النقل والمواصلات',
      desc: t?.services?.s2Desc || 'خدمات نقل مريحة وآمنة',
      icon: 'car',
    },
    {
      id: 's3',
      title: t?.services?.s3Title || 'الباقات المميزة',
      desc: t?.services?.s3Desc || 'باقات سياحية متكاملة',
      icon: 'gem',
    },
    {
      id: 's4',
      title: t?.services?.s4Title || 'الرحلات السياحية',
      desc: t?.services?.s4Desc || 'جولات سياحية منظمة',
      icon: 'map',
    },
    {
      id: 's5',
      title: t?.services?.s5Title || 'الدعم على مدار الساعة',
      desc: t?.services?.s5Desc || 'فريق دعم متاح 24/7',
      icon: 'headset',
    },
    {
      id: 's6',
      title: t?.services?.s6Title || 'خدمات الحج والعمرة',
      desc: t?.services?.s6Desc || 'خدمات متخصصة للحج والعمرة',
      icon: 'building',
    },
  ]

  return (
    <section id="services" className="py-24 bg-brand-beige/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          animation="fade-up"
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="text-center md:text-right">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase mb-4 block">
              {t?.services?.tag || 'خدماتنا'}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-brand-burgundy mb-6">
              {t?.services?.title || 'ما نقدمه'}
            </h2>
          </div>
          <button
            onClick={handleSeeMore}
            className="flex items-center gap-3 text-brand-burgundy font-bold border-b-2 border-brand-gold hover:text-brand-gold transition-all pb-2 group mb-2"
          >
            <span>{isRTL ? 'عرض كافة الخدمات' : 'View All Services'}</span>
            {isRTL ? (
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            ) : (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            )}
          </button>
        </ScrollReveal>

        <ScrollReveal
          animation="fade-up"
          delay={0.2}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white p-12 rounded-[48px] shadow-xl shadow-brand-burgundy/5 border border-brand-gold/10 hover:border-brand-gold hover:shadow-brand-gold/10 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-beige/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              <div className="w-16 h-16 bg-brand-burgundy/5 rounded-2xl flex items-center justify-center text-brand-burgundy mb-10 group-hover:bg-brand-burgundy group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                <IconRenderer iconId={service.icon} className="w-8 h-8" />
              </div>

              <h3 className="text-3xl font-serif text-brand-burgundy mb-6 relative z-10 group-hover:translate-x-2 transition-transform ltr:group-hover:-translate-x-2">
                {service.title}
              </h3>
              <p className="text-brand-wine/80 leading-relaxed text-lg relative z-10">
                {service.desc}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
