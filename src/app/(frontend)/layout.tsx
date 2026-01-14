import React from 'react'
import './styles.css'
import { LanguageProvider } from '@/components/providers/LanguageProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'مسرا - خدمات السفر والسياحة المتكاملة',
  description:
    'مؤسسة مسرا - الرائدة في تقديم خدمات السفر والسياحة المتكاملة. شريك موثوق يرافقك في كل خطوة من رحلتك مع التزامنا بالاستدامة والمسؤولية الاجتماعية وتحقيق رؤية المملكة 2030.',
  keywords: ['مسرا', 'سفر', 'سياحة', 'رحلات', 'السعودية', 'رؤية 2030'],
  openGraph: {
    title: 'مسرا - خدمات السفر والسياحة المتكاملة',
    description:
      'شريك موثوق يرافقك في كل خطوة من رحلتك، مما يضمن لك الراحة والأمان في كل مراحل السفر.',
    type: 'website',
    locale: 'ar_SA',
  },
}

import ScrollToTop from '@/components/ui/ScrollToTop'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="ar" dir="rtl">
      <body>
        <LanguageProvider>
          <div className="min-h-screen selection:bg-brand-gold selection:text-white transition-colors duration-500">
            <Header />
            <main>{children}</main>
            <ScrollToTop />
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
