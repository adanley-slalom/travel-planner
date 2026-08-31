import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const imageUrl = request.nextUrl.searchParams.get('url')

  if (!imageUrl) {
    return NextResponse.json({ error: 'URL parameter required' }, { status: 400 })
  }

  try {
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: response.status })
    }

    const contentType = response.headers.get('content-type')
    const buffer = await response.arrayBuffer()

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType || 'image/jpeg',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to proxy image' }, { status: 500 })
  }
}
