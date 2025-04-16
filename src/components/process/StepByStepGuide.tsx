
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Home, Map, CreditCard, Globe, School, Users } from 'lucide-react';

const steps = [
   {
    id: 1,
    title: "Prepare for Departure",
    description: "Creating a Japanese Name, Obtaining an International Credit Card, applying for an international driver's license...",
    icon: <FileText className="w-12 h-12 text-tomodachi-red" />,
    link: "#visa-support"
  },
  {
    id: 2,
    title: "Determine Your Visa Requirements",
    description: "Depending on your purpose (work, study, family), we'll help identify the right visa category and requirements for your situation.",
    icon: <FileText className="w-12 h-12 text-tomodachi-red" />,
    link: "#visa-support"
  },
  {
    id: 3,
    title: "Find Suitable Housing",
    description: "We'll help you navigate Japan's unique housing market and find accommodation that meets your needs and budget.",
    icon: <Home className="w-12 h-12 text-tomodachi-red" />,
    link: "#housing-search"
  },
  {
    id: 4,
    title: "Obtain Residence Card and File with City Hall",
    description: "Complete mandatory registration with your local ward or city office within 14 days of finding permanent housing.",
    icon: <Map className="w-12 h-12 text-tomodachi-red" />,
    link: "#local-registration"
  },
  {
    id: 5,
    title: "Set Up Banking & Finances",
    description: "Open a Japanese bank account, obtain a Japanese phone number, set up utilities payments, and apply for a Japanese credit card.",
    icon: <CreditCard className="w-12 h-12 text-tomodachi-red" />,
    link: "#financial-setup"
  },
  {
    id: 6,
    title: "Navigate Healthcare System",
    description: "Enroll in Japan's national health insurance and understand how to access medical services when needed.",
    icon: <Users className="w-12 h-12 text-tomodachi-red" />,
    link: "#healthcare"
  },
  {
    id: 7,
    title: "Learn Basic Japanese",
    description: "Help looking for trusted Japanese language instructors and schools.",
    icon: <School className="w-12 h-12 text-tomodachi-red" />,
    link: "#language-basics"
  },
  {
    id: 8,
    title: "Explore Your New Community",
    description: "Get to know your neighborhood, local transportation, shopping areas, and community resources.",
    icon: <Globe className="w-12 h-12 text-tomodachi-red" />,
    link: "#community-exploration"
  },
];

const StepByStepGuide = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {steps.map((step) => (
              <div key={step.id} id={step.link.substring(1)} className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex md:flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-tomodachi-light-gray flex items-center justify-center text-2xl font-bold text-tomodachi-red">
                    {step.id}
                  </div>
                  {step.id < steps.length && (
                    <div className="hidden md:block h-24 w-0.5 bg-gray-200 mx-auto my-2"></div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-tomodachi-black mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <Link to={step.link} className="text-tomodachi-red hover:underline font-medium flex items-center">
                      Get assistance with this step
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Need help with your specific situation? We're here to guide you through every step of your move to Japan.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Our Relocation Experts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStepGuide;
