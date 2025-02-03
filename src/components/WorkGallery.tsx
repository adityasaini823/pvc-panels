
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    title: 'Ceiling Designs',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    type: 'ceiling'
  },
  {
    title: 'Kitchen Designs',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
    type: 'kitchen'
  },
  {
    title: 'Wall Panels',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
    type: 'walls'
  },
  {
    title: 'PVC Tiles',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
    type: 'tiles'
  },
  {
    title: 'TV Units with Lighting',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
    type: 'tv-units'
  }
];

export const WorkGallery = () => {
  const navigate = useNavigate();

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => navigate(`/gallery/${category.type}`)}
            >
              <div className="relative h-64">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition duration-300">
                  View All
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};