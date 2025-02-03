
import { CheckCircle2 } from 'lucide-react';
export const About = () => {
  const features = [
    'Over 3 years of industry experience',
    'Professional installation team',
    'High-quality PVC panels',
    'Competitive pricing',
    'Fast turnaround times',
    'Maintenance Service'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <img
                src='/images/pvc-panel-image.webp'
                alt="Our Work"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Customize the shadow here
                }}
                className="relative rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Your Trusted PVC Panel Installation Experts</h3>
              <p className="text-gray-600 mb-6">
                With over 3 years of experience in the industry, PVC Solutions has established itself as a leading provider of high-quality PVC panel installations for commercial and residential spaces.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};