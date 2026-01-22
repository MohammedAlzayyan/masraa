'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import {
  Search,
  MapPin,
  Calendar,
  Users,
  ChevronDown,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

export default function Hero() {
  const { t, isRTL, language } = useLanguage()
  const [destination, setDestination] = useState('')
  const [isDestOpen, setIsDestOpen] = useState(false)
  const [isGuestOpen, setIsGuestOpen] = useState(false)
  const [isDateOpen, setIsDateOpen] = useState(false)

  // Track the first month displayed in the dual-calendar view
  const [viewDate, setViewDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  )

  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  })

  const [dateRange, setDateRange] = useState<{
    start: Date | null
    end: Date | null
  }>({
    start: null,
    end: null,
  })

  const destRef = useRef<HTMLDivElement>(null)
  const guestRef = useRef<HTMLDivElement>(null)
  const dateRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destRef.current && !destRef.current.contains(event.target as Node)) setIsDestOpen(false)
      if (guestRef.current && !guestRef.current.contains(event.target as Node))
        setIsGuestOpen(false)
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) setIsDateOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const updateGuest = (type: 'adults' | 'children' | 'rooms', delta: number) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(type === 'children' ? 0 : 1, prev[type] + delta),
    }))
  }

  const destinations = [
    { name: t?.hero?.makkah || 'مكة المكرمة', value: 'makkah' },
    { name: t?.hero?.madinah || 'المدينة المنورة', value: 'madinah' },
  ]

  const changeMonth = (offset: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1)
    const todayMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    // Don't go into the past months
    if (newDate < todayMonth) return
    setViewDate(newDate)
  }

  const isTodayOrFuture = (d: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return d >= today
  }

  const renderCalendar = (monthOffset: number) => {
    const date = new Date(viewDate.getFullYear(), viewDate.getMonth() + monthOffset, 1)
    const monthName = date.toLocaleString(language === 'ar' ? 'ar-SA' : 'en-US', {
      month: 'long',
      year: 'numeric',
    })

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    const days = []
    for (let i = 0; i < firstDay; i++) days.push(null)
    for (let i = 1; i <= daysInMonth; i++)
      days.push(new Date(date.getFullYear(), date.getMonth(), i))

    return (
      <div className="flex-1 min-w-[280px]">
        <div className="text-center font-bold text-brand-burgundy mb-4">{monthName}</div>
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black text-brand-wine/40 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d, i) => {
            if (!d) return <div key={i} />

            const isPast = !isTodayOrFuture(d)
            const isSelected =
              (dateRange.start && d.toDateString() === dateRange.start.toDateString()) ||
              (dateRange.end && d.toDateString() === dateRange.end.toDateString())
            const inRange =
              dateRange.start && dateRange.end && d > dateRange.start && d < dateRange.end

            return (
              <div
                key={i}
                onClick={() => {
                  if (isPast) return
                  if (!dateRange.start || (dateRange.start && dateRange.end)) {
                    setDateRange({ start: d, end: null })
                  } else if (d > dateRange.start) {
                    setDateRange({ ...dateRange, end: d })
                    // Briefly show selection before closing
                    setTimeout(() => setIsDateOpen(false), 400)
                  } else {
                    setDateRange({ start: d, end: null })
                  }
                }}
                className={`h-9 w-9 flex items-center justify-center rounded-lg text-xs font-bold transition-all relative
                  ${isPast ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer'}
                  ${isSelected ? 'bg-brand-gold text-white scale-110 shadow-lg z-10' : ''}
                  ${inRange ? 'bg-brand-beige/30 text-brand-burgundy' : !isPast && !isSelected ? 'text-brand-burgundy hover:bg-brand-beige/20' : ''}
                `}
              >
                {d.getDate()}
                {d.toDateString() === new Date().toDateString() && !isSelected && (
                  <div className="absolute bottom-1 w-1 h-1 bg-brand-gold rounded-full"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const formattedDates = dateRange.start
    ? `${dateRange.start.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', { month: 'short', day: 'numeric' })}${dateRange.end ? ' - ' + dateRange.end.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', { month: 'short', day: 'numeric' }) : ''}`
    : t?.hero?.datesPlaceholder || 'اختر التواريخ'

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 md:pt-48 md:pb-24">
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2000&auto=format&fit=crop"
          alt="Holy Mosque"
          fill
          priority
          className="object-cover scale-105 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-burgundy/85 via-brand-burgundy/60 to-brand-burgundy/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <span className="text-brand-gold font-bold tracking-[0.3em] uppercase mb-6 animate-fadeIn">
          {t?.hero?.welcome || 'مرحباً بك'}
        </span>
        <h1 className="text-4xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight animate-slideUp">
          {t?.hero?.title || 'رحلتك الروحانية'}
          <br />
          <span className="text-brand-gold italic">{t?.hero?.titleItalic || 'تبدأ هنا'}</span>
        </h1>
        <p className="text-white/90 max-w-2xl text-lg md:text-xl mb-12 animate-slideUp delay-100 leading-relaxed font-medium">
          {t?.hero?.desc || 'خدمات سياحية متكاملة لعمرة وحج مريحة وآمنة'}
        </p>

        {/* Search Widget - Ensure it has high z-index and overflow works for child dropdowns */}
        <div className="w-full max-w-5xl glass-card rounded-[32px] p-4 md:p-3 shadow-2xl animate-fadeIn delay-300 relative z-50">
          <form
            className="flex flex-col lg:flex-row items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Destination Dropdown */}
            <div className="flex-1 w-full relative" ref={destRef}>
              <div
                onClick={() => setIsDestOpen(!isDestOpen)}
                className="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-brand-burgundy/10 transition-colors cursor-pointer group"
              >
                <MapPin className="text-brand-gold group-hover:scale-110 transition-transform shrink-0" />
                <div className={`flex-1 flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                  <label className="text-[10px] uppercase tracking-wider text-brand-wine font-bold cursor-pointer">
                    {t?.hero?.destLabel || 'الوجهة'}
                  </label>
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-bold text-sm ${destination ? 'text-brand-burgundy' : 'text-brand-wine/50'}`}
                    >
                      {destination
                        ? destinations.find((d) => d.value === destination)?.name
                        : t?.hero?.destPlaceholder || 'اختر الوجهة'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-gold transition-transform duration-300 ${isDestOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
              </div>

              {isDestOpen && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-brand-gold/20 overflow-hidden z-[100] animate-slideDown duration-200">
                  {destinations.map((dest) => (
                    <div
                      key={dest.value}
                      onClick={() => {
                        setDestination(dest.value)
                        setIsDestOpen(false)
                      }}
                      className={`px-6 py-4 hover:bg-brand-beige/20 text-brand-burgundy font-bold cursor-pointer transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      {dest.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden lg:block w-px h-12 bg-brand-gold/30"></div>

            {/* Date Range Dropdown */}
            <div className="flex-1 w-full relative" ref={dateRef}>
              <div
                onClick={() => setIsDateOpen(!isDateOpen)}
                className="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-brand-burgundy/10 transition-colors cursor-pointer group"
              >
                <Calendar className="text-brand-gold group-hover:scale-110 transition-transform shrink-0" />
                <div className={`flex-1 flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                  <label className="text-[10px] uppercase tracking-wider text-brand-wine font-bold cursor-pointer">
                    {t?.hero?.datesLabel || 'التواريخ'}
                  </label>
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-bold text-sm ${dateRange.start ? 'text-brand-burgundy' : 'text-brand-wine/50'}`}
                    >
                      {formattedDates}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-gold transition-transform duration-300 ${isDateOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
              </div>

              {isDateOpen && (
                <div className="absolute top-full left-0 lg:-left-24 lg:right-auto mt-3 bg-white rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-brand-gold/20 p-8 z-[100] animate-slideDown duration-200 min-w-[320px] md:min-w-[650px]">
                  {/* Calendar Navigation */}
                  <div className="flex items-center justify-between mb-8">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        changeMonth(-1)
                      }}
                      className="p-2 hover:bg-brand-beige/20 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      disabled={
                        viewDate <= new Date(new Date().getFullYear(), new Date().getMonth(), 1)
                      }
                    >
                      {isRTL ? (
                        <ChevronRight className="w-6 h-6 text-brand-burgundy" />
                      ) : (
                        <ChevronLeft className="w-6 h-6 text-brand-burgundy" />
                      )}
                    </button>
                    <div className="text-sm font-black text-brand-gold uppercase tracking-widest">
                      {isRTL ? 'اختر التواريخ' : 'Select your dates'}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        changeMonth(1)
                      }}
                      className="p-2 hover:bg-brand-beige/20 rounded-full transition-colors"
                    >
                      {isRTL ? (
                        <ChevronLeft className="w-6 h-6 text-brand-burgundy" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-brand-burgundy" />
                      )}
                    </button>
                  </div>

                  <div className="flex flex-col md:flex-row gap-12">
                    {renderCalendar(0)}
                    <div className="hidden md:block w-px bg-brand-beige/30"></div>
                    {renderCalendar(1)}
                  </div>

                  <div className="mt-8 pt-6 border-t border-brand-beige/30 flex items-center justify-between">
                    <div className="text-xs text-brand-wine/60 font-bold italic">
                      {isRTL
                        ? '* اختر تاريخ الوصول ثم المغادرة'
                        : '* Choose arrival then departure date'}
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          setDateRange({ start: null, end: null })
                        }}
                        className="text-brand-wine/60 px-4 py-2 rounded-xl text-sm font-bold hover:text-brand-burgundy transition-colors"
                      >
                        {isRTL ? 'إعادة تعيين' : 'Reset'}
                      </button>
                      <button
                        onClick={() => setIsDateOpen(false)}
                        className="bg-brand-burgundy text-white px-8 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-brand-wine active:scale-95 transition-all"
                      >
                        {t?.hero?.done || 'تم'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden lg:block w-px h-12 bg-brand-gold/30"></div>

            {/* Guests Popover */}
            <div className="flex-1 w-full relative" ref={guestRef}>
              <div
                onClick={() => setIsGuestOpen(!isGuestOpen)}
                className="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-brand-burgundy/10 transition-colors cursor-pointer group"
              >
                <Users className="text-brand-gold group-hover:scale-110 transition-transform shrink-0" />
                <div className={`flex-1 flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                  <label className="text-[10px] uppercase tracking-wider text-brand-wine font-bold cursor-pointer">
                    {t?.hero?.guestsLabel || 'الضيوف'}
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-burgundy font-bold text-sm">
                      {guests.adults} {t?.hero?.adults || 'بالغ'}, {guests.children}{' '}
                      {t?.hero?.children || 'طفل'}, {guests.rooms} {t?.hero?.rooms || 'غرفة'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-gold transition-transform duration-300 ${isGuestOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
              </div>

              {isGuestOpen && (
                <div className="absolute top-full left-0 right-0 lg:w-[360px] lg:right-auto lg:left-0 mt-3 bg-white rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-brand-gold/20 p-8 z-[110] animate-slideDown duration-200">
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                        <span className="font-bold text-brand-burgundy text-lg">
                          {t?.hero?.adults || 'بالغين'}
                        </span>
                        <span className="text-xs text-brand-wine/50 font-medium">
                          12+ {isRTL ? 'سنة' : 'years'}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 bg-brand-beige/10 p-1.5 rounded-full border border-brand-gold/10">
                        <button
                          onClick={() => updateGuest('adults', -1)}
                          className="w-10 h-10 rounded-full bg-white border border-brand-gold/20 text-brand-burgundy flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all shadow-sm active:scale-95"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="w-6 text-center font-black text-brand-burgundy text-lg">
                          {guests.adults}
                        </span>
                        <button
                          onClick={() => updateGuest('adults', 1)}
                          className="w-10 h-10 rounded-full bg-white border border-brand-gold/20 text-brand-burgundy flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all shadow-sm active:scale-95"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                        <span className="font-bold text-brand-burgundy text-lg">
                          {t?.hero?.children || 'أطفال'}
                        </span>
                        <span className="text-xs text-brand-wine/50 font-medium">
                          2-12 {isRTL ? 'سنة' : 'years'}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 bg-brand-beige/10 p-1.5 rounded-full border border-brand-gold/10">
                        <button
                          onClick={() => updateGuest('children', -1)}
                          className="w-10 h-10 rounded-full bg-white border border-brand-gold/20 text-brand-burgundy flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all shadow-sm active:scale-95"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="w-6 text-center font-black text-brand-burgundy text-lg">
                          {guests.children}
                        </span>
                        <button
                          onClick={() => updateGuest('children', 1)}
                          className="w-10 h-10 rounded-full bg-white border border-brand-gold/20 text-brand-burgundy flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all shadow-sm active:scale-95"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                        <span className="font-bold text-brand-burgundy text-lg">
                          {t?.hero?.rooms || 'غرف'}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 bg-brand-beige/10 p-1.5 rounded-full border border-brand-gold/10">
                        <button
                          onClick={() => updateGuest('rooms', -1)}
                          className="w-10 h-10 rounded-full bg-white border border-brand-gold/20 text-brand-burgundy flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all shadow-sm active:scale-95"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="w-6 text-center font-black text-brand-burgundy text-lg">
                          {guests.rooms}
                        </span>
                        <button
                          onClick={() => updateGuest('rooms', 1)}
                          className="w-10 h-10 rounded-full bg-white border border-brand-gold/20 text-brand-burgundy flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all shadow-sm active:scale-95"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsGuestOpen(false)}
                    className="w-full mt-10 bg-brand-burgundy text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-brand-wine transition-all shadow-xl active:scale-95"
                  >
                    {t?.hero?.done || 'تم'}
                  </button>
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full lg:w-auto bg-brand-burgundy hover:bg-brand-wine text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl group uppercase tracking-widest"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{t?.hero?.searchBtn || 'بحث'}</span>
            </button>
          </form>
        </div>

        {/* Stats Section - Placed with lower z-index than search widget */}
        <div className="mt-20 flex items-center gap-6 md:gap-10 animate-fadeIn delay-500 overflow-x-auto pb-6 max-w-full scrollbar-hide relative z-10">
          <div className="flex flex-col items-center shrink-0">
            <span className="text-brand-gold text-3xl md:text-4xl font-black">500+</span>
            <span className="text-white/70 text-[10px] uppercase tracking-[0.3em] font-black">
              {t?.hero?.statHotels || 'فندق'}
            </span>
          </div>
          <div className="w-px h-12 bg-white/20 shrink-0"></div>
          <div className="flex flex-col items-center shrink-0">
            <span className="text-brand-gold text-3xl md:text-4xl font-black">10k+</span>
            <span className="text-white/70 text-[10px] uppercase tracking-[0.3em] font-black">
              {t?.hero?.statPilgrims || 'حاج'}
            </span>
          </div>
          <div className="w-px h-12 bg-white/20 shrink-0"></div>
          <div className="flex flex-col items-center shrink-0">
            <span className="text-brand-gold text-3xl md:text-4xl font-black">24/7</span>
            <span className="text-white/70 text-[10px] uppercase tracking-[0.3em] font-black">
              {t?.hero?.statSupport || 'دعم'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
