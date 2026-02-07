'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import type { Package as PayloadPackage, Media } from '@/payload-types'

interface FeaturedPackagesProps {
  packages?: PayloadPackage[]
}

export default function FeaturedPackages({ packages = [] }: FeaturedPackagesProps) {
  const { t, isRTL } = useLanguage()

  const getImageUrl = (image: string | Media) => {
    if (typeof image === 'string') return image
    return image.url || ''
  }

  return (
    <section className="py-24 bg-brand-beige/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={t?.packages?.tag || 'باقاتنا'}
          title={t?.packages?.featuredTitle || 'باقات مختارة'}
          centered={false}
          action={
            <Link href="/packages">
              <Button
                variant="ghost"
                icon={isRTL ? ArrowLeft : ArrowRight}
                iconPosition="right"
                className="border-b-2 border-brand-gold rounded-none pb-2 hover:bg-transparent"
              >
                {isRTL ? 'عرض كافة الباقات' : 'View All Packages'}
              </Button>
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {packages.slice(0, 3).map((pkg, idx) => (
            <ScrollReveal
              key={pkg.id}
              animation="fade-up"
              delay={idx * 0.1}
              className="group bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-brand-gold/5 flex flex-col h-full card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={getImageUrl(pkg.image)}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 image-zoom"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="gold" className="shadow-lg">
                    {pkg.type === 'Hajj'
                      ? t?.packages?.hajj || 'الحج'
                      : pkg.type === 'Umrah'
                        ? t?.packages?.umrah || 'العمرة'
                        : t?.packages?.cultural || 'ثقافية'}
                  </Badge>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-brand-burgundy mb-4 line-clamp-1">
                  {pkg.name}
                </h3>

                <div className="flex items-center gap-2 text-brand-wine/60 mb-6 font-bold text-sm">
                  <Calendar className="w-4 h-4 text-brand-gold" />
                  <span>{pkg.duration}</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-brand-gold/10">
                  <div className="flex flex-col">
                    <span className="text-xs text-brand-wine/50 font-bold uppercase block">
                      {t?.packages?.from || 'من'}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-brand-burgundy">{pkg.price}</span>
                      <span className="text-xs font-bold text-brand-gold">
                        {t?.hotels?.currency || 'ر.س'}
                      </span>
                    </div>
                  </div>

                  <Link href={`/packages/${pkg.slug}`}>
                    <Button
                      variant="primary"
                      className="w-12 h-12 p-0 rounded-2xl"
                      icon={isRTL ? ArrowLeft : ArrowRight}
                    />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
