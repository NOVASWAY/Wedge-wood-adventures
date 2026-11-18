'use client';

import { ChevronRight, Compass, Mountain, TreePine } from 'lucide-react';
import Image from 'next/image';
import { getImagePath, scrollToSection } from '@/lib/utils';

const Experiences = () => {
  const experiences = [
    {
      image: getImagePath('/game-drive.jpg'),
      icon: Compass,
      title: 'Private Guided Safaris',
      description: 'Intimate wildlife encounters with expert naturalists who share deep knowledge of Kenya\'s ecosystems. Track lions, elephants, and leopards across pristine landscapes.',
    },
    {
      image: getImagePath('/kilimanjaro.jpg'),
      icon: Mountain,
      title: 'Mountain Adventures',
      description: 'Summit Mount Kenya or trek through highland wilderness. Adventure designed for thrill-seekers with expert mountaineering guides and luxury base camps.',
    },
    {
      image: getImagePath('/safari-camp.jpg'),
      icon: Compass,
      title: 'Luxury Lodge Experiences',
      description: 'Stay in ultra-premium camps with gourmet dining under African stars. Wake to wildlife outside your tent and experience unparalleled comfort in the wild.',
    },
    {
      image: getImagePath('/maasai-culture.jpg'),
      icon: TreePine,
      title: 'Cultural Immersion',
      description: 'Connect with Maasai warriors, learn traditional crafts, and experience authentic African heritage. Meaningful encounters that bridge cultures with respect.',
    },
  ];

  return (
    <section id="experiences" className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Our Offerings</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Luxury Safari Experiences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Discover curated adventures designed for those who demand the finest in African exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={exp.image || getImagePath("/placeholder.svg")}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-11 h-11 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                    {exp.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <button 
                    onClick={() => scrollToSection('#bespoke')}
                    className="inline-flex items-center text-accent hover:text-primary font-semibold transition-colors group/btn"
                  >
                    Customize This Experience
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
