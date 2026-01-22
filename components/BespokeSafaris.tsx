'use client';

import React from "react"

import { useState } from 'react';
import { ChevronRight, Calendar, Users, MapPin } from 'lucide-react';

const BespokeSafaris = () => {
  const [formData, setFormData] = useState({
    dates: '',
    groupSize: '',
    interests: '',
    name: '',
    email: '',
    phone: '',
    luxuryLevel: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `*Bespoke Safari Inquiry*\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Travel Dates: ${formData.dates || 'Flexible'}\n` +
      `Group Size: ${formData.groupSize}\n` +
      `Luxury Level: ${formData.luxuryLevel}\n` +
      `Interests: ${formData.interests}`;

    const whatsappUrl = `https://wa.me/254748132915?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        dates: '',
        groupSize: '',
        interests: '',
        name: '',
        email: '',
        phone: '',
        luxuryLevel: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="bespoke" className="py-24 sm:py-32 md:py-40 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-18 md:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Design Your Journey</span>
          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
            Create Your Bespoke Safari
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Begin your journey toward an unforgettable African experience. Tell us about your dreams, and we'll craft the perfect itinerary.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8 md:space-y-10">
            {/* Quick Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              <div className="space-y-3">
                <label className="flex items-center text-xs sm:text-sm font-semibold text-foreground">
                  <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2 text-accent" />
                  Travel Dates
                </label>
                <input
                  type="text"
                  name="dates"
                  placeholder="e.g., July 2026 or flexible"
                  value={formData.dates || ''}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-foreground">
                  <Users className="h-4 w-4 mr-2 text-accent" />
                  Group Size
                </label>
                <select
                  name="groupSize"
                  value={formData.groupSize || ''}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                >
                  <option value="">Select group size</option>
                  <option value="1-2">1-2 people</option>
                  <option value="3-4">3-4 people</option>
                  <option value="5-6">5-6 people</option>
                  <option value="7+">7+ people</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-accent" />
                  Luxury Level
                </label>
                <select
                  name="luxuryLevel"
                  value={formData.luxuryLevel || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                >
                  <option value="">Select preference</option>
                  <option value="ultra">Ultra-Luxury</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground block">
                What interests you most?
              </label>
              <textarea
                name="interests"
                placeholder="Wildlife photography, cultural immersion, adventure sports, relaxation, etc..."
                value={formData.interests || ''}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
              />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground block">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground block">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 sm:py-4 bg-primary text-primary-foreground text-sm sm:text-base font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Submitting...' : 'Get Your Personalized Proposal'}
              {!isSubmitting && <ChevronRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />}
            </button>

          </form>
          {submitSuccess && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-sm text-green-800 dark:text-green-200 text-center">
                ✓ Thank you! Your inquiry has been sent. We'll contact you within 24 hours.
              </p>
            </div>
          )}
          <p className="text-center text-xs sm:text-sm text-foreground/60 mt-4 sm:mt-6">
            Our concierge will review your preferences and contact you within 24 hours with bespoke options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BespokeSafaris;
