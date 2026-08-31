import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Travel Inspiration Planner',
  description: 'Discover destinations and build unforgettable journeys',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}
