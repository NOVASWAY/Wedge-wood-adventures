'use client';

import { ChevronRight, Eye, Crown, MapPin, Binary as Binoculars, Compass } from 'lucide-react';
import Image from 'next/image';
import { scrollToSection } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <Image 
        src="/safari-hero.jpg" 
        alt="African Safari Landscape"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-5" />
      
      {/* Decorative elements with color priming */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl z-1" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl z-1" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight text-balance drop-shadow-lg">
          Venture Beyond the Horizon
        </h1>
        
        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty drop-shadow-md">
          Immerse yourself in Africa's untamed wilderness. Ultra-premium, bespoke safaris where every moment becomes an unforgettable memory etched in your soul.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('#bespoke')}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-black text-lg font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-2xl hover:scale-105 drop-shadow-lg"
          >
            Start Your Adventure
            <ChevronRight className="ml-3 h-5 w-5" />
          </button>
          
          <button 
            onClick={() => scrollToSection('#experiences')}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white hover:border-white hover:bg-white/10 rounded-lg transition-all duration-300 font-semibold drop-shadow-md"
          >
            Explore Experiences
          </button>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">
          {[
            { icon: Eye, title: 'Expert Guides', desc: 'Naturalists with decades of safari expertise' },
            { icon: MapPin, title: 'Exclusive Access', desc: 'Private reserves and intimate wildlife moments' },
            { icon: Crown, title: 'Complete Luxury', desc: 'First-class camps and personalized service' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="group space-y-3 bg-black/30 backdrop-blur-sm rounded-lg p-6 hover:bg-black/40 transition-all duration-300 hover:scale-105"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards`
                }}
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/60 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                    style={{
                      animation: `pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite ${idx * 0.3}s`
                    }}>
                    <Icon className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div 
                    className="absolute inset-0 rounded-full bg-accent/20"
                    style={{
                      animation: `ping 2s cubic-bezier(0, 0, 0.2, 1) infinite ${idx * 0.3}s`
                    }}
                  />
                </div>
                <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(230, 181, 65, 0.7);
            }
            50% {
              box-shadow: 0 0 0 10px rgba(230, 181, 65, 0);
            }
          }
          
          @keyframes ping {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }
        `}</style>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
