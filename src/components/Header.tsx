'use client'

import Link from 'next/link'
import { Compass, Heart, GitCompare, Sparkles, DollarSign, User } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Compass className="w-8 h-8 text-sunset-orange" />
            <span className="text-2xl font-bold text-ocean-blue hidden sm:inline">Travel Planner</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/explore" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors">
              <Compass className="w-5 h-5" />
              <span>Explore</span>
            </Link>
            <Link href="/trips" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors">
              <Heart className="w-5 h-5" />
              <span>Trips</span>
            </Link>
            <Link href="/compare" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors">
              <GitCompare className="w-5 h-5" />
              <span>Compare</span>
            </Link>
            <Link href="/planner" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors">
              <Sparkles className="w-5 h-5" />
              <span>AI Planner</span>
            </Link>
            <Link href="/budget" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors">
              <DollarSign className="w-5 h-5" />
              <span>Budget</span>
            </Link>
            <Link href="/profile" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-ocean-blue"></div>
            <div className="w-6 h-0.5 bg-ocean-blue"></div>
            <div className="w-6 h-0.5 bg-ocean-blue"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <Link href="/explore" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors py-2">
              <Compass className="w-5 h-5" />
              <span>Explore</span>
            </Link>
            <Link href="/trips" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors py-2">
              <Heart className="w-5 h-5" />
              <span>Trips</span>
            </Link>
            <Link href="/compare" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors py-2">
              <GitCompare className="w-5 h-5" />
              <span>Compare</span>
            </Link>
            <Link href="/planner" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors py-2">
              <Sparkles className="w-5 h-5" />
              <span>AI Planner</span>
            </Link>
            <Link href="/budget" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors py-2">
              <DollarSign className="w-5 h-5" />
              <span>Budget</span>
            </Link>
            <Link href="/profile" className="flex items-center gap-2 text-gray-700 hover:text-ocean-blue transition-colors py-2">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
