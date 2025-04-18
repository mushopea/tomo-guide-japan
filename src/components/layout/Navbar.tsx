
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import TomodachiLogo from '../common/TomodachiLogo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <TomodachiLogo className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/services" 
              className="text-tomodachi-black hover:text-tomodachi-red transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link 
              to="/process" 
              className="text-tomodachi-black hover:text-tomodachi-red transition-colors text-sm font-medium"
            >
              Moving Guide
            </Link>
            <Link 
              to="/about" 
              className="text-tomodachi-black hover:text-tomodachi-red transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center text-tomodachi-black hover:text-tomodachi-red transition-colors text-sm font-medium"
            >
              <Mail size={16} className="mr-1" />
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/contact" className="text-tomodachi-black hover:text-tomodachi-red">
              <Mail size={20} />
            </Link>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
            <Link
              to="/services"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-tomodachi-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/process"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-tomodachi-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Moving Guide
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-tomodachi-red"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-tomodachi-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
