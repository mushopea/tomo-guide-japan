
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import TomodachiLogo from '../common/TomodachiLogo';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <TomodachiLogo className="mb-4" />
            <p className="text-sm text-gray-600 mb-4">
              Your friendly guide to effortless relocation and life in Japan.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-tomodachi-black uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-tomodachi-red text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-600 hover:text-tomodachi-red text-sm">
                  Moving Guide
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-tomodachi-red text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-tomodachi-black uppercase tracking-wider mb-4">Contact</h3>
            <p className="text-sm text-gray-600 mb-3">Free consultation - tell us what you need.</p>
            <div className="flex">
              <Mail size={18} className="text-tomodachi-red mr-2 flex-shrink-0 mt-0.5" />
              <a href="mailto:hello@tomodachi.jp" className="text-sm text-gray-600 hover:text-tomodachi-red">
                hello@tomodachi.jp
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Tomodachi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
