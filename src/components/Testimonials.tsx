
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Restaurant Owner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    text: 'The PVC panels installed in our kitchen have been a game-changer. Easy to clean and maintain!'
  },
  {
    name: 'Sarah Johnson',
    role: 'Hotel Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    text: 'Excellent service and professional installation. Our bathrooms look amazing!'
  },
  {
    name: 'Mike Wilson',
    role: 'Factory Owner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    text: 'The industrial panels they installed meet all our hygiene requirements. Highly recommended!'
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>
                <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};