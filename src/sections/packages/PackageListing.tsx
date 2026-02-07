'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { Calendar, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import type { Package as PayloadPackage, Media } from '@/payload-types'

interface PackageListingProps {
  initialPackages?: PayloadPackage[]
}

export default function PackageListing({ initialPackages = [] }: PackageListingProps) {
  const { t, isRTL } = useLanguage()
  const [selectedType, setSelectedType] = useState<'all' | 'Hajj' | 'Umrah' | 'Cultural'>('all')

  const filteredPackages = useMemo(() => {
    if (selectedType === 'all') return initialPackages
    return initialPackages.filter((pkg) => pkg.type === selectedType)
  }, [selectedType, initialPackages])

  const getTranslatedName = (name: string) => {
    return t?.packages?.names?.[name as keyof typeof t.packages.names] || name
  }

  const getImageUrl = (image: string | Media) => {
    if (typeof image === 'string') return image
    return image.url || ''
  }

  return (
    <section className="pb-24 pt-0 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <ScrollReveal animation="fade-up" className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 bg-white/50 backdrop-blur-md p-2 rounded-[24px] border border-brand-gold/10 w-fit mx-auto">
            {(['all', 'Umrah', 'Hajj', 'Cultural'] as const).map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? 'primary' : 'ghost'}
                size="md"
                onClick={() => setSelectedType(type)}
                className={
                  selectedType === type
                    ? ''
                    : 'text-brand-wine/60 hover:text-brand-burgundy hover:bg-brand-gold/5'
                }
              >
                {type === 'all'
                  ? t?.packages?.allPackages || 'جميع الباقات'
                  : type === 'Umrah'
                    ? t?.packages?.umrah || 'العمرة'
                    : type === 'Hajj'
                      ? t?.packages?.hajj || 'الحج'
                      : t?.packages?.cultural || 'رحلات ثقافية'}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPackages.map((pkg, idx) => (
            <ScrollReveal
              key={pkg.id}
              animation="fade-up"
              delay={idx * 0.1}
              className="group bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-brand-gold/10 flex flex-col lg:flex-row h-full card-hover"
            >
              {/* Image Side */}
              <div className="relative w-full lg:w-2/5 min-h-[300px] overflow-hidden">
                <Image
                  src={getImageUrl(pkg.image)}
                  alt={getTranslatedName(pkg.name)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 image-zoom"
                />
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <Badge variant="gold" className="shadow-lg">
                    {pkg.type === 'Hajj'
                      ? t?.packages?.hajj || 'الحج'
                      : pkg.type === 'Umrah'
                        ? t?.packages?.umrah || 'العمرة'
                        : t?.packages?.cultural || 'ثقافية'}
                  </Badge>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-burgundy">
                    {getTranslatedName(pkg.name)}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-brand-wine/60 mb-6 font-bold text-sm">
                  <Calendar className="w-4 h-4 text-brand-gold" />
                  <span>
                    {t?.packages?.duration || 'المدة'}: {pkg.duration}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold text-brand-wine/40 uppercase tracking-widest mb-2">
                    {t?.packages?.includes || 'تشمل الباقة'}:
                  </p>
                  {pkg.includes?.map((item, i) => (
                    <div
                      key={item.id || i}
                      className="flex items-center gap-3 text-brand-wine/70 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>{item.benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-brand-gold/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-brand-wine/50 font-bold uppercase block mb-1">
                      {t?.packages?.from || 'من'}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-brand-burgundy">{pkg.price}</span>
                      <span className="text-xs font-bold text-brand-gold">
                        {t?.hotels?.currency || 'ر.س'}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    icon={isRTL ? ArrowLeft : ArrowRight}
                    iconPosition="right"
                  >
                    {t?.packages?.bookNow || 'احجز الآن'}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
