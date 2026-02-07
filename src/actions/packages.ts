'use server'

import { getPayload } from '@/lib/payload'

export async function getPackages(type?: 'Umrah' | 'Hajj' | 'Cultural') {
  const payload = await getPayload()

  const packages = await payload.find({
    collection: 'packages',
    where: type
      ? {
          type: {
            equals: type,
          },
        }
      : {},
    limit: 10,
  })

  return packages.docs
}
