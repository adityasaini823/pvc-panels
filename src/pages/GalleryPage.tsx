import { useEffect, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SEOHelmet } from '../components/SEOHelmet';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { CategorySlider } from '../components/gallery/CategorySlider';
import { GalleryNav } from '../components/gallery/GalleryNav';
import { galleryData } from '../data/galleryData';

// Define GalleryCategory as a union of string literals
export type GalleryCategory = 'ceiling' | 'kitchen' | 'walls' | 'tiles' | 'tv-units';

export const GalleryPage = () => {
  // Explicitly type the `category` parameter as `string | undefined`
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const categories = Object.values(galleryData);

  // Type predicate to check if the category is valid
  const isValidCategory = (cat: string | undefined): cat is GalleryCategory => {
    return cat !== undefined && cat in galleryData;
  };

  useEffect(() => {
    if (!category || !isValidCategory(category)) {
      navigate('/gallery/ceiling', { replace: true });
      return;
    }

    if (isValidCategory(category)) {
      const element = document.getElementById(galleryData[category].title.toLowerCase().replace(/\s+/g, '-'));
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [category, navigate]);

  if (!category || !isValidCategory(category)) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <LoadingSpinner />
      </div>
    );
  }

  const currentCategory = galleryData[category];

  return (
    <>
      <SEOHelmet 
        title={`${currentCategory.title} - PVC Solutions Gallery`}
        description={`View our ${currentCategory.title.toLowerCase()} portfolio showcasing our professional PVC panel installations and designs.`}
        keywords={`${currentCategory.title.toLowerCase()}, PVC panels, interior design, home improvement`}
      />
      <main className="min-h-screen bg-gray-50">
        <div className="pt-16">
          <GalleryNav 
            categories={categories}
            activeCategory={category}
          />
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>
        </div>
      </main>
    </>
  );
};