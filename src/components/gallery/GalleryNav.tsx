import React from 'react';
import { Link } from 'react-router-dom';

interface GalleryNavProps {
  categories: { title: string; type: string }[];
  activeCategory?: string;
}

export const GalleryNav = ({ categories, activeCategory }: GalleryNavProps) => {
  return (
    <nav 
      className="bg-white shadow-md sticky top-16 z-40"
      aria-label="Gallery categories"
    >
      <div className="container mx-auto px-4">
        <div 
          className="flex overflow-x-auto py-4 gap-4 no-scrollbar"
          role="tablist"
        >
          {categories.map((category) => (
            <Link
              key={category.type}
              to={`/gallery/${category.type}`}
              className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.type
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              role="tab"
              aria-selected={activeCategory === category.type}
              aria-controls={category.title.toLowerCase().replace(/\s+/g, '-')}
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};