'use client'

import React from 'react'
import Image from 'next/image'

import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import ContactForm from '@/components/sections/contact/ContactForm'

export default function ContactPage() {
  const { t, isRTL } = useLanguage()

  const breadcrumbItems = [{ label: t?.nav?.contact || 'تواصل معنا' }]

  return (
    <div className="min-h-screen bg-brand-beige/5">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop"
          alt="Contact Masraa"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-burgundy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
          <ScrollReveal animation="fade-up">
            {/* Breadcrumb aligned by direction */}
            <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} mb-12`}>
              <Breadcrumb items={breadcrumbItems} />
            </div>

            <span className="block text-brand-gold font-bold tracking-[0.3em] uppercase mb-4 text-base md:text-lg">
              {t?.nav?.contact || 'تواصل معنا'}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight">
              {isRTL ? 'نحن هنا لمساعدتك' : 'We Are Here to Help'}
            </h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8 rounded-full" />
            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed">
              {isRTL
                ? 'تواصل مع فريقنا المخصص لخدمتك على مدار الساعة'
                : 'Connect with our dedicated team serving you around the clock'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info (1 col) */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>

            {/* Contact Form (2 cols) */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Map Section */}
      <section className="h-[400px] relative w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14849.569477038753!2d39.192504799999995!3d21.4883907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfb84e402685%3A0xe671424eb012a6f!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1705190000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>
    </div>
  )
}
