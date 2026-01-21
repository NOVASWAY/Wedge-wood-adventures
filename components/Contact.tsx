'use client';

import { MessageCircle, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">Get in Touch</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground">
            Begin Your Journey
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Our concierge team is ready to craft your bespoke safari experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Direct Phone</h3>
                <p className="text-foreground/70">+254 748 132 915</p>
                <p className="text-sm text-foreground/60">Mon-Sat, 8am-6pm EAT</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Email Concierge</h3>
                <p className="text-foreground/70">wedgewoodadventuresafaris@gmail.com</p>
                <p className="text-sm text-foreground/60">Response within 2 hours</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">WhatsApp</h3>
                <p className="text-foreground/70">+254 748 132 915</p>
                <p className="text-sm text-foreground/60">Instant messaging support</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Office</h3>
                <p className="text-foreground/70">Nairobi, Kenya</p>
                <p className="text-sm text-foreground/60">East Africa</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <a
                href="https://wa.me/254748132915"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              
              <a
                href="tel:+254748132915"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-background border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Quick Inquiry
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="Tell us about your safari dreams..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center hover:shadow-lg"
              >
                Send Inquiry
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </form>

            <p className="text-xs text-foreground/60 mt-4 text-center">
              We respect your privacy. Your information is secure with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
