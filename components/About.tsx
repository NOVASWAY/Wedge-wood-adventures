'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { getImagePath, scrollToSection } from '@/lib/utils';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-80 sm:h-[480px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={getImagePath("/elephants.jpg")}
              alt="African Elephants - Wedgewood Adventures Kenya"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="space-y-6">
            <div>
              <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                Crafted for Discerning Explorers
              </h2>
            </div>

            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              Wedgewood Adventures Kenya offers unparalleled access to Africa&apos;s most pristine wilderness. Our expert guides bring decades of naturalist experience, tracking wildlife with precision and sharing deep knowledge of Kenya&apos;s ecosystems. Every safari is crafted for your unique desires.
            </p>

            <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
              From the thundering herds of the Great Migration to intimate encounters with the Big Five, from Maasai cultural immersion to mountain adventures—we transform extraordinary landscapes into unforgettable personal journeys.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                'Expert naturalist guides',
                'Exclusive private reserves',
                'Luxury wilderness camps',
                'Personalized concierge',
                'Wildlife photography',
                'Cultural immersion',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('#contact')}
              className="mt-6 inline-flex items-center px-6 py-3.5 text-sm bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
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
