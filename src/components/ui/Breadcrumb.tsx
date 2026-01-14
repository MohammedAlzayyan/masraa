'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  variant?: 'light' | 'dark'
}

export default function Breadcrumb({ items, className = '', variant = 'light' }: BreadcrumbProps) {
  const { isRTL } = useLanguage()

  const baseColor = variant === 'light' ? 'text-white/80' : 'text-brand-burgundy/60'
  const activeColor = variant === 'light' ? 'text-brand-gold' : 'text-brand-gold'
  const separatorColor = variant === 'light' ? 'text-white/40' : 'text-brand-gold/40'

  return (
    <nav className={`flex items-center text-sm font-medium ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li>
          <Link
            href="/"
            className={`${baseColor} hover:text-brand-gold transition-colors flex items-center gap-1`}
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className={separatorColor}>
              {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </span>
            {item.href ? (
              <Link
                href={item.href}
                className={`${baseColor} hover:text-brand-gold transition-colors`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={activeColor} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
