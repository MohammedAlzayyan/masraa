'use client'

import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'white' | 'burgundy' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  const variants = {
    gold: 'bg-brand-gold text-white',
    white: 'bg-white/10 backdrop-blur-md text-white border border-white/20',
    burgundy: 'bg-brand-burgundy text-white',
    outline: 'border border-brand-gold text-brand-gold',
  }

  return (
    <div
      className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  )
}
