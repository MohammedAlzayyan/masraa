'use client'

import React from 'react'
import { Handshake, Star, ShieldCheck, Briefcase, Lightbulb, Heart } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'

export default function AboutValues() {
  const { t, isRTL } = useLanguage()

  const values = [
    { icon: Handshake, title: t?.about?.v1 || 'الثقة', color: 'bg-blue-50 text-blue-600' },
    { icon: Star, title: t?.about?.v2 || 'الجودة', color: 'bg-yellow-50 text-yellow-600' },
    { icon: ShieldCheck, title: t?.about?.v3 || 'الأمان', color: 'bg-green-50 text-green-600' },
    { icon: Briefcase, title: t?.about?.v4 || 'الاحترافية', color: 'bg-purple-50 text-purple-600' },
    { icon: Lightbulb, title: t?.about?.v5 || 'الابتكار', color: 'bg-amber-50 text-amber-600' },
    { icon: Heart, title: t?.about?.v6 || 'رضا العملاء', color: 'bg-red-50 text-red-600' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t?.about?.valuesTitle || 'قيمنا الأساسية'}
          description={
            isRTL
              ? 'نرتكز في عملنا على مجموعة من القيم التي تضمن التميز والنزاهة في كل ما نقدمه'
              : 'We ground our work in a set of values that ensure excellence and integrity in everything we deliver'
          }
        />

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {values.map((value, idx) => (
            <ScrollReveal
              key={idx}
              animation="scale-up"
              delay={idx * 0.1}
              className="flex flex-col items-center text-center p-6 rounded-[32px] hover:bg-brand-beige/10 transition-colors group"
            >
              <div
                className={`w-16 h-16 ${value.color} bg-opacity-20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}
              >
                <value.icon className="w-7 h-7" />
              </div>
              <span className="font-bold text-brand-burgundy text-lg">{value.title}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
