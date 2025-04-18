
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const serviceCards = [
  {
    id: 1,
    title: 'Relocation Services',
    description: 'From visa to housing and bank setup, we\'ve got you covered.',
    chips: ['Full support', 'Customizable', 'Free Consult'],
    link: '/services'
  },
  {
    id: 2,
    title: 'One-off support',
    description: 'Specific tasks like phone plans, city hall visits, and more.',
    chips: ['Affordable', 'No Packages'],
    link: '/services'
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tomodachi-black">Our Services</h2>
          <div className="w-24 h-1 bg-tomodachi-red mx-auto mt-4 mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceCards.map((card) => (
            <div key={card.id} className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 bg-gray-200 w-full h-48 rounded-lg"></div>
              <h3 className="text-xl font-bold text-tomodachi-black mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {card.chips.map((chip, index) => (
                  <span key={index} className="inline-block px-3 py-1 text-sm font-medium text-tomodachi-black bg-white border border-tomodachi-red rounded-full">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary inline-flex items-center">
            See All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
