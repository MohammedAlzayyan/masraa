'use server'

import { getPayload } from '@/lib/payload'

export async function getTestimonials() {
  const payload = await getPayload()

  const testimonials = await payload.find({
    collection: 'testimonials',
    sort: 'order',
    limit: 10,
  })

  return testimonials.docs
}
