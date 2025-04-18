import { FileText, Briefcase, Home, Map, Globe, Phone, ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stages = [
  {
    id: 'pre-move',
    label: 'Pre-Move',
    number: 1,
    services: [
      {
        id: 1,
        title: 'Visa Support',
        description: 'Complete guidance through the visa application process and required documentation.',
        icon: <FileText className="w-10 h-10 text-tomodachi-red" />,
        link: '#'
      },
      {
        id: 2,
       title: 'Home Finding',
        description: 'House or apartment hunting based on your preferences and budget, handling all negotiations and paperwork. If applicable, we will help family pets make the trip too!',
        icon: <Home className="w-10 h-10 text-tomodachi-red" />,
        link: '#'
      }
    ]
  },
  {
    id: 'arrival',
    label: 'Arrival',
    number: 2,
    services: [
      {
        id: 4,
        title: 'Phone Setup',
        description: 'Assistance with purchasing SIM cards and setting up phone service.',
        icon: <Phone className="w-10 h-10 text-tomodachi-red" />,
        link: '#'
      }
    ]
  },
  {
    id: 'settling',
    label: 'Settling',
    number: 3,
    services: [
      {
        id: 5,
        title: 'Setting Up Utilities',
        description: 'Setting up water, gas, electricity, and internet.',
        icon: <Home className="w-10 h-10 text-tomodachi-red" />
      },
      {
        id: 9,
        title: 'Residential Card',
        description: 'Assistance with obtaining your residence card and setting up national insurance at city hall.',
        icon: <FileText className="w-10 h-10 text-tomodachi-red" />
      },
      {
        id: 6,
        title: 'Bank Account Setup',
        description: 'Guidance through the process of opening local bank accounts and understanding banking procedures.',
        icon: <Briefcase className="w-10 h-10 text-tomodachi-red" />
      }
    ]
  },
  {
    id: 'living',
    label: 'Living',
    number: 4,
    services: [
      {
        id: 7,
        title: 'Cultural Orientation',
        description: 'Help looking for Japanese classes, developing connections with other expats and locals, and assistance learning local customs.',
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
  }
];

const RelocationStages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Accordion type="multiple" defaultValue={stages.map(stage => stage.id)} className="w-full">
          {stages.map((stage) => (
            <AccordionItem 
              key={stage.id} 
              value={stage.id} 
              id={stage.id}
              className="border rounded-lg mb-4 overflow-hidden"
            >
              <AccordionTrigger className="text-xl font-bold text-tomodachi-black hover:text-tomodachi-red bg-tomodachi-red/10 px-6 py-4">
                <span className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-tomodachi-red text-white text-sm">
                    {stage.number}
                  </span>
                  {stage.label}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  {stage.services.map((service) => (
                    <div key={service.id} className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-tomodachi-black mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default RelocationStages;
