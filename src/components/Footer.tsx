'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <p className="mb-2">© {currentYear} Travel Inspiration Planner. All rights reserved.</p>
        <p className="text-gray-400">Explore. Discover. Plan. Travel.</p>
      </div>
    </footer>
  )
}
