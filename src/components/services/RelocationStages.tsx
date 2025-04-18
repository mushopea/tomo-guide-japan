
import { FileText, Briefcase, Home, Map, Globe, Phone, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Visa Support',
    description: 'Complete guidance through the visa application process and required documentation.',
    icon: <FileText className="w-10 h-10 text-tomodachi-red" />
  },
  {
    id: 2,
    title: 'Home Finding',
    description: 'House or apartment hunting based on your preferences and budget, handling all negotiations and paperwork. If applicable, we will help family pets make the trip too!',
    icon: <Home className="w-10 h-10 text-tomodachi-red" />
  },
  {
    id: 3,
    title: 'Phone Number',
    description: 'Assistance with purchasing SIM cards and setting up phone service.',
    icon: <Phone className="w-10 h-10 text-tomodachi-red" />
  },
  {
    id: 4,
    title: 'Setting Up Utilities',
    description: 'Setting up water, gas, electricity, and internet.',
    icon: <Home className="w-10 h-10 text-tomodachi-red" />
  },
  {
    id: 5,
    title: 'Residential Card',
    description: 'Assistance with obtaining your residence card and setting up national insurance at city hall.',
    icon: <FileText className="w-10 h-10 text-tomodachi-red" />
  },
  {
    id: 6,
    title: 'Bank Account Setup',
    description: 'Guidance through the process of opening local bank accounts and understanding banking procedures.',
    icon: <Briefcase className="w-10 h-10 text-tomodachi-red" />
  },
  {
    id: 7,
    title: 'Cultural Orientation',
    description: 'Help looking for Japanese classes, developing connections with other expats and locals, and assistance learning local customs.',
    icon: <Globe className="w-10 h-10 text-tomodachi-red" />
  },
  {
    id: 8,
    title: 'On-Demand Support',
    description: 'Ongoing assistance with translations, appointments, or any other needs that arise during your time in Japan.',
    icon: <Phone className="w-10 h-10 text-tomodachi-red" />
  }
];

const RelocationStages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-tomodachi-black mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="bg-gray-200 w-full h-48 rounded-lg mb-4"></div>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-tomodachi-black mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelocationStages;
