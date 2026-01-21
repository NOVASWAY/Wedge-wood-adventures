'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-card to-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Wedgewood Adventures Kenya" 
                width={40}
                height={40}
              />
              <div>
                <h2 className="font-serif font-bold text-foreground">Wedgewood</h2>
                <p className="text-xs text-foreground/60">Adventures Kenya</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Crafting unforgettable safari experiences for discerning travelers since 2022.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Explore</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Experiences', href: '#experiences' },
                { label: 'Destinations', href: '#destinations' },
                { label: 'Bespoke Safaris', href: '#bespoke' },
                { label: 'Gallery', href: '#gallery' }
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-foreground/70 hover:text-accent transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-foreground/70 hover:text-accent transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+254748132915" className="text-foreground/70 hover:text-accent transition-colors">
                  +254 748 132 915
                </a>
              </li>
              <li>
                <a href="mailto:wedgewoodadventuresafaris@gmail.com" className="text-foreground/70 hover:text-accent transition-colors">
                  wedgewoodadventuresafaris@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/254748132915" className="text-foreground/70 hover:text-accent transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="text-foreground/70">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-foreground/60 mb-4 sm:mb-0">
            © {currentYear} Wedgewood Adventures Kenya. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-sm text-foreground/60">
            Crafted with
            <Heart className="h-4 w-4 text-accent fill-accent" />
            for African exploration
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
