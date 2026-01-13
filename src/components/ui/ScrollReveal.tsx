'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  width?: 'fit-content' | '100%'
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up'
  delay?: number
  duration?: number
  threshold?: number
  staggerChildren?: number // delay between children animations if applicable (requires custom css or more logic, keeping simple for now)
}

export default function ScrollReveal({
  children,
  className = '',
  width = '100%',
  animation = 'fade-up',
  delay = 0,
  duration = 0.5,
  threshold = 0.2, // 20% visible
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (element) observer.unobserve(element) // Only animate once
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slighlty before fully enters or as appropriate
      },
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold])

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      case 'fade-in':
        return isVisible ? 'opacity-100' : 'opacity-0'
      case 'slide-left': // enters from right to left
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      case 'slide-right': // enters from left to right
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      case 'scale-up':
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }
  }

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        width,
      }}
      className={`transition-all ease-out duration-700 ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}
