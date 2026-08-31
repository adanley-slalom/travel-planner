'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-ocean-blue via-teal to-ocean-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#dots)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="hero-headline text-white mb-4">
          Find Your Next Adventure
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          Discover destinations and build unforgettable journeys.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations, activities, or inspiration..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunset-orange shadow-lg"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-sunset-orange text-white p-2 rounded-lg hover:bg-orange-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/explore" className="btn-primary">
          Start Exploring
        </Link>
      </div>
    </div>
  )
}
