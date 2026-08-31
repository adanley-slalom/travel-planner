'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'
import { destinations } from '@/data/destinations'
import { useState } from 'react'
import { Search, X } from 'lucide-react'

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<string>('')
  const [selectedBudget, setSelectedBudget] = useState<string>('')
  const [selectedClimate, setSelectedClimate] = useState<string>('')
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

  // Filter logic
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRegion = !selectedRegion || destination.continent === selectedRegion
    const matchesBudget = !selectedBudget || destination.budgetLevel === selectedBudget
    const matchesClimate = !selectedClimate || destination.climate === selectedClimate

    return matchesSearch && matchesRegion && matchesBudget && matchesClimate
  })

  const regions = ['Africa', 'Asia', 'Europe', 'North America', 'Central America', 'South America', 'Oceania']
  const budgets = ['budget', 'moderate', 'luxury']
  const climates = ['Tropical', 'Mediterranean', 'Temperate', 'Temperate oceanic', 'Subarctic', 'Temperate continental']

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedRegion('')
    setSelectedBudget('')
    setSelectedClimate('')
  }

  const hasActiveFilters = searchQuery || selectedRegion || selectedBudget || selectedClimate

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-blue to-teal py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="hero-headline text-white mb-4">Explore Destinations</h1>
          <p className="text-white/90 text-lg">Discover your next adventure from our curated collection</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-light-gray rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-ocean-blue mb-6">Filters</h2>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Destination, country..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  )}
                </div>
              </div>

              {/* Region Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                >
                  <option value="">All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>

              {/* Budget Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget</label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                >
                  <option value="">All Budgets</option>
                  <option value="budget">Budget-Friendly</option>
                  <option value="moderate">Moderate</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>

              {/* Climate Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Climate</label>
                <select
                  value={selectedClimate}
                  onChange={(e) => setSelectedClimate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                >
                  <option value="">All Climates</option>
                  {climates.map(climate => (
                    <option key={climate} value={climate}>{climate}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full bg-white text-ocean-blue font-semibold px-4 py-2 rounded-lg border-2 border-ocean-blue hover:bg-light-gray transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Destinations Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredDestinations.length}</span> {filteredDestinations.length === 1 ? 'destination' : 'destinations'}
              </p>
            </div>

            {filteredDestinations.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No destinations match your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-ocean-blue font-semibold hover:underline"
                >
                  Clear filters and try again
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDestinations.map(destination => (
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
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
