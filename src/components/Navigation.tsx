
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              AutomateAI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('agenda')}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Agenda
              </button>
              <button 
                onClick={() => scrollToSection('sobre-nosotros')}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre nosotros
              </button>
              <button 
                onClick={() => scrollToSection('faqs')}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQs
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Contáctanos
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium w-full text-left"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('agenda')}
              className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium w-full text-left"
            >
              Agenda
            </button>
            <button 
              onClick={() => scrollToSection('sobre-nosotros')}
              className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium w-full text-left"
            >
              Sobre nosotros
            </button>
            <button 
              onClick={() => scrollToSection('faqs')}
              className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium w-full text-left"
            >
              FAQs
            </button>
            <div className="px-3 py-2">
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium w-full"
              >
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
