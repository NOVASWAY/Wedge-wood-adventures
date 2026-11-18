'use client';

import { ArrowDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

const journeyNotes = [
  'Planned in Nairobi',
  'Private, expert guiding',
  'Always at your pace',
];

const Hero = () => {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-[#25271d]">
      <Image
        src={getImagePath('/safari-hero.jpg')}
        alt="Golden evening light over Kenya’s open savannah"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-black/75 via-black/35 to-black/5" />
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-end px-5 pb-8 pt-32 sm:px-8 sm:pb-10 lg:px-14 lg:pb-12">
        <div className="flex w-full items-end justify-between gap-10">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 sm:text-xs">
              <span className="h-px w-9 bg-accent" />
              Wedgewood Adventures · Nairobi, Kenya
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-white text-balance sm:text-6xl md:text-7xl lg:text-[88px]">
              Kenya, at your own pace.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Private safari journeys shaped around the way you want to travel—from first light on the Mara to evenings beneath an open sky.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#bespoke"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Shape your safari
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href="#destinations"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/45 px-6 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore Kenya
              </a>
            </div>
          </div>

          <p className="mb-2 hidden max-w-48 text-right font-serif text-xl italic leading-snug text-white/85 xl:block">
            The best moments are never on a schedule.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/30 pt-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/80 sm:text-xs">
            {journeyNotes.map((note) => (
              <li key={note} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
                {note}
              </li>
            ))}
          </ul>
          <a
            href="#about"
            className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white sm:inline-flex"
          >
            Discover Wedgewood
            <ArrowDown aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
