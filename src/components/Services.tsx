
import {  Home, Factory, Warehouse, Blinds, Component, BrickWallIcon} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Component className="w-12 h-12 text-primary" />,
      title: 'Wallpapers',
      image: '/images/wallpapers.jpeg',
      description: 'Stylish and durable wall wallpapers that add personality and charm to any room, available in a variety of designs and textures.'
    },
    {
      icon: <Home className="w-12 h-12 text-secondary" />,
      title: 'Kitchen Panels',
      image: '/images/kitchen.webp',
      description: 'Modern PVC kitchen panels that are hygienic, easy to clean, and designed to withstand the demands of a busy cooking environment.'
    },
    {
      icon: <Blinds className="w-12 h-12 text-tertiary" />,
      title: 'Window Blinds',
      image: '/images/blinds.jpg',
      description: 'Customizable and functional window blinds that enhance privacy, light control, and aesthetics for any space.'
    },
    {
      icon: <Factory className="w-12 h-12 text-tertiary" />,
      title: 'Commercial Spaces',
      image: '/images/commerical-office.jpg',
      description: 'Professional-grade PVC installations tailored for offices, retail stores, and other commercial spaces, combining durability and style.'
    },
    {
      icon: <Warehouse className="w-12 h-12 text-accent" />,
      title: 'Studio Rooms',
      image: '/images/studio.webp',
      description: 'Specialized PVC panels designed for studio rooms, offering sound insulation and a sleek, modern appearance.'
    },
    {
      icon: <BrickWallIcon className="w-12 h-12 text-tertiary" />,
      title: 'WPC Panels',
      image: '/images/wpc-panels.jpg', 
      description: 'High-quality Wood Plastic Composite panels that offer a blend of wood fibers and plastic, providing durability, low maintenance, and a modern aesthetic for various interior applications.'
    }
  ];
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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