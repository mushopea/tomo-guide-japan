
import { Link } from 'react-router-dom';

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
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-tomodachi-light-gray rounded-full flex items-center justify-center overflow-hidden">
                <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="120" cy="100" r="60" fill="white" stroke="black" strokeWidth="2"/>
                  <path d="M80 140C90 160 110 170 120 170C130 170 150 160 160 140" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="90" cy="90" r="8" fill="black"/>
                  <circle cx="150" cy="90" r="8" fill="black"/>
                  <path d="M120 180 L120 220" stroke="black" strokeWidth="2"/>
                  <path d="M90 200 L150 200" stroke="black" strokeWidth="2"/>
                  <path d="M60 120 L30 150" stroke="black" strokeWidth="2"/>
                  <path d="M180 120 L210 150" stroke="black" strokeWidth="2"/>
                  <path d="M50 90 L20 70" stroke="black" strokeWidth="2"/>
                  <path d="M190 90 L220 70" stroke="black" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
