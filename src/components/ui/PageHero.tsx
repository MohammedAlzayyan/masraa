'use client'

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from './ScrollReveal'
import Breadcrumb from './Breadcrumb'
import Badge from './Badge'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  image: string
  title: React.ReactNode
  description?: string
  breadcrumbItems: BreadcrumbItem[]
  badge?: React.ReactNode
  overlayVariant?: 'classic' | 'cinematic'
  height?: 'small' | 'medium' | 'large'
}

export default function PageHero({
  image,
  title,
  description,
  breadcrumbItems,
  badge,
  overlayVariant = 'classic',
  height = 'medium',
}: PageHeroProps) {
  const { isRTL } = useLanguage()

  const heightClasses = {
    small: 'h-[50vh] min-h-[400px]',
    medium: 'h-[60vh] min-h-[500px]',
    large: 'h-[85vh] min-h-[600px]',
  }

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={image} alt="Hero Background" fill priority className="object-cover" />
      </div>

      {/* Cinematic Overlays */}
      {overlayVariant === 'cinematic' ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-burgundy/40 via-brand-burgundy/60 to-brand-beige/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-brand-burgundy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy via-transparent to-transparent" />
        </>
      )}

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${height === 'large' ? 'py-48' : 'pt-20'}`}
      >
        <ScrollReveal animation="fade-up" className="mx-auto text-center text-white">
          {/* Breadcrumb */}
          <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} mb-12`}>
            <Breadcrumb items={breadcrumbItems} variant="light" />
          </div>

          {/* Badge */}
          {badge && <div className="mb-8 flex justify-center">{badge}</div>}

          {/* Title */}
          <h1
            className={`${height === 'large' ? 'text-5xl md:text-7xl lg:text-8xl' : 'text-4xl md:text-6xl lg:text-7xl'} font-serif font-medium mb-6 leading-tight drop-shadow-lg`}
          >
            {title}
          </h1>

          {/* Divider if classic */}
          {overlayVariant === 'classic' && (
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8 rounded-full" />
          )}

          {/* Description */}
          {description && (
            <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
