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
    <section id="testimonials" className="py-20 sm:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">Voices</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground">
            Guest Testimonials
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear from travelers who have experienced the Wedgewood difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Star rating */}
              <div className="flex gap-1.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author info */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 border border-border rounded-xl p-6 sm:p-8 text-center">
          <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-3 px-2">
            Join discerning travelers who trust Wedgewood Adventures for their most precious journeys.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-foreground/60">
            <div>
              <span className="font-semibold text-foreground block text-lg">500+</span>
              <span>Happy Guests</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div>
              <span className="font-semibold text-foreground block text-lg">50+</span>
              <span>Destinations</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div>
              <span className="font-semibold text-foreground block text-lg">100%</span>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
