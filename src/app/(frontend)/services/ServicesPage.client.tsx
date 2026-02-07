'use client'

import React from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import CTA from '@/sections/CTA'
import ServicesList from '@/sections/services/ServicesList'
import PageHero from '@/components/ui/PageHero'
import type { Service as PayloadService } from '@/payload-types'

interface ServicesPageClientProps {
  initialServices: PayloadService[]
}

export default function ServicesPageClient({ initialServices }: ServicesPageClientProps) {
  const { t } = useLanguage()

  const breadcrumbItems = [{ label: t?.nav?.services || 'خدماتنا' }]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000&auto=format&fit=crop"
        height="medium"
        overlayVariant="cinematic"
        breadcrumbItems={breadcrumbItems}
        title={t?.services?.title || 'خدماتنا المتميزة'}
        description={
          t?.services?.heroDesc ||
          'نقدم لكم مجموعة متكاملة من الخدمات التي تضمن راحتكم وسلامتكم في كل رحلة'
        }
      />

      <div className="-mt-20 relative z-20">
        <ServicesList initialServices={initialServices} />
      </div>

      <CTA />
    </div>
  )
}
