'use client'

import React from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import PageHero from '@/components/ui/PageHero'
import CTA from '@/sections/CTA'
import AboutStory from '@/sections/about/AboutStory'
import AboutVisionMission from '@/sections/about/AboutVisionMission'
import AboutFeatures from '@/sections/about/AboutFeatures'
import AboutValues from '@/sections/about/AboutValues'

export default function AboutPage() {
  const { t, isRTL } = useLanguage()

  const breadcrumbItems = [{ label: t?.nav?.about || 'من نحن' }]

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Refactored */}
      <PageHero
        image="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=2000&auto=format&fit=crop"
        breadcrumbItems={breadcrumbItems}
        badge={
          <span className="block text-brand-gold font-bold tracking-[0.3em] uppercase mb-4 text-base md:text-lg">
            {t?.about?.heroTitle || 'من نحن'}
          </span>
        }
        title={t?.about?.heroSub || 'مسرا – شريكك الموثوق في رحلتك'}
        description={
          t?.about?.heroDesc || 'نرافقك في كل خطوة لنمنحك تجربة سفر استثنائية مليئة بالراحة والأمان'
        }
      />

      <AboutStory />
      <AboutVisionMission />
      <AboutFeatures />
      <AboutValues />
      <CTA />
    </div>
  )
}
