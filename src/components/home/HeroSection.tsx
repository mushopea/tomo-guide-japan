import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-tomodachi-black mb-4">
              Your friend in Japan to make things easy
            </h1>
            <div className="flex space-x-2 mb-6">
              <span className="bg-tomodachi-light-gray text-tomodachi-black px-3 py-1 rounded-full text-sm font-medium">Relocation</span>
              <span className="bg-tomodachi-light-gray text-tomodachi-black px-3 py-1 rounded-full text-sm font-medium">Language</span>
              <span className="bg-tomodachi-light-gray text-tomodachi-black px-3 py-1 rounded-full text-sm font-medium">Translation</span>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              We provide comprehensive relocation services for individuals, families, and businesses moving to Japan, along with on-demand support for navigating Japanese language and culture.
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
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/lovable-uploads/0971c4fd-6319-4f06-a5ea-28631462c437.png"
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
