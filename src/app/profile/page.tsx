'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { User } from 'lucide-react'

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-blue to-teal py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <User className="w-8 h-8 text-sunset-orange" />
            <span className="text-sunset-orange font-semibold">Your Profile</span>
          </div>
          <h1 className="hero-headline text-white mb-4">Travel Preferences</h1>
          <p className="text-white/90 text-lg">Customize your travel preferences and profile</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="bg-light-gray rounded-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 bg-ocean-blue rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-ocean-blue">Your Profile</h2>
              <p className="text-gray-600">Complete your travel preferences</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-ocean-blue mb-4">Profile Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Travel Style</label>
                <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue">
                  <option>Not specified</option>
                  <option>Adventure Seeker</option>
                  <option>Cultural Explorer</option>
                  <option>Relaxation Focus</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Budget Preference</label>
                <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue">
                  <option>Not specified</option>
                  <option>Budget-Friendly</option>
                  <option>Moderate</option>
                  <option>Luxury</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Climate Preference</label>
                <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue">
                  <option>Not specified</option>
                  <option>Warm & Sunny</option>
                  <option>Mild & Comfortable</option>
                  <option>Cold & Crisp</option>
                </select>
              </div>

              <button className="w-full btn-primary">
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold text-ocean-blue mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/explore" className="p-4 border-2 border-ocean-blue rounded-lg text-center hover:bg-light-gray transition-colors">
                <div className="text-2xl mb-2">🌍</div>
                <h4 className="font-bold text-ocean-blue">Explore Destinations</h4>
              </a>
              <a href="/planner" className="p-4 border-2 border-ocean-blue rounded-lg text-center hover:bg-light-gray transition-colors">
                <div className="text-2xl mb-2">✨</div>
                <h4 className="font-bold text-ocean-blue">Get Recommendations</h4>
              </a>
              <a href="/compare" className="p-4 border-2 border-ocean-blue rounded-lg text-center hover:bg-light-gray transition-colors">
                <div className="text-2xl mb-2">⚖️</div>
                <h4 className="font-bold text-ocean-blue">Compare Destinations</h4>
              </a>
              <a href="/budget" className="p-4 border-2 border-ocean-blue rounded-lg text-center hover:bg-light-gray transition-colors">
                <div className="text-2xl mb-2">💰</div>
                <h4 className="font-bold text-ocean-blue">Budget Estimator</h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
