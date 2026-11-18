'use client';

import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

const journeyPromises = [
  'Designed around your interests',
  'Private guiding, at your pace',
  'Kenya’s iconic parks and quieter corners',
  'Thoughtfully chosen stays in the wild',
];

const About = () => {
  return (
    <section id="about" className="bg-card py-20 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-14">
        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-[3px] bg-muted">
            <Image
              src={getImagePath('/elephants.jpg')}
              alt="A family of elephants moving together through the Kenyan savannah"
              fill
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="object-cover object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 right-0 max-w-[17rem] border border-border/70 bg-background/95 p-5 shadow-lg backdrop-blur-sm sm:right-5 sm:p-6">
            <p className="font-serif text-xl leading-snug text-foreground sm:text-2xl">
              A little less itinerary. A lot more feeling.
            </p>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              The Wedgewood way
            </p>
          </div>
        </div>

        <div className="pt-4 lg:pl-4">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            A Kenyan point of view
          </p>
          <h2 className="max-w-xl font-serif text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-foreground text-balance sm:text-5xl lg:text-[58px]">
            The wild is the reason. You are the story.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Kenya is more than a destination. It&apos;s the pause before sunrise, the tracks in the dust, and the freedom to stay a little longer when the moment is right. We build private journeys around the things you want to feel, see, and remember.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Planned from Nairobi and shaped with expert guides, each safari brings together the right places, people, and pace for you—from the wide-open Mara to the foothills of Kilimanjaro.
          </p>

          <ul className="mt-8 grid gap-x-7 gap-y-4 sm:grid-cols-2">
            {journeyPromises.map((promise) => (
              <li key={promise} className="flex items-start gap-3 text-sm leading-6 text-foreground/85">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check aria-hidden="true" className="size-3" />
                </span>
                {promise}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-9 inline-flex min-h-12 items-center gap-3 border-b border-primary pb-1 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Get to know us
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
