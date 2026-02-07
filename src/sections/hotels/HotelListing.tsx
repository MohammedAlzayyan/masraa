'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'

import { MapPin, Star, Search, ArrowRight, ArrowLeft, Calendar, Users, X } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import type { Hotel as PayloadHotel, Media } from '@/payload-types'

interface HotelListingProps {
  initialHotels?: PayloadHotel[]
}

export default function HotelListing({ initialHotels = [] }: HotelListingProps) {
  const { t, isRTL, language } = useLanguage()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState<'all' | 'Makkah' | 'Madinah'>('all')

  // Helper to update URL params
  const updateUrlParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value && value !== 'all') {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`?${params.toString()}`, { scroll: false })
  }

  // Search parameter states for summary
  const hasSearch = searchParams.get('search') === 'true'
  const checkin = searchParams.get('checkin')
  const checkout = searchParams.get('checkout')
  const adults = searchParams.get('adults')
  const children = searchParams.get('children')
  const rooms = searchParams.get('rooms')

  // Initialize state from URL search parameters
  useEffect(() => {
    const destination = searchParams.get('destination')
    if (destination === 'Makkah' || destination === 'Madinah') {
      setSelectedCity(destination)
    } else {
      setSelectedCity('all')
    }
  }, [searchParams])

  // Filter hotels based on search and city
  const filteredHotels = useMemo(() => {
    return initialHotels.filter((hotel) => {
      const matchesCity = selectedCity === 'all' || hotel.location === selectedCity

      const matchesSearch =
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t?.hotels?.names?.[hotel.name as keyof typeof t.hotels.names]
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase())

      return matchesCity && matchesSearch
    })
  }, [selectedCity, searchQuery, t, initialHotels])

  const getTranslatedName = (name: string) => {
    return t?.hotels?.names?.[name as keyof typeof t.hotels.names] || name
  }

  const getTranslatedTag = (tag: string) => {
    return t?.hotels?.tags?.[tag as keyof typeof t.hotels.tags] || tag
  }

  const getImageUrl = (image: string | Media) => {
    if (typeof image === 'string') return image
    return image.url || ''
  }

  return (
    <section className="pb-24 pt-0 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Header */}
        <ScrollReveal animation="fade-up" className="mb-16">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-[32px] shadow-lg border border-brand-gold/10">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search
                className={`absolute top-1/2 -translate-y-1/2 text-brand-wine/40 w-5 h-5 ${isRTL ? 'right-4' : 'left-4'}`}
              />
              <input
                type="text"
                placeholder={t?.hotels?.searchPlaceholder || 'ابحث عن اسم الفندق...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full bg-brand-beige/10 border-none rounded-2xl py-4 text-brand-burgundy font-bold placeholder:text-brand-wine/30 focus:ring-2 focus:ring-brand-gold/20 transition-all ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
              />
            </div>

            {/* City Filter Tabs */}
            <div className="flex bg-brand-beige/10 p-1.5 rounded-2xl w-full md:w-auto">
              {(['all', 'Makkah', 'Madinah'] as const).map((city) => (
                <Button
                  key={city}
                  variant={selectedCity === city ? 'secondary' : 'ghost'}
                  size="md"
                  onClick={() => {
                    setSelectedCity(city)
                    updateUrlParam('destination', city)
                  }}
                  className={`flex-1 md:flex-none ${selectedCity === city ? 'bg-white shadow-md' : 'text-brand-wine/50 hover:text-brand-burgundy'}`}
                >
                  {city === 'all'
                    ? t?.hotels?.allCities || 'كل المدن'
                    : city === 'Makkah'
                      ? t?.hero?.makkah || 'مكة المكرمة'
                      : t?.hero?.madinah || 'المدينة المنورة'}
                </Button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Search Summary Bar */}
        {hasSearch && (
          <ScrollReveal animation="fade-in" className="mb-12">
            <div className="flex flex-wrap items-center gap-4 bg-brand-burgundy/5 border border-brand-burgundy/10 px-6 py-4 rounded-3xl">
              <div className="flex items-center gap-2 text-brand-burgundy font-bold text-sm">
                <Search className="w-4 h-4" />
                <span>{isRTL ? 'نتائج البحث لـ:' : 'Search results for:'}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {checkin && (
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-brand-gold/20 text-xs font-bold text-brand-burgundy shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    <span>
                      {new Date(checkin).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                      {checkout &&
                        ` - ${new Date(checkout).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', { month: 'short', day: 'numeric' })}`}
                    </span>
                  </div>
                )}

                {(adults || children || rooms) && (
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-brand-gold/20 text-xs font-bold text-brand-burgundy shadow-sm">
                    <Users className="w-3.5 h-3.5 text-brand-gold" />
                    <span>
                      {adults && `${adults} ${t?.hero?.adults || 'بالغ'}`}
                      {children && `, ${children} ${t?.hero?.children || 'طفل'}`}
                      {rooms && ` | ${rooms} ${t?.hero?.rooms || 'غرفة'}`}
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  router.push('?', { scroll: false })
                  setSelectedCity('all')
                }}
                className={`${isRTL ? 'mr-auto' : 'ml-auto'} flex items-center gap-2 text-brand-wine/50 hover:text-brand-burgundy transition-colors text-xs font-bold group`}
              >
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                <span>{isRTL ? 'إلغاء الفلترة' : 'Clear Filters'}</span>
              </button>
            </div>
          </ScrollReveal>
        )}

        {/* Hotels Grid */}
        {filteredHotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel, idx) => (
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
                    alt={getTranslatedName(hotel.name)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 image-zoom"
                  />
                  {/* Subtle Top Overlay to make badges pop */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" />

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
                  {/* Name */}
                  <h3 className="text-xl font-bold text-brand-burgundy mb-2 line-clamp-2 min-h-[3.5rem]">
                    {getTranslatedName(hotel.name)}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.tags?.slice(0, 3).map((tagItem, i) => (
                      <span
                        key={tagItem.id || i}
                        className="text-[10px] bg-brand-beige/20 text-brand-wine/70 px-2 py-1 rounded-md font-bold"
                      >
                        {tagItem.tag ? getTranslatedTag(tagItem.tag) : ''}
                      </span>
                    ))}
                  </div>

                  <div className="bg-brand-gold/10 h-px w-full mb-6"></div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-brand-wine/50 font-bold uppercase tracking-wider">
                        {t?.hotels?.starting || 'يبدأ من'}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-brand-burgundy">
                          {hotel.price}
                        </span>
                        <span className="text-xs font-bold text-brand-gold">
                          {t?.hotels?.currency || 'ر.س'} / {t?.hotels?.night || 'ليلة'}
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      className="w-12 h-12 p-0 rounded-2xl"
                      icon={isRTL ? ArrowLeft : ArrowRight}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal animation="fade-up" className="text-center py-20">
            <div className="w-24 h-24 bg-brand-beige/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-wine/30">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-brand-burgundy mb-2">
              {t?.hotels?.noResults || 'لا توجد نتائج'}
            </h3>
            <p className="text-brand-wine/50">
              {t?.hotels?.tryDifferent || 'حاول البحث بكلمات مختلفة أو تغيير المدينة'}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
