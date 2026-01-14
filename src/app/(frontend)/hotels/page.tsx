'use client'

import React from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import CTA from '@/sections/CTA'
import HotelListing from '@/sections/hotels/HotelListing'
import PageHero from '@/components/ui/PageHero'

export default function HotelsPage() {
  const { t, isRTL } = useLanguage()

  const breadcrumbItems = [{ label: t?.nav?.hotels || 'الفنادق' }]

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Refactored with Reusable Component */}
      <PageHero
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop"
        height="large"
        overlayVariant="cinematic"
        breadcrumbItems={breadcrumbItems}
        badge={
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-brand-gold text-xs">
                  ★
                </span>
              ))}
            </div>
            <span className="text-white text-xs font-bold tracking-widest uppercase">
              {isRTL ? 'مجموعة فاخرة' : 'Premium Collection'}
            </span>
          </div>
        }
        title={
          isRTL ? (
            <>
              <span className="block text-brand-gold text-2xl md:text-3xl mb-4 font-sans font-light tracking-wide">
                اكتشف الراحة في
              </span>
              أطهر البقاع
            </>
          ) : (
            <>
              <span className="block text-brand-gold text-2xl md:text-3xl mb-4 font-sans font-light tracking-wide">
                Discover Comfort in
              </span>
              The Holy Lands
            </>
          )
        }
        description={
          t?.hotels?.heroDesc ||
          'استمتع بإقامة استثنائية بجوار الحرم المكي والمدني، مع خدمات ترتقي لتطلعاتك'
        }
      />

      {/* 2. Hotel Listing (Search + Grid) with Negative Margin for Overlap */}
      <div className="-mt-32 relative z-20">
        <HotelListing />
      </div>

      {/* 3. CTA */}
      <CTA />
    </div>
  )
}
