import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')

  if (!query) {
    return NextResponse.json({ error: 'Query parameter required' }, { status: 400 })
  }

  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY

  if (!accessKey) {
    return NextResponse.json({ error: 'Unsplash API key not configured' }, { status: 500 })
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${accessKey}`
    )

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.results || data.results.length === 0) {
      return NextResponse.json({ error: 'No photos found' }, { status: 404 })
    }

    const photo = data.results[0]
    const imageUrl = `${photo.urls.regular}?w=800&h=600&fit=crop`

    // Redirect to the actual Unsplash image URL
    return NextResponse.redirect(imageUrl, { status: 307 })
  } catch (error) {
    console.error('Unsplash API error:', error)
    return NextResponse.json({ error: 'Failed to fetch from Unsplash' }, { status: 500 })
  }
}
