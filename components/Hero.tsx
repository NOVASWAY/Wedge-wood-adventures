'use client';

import { ChevronRight, Eye, Crown, MapPin, Binary as Binoculars, Compass } from 'lucide-react';
import Image from 'next/image';
import { scrollToSection } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-14 sm:pt-16 md:pt-20">
      {/* Background image */}
      <Image 
        src="/safari-hero.jpg" 
        alt="African Safari Landscape"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />
      
      {/* Dark overlay for text readability - Stronger on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-5" />
      
      {/* Decorative elements with color priming - Reduced on mobile */}
      <div className="absolute top-20 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl z-1" />
      <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl z-1" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-12 sm:py-16 md:py-0">
        <div className="flex flex-col justify-center min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.2] text-balance drop-shadow-2xl">
              Venture Beyond the Horizon
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed text-pretty drop-shadow-lg">
              Immerse yourself in Africa's untamed wilderness. Ultra-premium, bespoke safaris where every moment becomes an unforgettable memory etched in your soul.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-2 sm:pt-0">
              <button 
                onClick={() => scrollToSection('#bespoke')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-accent text-black text-base sm:text-lg font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-2xl active:scale-95 drop-shadow-lg min-h-[52px] w-full sm:w-auto"
              >
                Start Your Adventure
                <ChevronRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              <button 
                onClick={() => scrollToSection('#experiences')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/60 text-white hover:border-white hover:bg-white/10 rounded-lg transition-all duration-300 font-semibold drop-shadow-lg active:scale-95 min-h-[52px] w-full sm:w-auto"
              >
                Explore Experiences
              </button>
            </div>
          </div>
        </div>

        {/* Value Propositions - Completely hidden on mobile, shown on tablet and up */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
          {[
            { icon: Eye, title: 'Expert Guides', desc: 'Naturalists with decades of safari expertise' },
            { icon: MapPin, title: 'Exclusive Access', desc: 'Private reserves and intimate wildlife moments' },
            { icon: Crown, title: 'Complete Luxury', desc: 'First-class camps and personalized service' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="group space-y-2 sm:space-y-3 bg-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-black/40 transition-all duration-300 hover:scale-105"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards`
                }}
              >
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-accent to-accent/60 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                    style={{
                      animation: `pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite ${idx * 0.3}s`
                    }}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black group-hover:scale-110 transition-transform duration-300" />
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

      {/* Scroll indicator - Hidden on mobile to save space */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
