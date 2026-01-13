'use client'

import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

export default function ScrollToTop() {
  const { isRTL } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls past the Hero section (approximated as 80% of viewport height)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    // Initial check
    toggleVisibility()

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 z-[100] p-4 rounded-full shadow-2xl transition-all duration-500 ease-cubic transform bg-brand-burgundy text-white hover:bg-brand-gold hover:text-white border-2 border-white/20 hover:border-white/50 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-brand-gold/50 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      } ${isRTL ? 'left-8' : 'right-8'}`}
      aria-label={isRTL ? 'العودة للأعلى' : 'Scroll to top'}
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  )
}
