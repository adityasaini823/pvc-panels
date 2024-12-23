import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { CategoryData } from '../../types/gallery';
import { GalleryItem } from './GalleryItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CategorySliderProps {
  category: CategoryData;
  isActive: boolean;
}

export const CategorySlider = ({ category, isActive }: CategorySliderProps) => {
  const sectionId = category.title.toLowerCase().replace(/\s+/g, '-');

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
      <div className="relative">
        {/* Custom Navigation Buttons */}
        <button
          className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-none text-white p-3 rounded-full shadow-md  transition"
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-none text-white p-3 rounded-full shadow-md transition"
          aria-label="Next slide"
        >
          &#8250;
        </button>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{
            clickable: true,
            bulletElement: 'button',
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