import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">PVC Solutions</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <HashLink to="/#home" className="text-gray-700 hover:text-blue-600">Home</HashLink>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600">Our Work</Link>           
            <HashLink to="/#about" className="text-gray-700 hover:text-blue-600">About Us</HashLink>
            <HashLink to="/#services" className="text-gray-700 hover:text-blue-600">Services</HashLink>
            <HashLink to="/#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</HashLink>
            <HashLink to="/#contact" className="text-gray-700 hover:text-blue-600">Contact</HashLink>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <HashLink to="/#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600" smooth>
            Home
          </HashLink>
          <Link to="/gallery" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Our Work</Link>       
          <HashLink to="/#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600" smooth>
            About Us
          </HashLink>
          <HashLink to="/#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600" smooth>
            Services
          </HashLink>
          <HashLink to="/#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600" smooth>
            Testimonials
          </HashLink>
          <HashLink to="/#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600" smooth>
            Contact
          </HashLink>
 </div>
        </div>
      )}
    </nav>
  );
};