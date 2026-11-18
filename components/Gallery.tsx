'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const galleryItems = [
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-18%20at%2012.25.18-AC8SAfsEUpYj09a3RfwyR4SAosPvP9.jpeg',
    width: 1600,
    height: 576,
    title: 'A warm Wedgewood welcome',
    place: 'Leopard Beach · Mombasa',
    category: 'The journey begins',
    description: 'A first-day hello beside the safari vehicle, with the coast just beyond the garden.',
    alt: 'Safari guests meeting the Wedgewood guide beside their vehicle at Leopard Beach Resort',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-18%20at%2012.25.19-xYkZBobLuqBMeCT9ZzFcMIwoP0HES5.jpeg',
    width: 1600,
    height: 576,
    title: 'Into the Taita Hills',
    place: 'Taita Hills Wildlife Sanctuary',
    category: 'The road ahead',
    description: 'The last light of day settles over the lodge gates as the wild opens up ahead.',
    alt: 'Safari vehicle arriving at the illuminated Taita Hills and Salt Lick lodge entrance at dusk',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-18%20at%2012.25.21%20%281%29-a6yeB5AmgfTwSqgS5JVbnolSuFnwT4.jpeg',
    width: 576,
    height: 1600,
    title: 'A moment with the herd',
    place: 'Kenya’s open plains',
    category: 'Wild encounters',
    description: 'A quiet roadside pause with a family of elephants moving through the palms.',
    alt: 'A herd of elephants crossing an open plain beneath a clear blue sky',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-18%20at%2012.25.23-Y4fL7O2KT05MhtgijmEY99RvHMdZUF.jpeg',
    width: 1600,
    height: 576,
    title: 'The best journeys are shared',
    place: 'Nairobi · Kenya',
    category: 'Good company',
    description: 'New friends, a little luggage, and the promise of a few unforgettable days ahead.',
    alt: 'A group of safari travelers gathered with their bags beside the Wedgewood vehicle',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-18%20at%2012.25.22-WGrXOjpeN9KyybHkYs0YdxsegtLc9C.jpeg',
    width: 576,
    height: 1600,
    title: 'Eye to eye with the wild',
    place: 'Kenyan savannah',
    category: 'Wild encounters',
    description: 'A giraffe pauses in the tall grass, framed by the wide blue of an African sky.',
    alt: 'A giraffe standing in golden grass against a wide blue sky',
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = galleryItems[activeIndex];

  const showImage = (direction: number) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="overflow-hidden bg-card py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent sm:text-xs">Our world, in moments</span>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-tight tracking-[-0.025em] text-foreground sm:text-5xl">
              Experience Gallery
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              Small moments, unforgettable places, and the people who make every journey their own.
            </p>
          </div>
          <p className="shrink-0 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Guest stories · Kenya
          </p>
        </div>

        <div
          aria-label="Safari photo carousel"
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') {
              event.preventDefault();
              showImage(1);
            } else if (event.key === 'ArrowLeft') {
              event.preventDefault();
              showImage(-1);
            }
          }}
          className="overflow-hidden rounded-[24px] border border-border bg-background shadow-2xl sm:rounded-[30px]"
        >
          <div className="grid lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.8fr)]">
            <figure className={`relative flex ${activeItem.height > activeItem.width ? 'h-[clamp(24rem,48vw,34rem)]' : 'h-[clamp(12rem,26vw,22rem)]'} items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_#34402f_0%,_#20291f_52%,_#151a15_100%)] px-5 py-6 sm:px-10 sm:py-8`}>
              <span className="absolute left-5 top-5 z-10 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm sm:left-7 sm:top-7 sm:text-[10px]">
                Field note&nbsp; {String(activeIndex + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
              </span>
              <Image
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.alt}
                width={activeItem.width}
                height={activeItem.height}
                unoptimized
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="relative z-0 max-h-full max-w-full object-contain transition-opacity duration-300"
              />
              <figcaption className="sr-only">{activeItem.title}, {activeItem.place}</figcaption>
            </figure>

            <div className="flex flex-col justify-between gap-8 p-5 sm:p-8 lg:p-9">
              <div aria-live="polite" aria-atomic="true">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-[11px]">
                  {activeItem.category}
                </p>
                <h3 className="mt-4 max-w-sm font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
                  {activeItem.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-foreground/80">{activeItem.place}</p>
                <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                  {activeItem.description}
                </p>
              </div>

              <div>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {String(activeIndex + 1).padStart(2, '0')} <span className="text-foreground/30">/</span> {String(galleryItems.length).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Previous photo"
                      onClick={() => showImage(-1)}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <ArrowLeft aria-hidden="true" className="size-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next photo"
                      onClick={() => showImage(1)}
                      className="inline-flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </button>
                  </div>
                </div>
                <div aria-hidden="true" className="h-px bg-border">
                  <span
                    className="block h-full bg-accent transition-[width] duration-300"
                    style={{ width: `${((activeIndex + 1) / galleryItems.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border px-4 py-4 sm:px-7 sm:py-5">
            <div role="group" aria-label="Choose a safari photo" className="flex gap-3 overflow-x-auto pb-1">
              {galleryItems.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  aria-label={`Show photo ${index + 1}: ${item.title}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-[112px] shrink-0 flex-col gap-2 rounded-xl p-1 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-[132px] ${
                    index === activeIndex ? 'bg-accent/15' : 'hover:bg-muted'
                  }`}
                >
                  <span className="flex h-[62px] w-full items-center justify-center overflow-hidden rounded-lg bg-[#20291f] p-1.5">
                    <Image
                      src={item.image}
                      alt=""
                      width={item.width}
                      height={item.height}
                      unoptimized
                      className="max-h-full max-w-full object-contain"
                    />
                  </span>
                  <span className={`w-full truncate px-1 text-[10px] font-medium ${index === activeIndex ? 'text-accent' : 'text-muted-foreground group-hover:text-foreground'}`}>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
