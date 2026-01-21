'use client';

import { ChevronRight, Compass, Mountain, Users, TreePine } from 'lucide-react';
import Image from 'next/image';

const Experiences = () => {
  const experiences = [
    {
      image: '/game-drive.jpg',
      icon: Compass,
      title: 'Private Guided Safaris',
      description: 'Intimate wildlife encounters with expert naturalists who share deep knowledge of Kenya\'s ecosystems. Track lions, elephants, and leopards across pristine landscapes.',
      cta: 'Customize This Experience',
    },
    {
      image: '/kilimanjaro.jpg',
      icon: Mountain,
      title: 'Mountain Adventures',
      description: 'Summit Mount Kenya or trek through highland wilderness. Adventure designed for thrill-seekers with expert mountaineering guides and luxury base camps.',
      cta: 'Customize This Experience',
    },
    {
      image: '/safari-camp.jpg',
      icon: Compass,
      title: 'Luxury Lodge Experiences',
      description: 'Stay in ultra-premium camps with gourmet dining under African stars. Wake to wildlife outside your tent and experience unparalleled comfort in the wild.',
      cta: 'Customize This Experience',
    },
    {
      image: '/maasai-culture.jpg',
      icon: TreePine,
      title: 'Cultural Immersion',
      description: 'Connect with Maasai warriors, learn traditional crafts, and experience authentic African heritage. Meaningful encounters that bridge cultures with respect and authenticity.',
      cta: 'Customize This Experience',
    },
  ];

  return (
    <section id="experiences" className="py-24 sm:py-32 md:py-40 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-18 md:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Our Offerings</span>
          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
            Luxury Safari Experiences
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Discover curated adventures designed for those who demand the finest in African exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 md:gap-10">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image container */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image 
                    src={exp.image || "/placeholder.svg"}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 sm:w-12 h-10 sm:h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="h-5 sm:h-6 w-5 sm:w-6 text-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-semibold text-foreground mb-4 sm:mb-4">
                    {exp.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6 sm:mb-8">
                    {exp.description}
                  </p>

                  <button className="inline-flex items-center text-accent hover:text-primary font-semibold transition-colors group/btn">
                    {exp.cta}
                    <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
