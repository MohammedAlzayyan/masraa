'use client'

import React from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import CTA from '@/sections/CTA'
import PackageListing from '@/sections/packages/PackageListing'
import PageHero from '@/components/ui/PageHero'
import type { Package as PayloadPackage } from '@/payload-types'

interface PackagesPageClientProps {
  initialPackages: PayloadPackage[]
}

export default function PackagesPageClient({ initialPackages }: PackagesPageClientProps) {
  const { t } = useLanguage()

  const breadcrumbItems = [{ label: t?.nav?.packages || 'باقاتنا' }]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        image="https://images.unsplash.com/photo-1542901031-158223c34302?q=80&w=2000&auto=format&fit=crop"
        height="large"
        overlayVariant="cinematic"
        breadcrumbItems={breadcrumbItems}
        title={t?.packages?.title || 'باقات السفر المختارة'}
        description={
          t?.packages?.heroDesc ||
          'اكتشف باقاتنا الحصرية للعمرة والحج والرحلات الثقافية المصممة بعناية لتناسب تطلعاتكم'
        }
      />

      <div className="-mt-32 relative z-20">
        <PackageListing initialPackages={initialPackages} />
      </div>

      <CTA />
    </div>
  )
}
