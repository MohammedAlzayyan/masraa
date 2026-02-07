import React from 'react'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Testimonials from '@/sections/Testimonials'
import CTA from '@/sections/CTA'
import FeaturedHotels from '@/sections/FeaturedHotels'
import FeaturedPackages from '@/sections/FeaturedPackages'
import { getServices } from '@/actions/services'
import { getHotels } from '@/actions/hotels'
import { getPackages } from '@/actions/packages'
import { getTestimonials } from '@/actions/testimonials'

export default async function HomePage() {
  const [services, hotels, packages, testimonials] = await Promise.all([
    getServices(),
    getHotels({ limit: 3 }),
    getPackages(),
    getTestimonials(),
  ])

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services initialServices={services} />
      <FeaturedHotels hotels={hotels} />
      <FeaturedPackages packages={packages} />
      <Testimonials initialTestimonials={testimonials} />
      <CTA />
    </div>
  )
}
