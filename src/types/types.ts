export interface Hotel {
  id: string
  name: string
  location: 'Makkah' | 'Madinah'
  rating: number
  price: number
  image: string
  tags: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Package {
  id: string
  name: string
  duration: string
  price: number
  includes: string[]
  type: 'Hajj' | 'Umrah' | 'Cultural'
  image: string
}

export interface Testimonial {
  id: string
  author: string
  role: string
  content: string
  rating: number
}
