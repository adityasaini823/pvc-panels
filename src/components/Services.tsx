import React from 'react';
import { Droplets, Home, Factory, Warehouse, Blinds} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Droplets className="w-12 h-12 text-primary" />,
      title: 'Wallpapers',
      image: '',
      description: 'Complete waterproof solutions for bathrooms and wet rooms with seamless PVC panel installation.'
    },
    {
      icon: <Home className="w-12 h-12 text-secondary" />,
      title: 'Kitchen Panels',
      image: '/images/kitchen.webp',
      description: 'Hygienic and easy-to-clean PVC panels perfect for modern kitchen environments.'
    },
    {
      icon: <Factory className="w-12 h-12 text-tertiary" />,
      title: 'Window Blinds',
      image: '/images/blinds.jpg',
      description: 'Industrial-grade PVC installations for commercial kitchens and food preparation areas.'
    },
    {
      icon: <Blinds className="w-12 h-12 text-tertiary" />,
      title: 'Commercial Spaces',
      image: '/images/commerical-office.jpg',
      description: 'Industrial-grade PVC installations for commercial kitchens and food preparation areas.'
    },
    {
      icon: <Warehouse className="w-12 h-12 text-accent" />,
      title: 'Studio Rooms',
      image: '/images/studio.webp',
      description: 'Specialized PVC panels for Studio rooms.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className='flex content-center'>
                <div>{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 mt-2 text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};