'use client';

import { ChevronRight, Eye, Crown, MapPin, Binary as Binoculars, Compass } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28">
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

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 sm:mb-8 leading-tight text-balance drop-shadow-lg">
          Venture Beyond the Horizon
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-10 sm:mb-16 max-w-2xl mx-auto leading-relaxed text-pretty drop-shadow-md">
          Immerse yourself in Africa's untamed wilderness. Ultra-premium, bespoke safaris where every moment becomes an unforgettable memory etched in your soul.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center w-full sm:w-auto mb-10 sm:mb-14">
          <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-black text-base sm:text-lg font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-2xl hover:scale-105 drop-shadow-lg w-full sm:w-auto">
            Start Your Adventure
            <ChevronRight className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5" />
          </button>
          
          <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/50 text-white hover:border-white hover:bg-white/10 rounded-lg transition-all duration-300 font-semibold drop-shadow-md w-full sm:w-auto">
            Explore Experiences
          </button>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mt-16 sm:mt-20 md:mt-24">
          {[
            { icon: Eye, title: 'Expert Guides', desc: 'Naturalists with decades of safari expertise' },
            { icon: MapPin, title: 'Exclusive Access', desc: 'Private reserves and intimate wildlife moments' },
            { icon: Crown, title: 'Complete Luxury', desc: 'First-class camps and personalized service' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="group space-y-3 sm:space-y-4 bg-black/30 backdrop-blur-sm rounded-lg p-5 sm:p-7 hover:bg-black/40 transition-all duration-300 hover:scale-105"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards`
                }}
              >
                <div className="relative">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-accent to-accent/60 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                    style={{
                      animation: `pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite ${idx * 0.3}s`
                    }}>
                    <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-black group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div 
                    className="absolute inset-0 rounded-full bg-accent/20"
                    style={{
                      animation: `ping 2s cubic-bezier(0, 0, 0.2, 1) infinite ${idx * 0.3}s`
                    }}
                  />
                </div>
                <h3 className="font-semibold text-white text-base sm:text-lg">{item.title}</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{item.desc}</p>
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
