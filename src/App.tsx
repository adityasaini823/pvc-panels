import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WorkGallery } from './components/WorkGallery';
import { VideoSection } from './components/VideoSection';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GalleryPage } from './pages/GalleryPage';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WorkGallery />
      <VideoSection />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/:category" element={<GalleryPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;