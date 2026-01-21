'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Bespoke Safaris', href: '#bespoke' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center z-10">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
              <Image 
                src="/logo.png" 
                alt="Wedgewood Adventures Kenya" 
                width={50}
                height={50}
                className="h-10 w-10 sm:h-12 sm:w-auto object-contain drop-shadow-lg"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 hover:bg-accent/10 rounded-md cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('#bespoke')}
              className="inline-flex items-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200 hover:shadow-lg"
            >
              Request a Safari
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                    setIsOpen(false);
                  }}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-accent/10 active:bg-accent/20 transition-colors cursor-pointer min-h-[44px] flex items-center"
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={() => {
                  scrollToSection('#bespoke');
                  setIsOpen(false);
                }}
                className="w-full mt-4 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 active:bg-primary/80 transition-colors flex items-center justify-center min-h-[48px]"
              >
                Request a Safari
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
