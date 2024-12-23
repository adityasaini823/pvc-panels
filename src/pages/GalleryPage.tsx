import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CategorySlider } from '../components/gallery/CategorySlider';
import { GalleryNav } from '../components/gallery/GalleryNav';
import { galleryData, GalleryCategory } from '../data/galleryData';

export const GalleryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const categories = Object.values(galleryData);
  
  // Type guard to check if category is valid
  const isValidCategory = (cat: string | undefined): cat is GalleryCategory => {
    return cat !== undefined && cat in galleryData;
  };

  useEffect(() => {
    // Redirect to default category if invalid
    if (!category || !isValidCategory(category)) {
      navigate('/gallery/ceiling', { replace: true });
      return;
    }

    // Only scroll if category exists and is valid
    if (isValidCategory(category)) {
      const element = document.getElementById(galleryData[category].title.toLowerCase().replace(/\s+/g, '-'));
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [category, navigate]);

  // Early return with loading state if no valid category
  if (!category || !isValidCategory(category)) {
    return <div className="min-h-screen bg-gray-50 pt-16">Loading...</div>;
  }

  const currentCategory = galleryData[category];

  return (
    <>
      <Helmet>
        <title>{currentCategory.title} - PVC Solutions Gallery</title>
        <meta 
          name="description" 
          content={`View our ${currentCategory.title.toLowerCase()} portfolio including images and videos of our work`}
        />
      </Helmet>
      <main className="min-h-screen bg-gray-50">
        <div className="pt-16">
          <GalleryNav 
            categories={categories}
            activeCategory={category}
          />
          <div 
            className="container mx-auto px-4 py-12"
            role="region"
            aria-label="Gallery content"
          >
            {categories.map((categoryData) => (
              <CategorySlider
                key={categoryData.type}
                category={categoryData}
                isActive={category === categoryData.type}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};