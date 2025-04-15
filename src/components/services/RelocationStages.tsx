
import { useState } from 'react';
import { FileText, Briefcase, Home, Map, Globe, Phone } from 'lucide-react';

const stages = [
  { id: 'pre-move', label: 'Pre-Move', number: 1 },
  { id: 'arrival', label: 'Arrival', number: 2 },
  { id: 'settling', label: 'Settling', number: 3 },
  { id: 'living', label: 'Living', number: 4 }
];

const stageServices = {
  'pre-move': [
    {
      id: 1,
      title: 'Visa Support',
      description: 'Complete guidance through the visa application process and required documentation.',
      icon: <FileText className="w-10 h-10 text-tomodachi-red" />,
      link: '#'
    },
    {
      id: 2,
      title: 'Moving Preparation',
      description: 'Planning and consultations to prepare for your move, including housing preferences and requirements.',
      icon: <Home className="w-10 h-10 text-tomodachi-red" />,
      link: '#'
    }
  ],
  'arrival': [
    {
      id: 3,
      title: 'Airport Pickup',
      description: 'Personal greeting at the airport and transportation to your temporary or permanent accommodation.',
      icon: <Map className="w-10 h-10 text-tomodachi-red" />,
      link: '#'
    },
    {
      id: 4,
      title: 'Phone & Internet Setup',
      description: 'Assistance with purchasing SIM cards, setting up phone service, and arranging internet connectivity.',
      icon: <Phone className="w-10 h-10 text-tomodachi-red" />,
      link: '#'
    }
  ],
  'settling': [
    {
      id: 5,
      title: 'Home Finding',
      description: 'House or apartment hunting based on your preferences and budget, handling all negotiations and paperwork.',
      icon: <Home className="w-10 h-10 text-tomodachi-red" />,
      link: '#'
    },
    {
      id: 6,
      title: 'Bank Account Setup',
      description: 'Guidance through the process of opening local bank accounts and understanding banking procedures.',
      icon: <Briefcase className="w-10 h-10 text-tomodachi-red" />,
      link: '#'
    }
  ],
  'living': [
    {
      id: 7,
      title: 'Cultural Orientation',
      description: 'Introduction to Japanese customs, etiquette, and daily life practices to help you adapt.',
      icon: <Globe className="w-10 h-10 text-tomodachi-red" />,
      link: '#'
    },
    {
      id: 8,
      title: 'On-Demand Support',
      description: 'Ongoing assistance with translations, appointments, or any other needs that arise during your time in Japan.',
      icon: <Phone className="w-10 h-10 text-tomodachi-red" />,
      link: '#'
    }
  ]
};

const RelocationStages = () => {
  const [activeStage, setActiveStage] = useState('pre-move');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-tomodachi-black">Relocation Process</h2>
          <div className="w-24 h-1 bg-tomodachi-red mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer services for all stages of your relocation journey to Japan.
          </p>
        </div>

        {/* Stages Navigation */}
        <div className="relative mb-16">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div className="flex justify-between relative z-10">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex flex-col items-center space-y-2 group ${
                  activeStage === stage.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeStage === stage.id ? 'bg-tomodachi-red text-white' : 'bg-white text-tomodachi-black border-2 border-gray-200 group-hover:border-tomodachi-red'
                  }`}
                >
                  {stage.number}
                </div>
                <span className={`text-sm font-medium ${
                  activeStage === stage.id ? 'text-tomodachi-black' : 'text-gray-500 group-hover:text-tomodachi-black'
                }`}>
                  {stage.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services for Active Stage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stageServices[activeStage as keyof typeof stageServices].map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-tomodachi-black mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.link} className="text-tomodachi-red hover:underline font-medium flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelocationStages;
