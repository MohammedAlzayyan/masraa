'use client'

import React from 'react'
import { ShieldCheck, Moon, Hotel, Car, Headphones, Leaf } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function AboutFeatures() {
  const { t, isRTL } = useLanguage()

  const features = [
    {
      icon: ShieldCheck,
      title: isRTL ? 'شريك موثوق' : 'Trusted Partner',
      desc: isRTL ? 'مرخصون رسمياً وخبرة عقود' : 'Officially licensed with decades of experience',
    },
    {
      icon: Moon,
      title: isRTL ? 'خبرة الحج والعمرة' : 'Hajj & Umrah Expert',
      desc: isRTL
        ? 'خدماتنا مصممة لراحتك الروحانية'
        : 'Services designed for your spiritual comfort',
    },
    {
      icon: Hotel,
      title: isRTL ? 'فنادق فاخرة' : 'Luxury Hotels',
      desc: isRTL ? 'إطلالات مباشرة على الحرم' : 'Direct views of the Haram',
    },
    {
      icon: Car,
      title: isRTL ? 'نقل مريح' : 'Comfortable Transport',
      desc: isRTL ? 'أحدث الموديلات لراحتك' : 'Latest models for your comfort',
    },
    {
      icon: Headphones,
      title: isRTL ? 'دعم 24/7' : '24/7 Support',
      desc: isRTL ? 'فريقنا معك في كل خطوة' : 'Our team is with you every step',
    },
    {
      icon: Leaf,
      title: isRTL ? 'استدامة' : 'Sustainability',
      desc: isRTL ? 'ملتزمون برؤية المملكة الخضراء' : 'Committed to the Green Kingdom vision',
    },
  ]

  return (
    <section className="py-24 bg-brand-beige/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal animation="fade-up">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase mb-4 block">
              {t?.why?.tag || 'لماذا مسرا؟'}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-burgundy">
              {t?.why?.title || 'أسباب اختيارك لنا'}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-up"
              delay={idx * 0.1}
              className="bg-white p-8 rounded-[32px] shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-gold/10 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-brand-beige/30 rounded-full flex items-center justify-center text-brand-burgundy mb-6 group-hover:bg-brand-burgundy group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-burgundy mb-3">{feature.title}</h3>
              <p className="text-brand-wine/70 text-sm leading-relaxed">{feature.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
