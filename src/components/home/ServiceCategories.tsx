import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const serviceCards = [
  {
    id: 1,
    title: 'Relocation Services',
    description: 'From visa to housing and bank setup, we\'ve got you covered.',
    image: '/lovable-uploads/one task.avif',
    chips: ['Full support', 'Customizable', 'Free Consult'],
    link: '/services'
  },
  {
    id: 2,
    title: 'One-off support',
    description: 'Specific tasks like bank setup, driving license conversion, customer service accompaniment, and more.',
    image: '/lovable-uploads/full service.avif',
    chips: ['Affordable', 'No Packages'],
    link: '/services#one-off-support'
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceCards.map((card) => (
            <Link to={card.link} key={card.id} className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 w-full h-48 rounded-lg overflow-hidden">
                <img 
                  src={card.id === 2 ? "/lovable-uploads/c2cd7372-0ab4-489b-a2b3-de9f0a415be0.png" : card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-tomodachi-black mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 h-[32px]">
                {card.chips.map((chip, index) => (
                  <span key={index} className="inline-block px-3 py-1 text-sm font-medium text-tomodachi-black bg-white border border-tomodachi-red rounded-full">
                    {chip}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
