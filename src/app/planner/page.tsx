'use client'

import Header from '@/components/Header'
import DestinationCard from '@/components/DestinationCard'
import { destinations } from '@/data/destinations'
import { useState } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function PlannerPage() {
  const [step, setStep] = useState<'form' | 'results'>('form')
  const [budget, setBudget] = useState<'budget' | 'moderate' | 'luxury'>('moderate')
  const [travelStyle, setTravelStyle] = useState<string>('adventure')
  const [weather, setWeather] = useState<string>('warm')
  const [activities, setActivities] = useState<string[]>([])
  const [tripLength, setTripLength] = useState<string>('5')
  const [groupType, setGroupType] = useState<string>('couple')
  const [recommendations, setRecommendations] = useState<typeof destinations>([])
  const [savedDestinations, setSavedDestinations] = useState<Set<string>>(new Set())

  const activityOptions = ['Adventure', 'Food', 'Culture', 'Relaxation', 'Nature', 'Nightlife', 'Beach', 'Mountains']

  const toggleActivity = (activity: string) => {
    setActivities(prev =>
      prev.includes(activity)
        ? prev.filter(a => a !== activity)
        : [...prev, activity]
    )
  }

  const handleGenerateRecommendations = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple recommendation algorithm based on preferences
    let recommended = [...destinations]

    // Filter by budget
    if (budget === 'budget') {
      recommended = recommended.filter(d => d.budgetLevel !== 'luxury')
    } else if (budget === 'luxury') {
      recommended = recommended.filter(d => d.budgetLevel === 'luxury')
    }

    // Filter by weather preference
    if (weather === 'warm') {
      recommended = recommended.filter(d => !d.climate.includes('Arctic') && !d.climate.includes('Subarctic'))
    } else if (weather === 'cold') {
      recommended = recommended.filter(d => d.climate.includes('Arctic') || d.climate.includes('Subarctic') || d.climate.includes('continental'))
    }

    // Filter by activities (simple match)
    if (activities.length > 0) {
      recommended = recommended.filter(d =>
        activities.some(activity =>
          d.activities.some(destActivity => destActivity.toLowerCase().includes(activity.toLowerCase()))
        )
      )
    }

    // Sort by popularity
    recommended.sort((a, b) => b.popularity - a.popularity)

    setRecommendations(recommended.slice(0, 6))
    setStep('results')
  }

  const handleSaveDestination = (id: string) => {
    const newSaved = new Set(savedDestinations)
    if (newSaved.has(id)) {
      newSaved.delete(id)
    } else {
      newSaved.add(id)
    }
    setSavedDestinations(newSaved)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-blue to-teal py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-sunset-orange" />
            <span className="text-sunset-orange font-semibold">AI-Powered</span>
          </div>
          <h1 className="hero-headline text-white mb-4">Get Personalized Recommendations</h1>
          <p className="text-white/90 text-lg">Answer a few questions and discover destinations perfect for you</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        {step === 'form' ? (
          // Preference Form
          <form onSubmit={handleGenerateRecommendations} className="bg-light-gray rounded-lg p-8">
            <h2 className="text-3xl font-bold text-ocean-blue mb-8">Tell Us About Your Travel Style</h2>

            {/* Budget */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-800 mb-4">What's Your Budget?</label>
              <div className="space-y-3">
                {[
                  { value: 'budget', label: '$ Budget-Friendly (Under $1000)', desc: 'Stay in hostels, eat street food' },
                  { value: 'moderate', label: '$$ Moderate ($1000-3000)', desc: 'Mix of comfort and value' },
                  { value: 'luxury', label: '$$$ Luxury ($3000+)', desc: 'Top hotels, fine dining' }
                ].map(option => (
                  <label key={option.value} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="budget"
                      value={option.value}
                      checked={budget === option.value}
                      onChange={(e) => setBudget(e.target.value as 'budget' | 'moderate' | 'luxury')}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-semibold text-gray-800">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Travel Style */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-800 mb-4">What's Your Travel Style?</label>
              <div className="space-y-3">
                {[
                  { value: 'adventure', label: 'Adventure Seeker', desc: 'Hiking, extreme sports, outdoor activities' },
                  { value: 'cultural', label: 'Cultural Explorer', desc: 'Museums, history, local traditions' },
                  { value: 'relaxation', label: 'Relaxation Focus', desc: 'Beaches, spas, peaceful destinations' }
                ].map(option => (
                  <label key={option.value} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="style"
                      value={option.value}
                      checked={travelStyle === option.value}
                      onChange={(e) => setTravelStyle(e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-semibold text-gray-800">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Desired Weather */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-800 mb-4">What Weather Do You Prefer?</label>
              <div className="space-y-3">
                {[
                  { value: 'warm', label: 'Warm & Sunny' },
                  { value: 'moderate', label: 'Mild & Comfortable' },
                  { value: 'cold', label: 'Cold & Crisp' }
                ].map(option => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="weather"
                      value={option.value}
                      checked={weather === option.value}
                      onChange={(e) => setWeather(e.target.value)}
                    />
                    <span className="font-semibold text-gray-800">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Activities Interest */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-800 mb-4">What Activities Interest You? (Select at least one)</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {activityOptions.map(activity => (
                  <button
                    key={activity}
                    type="button"
                    onClick={() => toggleActivity(activity)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      activities.includes(activity)
                        ? 'bg-ocean-blue text-white'
                        : 'bg-white border-2 border-gray-300 text-gray-800 hover:border-ocean-blue'
                    }`}
                  >
                    {activity}
                  </button>
                ))}
              </div>
            </div>

            {/* Trip Length */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-800 mb-4">How Long Is Your Trip?</label>
              <select
                value={tripLength}
                onChange={(e) => setTripLength(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue"
              >
                <option value="3">3 days</option>
                <option value="5">5 days</option>
                <option value="7">1 week</option>
                <option value="14">2 weeks</option>
                <option value="30">1 month</option>
              </select>
            </div>

            {/* Group Type */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-800 mb-4">Who Are You Traveling With?</label>
              <div className="space-y-3">
                {[
                  { value: 'solo', label: 'Solo' },
                  { value: 'couple', label: 'Couple' },
                  { value: 'family', label: 'Family' },
                  { value: 'friends', label: 'Friends' }
                ].map(option => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="group"
                      value={option.value}
                      checked={groupType === option.value}
                      onChange={(e) => setGroupType(e.target.value)}
                    />
                    <span className="font-semibold text-gray-800">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={activities.length === 0}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get Recommendations
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        ) : (
          // Results
          <div>
            <button
              onClick={() => setStep('form')}
              className="mb-8 text-ocean-blue font-semibold hover:underline"
            >
              ← Back to Questions
            </button>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-ocean-blue mb-2">Your Personalized Recommendations</h2>
              <p className="text-gray-600 text-lg">
                Based on your preferences for {travelStyle} travel, {weather} weather, and interests in {activities.join(', ')}
              </p>
            </div>

            {recommendations.length === 0 ? (
              <div className="text-center py-12 bg-light-gray rounded-lg">
                <p className="text-gray-600 text-lg">
                  No destinations match your criteria. Try adjusting your preferences!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map(destination => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    onSave={handleSaveDestination}
                    isSaved={savedDestinations.has(destination.id)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="mb-2">© 2024 Travel Inspiration Planner. All rights reserved.</p>
          <p className="text-gray-400">Explore. Discover. Plan. Travel.</p>
        </div>
      </footer>
    </main>
  )
}
