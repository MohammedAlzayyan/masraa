'use client'

import React, { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const { isRTL } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  return (
    <ScrollReveal animation="fade-up" className="h-full">
      <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl border border-brand-gold/10 relative overflow-hidden h-full">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-burgundy/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <h2 className="text-3xl font-serif text-brand-burgundy mb-2">
            {isRTL ? 'أرسل لنا رسالة' : 'Send us a Message'}
          </h2>
          <p className="text-brand-wine/60 mb-8">
            {isRTL
              ? 'نحن هنا للإجابة على جميع استفساراتك'
              : 'We are here to answer all your inquiries'}
          </p>

          {isSuccess ? (
            <div className="bg-green-50 rounded-3xl p-8 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                {isRTL ? 'تم الإرسال بنجاح!' : 'Sent Successfully!'}
              </h3>
              <p className="text-green-700">
                {isRTL
                  ? 'شكراً لتواصلك معنا، سنرد عليك قريباً.'
                  : 'Thank you for contacting us, we will reply shortly.'}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-sm font-bold text-green-600 hover:text-green-800 underline"
              >
                {isRTL ? 'إرسال رسالة أخرى' : 'Send another message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-burgundy uppercase tracking-wider">
                    {isRTL ? 'الاسم' : 'Name'}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-brand-beige/10 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/20 transition-all placeholder:text-brand-wine/30"
                    placeholder={isRTL ? 'الاسم الكامل' : 'Full Name'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-burgundy uppercase tracking-wider">
                    {isRTL ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-brand-beige/10 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/20 transition-all placeholder:text-brand-wine/30"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-burgundy uppercase tracking-wider">
                  {isRTL ? 'الموضوع' : 'Subject'}
                </label>
                <select className="w-full bg-brand-beige/10 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/20 transition-all text-brand-burgundy cursor-pointer">
                  <option value="general">{isRTL ? 'استفسار عام' : 'General Inquiry'}</option>
                  <option value="booking">{isRTL ? 'حجوزات' : 'Bookings'}</option>
                  <option value="partners">{isRTL ? 'شراكات' : 'Partnership'}</option>
                  <option value="support">{isRTL ? 'دعم فني' : 'Support'}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-burgundy uppercase tracking-wider">
                  {isRTL ? 'الرسالة' : 'Message'}
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-brand-beige/10 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/20 transition-all placeholder:text-brand-wine/30 resize-none"
                  placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                />
              </div>

              <Button
                type="submit"
                isLoading={isSubmitting}
                className="w-full py-4"
                icon={Send}
                iconPosition="right"
              >
                {isRTL ? 'إرسال الرسالة' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}
