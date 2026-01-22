'use client';

import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { sanitizeInput, validateEmail, validateName, checkRateLimit } from '@/lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string; rateLimit?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Sanitize input in real-time
    const sanitized = name === 'message' ? sanitizeInput(value, 2000) : sanitizeInput(value, 200);
    
    setFormData({
      ...formData,
      [name]: sanitized,
    });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limit first
    const rateLimitCheck = checkRateLimit('contact');
    if (!rateLimitCheck.allowed) {
      setErrors({
        rateLimit: `Too many submissions. Please wait ${rateLimitCheck.remainingTime} minute${rateLimitCheck.remainingTime !== 1 ? 's' : ''} before trying again.`
      });
      return;
    }
    
    // Validate inputs
    const newErrors: { name?: string; email?: string; message?: string; rateLimit?: string } = {};
    
    if (!validateName(formData.name)) {
      newErrors.name = 'Please enter a valid name (2-100 characters)';
    }
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 2000) {
      newErrors.message = 'Message is too long (max 2000 characters)';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});

    // Sanitize all inputs before creating message
    const sanitizedName = sanitizeInput(formData.name, 200);
    const sanitizedEmail = sanitizeInput(formData.email, 254);
    const sanitizedMessage = sanitizeInput(formData.message, 2000);

    // Create WhatsApp message
    const message = `*Quick Inquiry*\n\n` +
      `Name: ${sanitizedName}\n` +
      `Email: ${sanitizedEmail}\n` +
      `Message: ${sanitizedMessage}`;

    const whatsappUrl = `https://wa.me/254748132915?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };
  return (
    <section id="contact" className="py-24 sm:py-32 md:py-40 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-18 md:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Get in Touch</span>
          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
            Begin Your Journey
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Our concierge team is ready to craft your bespoke safari experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16">
          {/* Contact Info */}
          <div className="space-y-7 sm:space-y-9">
            <div className="flex gap-4 sm:gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-accent/20">
                  <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">Direct Phone</h3>
                <p className="text-sm sm:text-base text-foreground/70">+254 748 132 915</p>
                <p className="text-xs sm:text-sm text-foreground/60">Mon-Sat, 8am-6pm EAT</p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-accent/20">
                  <Mail className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">Email Concierge</h3>
                <p className="text-sm sm:text-base text-foreground/70 break-all">wedgewoodadventuresafaris@gmail.com</p>
                <p className="text-xs sm:text-sm text-foreground/60">Response within 2 hours</p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-accent/20">
                  <MessageCircle className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">WhatsApp</h3>
                <p className="text-sm sm:text-base text-foreground/70">+254 748 132 915</p>
                <p className="text-xs sm:text-sm text-foreground/60">Instant messaging support</p>
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
            <div className="space-y-4 pt-8 sm:pt-10">
              <a
                href="https://wa.me/254748132915"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 sm:py-4 bg-green-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              
              <a
                href="tel:+254748132915"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 sm:py-4 border-2 border-primary text-primary text-sm sm:text-base font-semibold rounded-lg hover:bg-primary/5 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-background border border-border rounded-xl p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-8 sm:mb-10">
              Quick Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  className={`w-full px-4 py-2.5 sm:py-3 text-sm rounded-lg border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 transition ${
                    errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-border focus:ring-accent/50'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  required
                  maxLength={254}
                  className={`w-full px-4 py-2.5 sm:py-3 text-sm rounded-lg border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 transition ${
                    errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-border focus:ring-accent/50'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message || ''}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={2000}
                  className={`w-full px-4 py-2.5 sm:py-3 text-sm rounded-lg border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 resize-none transition ${
                    errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-border focus:ring-accent/50'
                  }`}
                  placeholder="Tell us about your safari dreams..."
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
                <p className="text-xs text-foreground/60 mt-1">
                  {formData.message.length}/2000 characters
                </p>
              </div>

              {errors.rateLimit && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-sm text-red-800 dark:text-red-200 text-center">
                    ⚠ {errors.rateLimit}
                  </p>
                </div>
              )}

              {submitSuccess && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200 text-center">
                    ✓ Thank you! Your inquiry has been sent. We'll respond within 2 hours.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-4 text-sm sm:text-base bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                {!isSubmitting && <ChevronRight className="ml-2 h-4 w-4" />}
              </button>
            </form>

            <p className="text-xs text-foreground/60 mt-6 sm:mt-8 text-center">
              We respect your privacy. Your information is secure with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
