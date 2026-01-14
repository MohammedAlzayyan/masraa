'use client'

import React from 'react'
import Image from 'next/image'

import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTA from '@/components/sections/CTA'
import ServicesList from '@/components/sections/services/ServicesList'

export default function ServicesPage() {
  const { t, isRTL } = useLanguage()

  const breadcrumbItems = [{ label: t?.nav?.services || 'الخدمات' }]

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000&auto=format&fit=crop"
          alt="Masraa Services Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-burgundy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
          <ScrollReveal animation="fade-up">
            {/* Breadcrumb aligned by direction */}
            <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} mb-12`}>
              <Breadcrumb items={breadcrumbItems} />
            </div>

            <span className="block text-brand-gold font-bold tracking-[0.3em] uppercase mb-4 text-base md:text-lg">
              {t?.services?.heroTitle || 'خدماتنا'}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight">
              {t?.services?.heroSub || 'تجربة سفر متكاملة تبدأ من هنا'}
            </h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8 rounded-full" />
            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed">
              {t?.services?.heroDesc || 'نوفر لك كل ما تحتاجه لرحلة مريحة وآمنة وفاخرة'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Services List */}
      <ServicesList />

      {/* 3. CTA */}
      <CTA />
    </div>
  )
}
