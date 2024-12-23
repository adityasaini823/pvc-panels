import React from 'react';
import { Droplets, Home, Factory, Warehouse } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Droplets className="w-12 h-12 text-primary" />,
      title: 'Wet Room Installation',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
      description: 'Complete waterproof solutions for bathrooms and wet rooms with seamless PVC panel installation.'
    },
    {
      icon: <Home className="w-12 h-12 text-secondary" />,
      title: 'Kitchen Panels',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
      description: 'Hygienic and easy-to-clean PVC panels perfect for modern kitchen environments.'
    },
    {
      icon: <Factory className="w-12 h-12 text-tertiary" />,
      title: 'Commercial Spaces',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
      description: 'Industrial-grade PVC installations for commercial kitchens and food preparation areas.'
    },
    {
      icon: <Warehouse className="w-12 h-12 text-accent" />,
      title: 'Cold Storage',
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80',
      description: 'Specialized PVC panels for freezer rooms and cold storage facilities.'
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
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};