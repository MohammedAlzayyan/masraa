'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

export default function Footer() {
  const router = useRouter()
  const { t, isRTL } = useLanguage()

  const handleLink = (
    e: React.MouseEvent,
    page: 'home' | 'about' | 'services' | 'hotels',
    href: string,
  ) => {
    if (href.startsWith('/#')) {
      // للروابط الداخلية
      e.preventDefault()
      const pathname = window.location.pathname
      if (pathname !== '/') {
        router.push('/')
        setTimeout(() => {
          const hash = href.split('#')[1]
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        const hash = href.split('#')[1]
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      router.push(href)
    }
  }

  return (
    <footer
      id="contact"
      className="bg-brand-burgundy text-white pt-24 pb-12 border-t border-brand-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-8 cursor-pointer">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-burgundy shadow-lg">
                <span className="font-serif font-bold text-2xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl leading-tight">MASRAA</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-black">
                  Travel & Tourism
                </span>
              </div>
            </Link>
            <p className="text-brand-beige/60 leading-relaxed mb-10 text-lg font-medium">
              {t?.footer?.desc ||
                'تلتزم مؤسسة مسرا بتحقيق رؤيتها الطموحة بأن تكون الرائدة في تقديم خدمات السفر والسياحة المتكاملة'}
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-burgundy transition-all duration-500 hover:-translate-y-2"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-2xl font-serif font-bold mb-10 text-brand-gold">
              {t?.footer?.quickLinks || 'روابط سريعة'}
            </h4>
            <ul className="space-y-5 text-brand-beige/70 font-bold">
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleLink(e, 'services', '/#services')}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {t?.nav?.services || 'الخدمات'}
                </Link>
              </li>
              <li>
                <Link
                  href="/#hotels"
                  onClick={(e) => handleLink(e, 'hotels', '/#hotels')}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {t?.nav?.hotels || 'الفنادق'}
                </Link>
              </li>
              <li>
                <Link
                  href="/#packages"
                  onClick={(e) => handleLink(e, 'home', '/#packages')}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {t?.nav?.packages || 'الباقات'}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  onClick={(e) => handleLink(e, 'about', '/#about')}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {t?.nav?.about || 'من نحن'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-2xl font-serif font-bold mb-10 text-brand-gold">
              {t?.footer?.support || 'الدعم'}
            </h4>
            <ul className="space-y-5 text-brand-beige/70 font-bold">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t?.footer?.support || 'الدعم'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vision 2030
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-2xl font-serif font-bold mb-10 text-brand-gold">
              {t?.footer?.contact || 'تواصل معنا'}
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-4 text-brand-beige/70 font-medium">
                <MapPin className="text-brand-gold shrink-0 w-6 h-6" />
                <span>
                  King Abdullah Rd, Makkah,
                  <br />
                  Saudi Arabia
                </span>
              </li>
              <li className="flex gap-4 text-brand-beige/70 font-medium">
                <Phone className="text-brand-gold shrink-0 w-6 h-6" />
                <span dir="ltr">+966 500 000 000</span>
              </li>
              <li className="flex gap-4 text-brand-beige/70 font-medium">
                <Mail className="text-brand-gold shrink-0 w-6 h-6" />
                <span>info@masraa.com.sa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-brand-beige/30 text-sm font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Masraa Travel & Tourism.{' '}
            {t?.footer?.rights || 'جميع الحقوق محفوظة'}
          </p>
          <div className="flex items-center gap-8 text-[10px] text-brand-gold/40 uppercase tracking-[0.4em] font-black">
            <span>Makkah</span>
            <div className="w-1.5 h-1.5 bg-brand-gold/20 rounded-full"></div>
            <span>Madinah</span>
            <div className="w-1.5 h-1.5 bg-brand-gold/20 rounded-full"></div>
            <span>Jeddah</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
