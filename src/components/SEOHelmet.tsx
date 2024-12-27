import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export const SEOHelmet = ({ 
  title, 
  description, 
  keywords = "PVC panels, wall panels, ceiling designs, interior solutions",
  ogImage = "/images/pvc-panel-image.webp"
}: SEOHelmetProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};