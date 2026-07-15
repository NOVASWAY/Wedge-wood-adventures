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
    <section id="testimonials" className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Voices</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Guest Testimonials
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Hear from travelers who have experienced the Wedgewood difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <div className="border-t border-border pt-5">
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-foreground/50">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 lg:mt-28 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 border border-border rounded-xl p-8 lg:p-12 text-center">
          <p className="text-sm text-foreground/60 mb-8">
            Join discerning travelers who trust Wedgewood Adventures for their most precious journeys.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <span className="font-bold text-foreground text-2xl lg:text-3xl block">500+</span>
              <span className="text-xs text-foreground/50">Happy Guests</span>
            </div>
            <div>
              <span className="font-bold text-foreground text-2xl lg:text-3xl block">50+</span>
              <span className="text-xs text-foreground/50">Destinations</span>
            </div>
            <div>
              <span className="font-bold text-foreground text-2xl lg:text-3xl block">100%</span>
              <span className="text-xs text-foreground/50">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
