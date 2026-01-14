'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'

import { MapPin, Star, Search, ArrowRight, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { HOTELS } from '@/lib/constants'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function HotelListing() {
  const { t, isRTL, language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState<'all' | 'makkah' | 'madinah'>('all')

  // Filter hotels based on search and city
  const filteredHotels = useMemo(() => {
    return HOTELS.filter((hotel) => {
      const matchesCity =
        selectedCity === 'all' ||
        (selectedCity === 'makkah' && hotel.location.toLowerCase() === 'makkah') ||
        (selectedCity === 'madinah' && hotel.location.toLowerCase() === 'madinah')

      const matchesSearch =
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t?.hotels?.names?.[hotel.name as keyof typeof t.hotels.names]
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase())

      return matchesCity && matchesSearch
    })
  }, [selectedCity, searchQuery, t, language])

  const getTranslatedName = (name: string) => {
    return t?.hotels?.names?.[name as keyof typeof t.hotels.names] || name
  }

  const getTranslatedTag = (tag: string) => {
    return t?.hotels?.tags?.[tag as keyof typeof t.hotels.tags] || tag
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
              {(['all', 'makkah', 'madinah'] as const).map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`flex-1 md:flex-none px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    selectedCity === city
                      ? 'bg-white text-brand-burgundy shadow-md'
                      : 'text-brand-wine/50 hover:text-brand-burgundy'
                  }`}
                >
                  {city === 'all'
                    ? t?.hotels?.allCities || 'كل المدن'
                    : city === 'makkah'
                      ? t?.hero?.makkah || 'مكة المكرمة'
                      : t?.hero?.madinah || 'المدينة المنورة'}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Hotels Grid */}
        {filteredHotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel, idx) => (
              <ScrollReveal
                key={hotel.id}
                animation="fade-up"
                delay={idx * 0.1}
                className="group bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-brand-gold/5 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={getTranslatedName(hotel.name)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 w-full px-4 flex justify-between items-start">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-brand-burgundy flex items-center gap-1 shadow-sm">
                      <MapPin className="w-3 h-3 text-brand-gold" />
                      {hotel.location === 'Makkah'
                        ? t?.hero?.makkah || 'مكة المكرمة'
                        : t?.hero?.madinah || 'المدينة المنورة'}
                    </span>
                    <div className="bg-brand-burgundy text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                      <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                      {hotel.rating}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Name */}
                  <h3 className="text-xl font-bold font-serif text-brand-burgundy mb-2 line-clamp-2 min-h-[3.5rem]">
                    {getTranslatedName(hotel.name)}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-brand-beige/20 text-brand-wine/70 px-2 py-1 rounded-md font-bold"
                      >
                        {getTranslatedTag(tag)}
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

                    <button className="w-12 h-12 bg-brand-burgundy text-white rounded-2xl flex items-center justify-center hover:bg-brand-gold transition-colors shadow-lg group/btn">
                      {isRTL ? (
                        <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
                      ) : (
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      )}
                    </button>
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
