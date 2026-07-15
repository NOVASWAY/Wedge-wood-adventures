'use client';

import { ChevronRight, Eye, Crown, MapPin } from 'lucide-react';
import Image from 'next/image';
import { getImagePath, scrollToSection } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      <Image 
        src={getImagePath("/safari-hero.jpg")} 
        alt="African Safari Landscape"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl z-[1]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 sm:mb-8 leading-tight text-balance drop-shadow-lg animate-fade-in-up">
          Venture Beyond the Horizon
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 sm:mb-14 max-w-2xl mx-auto leading-relaxed text-pretty drop-shadow-md animate-fade-in-up animation-delay-200">
          Immerse yourself in Africa&apos;s untamed wilderness. Ultra-premium, bespoke safaris where every moment becomes an unforgettable memory etched in your soul.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
          <button 
            onClick={() => scrollToSection('#bespoke')}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-black text-base font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Start Your Adventure
            <ChevronRight className="ml-3 h-5 w-5" />
          </button>
          
          <button 
            onClick={() => scrollToSection('#experiences')}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white hover:border-white hover:bg-white/10 rounded-lg transition-all duration-300 font-semibold"
          >
            Explore Experiences
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 sm:mt-24 animate-fade-in-up animation-delay-500">
          {[
            { icon: Eye, title: 'Expert Guides', desc: 'Naturalists with decades of safari expertise' },
            { icon: MapPin, title: 'Exclusive Access', desc: 'Private reserves and intimate wildlife moments' },
            { icon: Crown, title: 'Complete Luxury', desc: 'First-class camps and personalized service' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="group space-y-4 bg-black/30 backdrop-blur-sm rounded-lg p-6 hover:bg-black/40 transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <div 
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/60 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    style={{ animation: `pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite ${idx * 0.3}s` }}
                  >
                    <Icon className="w-7 h-7 text-black group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="font-semibold text-white text-base">{item.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-7 h-11 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
