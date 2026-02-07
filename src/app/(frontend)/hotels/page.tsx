import React from 'react'
import { getHotels } from '@/actions/hotels'
import HotelsPageClient from './HotelsPage.client'

export default async function HotelsPage() {
  const hotels = await getHotels()

  return <HotelsPageClient initialHotels={hotels} />
}
