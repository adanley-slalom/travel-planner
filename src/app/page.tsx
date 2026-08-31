'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import DestinationCarousel from '@/components/DestinationCarousel'
import { destinations } from '@/data/destinations'
import { Sparkles, Heart, GitCompare } from 'lucide-react'
import Link from 'next/link'
import DestinationCard from '@/components/DestinationCard'
import { useState } from 'react'

export default function Home() {
  const [savedDestinations, setSavedDestinations] = useState<Set<string>>(new Set())

  const handleSaveDestination = (id: string) => {
    const newSaved = new Set(savedDestinations)
    if (newSaved.has(id)) {
      newSaved.delete(id)
    } else {
      newSaved.add(id)
    }
    setSavedDestinations(newSaved)
  }

  // Get trending destinations (top 4 by popularity)
  const trendingDestinations = [...destinations].sort((a, b) => b.popularity - a.popularity).slice(0, 4)

  // Get featured destinations for gallery
  const featuredDestinations = destinations.slice(0, 6)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Trending Destinations */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <DestinationCarousel
          destinations={trendingDestinations}
          title="Trending Destinations"
        />
      </section>

      {/* AI Recommendations Panel */}
      <section className="bg-gradient-to-r from-ocean-blue to-teal py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-sunset-orange" />
                <span className="text-sunset-orange font-semibold">AI-Powered</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Get Personalized Recommendations</h2>
              <p className="text-white/90 text-lg mb-6">
                Tell us about your travel style, budget, and interests. Our AI will suggest perfect destinations just for you.
              </p>
              <Link href="/planner" className="inline-block bg-sunset-orange text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Answer 6 Quick Questions
              </Link>
            </div>
            <div className="flex-1 bg-white/10 rounded-lg p-8 backdrop-blur">
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-white font-semibold mb-2">Based on your preferences</p>
                  <p className="text-white/80">Your interest in food, walkable cities, and moderate budgets suggest...</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {destinations.slice(0, 3).map(d => (
                    <div key={d.id} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {d.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Inspiration Gallery */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h2 className="section-headline">Travel Inspiration Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDestinations.map(destination => (
            <div key={destination.id}>
              <DestinationCard
                destination={destination}
                onSave={handleSaveDestination}
                isSaved={savedDestinations.has(destination.id)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Features Section */}
      <section className="bg-light-gray py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="section-headline">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg text-center">
              <Heart className="w-12 h-12 text-sunset-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ocean-blue mb-2">Save Destinations</h3>
              <p className="text-gray-600">
                Create collections for your dream trips, family vacations, and weekend getaways.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg text-center">
              <GitCompare className="w-12 h-12 text-sunset-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ocean-blue mb-2">Compare Options</h3>
              <p className="text-gray-600">
                Side-by-side comparison of budget, activities, climate, and popularity.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg text-center">
              <Sparkles className="w-12 h-12 text-sunset-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ocean-blue mb-2">AI Itineraries</h3>
              <p className="text-gray-600">
                Generate day-by-day itineraries tailored to your interests and trip length.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ocean-blue py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Plan Your Adventure?</h2>
          <p className="text-white/90 text-lg mb-8">
            Start exploring destinations, get personalized recommendations, and create your perfect trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/explore" className="btn-primary">
              Explore Destinations
            </Link>
            <Link href="/planner" className="bg-white text-ocean-blue font-semibold px-6 py-3 rounded-lg hover:bg-light-gray transition-colors">
              Get AI Recommendations
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="mb-2">© 2024 Travel Inspiration Planner. All rights reserved.</p>
          <p className="text-gray-400">Explore. Discover. Plan. Travel.</p>
        </div>
      </footer>
    </main>
  )
}
