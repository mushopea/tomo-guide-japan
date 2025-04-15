
import { Link } from 'react-router-dom';

const MovingProcessHero = () => {
  return (
    <section className="bg-tomodachi-light-gray py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-tomodachi-black mb-6">Moving Process and Guide</h1>
          <div className="w-24 h-1 bg-tomodachi-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">
            We've broken down the relocation process into manageable steps to guide you through your journey to Japan.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="btn-primary">
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingProcessHero;
