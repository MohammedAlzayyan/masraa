import React from 'react'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Testimonials from '@/sections/Testimonials'
import CTA from '@/sections/CTA'
// TODO: استورد باقي المكونات بعد نقلها
// import FeaturedHotels from '@/sections/FeaturedHotels'
// import Packages from '@/sections/Packages'
// import WhyChooseUs from '@/sections/WhyChooseUs'

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
