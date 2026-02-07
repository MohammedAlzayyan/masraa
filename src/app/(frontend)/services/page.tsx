import React from 'react'
import { getServices } from '@/actions/services'
import ServicesPageClient from './ServicesPage.client'

export const dynamic = 'force-dynamic'

export default async function ServicesPage() {
  const services = await getServices()

  return <ServicesPageClient initialServices={services} />
}
