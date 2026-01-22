'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';
import { getImagePath, scrollToSection } from '@/lib/utils';

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
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src={getImagePath("/logo.png")} 
              alt="Wedgewood Adventures Kenya" 
              width={40}
              height={40}
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 hover:bg-accent/10 rounded-md"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={() => scrollToSection('#bespoke')}
              className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-xs lg:text-sm hover:bg-primary/90 transition-colors duration-200 hover:shadow-lg"
            >
              Request a Safari
              <ChevronRight className="ml-2 h-3 lg:h-4 w-3 lg:w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-accent/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={() => {
                  scrollToSection('#bespoke');
                  setIsOpen(false);
                }}
                className="w-full mt-4 px-3 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors flex items-center justify-center"
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
