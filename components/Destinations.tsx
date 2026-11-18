'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { getImagePath, scrollToSection } from '@/lib/utils';

const Destinations = () => {
  const destinations = [
    {
      image: getImagePath('/Maasai-mara.jpeg'),
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
    {
      image: getImagePath('/tanzania-serengeti.png'),
      alt: 'Elephants crossing the Serengeti plains at golden hour',
      name: 'Tanzania',
      tagline: 'Serengeti & Ngorongoro',
      description: 'Track the Great Migration across the Serengeti, explore the wildlife-rich Ngorongoro Crater, and unwind in intimate camps beneath vast African skies.',
      highlights: ['Great Migration', 'Ngorongoro Crater', 'Big Five', 'Tented Camps'],
    },
    {
      image: getImagePath('/rwanda-volcanoes.png'),
      alt: 'Mountain gorillas in Rwanda’s misty highland forest',
      name: 'Rwanda',
      tagline: 'Land of a Thousand Hills',
      description: 'Trek with expert guides in Volcanoes National Park to see mountain gorillas, then slow down in the Nyungwe rainforest or along Lake Kivu.',
      highlights: ['Gorilla Treks', 'Volcanoes National Park', 'Nyungwe Forest', 'Lake Kivu'],
    },
    {
      image: getImagePath('/uganda-murchison-falls.png'),
      alt: 'The Victoria Nile plunging through Murchison Falls in Uganda',
      name: 'Uganda',
      tagline: 'Pearl of Africa',
      description: 'Pair gorilla trekking in Bwindi with game drives in Queen Elizabeth National Park and the thundering Nile at Murchison Falls.',
      highlights: ['Bwindi Gorillas', 'Murchison Falls', 'Queen Elizabeth Park', 'Nile Safaris'],
    },
  ];

  return (
    <section id="destinations" className="py-24 sm:py-32 lg:py-40 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Explore</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Premium Destinations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Each destination offers unique wildlife, landscapes, and cultural experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className={`group bg-background border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${idx === destinations.length - 1 && destinations.length % 2 === 1 ? 'md:col-span-2 md:w-1/2 md:justify-self-center' : ''}`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={dest.image || getImagePath("/placeholder.svg")}
                  alt={'alt' in dest && dest.alt ? dest.alt : dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-foreground mb-1">
                  {dest.name}
                </h3>
                <p className="text-xs sm:text-sm text-accent font-semibold mb-4">
                  {dest.tagline}
                </p>

                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-5">
                  {dest.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {dest.highlights.map((highlight, hidx) => (
                    <div key={hidx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground/70">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => scrollToSection('#bespoke')}
                  className="inline-flex items-center text-accent group/btn font-semibold hover:text-primary transition-colors"
                >
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
