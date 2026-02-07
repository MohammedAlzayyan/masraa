'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import type { Service as PayloadService, Media } from '@/payload-types'
import IconRenderer from '@/components/ui/IconRenderer'

interface ServicesListProps {
  initialServices?: PayloadService[]
}

export default function ServicesList({ initialServices = [] }: ServicesListProps) {
  const { t, isRTL } = useLanguage()

  const getImageUrl = (image?: string | Media | null) => {
    if (!image)
      return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop'
    if (typeof image === 'string') return image
    return image.url || ''
  }

  return (
    <section className="py-24 bg-brand-beige/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={t?.services?.tag || 'خدمات متكاملة'}
          title={t?.services?.title || 'التميز في كل التفاصيل'}
          description={
            t?.services?.overview ||
            'في مسراء نقدم باقة متكاملة من الخدمات السياحية المصممة لتلبي جميع احتياجات المسافرين والزوار.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialServices.map((service, idx) => (
            <ScrollReveal
              key={service.id}
              animation="fade-up"
              delay={idx * 0.1}
              className="group h-full"
            >
              <div className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-brand-gold/10 flex flex-col hover:-translate-y-2 card-hover">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={getImageUrl(service.image)}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 image-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-2 font-bold hover:text-brand-gold transition-colors"
                      >
                        <span>{isRTL ? 'عرض التفاصيل' : 'View Details'}</span>
                        {isRTL ? (
                          <LucideIcons.ArrowLeft className="w-4 h-4" />
                        ) : (
                          <LucideIcons.ArrowRight className="w-4 h-4" />
                        )}
                      </Link>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-2xl p-3 shadow-lg">
                    <IconRenderer iconId={service.icon} className="w-6 h-6 text-brand-burgundy" />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-brand-burgundy mb-4">{service.title}</h3>
                  <p className="text-brand-wine/70 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
