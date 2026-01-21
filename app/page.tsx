'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, MapPin, Users, Calendar, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experiences from '@/components/Experiences';
import Destinations from '@/components/Destinations';
import BespokeSafaris from '@/components/BespokeSafaris';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experiences />
      <Destinations />
      <BespokeSafaris />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
