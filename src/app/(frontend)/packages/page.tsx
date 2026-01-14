'use client'

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTA from '@/components/sections/CTA'
import PackageListing from '@/components/sections/packages/PackageListing'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function PackagesPage() {
  const { t, isRTL } = useLanguage()

  const breadcrumbItems = [{ label: t?.nav?.packages || 'الباقات' }]

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Premium Redesign */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Travel Packages"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-burgundy/40 via-brand-burgundy/60 to-brand-beige/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-48">
          <ScrollReveal animation="fade-up" className="mx-auto text-center text-white">
            {/* Breadcrumb aligned by direction */}
            <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} mb-12`}>
              <Breadcrumb items={breadcrumbItems} />
            </div>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mx-auto">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">
                {isRTL ? 'باقات حصرية' : 'Exclusive Offers'}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 leading-tight drop-shadow-lg">
              {isRTL ? (
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
              )}
            </h1>

            <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              {t?.packages?.heroDesc ||
                'نقدم لك تجربة متكاملة تجمع بين الروحانية والرفاهية لضمان راحة بالك'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Package Listing (Filters + Cards) with Overlap */}
      <div className="-mt-24 relative z-20">
        <PackageListing />
      </div>

      {/* 3. CTA */}
      <CTA />
    </div>
  )
}
