'use client'

import Header from '@/components/Header'
import { destinations } from '@/data/destinations'
import { useState } from 'react'
import { DollarSign, Users, Calendar } from 'lucide-react'

export default function BudgetPage() {
  const [selectedDestination, setSelectedDestination] = useState<string>(destinations[0].id)
  const [travelers, setTravelers] = useState<string>('1')
  const [duration, setDuration] = useState<string>('5')
  const [budgetEstimate, setBudgetEstimate] = useState<any>(null)

  const destination = destinations.find(d => d.id === selectedDestination)!

  const budgetMultipliers = {
    budget: { flights: 400, lodging: 50, food: 30, activities: 40 },
    moderate: { flights: 800, lodging: 120, food: 70, activities: 100 },
    luxury: { flights: 1500, lodging: 300, food: 200, activities: 250 }
  }

  const calculateBudget = () => {
    const multipliers = budgetMultipliers[destination.budgetLevel]
    const numTravelers = parseInt(travelers)
    const numDays = parseInt(duration)

    const flights = multipliers.flights * numTravelers
    const lodging = multipliers.lodging * numTravelers * numDays
    const food = multipliers.food * numTravelers * numDays
    const activities = multipliers.activities * numTravelers * numDays

    const total = flights + lodging + food + activities

    setBudgetEstimate({
      flights,
      lodging,
      food,
      activities,
      total,
      perPerson: total / numTravelers
    })
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    calculateBudget()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-blue to-teal py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <DollarSign className="w-8 h-8 text-sunset-orange" />
            <span className="text-sunset-orange font-semibold">Budget Estimator</span>
          </div>
          <h1 className="hero-headline text-white mb-4">Estimate Your Trip Cost</h1>
          <p className="text-white/90 text-lg">Get an approximate budget for your next adventure</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <form onSubmit={handleCalculate} className="bg-light-gray rounded-lg p-8">
              <h2 className="text-2xl font-bold text-ocean-blue mb-6">Trip Details</h2>

              {/* Destination Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Destination</label>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                >
                  {destinations.map(dest => (
                    <option key={dest.id} value={dest.id}>
                      {dest.name}, {dest.country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Number of Travelers */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Number of Travelers
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'traveler' : 'travelers'}</option>
                  ))}
                </select>
              </div>

              {/* Trip Duration */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Trip Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                >
                  <option value="3">3 days</option>
                  <option value="5">5 days</option>
                  <option value="7">1 week</option>
                  <option value="10">10 days</option>
                  <option value="14">2 weeks</option>
                  <option value="21">3 weeks</option>
                  <option value="30">1 month</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Calculate Estimate
              </button>

              {/* Budget Level Info */}
              <div className="mt-8 pt-8 border-t border-gray-300">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Budget Level</h3>
                <div className="text-xs text-gray-600 space-y-2">
                  <div>
                    <p className="font-semibold">{destination.name}</p>
                    <p>
                      {destination.budgetLevel === 'budget' && '💰 Budget-Friendly'}
                      {destination.budgetLevel === 'moderate' && '💰💰 Moderate'}
                      {destination.budgetLevel === 'luxury' && '💰💰💰 Luxury'}
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {budgetEstimate ? (
              <div className="space-y-6">
                {/* Total Estimate */}
                <div className="bg-gradient-to-br from-ocean-blue to-teal rounded-lg p-8 text-white">
                  <p className="text-white/80 mb-2">Total Estimated Cost</p>
                  <h3 className="text-5xl font-bold mb-4">
                    ${budgetEstimate.total.toLocaleString()}
                  </h3>
                  <p className="text-white/80">
                    ${budgetEstimate.perPerson.toLocaleString()} per person
                  </p>
                </div>

                {/* Breakdown */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-ocean-blue">Cost Breakdown</h3>

                  {/* Flights */}
                  <div className="card p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">Flights</h4>
                      <p className="text-2xl font-bold text-sunset-orange">
                        ${budgetEstimate.flights.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-light-gray rounded-full h-2">
                      <div
                        className="bg-sunset-orange h-2 rounded-full"
                        style={{ width: `${(budgetEstimate.flights / budgetEstimate.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {((budgetEstimate.flights / budgetEstimate.total) * 100).toFixed(1)}% of total
                    </p>
                  </div>

                  {/* Lodging */}
                  <div className="card p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">Lodging</h4>
                      <p className="text-2xl font-bold text-teal">
                        ${budgetEstimate.lodging.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-light-gray rounded-full h-2">
                      <div
                        className="bg-teal h-2 rounded-full"
                        style={{ width: `${(budgetEstimate.lodging / budgetEstimate.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {((budgetEstimate.lodging / budgetEstimate.total) * 100).toFixed(1)}% of total
                    </p>
                  </div>

                  {/* Food */}
                  <div className="card p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">Food & Dining</h4>
                      <p className="text-2xl font-bold text-orange-500">
                        ${budgetEstimate.food.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-light-gray rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${(budgetEstimate.food / budgetEstimate.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {((budgetEstimate.food / budgetEstimate.total) * 100).toFixed(1)}% of total
                    </p>
                  </div>

                  {/* Activities */}
                  <div className="card p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">Activities & Entertainment</h4>
                      <p className="text-2xl font-bold text-emerald-500">
                        ${budgetEstimate.activities.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-light-gray rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${(budgetEstimate.activities / budgetEstimate.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {((budgetEstimate.activities / budgetEstimate.total) * 100).toFixed(1)}% of total
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-blue-50 border-l-4 border-ocean-blue p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">💡 Note:</span> This is a sample estimate using average pricing for {destination.name}.
                    Actual costs may vary based on travel dates, accommodations chosen, and personal spending habits.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-light-gray rounded-lg p-12 text-center">
                <DollarSign className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Fill in your trip details and click "Calculate Estimate" to see your budget breakdown
                </p>
              </div>
            )}
          </div>
        </div>
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
