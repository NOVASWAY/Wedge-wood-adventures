'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const gallery = [
    { id: 1, image: getImagePath('/elephants.jpg'), title: 'African Elephants', category: 'Wildlife', description: 'Majestic elephant herds roaming the savanna' },
    { id: 2, image: getImagePath('/lion-pride.jpg'), title: 'Majestic Lion Pride', category: 'Wildlife', description: 'A pride of lions in their natural habitat' },
    { id: 3, image: getImagePath('/flamingo-lake.jpg'), title: 'Pink Flamingos', category: 'Wildlife', description: 'Thousands of flamingos creating a surreal pink landscape' },
    { id: 4, image: getImagePath('/game-drive.jpg'), title: 'Game Drive Experience', category: 'Wildlife', description: 'Up close encounters with Kenya\'s magnificent wildlife' },
    { id: 5, image: getImagePath('/Game-drive.jpeg'), title: 'Safari Game Drive', category: 'Wildlife', description: 'Expert-guided wildlife viewing in the heart of Africa' },
    { id: 6, image: getImagePath('/Maasai-mara.jpeg'), title: 'Lion Feeding - Masai Mara', category: 'Wildlife', description: 'A lioness feeding in the wild, captured during a game drive' },
    { id: 7, image: getImagePath('/Amboseli.jpeg'), title: 'Amboseli National Park', category: 'Landscapes', description: 'Elephant herds with Mount Kilimanjaro in the background' },
    { id: 8, image: getImagePath('/kilimanjaro.jpg'), title: 'Mount Kilimanjaro', category: 'Landscapes', description: 'Africa\'s highest peak bathed in golden morning light' },
    { id: 9, image: getImagePath('/tsavo.jpg'), title: 'Tsavo National Parks', category: 'Landscapes', description: 'Vast untamed wilderness with red elephants' },
    { id: 10, image: getImagePath('/safari-hero.jpg'), title: 'African Safari Landscape', category: 'Landscapes', description: 'The breathtaking beauty of Kenya\'s wilderness' },
    { id: 11, image: getImagePath('/maasai-culture.jpg'), title: 'Maasai Warriors', category: 'Culture', description: 'Authentic cultural immersion with the Maasai people' },
    { id: 12, image: getImagePath('/safari-camp.jpg'), title: 'Luxury Safari Camp', category: 'Accommodation', description: 'Ultra-premium camps offering comfort in the wild' },
  ];

  const nextImage = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % gallery.length);
    }
  }, [selectedIdx, gallery.length]);

  const prevImage = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + gallery.length) % gallery.length);
    }
  }, [selectedIdx, gallery.length]);

  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'Escape') setSelectedIdx(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIdx, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-24 sm:py-32 lg:py-40 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Our World</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Experience Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the extraordinary moments our guests have experienced across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {gallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 ${
                idx === 0 || idx === 6 ? 'md:col-span-2 md:row-span-2 h-64 sm:h-80' : 'h-40 sm:h-48'
              }`}
            >
              <Image 
                src={item.image || getImagePath("/placeholder.svg")}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-sm sm:text-base">{item.title}</h3>
                <p className="text-white/60 text-xs uppercase tracking-wider">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedIdx !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 text-white/70 hover:text-white transition-colors p-2 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="text-center max-w-3xl w-full">
              <div className="relative w-full aspect-[4/3] rounded-xl mb-4 overflow-hidden">
                <Image 
                  src={gallery[selectedIdx].image || getImagePath("/placeholder.svg")}
                  alt={gallery[selectedIdx].title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-white text-xl font-semibold">{gallery[selectedIdx].title}</h3>
                <p className="text-white/50 text-xs uppercase tracking-wider">{gallery[selectedIdx].category}</p>
                {gallery[selectedIdx].description && (
                  <p className="text-white/70 text-sm mt-2">{gallery[selectedIdx].description}</p>
                )}
              </div>

              <div className="mt-4 text-white/40 text-sm">
                {selectedIdx + 1} / {gallery.length}
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 text-white/70 hover:text-white transition-colors p-2 z-10"
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
