'use client'

import { Destination } from '@/data/destinations'
import { Heart, MapPin, DollarSign } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface DestinationCardProps {
  destination: Destination
  onSave?: (id: string) => void
  isSaved?: boolean
}

export default function DestinationCard({ destination, onSave, isSaved = false }: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const budgetDisplay = {
    budget: '$ Budget-Friendly',
    moderate: '$$ Moderate',
    luxury: '$$$ Luxury'
  }

  return (
    <div
      className="card overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-200">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onSave?.(destination.id)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isSaved ? 'bg-sunset-orange text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          aria-label={isSaved ? 'Remove from saved' : 'Save destination'}
        >
          <Heart className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-ocean-blue">{destination.name}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{destination.country}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{destination.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-block bg-light-gray text-xs px-2 py-1 rounded text-gray-700">
            {destination.climate}
          </span>
          <span className="inline-block bg-light-gray text-xs px-2 py-1 rounded text-gray-700">
            {destination.bestSeason.split('(')[0].trim()}
          </span>
        </div>

        {/* Budget */}
        <div className="flex items-center gap-1 text-sm font-semibold text-sunset-orange">
          <DollarSign className="w-4 h-4" />
          <span>{budgetDisplay[destination.budgetLevel]}</span>
        </div>
      </div>
    </div>
  )
}
