import { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-mongodb'

export async function up({ payload, req: _req, session: _session }: MigrateUpArgs): Promise<void> {
  // 1. Create Admin User
  await payload.create({
    collection: 'users',
    data: {
      email: 'admin@masraa.com',
      password: 'password123',
      name: 'Admin',
      role: 'admin',
    },
  })

  // 2. Create a placeholder Media
  // Note: For a real production seed, you'd upload actual files.
  // Here we'll create a single placeholder record to link to.
  const placeholderMedia = await payload.create({
    collection: 'media',
    data: {
      alt: 'Placeholder',
    },
    // Using a tiny transparent pixel as buffer for the upload
    file: {
      data: Buffer.from(
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
        'base64',
      ),
      name: 'placeholder.png',
      mimetype: 'image/png',
      size: 70,
    },
  })

  // 3. Seed Services
  const servicesData = [
    {
      title: 'Hotel Bookings',
      description:
        'Exclusive selection of luxury hotels in Makkah & Madinah with panoramic Haram views.',
      icon: 'hotel',
      slug: 'hotel-bookings',
    },
    {
      title: 'Airport Transfers',
      description: 'Premium private transportation from Jeddah, Madinah, and Riyadh airports.',
      icon: 'car',
      slug: 'airport-transfers',
    },
    {
      title: 'Hajj & Umrah',
      description: 'Complete end-to-end spiritual journey packages with expert guidance.',
      icon: 'gem',
      slug: 'hajj-umrah',
    },
    {
      title: 'Cultural Tours',
      description: 'Explore the rich Islamic heritage and Saudi cultural landmarks.',
      icon: 'map',
      slug: 'cultural-tours',
    },
    {
      title: '24/7 Support',
      description: 'Dedicated multi-lingual concierges available at every step of your journey.',
      icon: 'headset',
      slug: 'customer-support',
    },
    {
      title: 'Real Estate Marketing',
      description: 'Bespoke marketing for luxury residential units and hospitality assets.',
      icon: 'building',
      slug: 'real-estate-marketing',
    },
  ] as const

  for (const service of servicesData) {
    await payload.create({
      collection: 'services',
      data: {
        ...service,
        image: placeholderMedia.id as string,
      } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    })
  }

  // 4. Seed Hotels
  const hotelsData = [
    {
      name: 'Conrad Makkah',
      slug: 'conrad-makkah',
      location: 'Makkah',
      rating: 5,
      price: 1250,
      tags: [{ tag: 'Haram View' }, { tag: 'Luxury' }, { tag: 'WiFi' }, { tag: 'Restaurant' }],
    },
    {
      name: 'Pullman ZamZam Madina',
      slug: 'pullman-zamzam-madina',
      location: 'Madinah',
      rating: 5,
      price: 850,
      tags: [
        { tag: 'Steps to Masjid Nabawi' },
        { tag: 'Family Friendly' },
        { tag: 'WiFi' },
        { tag: 'Restaurant' },
      ],
    },
    {
      name: 'Fairmont Makkah Clock Royal Tower',
      slug: 'fairmont-makkah',
      location: 'Makkah',
      rating: 5,
      price: 1800,
      tags: [
        { tag: 'Iconic View' },
        { tag: 'Premium Luxury' },
        { tag: 'Haram View' },
        { tag: 'Restaurant' },
      ],
    },
  ] as const

  for (const hotel of hotelsData) {
    await payload.create({
      collection: 'hotels',
      data: {
        ...hotel,
        image: placeholderMedia.id as string,
      } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    })
  }

  // 5. Seed Packages
  const packagesData = [
    {
      name: 'Ramadan Umrah Deluxe',
      slug: 'ramadan-umrah-deluxe',
      duration: '10 Days',
      price: 5500,
      type: 'Umrah',
      includes: [
        { benefit: '5* Hotel Makkah' },
        { benefit: '5* Hotel Madinah' },
        { benefit: 'Full Transport' },
        { benefit: 'Iftar Buffet' },
      ],
    },
    {
      name: 'Royal Hajj Journey',
      slug: 'royal-hajj-journey',
      duration: '21 Days',
      price: 15000,
      type: 'Hajj',
      includes: [
        { benefit: 'Mina VIP Tents' },
        { benefit: 'Private Guide' },
        { benefit: 'Business Flights' },
        { benefit: 'Gourmet Catering' },
      ],
    },
  ] as const

  for (const pkg of packagesData) {
    await payload.create({
      collection: 'packages',
      data: {
        ...pkg,
        image: placeholderMedia.id as string,
      } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    })
  }

  // 6. Seed Testimonials
  const testimonialsData = [
    {
      author: 'Ahmed Al-Farsi',
      role: 'Corporate Client',
      content:
        'The attention to detail and hospitality provided by Masraa during our group Umrah was unparalleled. Truly a partner we can trust.',
      rating: 5,
    },
    {
      author: 'Sarah Johnson',
      role: 'International Tourist',
      content:
        'Our cultural tour of Madinah was enlightening. Everything was perfectly organized from the moment we landed in Jeddah.',
      rating: 5,
    },
  ]

  for (const testimonial of testimonialsData) {
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
  // Clear all seeded data
  await payload.delete({
    collection: 'users',
    where: {
      email: { equals: 'admin@masraa.com' },
    },
  })

  // Note: deleting media will also try to delete files if configured.
  await payload.delete({
    collection: 'media',
    where: {
      alt: { equals: 'Placeholder' },
    },
  })

  await payload.delete({
    collection: 'services',
    where: {
      slug: {
        in: [
          'hotel-bookings',
          'airport-transfers',
          'hajj-umrah',
          'cultural-tours',
          'customer-support',
          'real-estate-marketing',
        ],
      },
    },
  })

  await payload.delete({
    collection: 'hotels',
    where: {
      slug: { in: ['conrad-makkah', 'pullman-zamzam-madina', 'fairmont-makkah'] },
    },
  })

  await payload.delete({
    collection: 'packages',
    where: {
      slug: { in: ['ramadan-umrah-deluxe', 'royal-hajj-journey'] },
    },
  })

  await payload.delete({
    collection: 'testimonials',
    where: {
      author: { in: ['Ahmed Al-Farsi', 'Sarah Johnson'] },
    },
  })
}
