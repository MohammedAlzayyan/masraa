'use client'

import React from 'react'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import IconRenderer from '@/components/ui/IconRenderer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'

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
        <SectionHeader
          tag={t?.services?.tag || 'خدماتنا'}
          title={t?.services?.title || 'ما نقدمه'}
          centered={false}
          action={
            <Button
              variant="ghost"
              onClick={handleSeeMore}
              icon={isRTL ? ArrowLeft : ArrowRight}
              iconPosition="right"
              className="border-b-2 border-brand-gold rounded-none pb-2 hover:bg-transparent"
            >
              {isRTL ? 'عرض كافة الخدمات' : 'View All Services'}
            </Button>
          }
        />

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
