'use client';

import React from "react"

import { useState } from 'react';
import { format } from 'date-fns';
import { ChevronRight, Calendar as CalendarIcon, Users, MapPin } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const BespokeSafaris = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [dateInputMode, setDateInputMode] = useState<'calendar' | 'text'>('calendar');
  const [formData, setFormData] = useState({
    dates: '',
    groupSize: '',
    luxuryLevel: '',
    interests: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = format(date, 'MMMM yyyy');
      setFormData({
        ...formData,
        dates: formattedDate,
      });
    } else {
      setFormData({
        ...formData,
        dates: '',
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hello! I'm interested in a bespoke safari experience.

Preferred Dates: ${formData.dates || 'Flexible'}
Group Size: ${formData.groupSize || 'Not specified'}
Luxury Level: ${formData.luxuryLevel || 'Not specified'}
Interests: ${formData.interests || 'Not specified'}

Contact Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254748132915?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="bespoke" className="py-20 sm:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">Design Your Journey</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground">
            Create Your Bespoke Safari
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Begin your journey toward an unforgettable African experience. Tell us about your dreams, and we'll craft the perfect itinerary.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Quick Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm font-semibold text-foreground">
                    <CalendarIcon className="h-4 w-4 mr-2 text-accent" />
                    Preferred Dates
                  </label>
                  <button
                    type="button"
                    onClick={() => setDateInputMode(dateInputMode === 'calendar' ? 'text' : 'calendar')}
                    className="text-xs text-accent hover:text-primary transition-colors px-2 py-1 -mr-2 min-h-[32px] flex items-center"
                  >
                    {dateInputMode === 'calendar' ? 'Type' : 'Calendar'}
                  </button>
                </div>
                
                {dateInputMode === 'calendar' ? (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal px-4 py-3 h-auto",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                          <span>{format(selectedDate, 'MMMM yyyy')}</span>
                        ) : formData.dates ? (
                          <span>{formData.dates}</span>
                        ) : (
                          <span className="text-foreground/40">Select month or type</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-popover" align="start" sideOffset={4} alignOffset={0}>
                      <div className="p-2 sm:p-3">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={handleDateSelect}
                          defaultMonth={selectedDate || new Date()}
                          fromYear={2024}
                          toYear={2030}
                          className="rounded-md border-0"
                          modifiersClassNames={{
                            selected: "bg-primary text-primary-foreground"
                          }}
                        />
                      </div>
                      <div className="p-3 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-2">Or type manually:</p>
                        <input
                          type="text"
                          name="dates"
                          placeholder="e.g., July 2026 or flexible"
                          value={formData.dates}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm rounded-md border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[40px]"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <input
                    type="text"
                    name="dates"
                    placeholder="e.g., July 2026 or flexible"
                    value={formData.dates}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                  />
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-foreground">
                  <Users className="h-4 w-4 mr-2 text-accent" />
                  Group Size
                </label>
                <select
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
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
                value={formData.interests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
              />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
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
                  value={formData.email}
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
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 active:bg-primary/80 transition-all duration-300 flex items-center justify-center hover:shadow-xl active:scale-95 min-h-[48px] text-base sm:text-lg"
            >
              Get Your Personalized Proposal
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </form>

          <p className="text-center text-sm text-foreground/60 mt-6">
            Our concierge will review your preferences and contact you within 24 hours with bespoke options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BespokeSafaris;
