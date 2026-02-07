import { Hotel, Service, Package, Testimonial } from '@/types/models'

export const HOTELS: Hotel[] = [
  {
    id: '1',
    name: 'Conrad Makkah',
    location: 'Makkah',
    rating: 5,
    price: 1250,
    image:
      'https://images.unsplash.com/photo-1590076212971-55078508e31a?q=80&w=1200&auto=format&fit=crop',
    tags: ['Haram View', 'Luxury', 'WiFi', 'Restaurant'],
  },
  {
    id: '2',
    name: 'Pullman ZamZam Madina',
    location: 'Madinah',
    rating: 5,
    price: 850,
    image:
      'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1200&auto=format&fit=crop',
    tags: ['Steps to Masjid Nabawi', 'Family Friendly', 'WiFi', 'Restaurant'],
  },
  {
    id: '3',
    name: 'Fairmont Makkah Clock Royal Tower',
    location: 'Makkah',
    rating: 5,
    price: 1800,
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
    tags: ['Iconic View', 'Premium Luxury', 'Haram View', 'Restaurant'],
  },
  {
    id: '4',
    name: 'Hilton Suites Makkah',
    location: 'Makkah',
    rating: 5,
    price: 1100,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    tags: ['Luxury', 'WiFi', 'Restaurant', 'Transport'],
  },
  {
    id: '5',
    name: 'Shaza Madinah',
    location: 'Madinah',
    rating: 5,
    price: 950,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    tags: ['Luxury', 'Steps to Masjid Nabawi', 'WiFi', 'Restaurant'],
  },
  {
    id: '6',
    name: 'Anwar Al Madinah Movenpick',
    location: 'Madinah',
    rating: 5,
    price: 780,
    image:
      'https://images.unsplash.com/photo-1551882547-ff43c63fedfe?q=80&w=1200&auto=format&fit=crop',
    tags: ['WiFi', 'Restaurant', 'Steps to Masjid Nabawi'],
  },
]

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Hotel Bookings',
    description:
      'Exclusive selection of luxury hotels in Makkah & Madinah with panoramic Haram views.',
    icon: 'hotel',
  },
  {
    id: 's2',
    title: 'Airport Transfers',
    description: 'Premium private transportation from Jeddah, Madinah, and Riyadh airports.',
    icon: 'car',
  },
  {
    id: 's3',
    title: 'Hajj & Umrah',
    description: 'Complete end-to-end spiritual journey packages with expert guidance.',
    icon: 'gem',
  },
  {
    id: 's4',
    title: 'Cultural Tours',
    description: 'Explore the rich Islamic heritage and Saudi cultural landmarks.',
    icon: 'map',
  },
  {
    id: 's5',
    title: '24/7 Support',
    description: 'Dedicated multi-lingual concierges available at every step of your journey.',
    icon: 'headset',
  },
  {
    id: 's6',
    title: 'Real Estate Marketing',
    description: 'Bespoke marketing for luxury residential units and hospitality assets.',
    icon: 'building',
  },
]

export const PACKAGES: Package[] = [
  {
    id: 'p1',
    name: 'Ramadan Umrah Deluxe',
    duration: '10 Days',
    price: 5500,
    type: 'Umrah',
    includes: ['5* Hotel Makkah', '5* Hotel Madinah', 'Full Transport', 'Iftar Buffet'],
    image:
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p2',
    name: 'Royal Hajj Journey',
    duration: '21 Days',
    price: 15000,
    type: 'Hajj',
    includes: ['Mina VIP Tents', 'Private Guide', 'Business Flights', 'Gourmet Catering'],
    image:
      'https://images.unsplash.com/photo-1542901031-158223c34302?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p3',
    name: 'Economic Umrah',
    duration: '7 Days',
    price: 2500,
    type: 'Umrah',
    includes: ['4* Hotel Makkah', 'Group Transport', 'Visa Processing', 'Ziyarat'],
    image:
      'https://images.unsplash.com/photo-1565552136439-b21919869911?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p4',
    name: 'History of Madinah',
    duration: '5 Days',
    price: 3200,
    type: 'Cultural',
    includes: ['5* Boutique Hotel', 'Expert Historian', 'Museum Entry', 'Traditional Meals'],
    image:
      'https://images.unsplash.com/photo-1591848415714-368297b6a121?q=80&w=800&auto=format&fit=crop',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Ahmed Al-Farsi',
    role: 'Corporate Client',
    content:
      'The attention to detail and hospitality provided by Masraa during our group Umrah was unparalleled. Truly a partner we can trust.',
    rating: 5,
  },
  {
    id: 't2',
    author: 'Sarah Johnson',
    role: 'International Tourist',
    content:
      'Our cultural tour of Madinah was enlightening. Everything was perfectly organized from the moment we landed in Jeddah.',
    rating: 5,
  },
]
