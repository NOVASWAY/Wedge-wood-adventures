import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Wedgewood Adventures Kenya - Luxury Safari Experiences',
    template: '%s | Wedgewood Adventures Kenya',
  },
  description: 'Experience ultra-premium, bespoke African safari experiences in Kenya. Private guided safaris, luxury lodges, and authentic cultural immersion. Venture beyond the horizon with Wedgewood Adventures Kenya.',
  keywords: [
    'Kenya safari',
    'luxury safari',
    'African safari',
    'Masai Mara',
    'Amboseli',
    'Tsavo',
    'Lake Nakuru',
    'bespoke safari',
    'private safari',
    'luxury travel Kenya',
    'safari tours',
    'wildlife photography',
    'Great Migration',
    'Big Five',
  ],
  authors: [{ name: 'Wedgewood Adventures Kenya' }],
  creator: 'Wedgewood Adventures Kenya',
  publisher: 'Wedgewood Adventures Kenya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://novasway.github.io/Wedge-wood-adventures/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://novasway.github.io/Wedge-wood-adventures/',
    siteName: 'Wedgewood Adventures Kenya',
    title: 'Wedgewood Adventures Kenya - Luxury Safari Experiences',
    description: 'Experience ultra-premium, bespoke African safari experiences. Venture beyond the horizon with Wedgewood Adventures Kenya.',
    images: [
      {
        url: '/Wedge-wood-adventures/safari-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'African Safari Landscape - Wedgewood Adventures Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedgewood Adventures Kenya - Luxury Safari Experiences',
    description: 'Experience ultra-premium, bespoke African safari experiences. Venture beyond the horizon with Wedgewood Adventures Kenya.',
    images: ['/Wedge-wood-adventures/safari-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/Wedge-wood-adventures/logo.png',
      },
    ],
    apple: '/Wedge-wood-adventures/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Wedgewood Adventures Kenya',
    description: 'Luxury safari experiences in Kenya offering bespoke African safari adventures',
    url: 'https://novasway.github.io/Wedge-wood-adventures/',
    logo: 'https://novasway.github.io/Wedge-wood-adventures/logo.png',
    image: 'https://novasway.github.io/Wedge-wood-adventures/safari-hero.jpg',
    telephone: '+254748132915',
    email: 'wedgewoodadventuresafaris@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    priceRange: '$$$',
    sameAs: [
      'https://wa.me/254748132915',
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Security Headers via Meta Tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
