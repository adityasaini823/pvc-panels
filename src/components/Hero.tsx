
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
    title: 'Premium PVC Solutions',
    description: 'Transform your space with our high-end PVC panel installations'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80',
    title: 'Modern Commercial Spaces',
    description: 'Professional PVC solutions for your business environment'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    title: 'Elegant Interiors',
    description: 'Create stunning spaces with our premium PVC panels'
  }
];

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
                <div className="container mx-auto px-4 h-full flex items-center">
                  <div className="text-white max-w-2xl">
                    <h1 className="text-5xl font-bold mb-4 animate-fade-in">{slide.title}</h1>
                    <p className="text-xl mb-8 text-gray-200">{slide.description}</p>
                    <a
                      href="#contact"
                      className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg inline-block transition duration-300 shadow-lg hover:shadow-xl"
                    >
                      Get a Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};