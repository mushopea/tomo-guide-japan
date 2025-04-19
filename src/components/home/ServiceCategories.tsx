import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const serviceCards = [
  {
    id: 1,
    title: 'Relocation Services',
    description: 'From visa to housing and bank setup, we\'ve got you covered.',
    image: 'https://images.unsplash.com/photo-1551322120-c697cf88fbdc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    chips: ['Full support', 'Customizable', 'Free Consult'],
    link: '/services'
  },
  {
    id: 2,
    title: 'One-off support',
    description: 'Specific tasks like phone plans, city hall visits, and more.',
    image: '/lovable-uploads/e415176f-e4fb-4327-9afc-d0db33b3e565.png',
    chips: ['Affordable', 'No Packages'],
    link: '/services#one-off-support'
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-tomodachi-red mx-auto mt-4 mb-6"></div>
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
