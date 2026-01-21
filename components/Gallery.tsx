'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const gallery = [
    { id: 1, image: '/masai-mara.jpg', title: 'Great Migration - Masai Mara', category: 'Landscapes' },
    { id: 2, image: '/elephants.jpg', title: 'African Elephants', category: 'Wildlife' },
    { id: 3, image: '/maasai-culture.jpg', title: 'Maasai Warriors', category: 'Culture' },
    { id: 4, image: '/lion-pride.jpg', title: 'Majestic Lion Pride', category: 'Wildlife' },
    { id: 5, image: '/kilimanjaro.jpg', title: 'Mount Kilimanjaro at Sunrise', category: 'Landscapes' },
    { id: 6, image: '/flamingo-lake.jpg', title: 'Pink Flamingos - Lake Nakuru', category: 'Wildlife' },
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
    <section id="gallery" className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">Our World</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground">
            Experience Gallery
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            A glimpse into the extraordinary moments our guests have experienced across Kenya.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <Image 
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
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
                  src={gallery[selectedIdx].image || "/placeholder.svg"}
                  alt={gallery[selectedIdx].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-white text-2xl font-semibold">{gallery[selectedIdx].title}</h3>
                <p className="text-white/60 text-sm">{gallery[selectedIdx].category}</p>
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
