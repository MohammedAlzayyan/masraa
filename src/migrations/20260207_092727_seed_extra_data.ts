import { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-mongodb'

export async function up({ payload, req: _req, session: _session }: MigrateUpArgs): Promise<void> {
  const media = await payload.find({
    collection: 'media',
    where: {
      alt: { equals: 'Placeholder' },
    },
  })
  const placeholderMediaId = (media.docs[0]?.id as string) || ''

  // 1. Seed More Services
  const extraServicesData = [
    {
      title: 'Visa Processing',
      description: 'Streamlined Hajj and Umrah visa processing with direct embassy coordination.',
      icon: 'map',
      slug: 'visa-processing',
    },
    {
      title: 'VIP Concierge',
      description: 'Exclusive on-ground support, private dining, and bespoke spiritual assistance.',
      icon: 'users',
      slug: 'vip-concierge',
    },
    {
      title: 'Local Tour Guides',
      description: 'Knowledgeable multilingual guides for historical and religious sites.',
      icon: 'map',
      slug: 'local-guides',
    },
  ] as const

  for (const service of extraServicesData) {
    await payload.create({
      collection: 'services',
      data: {
        ...service,
        image: placeholderMediaId,
      } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    })
  }

  // 2. Seed More Hotels
  const extraHotelsData = [
    {
      name: 'Hilton Suites Makkah',
      slug: 'hilton-suites-makkah',
      location: 'Makkah',
      rating: 5,
      price: 1100,
      tags: [{ tag: 'Luxury' }, { tag: 'WiFi' }, { tag: 'Restaurant' }, { tag: 'Transport' }],
    },
    {
      name: 'Shaza Madinah',
      slug: 'shaza-madinah',
      location: 'Madinah',
      rating: 5,
      price: 950,
      tags: [
        { tag: 'Luxury' },
        { tag: 'Steps to Masjid Nabawi' },
        { tag: 'WiFi' },
        { tag: 'Restaurant' },
      ],
    },
    {
      name: 'Anwar Al Madinah Movenpick',
      slug: 'anwar-al-madinah',
      location: 'Madinah',
      rating: 5,
      price: 780,
      tags: [{ tag: 'WiFi' }, { tag: 'Restaurant' }, { tag: 'Steps to Masjid Nabawi' }],
    },
    {
      name: 'Swissôtel Makkah',
      slug: 'swissotel-makkah',
      location: 'Makkah',
      rating: 5,
      price: 1050,
      tags: [{ tag: 'Modern' }, { tag: 'Haram View' }, { tag: 'WiFi' }],
    },
    {
      name: 'Dar Al Taqwa Hotel Madinah',
      slug: 'dar-al-taqwa',
      location: 'Madinah',
      rating: 5,
      price: 1400,
      tags: [{ tag: 'Traditional' }, { tag: 'Premium' }, { tag: 'Masjid Entrance' }],
    },
  ] as const

  for (const hotel of extraHotelsData) {
    await payload.create({
      collection: 'hotels',
      data: {
        ...hotel,
        image: placeholderMediaId,
      } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    })
  }

  // 3. Seed More Testimonials
  const extraTestimonialsData = [
    {
      author: 'Fatima Zahra',
      role: 'Regular Pilgrim',
      content:
        'I have been using Masraa for my annual Shaban Umrah. Their consistency and attention to my specific needs are what keep me coming back.',
      rating: 5,
    },
    {
      author: 'John Smith',
      role: 'Cultural Traveler',
      content:
        'The history of Madinah tour was the highlight of my Saudi trip. Professional guides and exceptional organization.',
      rating: 5,
    },
    {
      author: 'Omar Bakri',
      role: 'Group Organizer',
      content:
        'Managing a group of 50 people is never easy, but Masraa handled our logistics seamlessly. Highly recommend for large groups.',
      rating: 5,
    },
  ]

  for (const testimonial of extraTestimonialsData) {
    await payload.create({
      collection: 'testimonials',
      data: testimonial,
    })
  }
}

export async function down({
  payload,
  req: _req,
  session: _session,
}: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'services',
    where: {
      slug: { in: ['visa-processing', 'vip-concierge', 'local-guides'] },
    },
  })

  await payload.delete({
    collection: 'hotels',
    where: {
      slug: {
        in: [
          'hilton-suites-makkah',
          'shaza-madinah',
          'anwar-al-madinah',
          'swissotel-makkah',
          'dar-al-taqwa',
        ],
      },
    },
  })

  await payload.delete({
    collection: 'testimonials',
    where: {
      author: { in: ['Fatima Zahra', 'John Smith', 'Omar Bakri'] },
    },
  })
}
