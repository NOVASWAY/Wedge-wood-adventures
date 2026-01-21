'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

const Destinations = () => {
  const destinations = [
    {
      image: getImagePath('/masai-mara.jpg'),
      name: 'Masai Mara',
      tagline: 'Kenya\'s Crown Jewel',
      description: 'Witness the legendary Great Migration. Encounter the Big Five roaming vast golden plains, and experience Africa\'s most spectacular wildlife theater.',
      highlights: ['Big Five Wildlife', 'Great Migration', 'River Crossings', 'Exclusive Camps'],
    },
    {
      image: getImagePath('/kilimanjaro.jpg'),
      name: 'Amboseli National Park',
      tagline: 'Gateway to Kilimanjaro',
      description: 'Marvel at Mount Kilimanjaro\'s snow-capped peaks while watching elephant herds roam. Pristine landscapes with intimate cultural encounters.',
      highlights: ['Kilimanjaro Views', 'Elephant Herds', 'Maasai Culture', 'Pristine Landscape'],
    },
    {
      image: getImagePath('/tsavo.jpg'),
      name: 'Tsavo National Parks',
      tagline: 'The Land of Giants',
      description: 'Africa\'s largest park system. Remote, untamed wilderness where red elephants roam volcanic landscapes. Exclusive luxury in genuine wilderness.',
      highlights: ['Red Elephants', 'Remote Luxury', 'Untamed Wild', 'Hidden Lodges'],
    },
    {
      image: getImagePath('/flamingo-lake.jpg'),
      name: 'Lake Nakuru',
      tagline: 'Flamingo Paradise',
      description: 'Thousands of pink flamingos create a surreal landscape. Rhino sanctuary and rare bird species in a unique soda lake ecosystem.',
      highlights: ['Flamingos', 'Rhino Sanctuary', 'Bird Paradise', 'Scenic Beauty'],
    },
  ];

  return (
    <section id="destinations" className="py-24 sm:py-32 md:py-40 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-18 md:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Explore</span>
          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
            Premium Destinations
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Each destination offers unique wildlife, landscapes, and cultural experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 md:gap-10">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="group relative bg-background border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image header */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={dest.image || getImagePath("/placeholder.svg")}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
              </div>

              <div className="p-6 sm:p-8 relative z-10">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2 sm:mb-3">
                  {dest.name}
                </h3>
                <p className="text-xs sm:text-sm text-accent font-semibold mb-5 sm:mb-6">
                  {dest.tagline}
                </p>

                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6 sm:mb-8">
                  {dest.description}
                </p>

                <div className="space-y-3 mb-6 sm:mb-8">
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
