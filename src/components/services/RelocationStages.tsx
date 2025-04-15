
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
        title: 'Moving Preparation',
        description: 'Planning and consultations to prepare for your move, including housing preferences and requirements.',
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
    ]
  },
  {
    id: 'settling',
    label: 'Settling',
    number: 3,
    services: [
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
  }
];

const RelocationStages = () => {
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

        <Accordion type="single" collapsible className="w-full">
          {stages.map((stage) => (
            <AccordionItem key={stage.id} value={stage.id}>
              <AccordionTrigger className="text-xl font-bold text-tomodachi-black hover:text-tomodachi-red">
                <span className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-tomodachi-red text-white text-sm">
                    {stage.number}
                  </span>
                  {stage.label}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {stage.services.map((service) => (
                    <div key={service.id} className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-tomodachi-black mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <a href={service.link} className="text-tomodachi-red hover:underline font-medium flex items-center">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
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
