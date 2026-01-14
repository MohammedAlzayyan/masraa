'use client'

import React from 'react'
import ScrollReveal from './ScrollReveal'

interface SectionHeaderProps {
  tag?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  centered?: boolean
  light?: boolean
  className?: string
  action?: React.ReactNode
}

export default function SectionHeader({
  tag,
  title,
  description,
  centered = true,
  light = false,
  className = '',
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col ${centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'} mb-16 gap-8 ${className}`}
    >
      <ScrollReveal animation="fade-up" className={centered ? 'w-full' : 'max-w-2xl'}>
        {tag && (
          <span
            className={`${light ? 'text-brand-gold/80' : 'text-brand-gold'} font-bold tracking-[0.3em] uppercase mb-4 block`}
          >
            {tag}
          </span>
        )}
        <h2
          className={`text-4xl md:text-6xl font-serif mb-6 ${light ? 'text-white' : 'text-brand-burgundy'}`}
        >
          {title}
        </h2>
        {description && (
          <p className={`max-w-2xl text-lg ${light ? 'text-white/70' : 'text-brand-wine/60'}`}>
            {description}
          </p>
        )}
      </ScrollReveal>
      {action && (
        <ScrollReveal animation="fade-up" delay={0.1}>
          {action}
        </ScrollReveal>
      )}
    </div>
  )
}
