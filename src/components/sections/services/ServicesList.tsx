'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Hotel, Car, Plane, Map, Headset, Users, ArrowRight, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ServicesList() {
  const { t, isRTL } = useLanguage()

  const services = [
    {
      id: 's1',
      title: t?.services?.s1Title || 'حجوزات الفنادق',
      desc:
        t?.services?.s1Desc ||
        'فنادق فاخرة بإطلالات على الحرم، خيارات متنوعة تناسب جميع الميزانيات.',
      icon: Hotel,
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 's2',
      title: t?.services?.s2Title || 'النقل والمواصلات',
      desc: t?.services?.s2Desc || 'استقبال من وإلى المطار، سيارات خاصة ومكيفة، وسائقون محترفون.',
      icon: Car,
      image:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 's3',
      title: t?.services?.s3Title || 'الحج والعمرة', // Corrected key slightly for display
      desc: t?.services?.s3Desc || 'باقات متكاملة تشمل الإقامة والتنقلات المريحة بإشراف كامل.',
      icon: Plane, // Changed icon for variety
      image:
        'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 's4',
      title: t?.services?.s4Title || 'البرامج السياحية',
      desc: t?.services?.s4Desc || 'جولات تاريخية ودينية مع مرشدين سياحيين محترفين.',
      icon: Map,
      image:
        'https://images.unsplash.com/photo-1580418827493-f2b22c431630?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 's5',
      title: t?.services?.s5Title || 'خدمة العملاء',
      desc: t?.services?.s5Desc || 'دعم على مدار الساعة، استشارات سياحية، ومتابعة الرحلات.',
      icon: Headset,
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 's7',
      title: t?.services?.s7Title || 'خدمات الشركات',
      desc: t?.services?.s7Desc || 'ترتيبات سفر للوفود الرسمية وحلول سفر متكاملة للشركات.',
      icon: Users,
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    },
  ]

  return (
    <section className="py-24 bg-brand-beige/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal animation="fade-up">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase mb-4 block">
              {t?.services?.tag || 'خدمات متكاملة'}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-burgundy mb-6">
              {t?.services?.title || 'التميز في كل التفاصيل'}
            </h2>
            <p className="max-w-2xl mx-auto text-brand-wine/60 text-lg">
              {t?.services?.overview ||
                'في مسراء نقدم باقة متكاملة من الخدمات السياحية المصممة لتلبي جميع احتياجات المسافرين والزوار.'}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ScrollReveal
              key={service.id}
              animation="fade-up"
              delay={idx * 0.1}
              className="group h-full"
            >
              <div className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-brand-gold/10 flex flex-col hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Link
                        href="/contact"
                        className="flex items-center gap-2 font-bold hover:text-brand-gold transition-colors"
                      >
                        <span>{isRTL ? 'استفسر الآن' : 'Inquire Now'}</span>
                        {isRTL ? (
                          <ArrowLeft className="w-4 h-4" />
                        ) : (
                          <ArrowRight className="w-4 h-4" />
                        )}
                      </Link>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-2xl p-3 shadow-lg">
                    <service.icon className="w-6 h-6 text-brand-burgundy" />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif text-brand-burgundy mb-4">{service.title}</h3>
                  <p className="text-brand-wine/70 leading-relaxed mb-6 flex-1">{service.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
