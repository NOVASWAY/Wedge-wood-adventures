'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

const navItems = [
  { label: 'Our story', href: '#about' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Moments', href: '#gallery' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTone = isScrolled
    ? 'text-foreground/75 hover:text-primary'
    : 'text-white/85 hover:text-white';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-border/70 bg-background/95 shadow-sm backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <a href="#home" aria-label="Wedgewood Adventures Kenya home" className="flex shrink-0 items-center gap-3">
          <Image
            src={getImagePath('/logo.png')}
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-sm object-contain"
          />
          <span className={`flex flex-col text-[10px] font-semibold uppercase leading-[1.35] tracking-[0.2em] ${isScrolled ? 'text-foreground' : 'text-white'}`}>
            Wedgewood
            <span className={`font-normal tracking-[0.24em] ${isScrolled ? 'text-muted-foreground' : 'text-white/65'}`}>
              Adventures Kenya
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`py-2 text-xs font-medium transition-colors ${navTone}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#bespoke"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Plan your safari
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className={`inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
        >
          {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        hidden={!isOpen}
        className="border-t border-border bg-background px-5 pb-6 pt-3 shadow-xl backdrop-blur-sm lg:hidden"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-border/70 py-3.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#bespoke"
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            onClick={() => setIsOpen(false)}
          >
            Plan your safari
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
