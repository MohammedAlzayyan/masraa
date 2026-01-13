import React from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
// TODO: استورد باقي المكونات بعد نقلها
// import FeaturedHotels from '@/components/sections/FeaturedHotels'
// import Packages from '@/components/sections/Packages'
// import WhyChooseUs from '@/components/sections/WhyChooseUs'

export default async function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      {/* TODO: أضف باقي المكونات بعد نقلها */}
      {/* 
      <FeaturedHotels />
      <Packages />
      <WhyChooseUs />
      */}
      <Testimonials />
      <CTA />
    </div>
  )
}
