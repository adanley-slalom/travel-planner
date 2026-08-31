'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'
import { destinations, Destination } from '@/data/destinations'
import { useState } from 'react'
import { X, DollarSign, Zap, Cloud, Smile, Clock } from 'lucide-react'

export default function ComparePage() {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([])
  const [availableDestinations, setAvailableDestinations] = useState(destinations)
  const [savedDestinations, setSavedDestinations] = useState<Set<string>>(new Set())

  const handleAddDestination = (id: string) => {
    if (selectedDestinations.length < 4) {
      setSelectedDestinations([...selectedDestinations, id])
    }
  }

  const handleRemoveDestination = (id: string) => {
    setSelectedDestinations(selectedDestinations.filter(d => d !== id))
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

  const comparisonDestinations = destinations.filter(d => selectedDestinations.includes(d.id))

  const budgetToNumber = (budget: string) => {
    return budget === 'budget' ? 1 : budget === 'moderate' ? 2 : 3
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-blue to-teal py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="hero-headline text-white mb-4">Compare Destinations</h1>
          <p className="text-white/90 text-lg">Select up to 4 destinations to compare side by side</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Selection Panel */}
        {selectedDestinations.length < 4 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-ocean-blue mb-6">
              Select Destinations ({selectedDestinations.length}/4)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.filter(d => !selectedDestinations.includes(d.id)).map(destination => (
                <div
                  key={destination.id}
                  className="card p-4 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleAddDestination(destination.id)}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/300x200?text=${destination.name}`
                    }}
                  />
                  <h3 className="font-bold text-ocean-blue">{destination.name}</h3>
                  <p className="text-sm text-gray-600">{destination.country}</p>
                  <button className="mt-2 w-full bg-ocean-blue text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {selectedDestinations.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-ocean-blue mb-6">Comparison</h2>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-light-gray">
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-700">Attribute</th>
                    {comparisonDestinations.map(dest => (
                      <th key={dest.id} className="border border-gray-300 p-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src={dest.image}
                            alt={dest.name}
                            className="w-16 h-16 object-cover rounded"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://via.placeholder.com/100x100?text=${dest.name}`
                            }}
                          />
                          <div>
                            <div className="font-bold text-ocean-blue">{dest.name}</div>
                            <div className="text-sm text-gray-600">{dest.country}</div>
                          </div>
                          <button
                            onClick={() => handleRemoveDestination(dest.id)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Budget */}
                  <tr className="hover:bg-light-gray">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-800 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" /> Budget
                    </td>
                    {comparisonDestinations.map(dest => (
                      <td key={dest.id} className="border border-gray-300 p-4 text-center">
                        {dest.budgetLevel === 'budget' && '$'}
                        {dest.budgetLevel === 'moderate' && '$$'}
                        {dest.budgetLevel === 'luxury' && '$$$'}
                      </td>
                    ))}
                  </tr>

                  {/* Climate */}
                  <tr className="hover:bg-light-gray">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-800 flex items-center gap-2">
                      <Cloud className="w-4 h-4" /> Climate
                    </td>
                    {comparisonDestinations.map(dest => (
                      <td key={dest.id} className="border border-gray-300 p-4 text-center">
                        {dest.climate}
                      </td>
                    ))}
                  </tr>

                  {/* Flight Difficulty */}
                  <tr className="hover:bg-light-gray">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-800 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Flight Difficulty
                    </td>
                    {comparisonDestinations.map(dest => (
                      <td key={dest.id} className="border border-gray-300 p-4 text-center">
                        {'✈️'.repeat(dest.flightDifficulty)} ({dest.flightDifficulty}/5)
                      </td>
                    ))}
                  </tr>

                  {/* Popularity */}
                  <tr className="hover:bg-light-gray">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-800 flex items-center gap-2">
                      <Smile className="w-4 h-4" /> Popularity
                    </td>
                    {comparisonDestinations.map(dest => (
                      <td key={dest.id} className="border border-gray-300 p-4 text-center">
                        {'⭐'.repeat(dest.popularity)} ({dest.popularity}/5)
                      </td>
                    ))}
                  </tr>

                  {/* Duration */}
                  <tr className="hover:bg-light-gray">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-800 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Est. Duration
                    </td>
                    {comparisonDestinations.map(dest => (
                      <td key={dest.id} className="border border-gray-300 p-4 text-center">
                        {dest.estimatedDuration} days
                      </td>
                    ))}
                  </tr>

                  {/* Best Season */}
                  <tr className="hover:bg-light-gray">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-800">Best Season</td>
                    {comparisonDestinations.map(dest => (
                      <td key={dest.id} className="border border-gray-300 p-4 text-center text-sm">
                        {dest.bestSeason}
                      </td>
                    ))}
                  </tr>

                  {/* Activities */}
                  <tr className="hover:bg-light-gray">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-800">Activities</td>
                    {comparisonDestinations.map(dest => (
                      <td key={dest.id} className="border border-gray-300 p-4 text-center text-sm">
                        {dest.activities.slice(0, 3).join(', ')}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-6">
              {comparisonDestinations.map(dest => (
                <div key={dest.id} className="card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-ocean-blue">{dest.name}</h3>
                      <p className="text-gray-600">{dest.country}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveDestination(dest.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x300?text=${dest.name}`
                    }}
                  />

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold">Budget:</span>
                      <span>
                        {dest.budgetLevel === 'budget' && '$'}
                        {dest.budgetLevel === 'moderate' && '$$'}
                        {dest.budgetLevel === 'luxury' && '$$$'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Climate:</span>
                      <span>{dest.climate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Flight Difficulty:</span>
                      <span>{'✈️'.repeat(dest.flightDifficulty)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Popularity:</span>
                      <span>{'⭐'.repeat(dest.popularity)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Duration:</span>
                      <span>{dest.estimatedDuration} days</span>
                    </div>
                    <div>
                      <span className="font-semibold">Best Season:</span>
                      <p className="text-gray-600 mt-1">{dest.bestSeason}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Activities:</span>
                      <p className="text-gray-600 mt-1">{dest.activities.join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Select destinations to begin comparing</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
