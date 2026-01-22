'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { getImagePath, scrollToSection } from '@/lib/utils';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 md:py-40 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={getImagePath("/elephants.jpg")}
              alt="African Elephants - Wedgewood Adventures Kenya"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
          </div>

          {/* Content */}
          <div className="space-y-7 sm:space-y-8">
            <div>
              <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
              <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
                Crafted for Discerning Explorers
              </h2>
            </div>

            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              Wedgewood Adventures Kenya offers unparalleled access to Africa's most pristine wilderness. Our expert guides bring decades of naturalist experience, tracking wildlife with precision and sharing deep knowledge of Kenya's ecosystems. Every safari is crafted for your unique desires.
            </p>

            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              From the thundering herds of the Great Migration to intimate encounters with the Big Five, from Maasai cultural immersion to mountain adventures—we transform extraordinary landscapes into unforgettable personal journeys. Our concierge service handles every detail so you experience pure wilderness wonder.
            </p>

            <div className="space-y-4 pt-6 sm:pt-8">
              {[
                'Expert naturalist guides with decades of experience',
                'Exclusive private reserve access',
                'Luxury camps in pristine locations',
                'Complete personalized service & concierge',
                'Wildlife tracking & photographic expertise',
                'Authentic cultural experiences',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('#contact')}
              className="mt-10 sm:mt-12 inline-flex items-center px-6 py-3 sm:py-4 text-sm sm:text-base bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
