'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Heart, Plus } from 'lucide-react'

export default function TripsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-blue to-teal py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-sunset-orange" />
            <span className="text-sunset-orange font-semibold">My Collections</span>
          </div>
          <h1 className="hero-headline text-white mb-4">Your Trip Collections</h1>
          <p className="text-white/90 text-lg">Organize and save your destination ideas</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center py-16">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-ocean-blue mb-2">No Collections Yet</h2>
          <p className="text-gray-600 mb-6">
            Start building your dream trip collections by saving destinations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/explore" className="inline-flex items-center gap-2 btn-primary">
              <Plus className="w-5 h-5" />
              Explore & Save Destinations
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 bg-light-gray text-ocean-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Back to Home
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-light-gray rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-800 mb-2">Dream Trips</h3>
              <p className="text-sm text-gray-600">For destinations on your bucket list</p>
            </div>
            <div className="bg-light-gray rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-gray-800 mb-2">Family Trips</h3>
              <p className="text-sm text-gray-600">For family-friendly destinations</p>
            </div>
            <div className="bg-light-gray rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">⛱️</div>
              <h3 className="font-bold text-gray-800 mb-2">Weekend Getaways</h3>
              <p className="text-sm text-gray-600">Quick escape destinations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
