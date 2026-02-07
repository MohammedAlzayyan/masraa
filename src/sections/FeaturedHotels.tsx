'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, ArrowRight, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import type { Hotel as PayloadHotel, Media } from '@/payload-types'

interface FeaturedHotelsProps {
  hotels?: PayloadHotel[]
}

export default function FeaturedHotels({ hotels = [] }: FeaturedHotelsProps) {
  const { t, isRTL } = useLanguage()

  const getImageUrl = (image: string | Media) => {
    if (typeof image === 'string') return image
    return image.url || ''
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={t?.hotels?.tag || 'فنادقنا'}
          title={t?.hotels?.featuredTitle || 'فنادق مختارة لكم'}
          centered={false}
          action={
            <Link href="/hotels">
              <Button
                variant="ghost"
                icon={isRTL ? ArrowLeft : ArrowRight}
                iconPosition="right"
                className="border-b-2 border-brand-gold rounded-none pb-2 hover:bg-transparent"
              >
                {isRTL ? 'عرض كافة الفنادق' : 'View All Hotels'}
              </Button>
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {hotels.slice(0, 3).map((hotel, idx) => (
            <ScrollReveal
              key={hotel.id}
              animation="fade-up"
              delay={idx * 0.1}
              className="group bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-brand-gold/5 flex flex-col h-full card-hover"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={getImageUrl(hotel.image)}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 image-zoom"
                />
                <div className="absolute top-4 w-full px-4 flex justify-between items-start">
                  <Badge variant="white" className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-brand-gold" />
                    {hotel.location === 'Makkah'
                      ? t?.hero?.makkah || 'مكة المكرمة'
                      : t?.hero?.madinah || 'المدينة المنورة'}
                  </Badge>
                  <Badge variant="burgundy" className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    {hotel.rating}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-brand-burgundy mb-4 line-clamp-1">
                  {hotel.name}
                </h3>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-brand-wine/50 font-bold uppercase tracking-wider">
                      {t?.hotels?.starting || 'يبدأ من'}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-brand-burgundy">{hotel.price}</span>
                      <span className="text-xs font-bold text-brand-gold">
                        {t?.hotels?.currency || 'ر.س'} / {t?.hotels?.night || 'ليلة'}
                      </span>
                    </div>
                  </div>

                  <Link href={`/hotels/${hotel.slug}`}>
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
