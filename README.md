# Travel Inspiration Planner

A responsive web application that helps travelers discover destinations, organize ideas, and generate personalized trip plans using AI.

## Features

- **Destination Discovery** - Browse and search from 8 curated destinations with detailed information
- **Smart Filtering** - Filter by region, budget level, and climate preference
- **AI Recommendations** - Get personalized destination recommendations based on travel preferences
- **Destination Comparison** - Compare up to 4 destinations side-by-side
- **Budget Estimator** - Calculate trip costs with detailed category breakdown
- **Trip Collections** - Save and organize destinations into custom collections
- **Responsive Design** - Fully responsive layout for desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── explore/
│   │   └── page.tsx         # Destination exploration page
│   ├── planner/
│   │   └── page.tsx         # AI recommendations planner
│   ├── compare/
│   │   └── page.tsx         # Destination comparison tool
│   ├── budget/
│   │   └── page.tsx         # Budget estimator
│   ├── trips/
│   │   └── page.tsx         # Trip collections
│   └── profile/
│       └── page.tsx         # User profile
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero section with search
│   ├── DestinationCard.tsx  # Destination card component
│   └── DestinationCarousel.tsx  # Scrollable carousel
└── data/
    └── destinations.ts      # Mock destination data
```

## Pages

### Home (`/`)
- Hero section with search
- Trending destinations carousel
- AI recommendations panel
- Travel inspiration gallery
- Feature highlights

### Explore (`/explore`)
- Browse all destinations
- Filter by region, budget, and climate
- Search functionality
- Save destinations

### AI Planner (`/planner`)
- Preference questionnaire
- AI-powered recommendations
- Personalized destination suggestions

### Compare (`/compare`)
- Select up to 4 destinations
- Side-by-side comparison
- Budget, climate, activities comparison
- Popularity and flight difficulty ratings

### Budget (`/budget`)
- Trip cost estimator
- Category breakdown (flights, lodging, food, activities)
- Per-person cost calculation
- Visual budget breakdown

### Trips (`/trips`)
- Save destination collections
- Organize by trip type
- Future enhancement: full collection management

### Profile (`/profile`)
- User preferences
- Travel style settings
- Budget preferences
- Quick navigation links

## Color Palette

- **Ocean Blue**: #0052A3
- **Teal**: #14A696
- **Sunset Orange**: #FF6B35
- **Light Gray**: #F5F5F5
- **White**: #FFFFFF

## Design Features

- Modern, aspirational aesthetic
- Large, high-quality photography
- Rounded cards with soft shadows
- Strong visual hierarchy
- Spacious, mobile-first layout
- WCAG compliant color contrast
- Keyboard navigation support
- Semantic HTML

## Sample Data

The application includes 8 sample destinations:
- Tokyo, Japan
- Lisbon, Portugal
- Reykjavik, Iceland
- Costa Rica
- Vancouver, Canada
- Cape Town, South Africa
- Sydney, Australia
- Prague, Czech Republic

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- User authentication and profiles
- Real API integration for destinations
- Save collections to database
- Itinerary generation with AI
- Real-time hotel/flight pricing
- User reviews and ratings
- Social sharing features
- Wishlist functionality

## License

This project is open source and available under the MIT License.

## Support

For questions or feedback, please refer to the project documentation or create an issue in the repository.
