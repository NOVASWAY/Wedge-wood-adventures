'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const gallery = [
    // Wildlife
    { id: 1, image: getImagePath('/elephants.jpg'), title: 'African Elephants', category: 'Wildlife', description: 'Majestic elephant herds roaming the savanna' },
    { id: 2, image: getImagePath('/lion-pride.jpg'), title: 'Majestic Lion Pride', category: 'Wildlife', description: 'A pride of lions in their natural habitat' },
    { id: 3, image: getImagePath('/flamingo-lake.jpg'), title: 'Pink Flamingos - Lake Nakuru', category: 'Wildlife', description: 'Thousands of flamingos creating a surreal pink landscape' },
    { id: 4, image: getImagePath('/game-drive.jpg'), title: 'Game Drive Experience', category: 'Wildlife', description: 'Up close encounters with Kenya\'s magnificent wildlife' },
    { id: 5, image: getImagePath('/Game-drive.jpeg'), title: 'Safari Game Drive', category: 'Wildlife', description: 'Expert-guided wildlife viewing in the heart of Africa' },
    
    // Landscapes & Destinations
    { id: 6, image: getImagePath('/Maasai-mara.jpeg'), title: 'Lion Feeding - Masai Mara', category: 'Wildlife', description: 'A lioness feeding in the wild, captured during a game drive in Masai Mara' },
    { id: 7, image: getImagePath('/Amboseli.jpeg'), title: 'Amboseli National Park', category: 'Landscapes', description: 'Elephant herds with Mount Kilimanjaro in the background' },
    { id: 8, image: getImagePath('/kilimanjaro.jpg'), title: 'Mount Kilimanjaro at Sunrise', category: 'Landscapes', description: 'Africa\'s highest peak bathed in golden morning light' },
    { id: 9, image: getImagePath('/tsavo.jpg'), title: 'Tsavo National Parks', category: 'Landscapes', description: 'Vast untamed wilderness with red elephants and volcanic landscapes' },
    { id: 10, image: getImagePath('/safari-hero.jpg'), title: 'African Safari Landscape', category: 'Landscapes', description: 'The breathtaking beauty of Kenya\'s pristine wilderness' },
    
    // Culture
    { id: 11, image: getImagePath('/maasai-culture.jpg'), title: 'Maasai Warriors', category: 'Culture', description: 'Authentic cultural immersion with the Maasai people' },
    
    // Accommodation & Experiences
    { id: 12, image: getImagePath('/safari-camp.jpg'), title: 'Luxury Safari Camp', category: 'Accommodation', description: 'Ultra-premium camps offering comfort in the wild' },
  ];

  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 md:py-40 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-18 md:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Our World</span>
          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
            Experience Gallery
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the extraordinary moments our guests have experienced across Kenya.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {gallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <Image 
                src={item.image || getImagePath("/placeholder.svg")}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-white/70 text-xs uppercase tracking-wider mb-2">{item.category}</p>
                {item.description && (
                  <p className="text-white/90 text-sm line-clamp-2">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedIdx !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors p-2"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-accent transition-colors p-2 hidden sm:block"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="text-center max-w-2xl">
              <div className="relative w-full aspect-square rounded-xl mb-4 overflow-hidden">
                <Image 
                  src={gallery[selectedIdx].image || getImagePath("/placeholder.svg")}
                  alt={gallery[selectedIdx].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-white text-2xl font-semibold">{gallery[selectedIdx].title}</h3>
                <p className="text-white/60 text-sm uppercase tracking-wider">{gallery[selectedIdx].category}</p>
                {gallery[selectedIdx].description && (
                  <p className="text-white/80 text-base mt-2">{gallery[selectedIdx].description}</p>
                )}
              </div>

              <div className="mt-6 text-white/60 text-sm">
                {selectedIdx + 1} / {gallery.length}
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-accent transition-colors p-2 hidden sm:block"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
