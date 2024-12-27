import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { Footer } from './components/Footer';

const App = () => {
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
};

export default App;