'use client';

import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Wedgewood Adventures transformed our safari experience into something truly transcendent. Every detail was meticulously planned, and the team's discretion was impeccable.",
      author: 'Margaret & James',
      location: 'London, UK',
      rating: 5,
    },
    {
      text: "We've traveled to Africa before, but never with this level of luxury and personal attention. The guides were experts, the lodges were exceptional, and the entire experience felt bespoke.",
      author: 'Sophia',
      location: 'New York, USA',
      rating: 5,
    },
    {
      text: "The seamless coordination from start to finish, combined with intimate wildlife encounters and cultural immersion, made this an unforgettable journey. Highly recommended.",
      author: 'David & Isabella',
      location: 'Dubai, UAE',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 md:py-40 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-18 md:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Voices</span>
          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
            Guest Testimonials
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Hear from travelers who have experienced the Wedgewood difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8 md:gap-10">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Star rating */}
              <div className="flex gap-1.5 mb-5 sm:mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 sm:mb-8 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author info */}
              <div className="border-t border-border pt-5 sm:pt-6">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs sm:text-sm text-foreground/60">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 sm:mt-24 md:mt-28 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 border border-border rounded-xl p-8 sm:p-10 md:p-12 text-center">
          <p className="text-xs sm:text-sm text-foreground/70 mb-8 sm:mb-10">
            Join discerning travelers who trust Wedgewood Adventures for their most precious journeys.
          </p>
          <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm text-foreground/60">
            <div>
              <span className="font-semibold text-foreground text-lg sm:text-2xl block">500+</span>
              <span>Happy Guests</span>
            </div>
            <div>
              <span className="font-semibold text-foreground text-lg sm:text-2xl block">50+</span>
              <span>Destinations</span>
            </div>
            <div>
              <span className="font-semibold text-foreground text-lg sm:text-2xl block">100%</span>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
