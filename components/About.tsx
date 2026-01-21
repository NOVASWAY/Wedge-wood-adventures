'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/elephants.jpg"
              alt="African Elephants - Wedgewood Adventures Kenya"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-serif font-bold text-foreground">
                Crafted for Discerning Explorers
              </h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Wedgewood Adventures Kenya offers unparalleled access to Africa's most pristine wilderness. Our expert guides bring decades of naturalist experience, tracking wildlife with precision and sharing deep knowledge of Kenya's ecosystems. Every safari is crafted for your unique desires.
            </p>

            <p className="text-foreground/70 leading-relaxed">
              From the thundering herds of the Great Migration to intimate encounters with the Big Five, from Maasai cultural immersion to mountain adventures—we transform extraordinary landscapes into unforgettable personal journeys. Our concierge service handles every detail so you experience pure wilderness wonder.
            </p>

            <div className="space-y-3 pt-4">
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
              className="mt-6 sm:mt-8 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 active:bg-primary/80 transition-colors min-h-[48px] w-full sm:w-auto justify-center"
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
