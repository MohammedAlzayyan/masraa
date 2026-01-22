'use client'

import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ContactInfo() {
  const { isRTL } = useLanguage()

  const contactDetails = [
    {
      icon: Phone,
      title: isRTL ? 'اتصل بنا' : 'Call Us',
      info: '+966 50 000 0000',
      subInfo: isRTL ? 'متاح 24/7' : 'Available 24/7',
      bg: 'bg-blue-50 text-blue-600',
      border: 'border-blue-100',
    },
    {
      icon: Mail,
      title: isRTL ? 'راسلنا' : 'Email Us',
      info: 'info@masraa.sa',
      subInfo: isRTL ? 'نرد خلال 24 ساعة' : 'We reply within 24hrs',
      bg: 'bg-green-50 text-green-600',
      border: 'border-green-100',
    },
    {
      icon: MapPin,
      title: isRTL ? 'موقعنا' : 'Visit Us',
      info: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia',
      subInfo: isRTL ? 'شارع التحلية، مبنى النخبة' : 'Tahlia St, Elite Building',
      bg: 'bg-purple-50 text-purple-600',
      border: 'border-purple-100',
    },
    {
      icon: Clock,
      title: isRTL ? 'ساعات العمل' : 'Working Hours',
      info: isRTL ? 'السبت - الخميس' : 'Sat - Thu',
      subInfo: isRTL ? '9:00 صباحاً - 10:00 مساءً' : '9:00 AM - 10:00 PM',
      bg: 'bg-amber-50 text-amber-600',
      border: 'border-amber-100',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4">
      {contactDetails.map((item, idx) => (
        <ScrollReveal key={idx} animation={isRTL ? 'slide-left' : 'slide-right'} delay={idx * 0.15}>
          <div
            className={`
            group relative bg-white overflow-hidden rounded-[24px] p-6 
            border transition-all duration-300 hover:shadow-xl hover:-translate-y-1
            ${item.border}
          `}
          >
            {/* Background Gradient on Hover */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${item.bg.replace('text', 'bg').split(' ')[0]}`}
            />

            <div className="flex items-start gap-4 relative z-10">
              {/* Icon Container */}
              <div
                className={`w-12 h-12 shrink-0 ${item.bg} bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-6 h-6" />
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-brand-wine/50 uppercase tracking-wider mb-1">
                  {item.title}
                </h3>
                <p
                  className="text-lg md:text-xl font-bold text-brand-burgundy leading-tight mb-1 truncate"
                  dir="ltr"
                >
                  {item.info}
                </p>
                <p className="text-xs font-medium text-brand-wine/40">{item.subInfo}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
