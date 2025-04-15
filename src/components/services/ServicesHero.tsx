
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="bg-tomodachi-light-gray py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-tomodachi-black mb-6">Our Services</h1>
          <div className="w-20 h-1 bg-tomodachi-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">
            We offer flexible choices whether you are a working individual, digital nomad, or company. 
            Choose multiple options from below or check our comprehensive packages.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
