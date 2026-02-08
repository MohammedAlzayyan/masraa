'use server'

import { getPayload } from '@/lib/payload'

export async function getTestimonials() {
  try {
    const payload = await getPayload()

    const testimonials = await payload.find({
      collection: 'testimonials',
      sort: 'order',
      limit: 10,
    })

    return testimonials.docs
  } catch (error) {
    console.error('Failed to fetch testimonials:', error)
    return []
  }
}
