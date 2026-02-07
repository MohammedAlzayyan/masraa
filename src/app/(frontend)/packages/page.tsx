import React from 'react'
import { getPackages } from '@/actions/packages'
import PackagesPageClient from './PackagesPage.client'

export default async function PackagesPage() {
  const packages = await getPackages()

  return <PackagesPageClient initialPackages={packages} />
}
