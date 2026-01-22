'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  Building2,
  FileCheck,
  Award,
} from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

export default function Footer() {
  const router = useRouter()
  const { t, isRTL } = useLanguage()

  const handleLink = (
    e: React.MouseEvent,
    page: 'home' | 'about' | 'services' | 'hotels' | 'packages' | 'contact',
    href: string,
  ) => {
    if (href.startsWith('/#')) {
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
      className="bg-brand-burgundy text-white pt-16 pb-8 border-t border-brand-gold/10 relative overflow-hidden"
    >
      {/* WhatsApp Floating Button */}
      {/* User Logic: Right in Arabic (RTL), Left in English (LTR) - Opposite of ScrollToTop */}
      <a
        href="https://wa.me/966555747885"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-8 z-[100] p-4 rounded-full shadow-2xl transition-all duration-500 ease-in-out transform border-2 border-white/20 hover:border-white/50 hover:scale-110 flex items-center justify-center bg-[var(--brand-whatsapp)] text-white ${
          isRTL ? 'right-8' : 'left-8'
        }`}
        aria-label="Contact us on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.53.67 4.9 1.84 6.96L2.3 29.1l6.33-1.63C10.66 28.53 13.25 29.28 16 29.28c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 24.85c-2.35 0-4.57-.64-6.5-1.78l-4.5 1.16 1.22-4.35C5.07 20.08 4.35 18.1 4.35 16c0-6.42 5.23-11.65 11.65-11.65s11.65 5.23 11.65 11.65-5.23 11.85-11.65 11.85zm6.73-8.83c-.37-.18-2.18-1.07-2.52-1.2-.34-.12-.58-.18-.83.18-.24.37-.95 1.2-1.16 1.44-.21.24-.43.27-.8.09-.37-.18-1.58-.58-3-1.85-1.1-1-1.86-2.22-2.07-2.6-.21-.36-.02-.56.16-.74.17-.16.37-.43.56-.64.18-.21.24-.36.36-.6.12-.24.06-.46-.03-.64-.09-.18-.83-2-1.13-2.74-.3-.72-.6-.62-.83-.63l-.7-.01c-.24 0-.64.09-.97.45-.34.37-1.28 1.25-1.28 3.05 0 1.8 1.31 3.54 1.5 3.78.18.24 2.58 3.94 6.25 5.53 2.15.93 2.99.75 4.07.65 1.2-.11 2.18-.89 2.5-1.75.29-.86.29-1.6.21-1.75-.09-.15-.34-.23-.7-.41z" />
        </svg>
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Column 1: Brand & Socials (Rightmost in RTL) */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-burgundy shadow-lg shrink-0">
                <span className="font-bold text-2xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-tight text-brand-gold">
                  {isRTL ? 'مسرا' : 'MASRAA'}
                </span>
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed mb-8 text-sm font-medium">
              {isRTL
                ? 'مؤسسة متخصصة في تقديم خدمات السياحة الدينية والسفر للأماكن المقدسة في المملكة العربية السعودية'
                : 'An institution specializing in providing religious tourism and travel services to the holy places in the Kingdom of Saudi Arabia'}
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: MessageCircle, href: '#' },
                { Icon: Send, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-burgundy transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5" />
              {t?.footer?.quickLinks || (isRTL ? 'الروابط' : 'Links')}
            </h4>
            <ul className="space-y-4 text-sm text-white/80 font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-gold transition-colors flex items-center gap-2"
                >
                  {isRTL ? <Building2 className="w-4 h-4" /> : ''}
                  {t?.nav?.home || (isRTL ? 'الرئيسية' : 'Home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-gold transition-colors flex items-center gap-2"
                  onClick={(e) => handleLink(e, 'about', '/about')}
                >
                  {isRTL ? <Award className="w-4 h-4" /> : ''}
                  {t?.nav?.about || (isRTL ? 'نبذة عنا' : 'About Us')}
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels"
                  className="hover:text-brand-gold transition-colors flex items-center gap-2"
                  onClick={(e) => handleLink(e, 'hotels', '/hotels')}
                >
                  {isRTL ? <MapPin className="w-4 h-4" /> : ''}
                  {t?.nav?.hotels || (isRTL ? 'الأماكن المقدسة' : 'Holy Places')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-gold transition-colors flex items-center gap-2"
                  onClick={(e) => handleLink(e, 'services', '/services')}
                >
                  {isRTL ? <Building2 className="w-4 h-4" /> : ''}
                  {t?.nav?.services || (isRTL ? 'خدماتنا' : 'Services')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-gold transition-colors flex items-center gap-2"
                >
                  {isRTL ? <Phone className="w-4 h-4" /> : ''}
                  {t?.nav?.contact || (isRTL ? 'اتصل بنا' : 'Contact Us')}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-gold transition-colors flex items-center gap-2"
                >
                  {isRTL ? <MessageCircle className="w-4 h-4" /> : ''}
                  {isRTL ? 'الأسئلة الشائعة' : 'FAQ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Licenses */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <Award className="w-5 h-5" />
              {isRTL ? 'التراخيص الرسمية' : 'Official Licenses'}
            </h4>
            <div className="space-y-4 text-sm text-white/80 font-medium">
              <div className="flex items-center gap-2 text-brand-gold/90">
                <FileCheck className="w-4 h-4 shrink-0" />
                <span>{isRTL ? 'السجل التجاري: 4031272020' : 'CR: 4031272020'}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 text-brand-gold/90">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>{isRTL ? 'رقم الترخيص السياحي:' : 'Tourism License No:'}</span>
                </div>
                <p className="mr-6">73104901</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 text-brand-gold/90">
                  <FileCheck className="w-4 h-4 shrink-0" />
                  <span>{isRTL ? 'موثقة لدى المركز السعودي' : 'Certified by Saudi'}</span>
                </div>
                <p className="mr-6">
                  {isRTL ? 'للأعمال: 0000007221' : 'Business Center: 0000007221'}
                </p>
              </div>

              {/* QR Code Placeholder */}
              <div className="mt-4 mr-0">
                <div className="w-24 h-24 bg-white p-1 rounded-lg">
                  {/* Replace with actual QR image */}
                  <div className="w-full h-full bg-[#358763] flex items-center justify-center">
                    <span className="text-xs text-white">QR Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Info (Leftmost in RTL) */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <Phone className="w-5 h-5" />
              {t?.footer?.contact || (isRTL ? 'اتصل بنا' : 'Contact Us')}
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-3 text-white/80 text-sm font-medium items-start">
                <MapPin className="text-brand-gold shrink-0 w-5 h-5 mt-0.5" />
                <span>
                  {isRTL
                    ? 'المملكة العربية السعودية، مكة المكرمة، حي البحيرات'
                    : 'Kingdom of Saudi Arabia, Makkah, Al-Buhayrat District'}
                </span>
              </li>
              <li className="flex gap-3 text-white/80 text-sm font-medium items-center">
                <Phone className="text-brand-gold shrink-0 w-5 h-5" />
                <span dir="ltr">+966 555 747 885</span>
              </li>
              <li className="flex gap-3 text-white/80 text-sm font-medium items-center">
                <Mail className="text-brand-gold shrink-0 w-5 h-5" />
                <span>info@masraatourism.com</span>
              </li>
              <li className="flex gap-3 text-white/80 text-sm font-medium items-start">
                <Building2 className="text-brand-gold shrink-0 w-5 h-5 mt-0.5" />
                <span>
                  {isRTL
                    ? 'الاسم التجاري: مؤسسة مسرا للسفر والسياحة'
                    : 'Trade Name: Masraa Travel & Tourism Est.'}
                </span>
              </li>
              <li className="flex gap-3 text-white/80 text-sm font-medium items-start">
                <FileCheck className="text-brand-gold shrink-0 w-5 h-5 mt-0.5" />
                <span>
                  {isRTL
                    ? 'فئة الترخيص: خدمات حجز وحدات ضيافة'
                    : 'License Category: Hospitality Unit Booking Services'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h4 className="text-white font-bold text-lg order-2 md:order-1">
            {isRTL ? 'وسائل الدفع' : 'Payment Methods'}
          </h4>
          <div className="bg-white rounded-lg py-3 px-8 flex items-center gap-8 order-1 md:order-2 w-full md:w-auto overflow-x-auto justify-center">
            {/* STC Pay */}
            <Image
              src="/images/Stc_pay.png"
              alt="STC Pay"
              width={0}
              height={0}
              sizes="100vw"
              className="h-8 w-auto object-contain"
              style={{ width: 'auto', height: '32px' }}
            />

            {/* Apple Pay */}
            <Image
              src="/images/apple-pay.png"
              alt="Apple Pay"
              width={0}
              height={0}
              sizes="100vw"
              className="h-8 w-auto object-contain"
              style={{ width: 'auto', height: '32px' }}
            />

            {/* Mada */}
            <Image
              src="/images/Mada.png"
              alt="Mada"
              width={0}
              height={0}
              sizes="100vw"
              className="h-8 w-auto object-contain"
              style={{ width: 'auto', height: '32px' }}
            />

            {/* MasterCard */}
            <Image
              src="/images/Mastercard.svg"
              alt="MasterCard"
              width={0}
              height={0}
              sizes="100vw"
              className="h-8 w-auto object-contain"
              style={{ width: 'auto', height: '32px' }}
            />

            {/* Visa */}
            <Image
              src="/images/Visa.svg"
              alt="Visa"
              width={0}
              height={0}
              sizes="100vw"
              className="h-8 w-auto object-contain"
              style={{ width: 'auto', height: '32px' }}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
