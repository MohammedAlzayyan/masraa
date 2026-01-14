'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { Calendar, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { PACKAGES } from '@/lib/constants'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function PackageListing() {
  const { t, isRTL } = useLanguage()
  const [selectedType, setSelectedType] = useState<'all' | 'Hajj' | 'Umrah' | 'Cultural'>('all')

  const filteredPackages = useMemo(() => {
    if (selectedType === 'all') return PACKAGES
    return PACKAGES.filter((pkg) => pkg.type === selectedType)
  }, [selectedType])

  const getTranslatedName = (name: string) => {
    return t?.packages?.names?.[name as keyof typeof t.packages.names] || name
  }

  return (
    <section className="pb-24 pt-0 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <ScrollReveal animation="fade-up" className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 bg-white/50 backdrop-blur-md p-2 rounded-[24px] border border-brand-gold/10 w-fit mx-auto">
            {(['all', 'Umrah', 'Hajj', 'Cultural'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  selectedType === type
                    ? 'bg-brand-burgundy text-white shadow-lg'
                    : 'text-brand-wine/60 hover:text-brand-burgundy hover:bg-brand-gold/5'
                }`}
              >
                {type === 'all'
                  ? t?.packages?.allPackages || 'جميع الباقات'
                  : type === 'Umrah'
                    ? t?.packages?.umrah || 'العمرة'
                    : type === 'Hajj'
                      ? t?.packages?.hajj || 'الحج'
                      : t?.packages?.cultural || 'رحلات ثقافية'}
              </button>
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
              className="group bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-brand-gold/10 flex flex-col lg:flex-row h-full"
            >
              {/* Image Side */}
              <div className="relative w-full lg:w-2/5 min-h-[300px] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={getTranslatedName(pkg.name)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <span className="bg-brand-gold text-brand-burgundy px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {pkg.type === 'Hajj'
                      ? t?.packages?.hajj || 'الحج'
                      : pkg.type === 'Umrah'
                        ? t?.packages?.umrah || 'العمرة'
                        : t?.packages?.cultural || 'ثقافية'}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-serif text-brand-burgundy">
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
                  {pkg.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-brand-wine/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>{item}</span>
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

                  <button className="bg-brand-burgundy text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-burgundy/90 transition-all shadow-lg flex items-center gap-3 group/btn">
                    <span>{t?.packages?.bookNow || 'احجز الآن'}</span>
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
      </div>
    </section>
  )
}
