export interface Destination {
  id: string
  name: string
  country: string
  continent: string
  image: string
  description: string
  budgetLevel: 'budget' | 'moderate' | 'luxury'
  climate: string
  bestSeason: string
  activities: string[]
  highlights: string[]
  flightDifficulty: number
  popularity: number
  estimatedDuration: number
  travelTips: string[]
}

export interface TripCollection {
  id: string
  name: string
  destinations: string[]
  notes?: string
}

export interface UserProfile {
  travelStyle: string
  budgetPreference: 'budget' | 'moderate' | 'luxury'
  interests: string[]
  climatePreference: string
}

export interface Itinerary {
  destination: string
  days: DayItinerary[]
}

export interface DayItinerary {
  day: number
  morning: string
  afternoon: string
  evening: string
}

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9c1?w=800&h=600&fit=crop',
    description: 'A vibrant metropolis blending tradition and technology, from ancient temples to neon-lit streets.',
    budgetLevel: 'moderate',
    climate: 'Temperate',
    bestSeason: 'Spring (March-May), Fall (September-November)',
    activities: ['Temple visits', 'Shopping', 'Dining', 'Gaming arcades', 'Hiking'],
    highlights: ['Senso-ji Temple', 'Shibuya Crossing', 'Tokyo Tower', 'Imperial Palace'],
    flightDifficulty: 3,
    popularity: 5,
    estimatedDuration: 5,
    travelTips: ['Visit during cherry blossom season for stunning scenery', 'Get a Suica card for easy transportation']
  },
  {
    id: '2',
    name: 'Lisbon',
    country: 'Portugal',
    continent: 'Europe',
    image: 'https://images.unsplash.com/photo-1517804185116-758a5f707b3e?w=800&h=600&fit=crop',
    description: 'A charming coastal city with colorful tiles, historic neighborhoods, and delicious food scene.',
    budgetLevel: 'budget',
    climate: 'Mediterranean',
    bestSeason: 'Spring (April-May), Fall (September-October)',
    activities: ['Walking tours', 'Food tasting', 'Beach visits', 'Fado music', 'Museum visits'],
    highlights: ['Belém Tower', 'Jeronimos Monastery', 'Sintra', 'Cascais coast'],
    flightDifficulty: 1,
    popularity: 4,
    estimatedDuration: 4,
    travelTips: ['Buy a Lisbon Card for public transport and museum discounts', 'Explore Sintra as a day trip']
  },
  {
    id: '3',
    name: 'Reykjavik',
    country: 'Iceland',
    continent: 'Europe',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    description: 'Arctic adventure destination known for waterfalls, glaciers, and the Northern Lights.',
    budgetLevel: 'luxury',
    climate: 'Subarctic',
    bestSeason: 'Winter (September-March) for Northern Lights, Summer (June-August) for midnight sun',
    activities: ['Northern Light hunting', 'Glacier hiking', 'Hot spring soaking', 'Waterfall tours', 'Ice cave exploration'],
    highlights: ['Blue Lagoon', 'Gullfoss Waterfall', 'Vatnajökull Glacier', 'Golden Circle route'],
    flightDifficulty: 2,
    popularity: 4,
    estimatedDuration: 4,
    travelTips: ['Rent a car to explore the countryside', 'Book tours in advance during peak season']
  },
  {
    id: '4',
    name: 'Costa Rica',
    country: 'Costa Rica',
    continent: 'Central America',
    image: 'https://images.unsplash.com/photo-1489493072403-c55db19ce446?w=800&h=600&fit=crop',
    description: 'A biodiverse paradise with rainforests, beaches, and adventure activities.',
    budgetLevel: 'moderate',
    climate: 'Tropical',
    bestSeason: 'December-April (dry season)',
    activities: ['Zip-lining', 'Rainforest tours', 'Beach relaxation', 'Wildlife watching', 'Volcano hikes'],
    highlights: ['Arenal Volcano', 'Manuel Antonio National Park', 'Monteverde Cloud Forest', 'Caribbean beaches'],
    flightDifficulty: 2,
    popularity: 4,
    estimatedDuration: 5,
    travelTips: ['Learn basic Spanish phrases', 'Visit during dry season for better weather']
  },
  {
    id: '5',
    name: 'Vancouver',
    country: 'Canada',
    continent: 'North America',
    image: 'https://images.unsplash.com/photo-1517676712202-14dd9538aa97?w=800&h=600&fit=crop',
    description: 'A stunning West Coast city surrounded by mountains and ocean with a vibrant cultural scene.',
    budgetLevel: 'moderate',
    climate: 'Temperate oceanic',
    bestSeason: 'Summer (June-September)',
    activities: ['Mountain biking', 'Skiing', 'Beach walks', 'Food tours', 'Museum visits'],
    highlights: ['Stanley Park', 'Capilano Suspension Bridge', 'Gastown', 'Whistler Blackcomb'],
    flightDifficulty: 1,
    popularity: 4,
    estimatedDuration: 4,
    travelTips: ['Get a SkyTrain pass for easy city transportation', 'Visit in summer for best weather']
  },
  {
    id: '6',
    name: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
    description: 'A vibrant coastal city with Table Mountain, diverse culture, and stunning natural beauty.',
    budgetLevel: 'moderate',
    climate: 'Mediterranean',
    bestSeason: 'November-March (summer)',
    activities: ['Table Mountain hike', 'Beach visits', 'Wine tasting', 'Township tours', 'Shark diving'],
    highlights: ['Table Mountain', 'Cape Point', 'Winelands', 'Robben Island'],
    flightDifficulty: 3,
    popularity: 4,
    estimatedDuration: 5,
    travelTips: ['Visit Winelands for world-class wines', 'Take the Hop-on Hop-off bus for city exploration']
  },
  {
    id: '7',
    name: 'Sydney',
    country: 'Australia',
    continent: 'Oceania',
    image: 'https://images.unsplash.com/photo-1506973404872-a4a80e01a18d?w=800&h=600&fit=crop',
    description: 'An iconic harbor city known for the Opera House, beautiful beaches, and cosmopolitan culture.',
    budgetLevel: 'moderate',
    climate: 'Temperate',
    bestSeason: 'September-November (spring), February-April (autumn)',
    activities: ['Beach swimming', 'Opera shows', 'Coastal walks', 'Surfing', 'Harbor cruises'],
    highlights: ['Sydney Opera House', 'Bondi Beach', 'Blue Mountains', 'Taronga Zoo'],
    flightDifficulty: 4,
    popularity: 5,
    estimatedDuration: 5,
    travelTips: ['Take the scenic train to Blue Mountains', 'Visit Bondi Beach at sunrise']
  },
  {
    id: '8',
    name: 'Prague',
    country: 'Czech Republic',
    continent: 'Europe',
    image: 'https://images.unsplash.com/photo-1508252150967-347c1d0b5f50?w=800&h=600&fit=crop',
    description: 'A fairy-tale city with Gothic architecture, medieval bridges, and rich history.',
    budgetLevel: 'budget',
    climate: 'Temperate continental',
    bestSeason: 'April-May (spring), September-October (autumn)',
    activities: ['Castle tours', 'River cruises', 'Beer tasting', 'Walking tours', 'Museum visits'],
    highlights: ['Prague Castle', 'Charles Bridge', 'Old Town Square', 'St. Vitus Cathedral'],
    flightDifficulty: 2,
    popularity: 4,
    estimatedDuration: 3,
    travelTips: ['Watch the Astronomical Clock show', 'Explore Prague 5 for local vibes']
  }
]
