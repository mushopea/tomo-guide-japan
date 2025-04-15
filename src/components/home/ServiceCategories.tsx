
import { Link } from 'react-router-dom';
import { FileText, Home, Globe, MessageSquare } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Relocation Support',
    description: 'Comprehensive assistance for your move to Japan, from pre-departure planning to settling in.',
    icon: <Home className="w-8 h-8 text-tomodachi-red" />,
    link: '/services'
  },
  {
    id: 2,
    title: 'Document Assistance',
    description: 'Expert guidance with visa applications, residency documents, and official paperwork.',
    icon: <FileText className="w-8 h-8 text-tomodachi-red" />,
    link: '/services'
  },
  {
    id: 3,
    title: 'Language & Culture',
    description: 'Translation services, language lessons, and cultural orientation to help you adapt.',
    icon: <Globe className="w-8 h-8 text-tomodachi-red" />,
    link: '/services'
  },
  {
    id: 4,
    title: 'One-Off Services',
    description: 'On-demand assistance for specific needs, from translations to accompaniment services.',
    icon: <MessageSquare className="w-8 h-8 text-tomodachi-red" />,
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
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer flexible and comprehensive solutions to make your transition to Japan smooth and stress-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-tomodachi-black mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className="text-tomodachi-red hover:underline font-medium flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary inline-flex items-center">
            See All Services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
