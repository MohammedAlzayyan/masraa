'use server'

import { getPayload } from '@/lib/payload'

export async function getHotels(query?: { location?: string; limit?: number }) {
  const payload = await getPayload()

  const hotels = await payload.find({
    collection: 'hotels',
    where: query?.location
      ? {
          location: {
            equals: query.location,
          },
        }
      : {},
    limit: query?.limit || 10,
  })

  return hotels.docs
}

export async function getHotelBySlug(slug: string) {
  const payload = await getPayload()

  const hotel = await payload.find({
    collection: 'hotels',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return hotel.docs[0] || null
}
