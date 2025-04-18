
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-tomodachi-red bg-opacity-10 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <span className="text-gray-500 text-sm mb-2 block">ともだち</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-tomodachi-black mb-4">
              Your Japan relocation buddy
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Relocation and one-off help for individuals, families, and businesses — we make life in Japan feel easy.
            </p>
            <div className="flex flex-row space-x-4">
              <Link to="/services" className="btn-primary flex items-center shadow-md hover:shadow-lg transition-shadow">
                Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 md:flex justify-center hidden">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/lovable-uploads/faac7eae-97b2-4400-9ba3-24055164026f.png"
                alt="Tomodachi Mascot"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
