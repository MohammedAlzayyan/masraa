'use client'

import React from 'react'
import { Hotel, Car, Gem, Map, Headphones, Building2, LucideIcon } from 'lucide-react'

interface IconRendererProps {
  iconId: string
  className?: string
}

const iconMap: Record<string, LucideIcon> = {
  hotel: Hotel,
  car: Car,
  gem: Gem,
  map: Map,
  headset: Headphones,
  building: Building2,
}

export default function IconRenderer({ iconId, className }: IconRendererProps) {
  const Icon = iconMap[iconId] || Building2

  return <Icon className={className} />
}
