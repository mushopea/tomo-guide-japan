
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MovingGuideSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-tomodachi-black mb-6">Tomodachi Moving Guide</h2>
          <div className="w-24 h-1 bg-tomodachi-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">
            Your step-by-step resource for relocation to Japan — available as a web guide and printable checklist.
          </p>
          
          <Link to="/process" className="block mb-8 max-h-[400px]">
            <img 
              src="/lovable-uploads/guidep.png"
              alt="Moving Guide Preview"
              className="h-auto max-h-[400px] object-contain mx-auto border border-gray-300/50 shadow-md rounded-2xl"
              loading="eager"
              onLoad={(e) => e.currentTarget.classList.add('loaded')}
            />
          </Link>
          
          <Link 
            to="/process" 
            className="btn-primary inline-flex items-center"
          >
            View the Guide
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovingGuideSection;
