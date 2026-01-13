'use client'

import React, { useState, useEffect } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { TESTIMONIALS } from '@/lib/constants'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Testimonials() {
  const { t, isRTL } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-brand-beige/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase mb-4 block">
            {t?.testimonials?.tag || 'آراء العملاء'}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-burgundy">
            {t?.testimonials?.title || 'ماذا يقول عملاؤنا'}
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2} className="relative max-w-4xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(${activeIndex * (isRTL ? 100 : -100)}%)`,
              }}
            >
              {TESTIMONIALS.map((testi) => (
                <div key={testi.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-10 md:p-16 rounded-[60px] shadow-2xl shadow-brand-burgundy/5 relative overflow-hidden group border border-brand-gold/5 transition-all duration-500 h-full">
                    <Quote
                      className={`absolute -top-6 ${isRTL ? '-left-6' : '-right-6'} w-32 md:w-48 h-32 md:h-48 text-brand-beige/10 group-hover:text-brand-gold/5 transition-colors duration-700`}
                    />

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="flex gap-1.5 mb-8">
                        {[...Array(testi.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>

                      <p className="text-xl md:text-3xl font-serif text-brand-burgundy italic mb-10 leading-relaxed font-medium">
                        &quot;{testi.content}&quot;
                      </p>

                      <div className="flex items-center gap-6 mt-auto">
                        <div className="w-16 h-16 bg-brand-burgundy rounded-[24px] flex items-center justify-center text-white font-black text-2xl shadow-xl">
                          {testi.author[0]}
                        </div>
                        <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                          <h4 className="text-brand-burgundy font-black text-xl mb-1">
                            {testi.author}
                          </h4>
                          <p className="text-brand-wine/50 font-bold text-sm uppercase tracking-widest">
                            {testi.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-brand-gold/30 text-brand-burgundy flex items-center justify-center hover:bg-brand-burgundy hover:text-white hover:border-brand-burgundy transition-all shadow-lg"
            >
              {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-brand-gold' : 'w-2 bg-brand-gold/30'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-brand-gold/30 text-brand-burgundy flex items-center justify-center hover:bg-brand-burgundy hover:text-white hover:border-brand-burgundy transition-all shadow-lg"
            >
              {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
