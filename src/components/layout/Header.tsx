'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Phone, Globe } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    // Check initial scroll position
    if (window.scrollY > 50) {
      setIsScrolled(true)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t?.nav?.home || 'الرئيسية', page: 'home' as const, href: '/' },
    { name: t?.nav?.about || 'من نحن', page: 'about' as const, href: '/about' },
    { name: t?.nav?.services || 'الخدمات', page: 'services' as const, href: '/services' },
    { name: t?.nav?.hotels || 'الفنادق', page: 'hotels' as const, href: '/hotels' },
    { name: t?.nav?.packages || 'الباقات', page: 'packages' as const, href: '/packages' },
    { name: t?.nav?.contact || 'تواصل معنا', page: 'contact' as const, href: '/contact' },
  ]

  const handleNavLinkClick = (
    e: React.MouseEvent,
    page: 'home' | 'about' | 'services' | 'hotels' | 'contact' | 'packages',
    href: string,
  ) => {
    // للروابط الداخلية (hash links)
    if (href.startsWith('/#')) {
      if (pathname !== '/') {
        e.preventDefault()
        router.push('/')
        setTimeout(() => {
          const hash = href.split('#')[1]
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        e.preventDefault()
        const hash = href.split('#')[1]
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else if (page !== 'home' || pathname !== '/') {
      // للتنقل بين الصفحات
      router.push(href)
    }
    setMobileMenuOpen(false)
  }

  const isLinkActive = (link: (typeof navLinks)[0]) => {
    if (link.href.startsWith('/#')) {
      // للروابط الداخلية، نتحقق من hash في URL
      if (typeof window !== 'undefined') {
        return pathname === '/' && window.location.hash === `#${link.href.split('#')[1]}`
      }
      return false
    }
    return pathname === link.href
  }

  const currentPage =
    pathname === '/'
      ? 'home'
      : (pathname.slice(1) as 'about' | 'services' | 'hotels' | 'contact' | 'packages')

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-burgundy/95 backdrop-blur-md py-3 shadow-lg'
          : currentPage === 'about' ||
              currentPage === 'services' ||
              currentPage === 'hotels' ||
              currentPage === 'contact' ||
              currentPage === 'packages'
            ? 'bg-transparent py-6'
            : currentPage !== 'home'
              ? 'bg-brand-burgundy/95 backdrop-blur-md py-3 shadow-lg'
              : 'bg-transparent py-6'
      }`}
      style={{
        height: isScrolled ? 'var(--header-height-scrolled, 70px)' : 'var(--header-height, 90px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-burgundy shadow-lg">
            <span className="font-bold text-xl">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-tight text-white">MASRAA</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">
              Travel & Tourism
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.page, link.href)}
              className={`text-sm font-bold tracking-wide transition-all ${
                isLinkActive(link)
                  ? 'text-brand-gold scale-105'
                  : 'text-white/90 hover:text-brand-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-2 text-white/90 hover:text-brand-gold transition-all group font-bold text-sm"
          >
            <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>{language === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          <a
            href="tel:+966555747885"
            className="flex items-center gap-2 text-brand-gold font-bold text-sm"
          >
            <Phone className="w-4 h-4" />
            <span dir="ltr">+966 555 747 885</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-burgundy border-t border-white/10 py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xl border-b border-white/5 pb-3 ${
                isLinkActive(link) ? 'text-brand-gold' : 'text-white'
              }`}
              onClick={(e) => handleNavLinkClick(e, link.page, link.href)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <button
              onClick={() => {
                setLanguage(language === 'ar' ? 'en' : 'ar')
                setMobileMenuOpen(false)
              }}
              className="flex items-center justify-center gap-3 text-brand-gold font-bold py-3 border border-brand-gold/30 rounded-xl"
            >
              <Globe className="w-5 h-5" />
              <span>{language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
