'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Destinations = () => {
  const destinations = [
    {
      image: '/masai-mara.jpg',
      name: 'Masai Mara',
      tagline: 'Kenya\'s Crown Jewel',
      description: 'Witness the legendary Great Migration. Encounter the Big Five roaming vast golden plains, and experience Africa\'s most spectacular wildlife theater.',
      highlights: ['Big Five Wildlife', 'Great Migration', 'River Crossings', 'Exclusive Camps'],
    },
    {
      image: '/kilimanjaro.jpg',
      name: 'Amboseli National Park',
      tagline: 'Gateway to Kilimanjaro',
      description: 'Marvel at Mount Kilimanjaro\'s snow-capped peaks while watching elephant herds roam. Pristine landscapes with intimate cultural encounters.',
      highlights: ['Kilimanjaro Views', 'Elephant Herds', 'Maasai Culture', 'Pristine Landscape'],
    },
    {
      image: '/tsavo.jpg',
      name: 'Tsavo National Parks',
      tagline: 'The Land of Giants',
      description: 'Africa\'s largest park system. Remote, untamed wilderness where red elephants roam volcanic landscapes. Exclusive luxury in genuine wilderness.',
      highlights: ['Red Elephants', 'Remote Luxury', 'Untamed Wild', 'Hidden Lodges'],
    },
    {
      image: '/flamingo-lake.jpg',
      name: 'Lake Nakuru',
      tagline: 'Flamingo Paradise',
      description: 'Thousands of pink flamingos create a surreal landscape. Rhino sanctuary and rare bird species in a unique soda lake ecosystem.',
      highlights: ['Flamingos', 'Rhino Sanctuary', 'Bird Paradise', 'Scenic Beauty'],
    },
  ];

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">Explore</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground">
            Premium Destinations
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Each destination offers unique wildlife, landscapes, and cultural experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="group relative bg-background border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image header */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
              </div>

              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                  {dest.name}
                </h3>
                <p className="text-sm text-accent font-semibold mb-4">
                  {dest.tagline}
                </p>

                <p className="text-foreground/70 leading-relaxed mb-6">
                  {dest.description}
                </p>

                <div className="space-y-2 mb-6">
                  {dest.highlights.map((highlight, hidx) => (
                    <div key={hidx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-foreground/70">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center text-accent group/btn font-semibold hover:text-primary transition-colors">
                  Explore Destination
                  <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
