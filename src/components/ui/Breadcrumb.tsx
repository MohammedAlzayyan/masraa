'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const { isRTL } = useLanguage()

  return (
    <nav className={`flex items-center text-sm font-medium ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li>
          <Link
            href="/"
            className="text-white/80 hover:text-brand-gold transition-colors flex items-center gap-1"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-white/40">
              {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </span>
            {item.href ? (
              <Link
                href={item.href}
                className="text-white/80 hover:text-brand-gold transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-gold" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
