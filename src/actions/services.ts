'use server'

import { getPayload } from '@/lib/payload'

export async function getServices() {
  const payload = await getPayload()

  const services = await payload.find({
    collection: 'services',
    limit: 100,
  })

  return services.docs
}
