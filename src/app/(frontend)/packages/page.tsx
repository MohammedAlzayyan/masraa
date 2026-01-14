'use client'

import React from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import CTA from '@/sections/CTA'
import PackageListing from '@/sections/packages/PackageListing'
import PageHero from '@/components/ui/PageHero'

export default function PackagesPage() {
  const { t, isRTL } = useLanguage()

  const breadcrumbItems = [{ label: t?.nav?.packages || 'الباقات' }]

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Refactored with Reusable Component */}
      <PageHero
        image="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2000&auto=format&fit=crop"
        height="large"
        overlayVariant="cinematic"
        breadcrumbItems={breadcrumbItems}
        badge={
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">
              {isRTL ? 'باقات حصرية' : 'Exclusive Offers'}
            </span>
          </div>
        }
        title={
          isRTL ? (
            <>
              <span className="block text-brand-gold text-2xl md:text-3xl mb-4 font-sans font-light tracking-wide">
                رحلات إيمانية
              </span>
              مُنسقة بعناية
            </>
          ) : (
            <>
              <span className="block text-brand-gold text-2xl md:text-3xl mb-4 font-sans font-light tracking-wide">
                Spiritual Journeys
              </span>
              Curated with Care
            </>
          )
        }
        description={
          t?.packages?.heroDesc ||
          'نقدم لك تجربة متكاملة تجمع بين الروحانية والرفاهية لضمان راحة بالك'
        }
      />

      {/* 2. Package Listing (Filters + Cards) with Overlap */}
      <div className="-mt-24 relative z-20">
        <PackageListing />
      </div>

      {/* 3. CTA */}
      <CTA />
    </div>
  )
}
