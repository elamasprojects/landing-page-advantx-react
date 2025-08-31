
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                AdvantX
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation (centered) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('agenda')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Agenda
              </button>
              {/**
               * <button 
               *   onClick={() => scrollToSection('sobre-nosotros')}
               *   className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
               * >
               *   Sobre nosotros
               * </button>
               */}
              <Link 
                to="/blog"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <button 
                onClick={() => scrollToSection('faqs')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQs
              </button>
            </div>
          </div>

          {/* Right side - Theme toggle and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              asChild
              variant="outline"
              className="border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            >
              <a href="https://clientes.advantx.co" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
            <Button 
              onClick={() => window.open('https://wa.me/5491157388695','_blank')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Contáctanos
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-base font-medium w-full text-left"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('agenda')}
              className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-base font-medium w-full text-left"
            >
              Agenda
            </button>
            {/**
             * <button 
             *   onClick={() => scrollToSection('sobre-nosotros')}
             *   className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-base font-medium w-full text-left"
             * >
             *   Sobre nosotros
             * </button>
             */}
            <Link 
              to="/blog"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <button 
              onClick={() => scrollToSection('faqs')}
              className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-base font-medium w-full text-left"
            >
              FAQs
            </button>
            <div className="px-3 py-2 space-y-2">
              <Button 
                asChild
                variant="outline"
                className="border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-6 py-2 rounded-full font-medium w-full"
              >
                <a href="https://clientes.advantx.co" target="_blank" rel="noopener noreferrer">
                  Login
                </a>
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/5491157388695','_blank')}
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
