import React from 'react';
import { SEOHelmet } from '../components/SEOHelmet';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { WorkGallery } from '../components/WorkGallery';
import { VideoSection } from '../components/VideoSection';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export const HomePage = () => {
  return (
    <>
      <SEOHelmet 
        title="PVC Solutions - Premium PVC Panel Installation Services"
        description="Transform your space with our high-quality PVC panel installations. Offering professional services for homes, offices, and commercial spaces."
      />
      <Hero />
      <About />
      <Services />
      <WorkGallery />
      <VideoSection />
      <Testimonials />
      <Contact />
    </>
  );
};