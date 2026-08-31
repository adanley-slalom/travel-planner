'use client'

import { Destination } from '@/data/destinations'
import DestinationCard from './DestinationCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface DestinationCarouselProps {
  destinations: Destination[]
  title: string
}

export default function DestinationCarousel({ destinations, title }: DestinationCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`carousel-${title}`)
    if (!container) return

    const scrollAmount = 350
    const newPosition = direction === 'left'
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)

    container.scrollTo({ left: newPosition, behavior: 'smooth' })
    setScrollPosition(newPosition)
  }

  return (
    <div className="py-12">
      <h2 className="section-headline">{title}</h2>

      <div className="relative">
        {/* Carousel Container */}
        <div
          id={`carousel-${title}`}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {destinations.map(destination => (
            <div key={destination.id} className="flex-shrink-0 w-80">
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-light-gray transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-ocean-blue" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-light-gray transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-ocean-blue" />
        </button>
      </div>
    </div>
  )
}
