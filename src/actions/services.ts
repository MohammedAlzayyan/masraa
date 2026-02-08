'use server'

import { getPayload } from '@/lib/payload'

export async function getServices() {
  try {
    const payload = await getPayload()

    const services = await payload.find({
      collection: 'services',
      limit: 100,
    })

    return services.docs
  } catch (error) {
    console.error('Failed to fetch services:', error)
    return []
  }
}
