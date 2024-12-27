import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { CategoryData } from '../../types/gallery';
import { GalleryItem } from './GalleryItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CategorySliderProps {
  category: CategoryData;
  isActive: boolean;
}

export const CategorySlider = ({ category, isActive }: CategorySliderProps) => {
  const sectionId = category.title.toLowerCase().replace(/\s+/g, '-');
  const prevButtonClass = `${sectionId}-prev`;
  const nextButtonClass = `${sectionId}-next`;

  return (
    <section
      className={`mb-16 ${isActive ? 'scroll-mt-24' : ''}`}
      id={sectionId}
      aria-labelledby={`${sectionId}-title`}
    >
      <h2
        id={`${sectionId}-title`}
        className={`text-3xl font-bold mb-8 ${isActive ? 'text-primary' : 'text-gray-900'}`}
      >
        {category.title}
      </h2>
      <div className="relative group">
        {/* Navigation Buttons */}
        <button
          className={`${prevButtonClass} absolute left-4 top-1/2 transform -translate-y-1/2 z-10 
            w-10 h-10 flex items-center justify-center rounded-full
            bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200
            text-gray-700 hover:bg-white hover:text-primary
            transition-all duration-300 opacity-0 group-hover:opacity-100
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className={`${nextButtonClass} absolute right-4 top-1/2 transform -translate-y-1/2 z-10
            w-10 h-10 flex items-center justify-center rounded-full
            bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200
            text-gray-700 hover:bg-white hover:text-primary
            transition-all duration-300 opacity-0 group-hover:opacity-100
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation={{
            prevEl: `.${prevButtonClass}`,
            nextEl: `.${nextButtonClass}`,
          }}
          pagination={{
            clickable: true,
            bulletElement: 'button',
            bulletClass: 'swiper-pagination-bullet !w-2 !h-2 !bg-gray-300 !opacity-70',
            bulletActiveClass: '!bg-primary !opacity-100',
            renderBullet: (index, className) => {
              return `<button class="${className}" aria-label="Go to slide ${index + 1}"></button>`;
            },
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="rounded-lg overflow-hidden shadow-xl"
          a11y={{
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
          }}
        >
          {category.content.map((item, index) => (
            <SwiperSlide key={index}>
              <GalleryItem item={item} title={category.title} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};