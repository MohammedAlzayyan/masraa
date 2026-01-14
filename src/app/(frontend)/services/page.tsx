'use client'

import React from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import CTA from '@/sections/CTA'
import ServicesList from '@/sections/services/ServicesList'
import PageHero from '@/components/ui/PageHero'
import { BreadcrumbItem } from '@/components/ui/Breadcrumb'

export default function ServicesPage() {
  const { t } = useLanguage()

  const breadcrumbItems: BreadcrumbItem[] = [{ label: t?.nav?.services || 'الخدمات' }]

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Refactored */}
      <PageHero
        image="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000&auto=format&fit=crop"
        breadcrumbItems={breadcrumbItems}
        badge={
          <span className="block text-brand-gold font-bold tracking-[0.3em] uppercase mb-4 text-base md:text-lg">
            {t?.services?.heroTitle || 'خدماتنا'}
          </span>
        }
        title={t?.services?.heroSub || 'تجربة سفر متكاملة تبدأ من هنا'}
        description={t?.services?.heroDesc || 'نوفر لك كل ما تحتاجه لرحلة مريحة وآمنة وفاخرة'}
      />

      {/* 2. Services List */}
      <ServicesList />

      {/* 3. CTA */}
      <CTA />
    </div>
  )
}
