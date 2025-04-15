
import { FileText, Map, Home, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    id: 'pre-move',
    number: 1,
    title: 'Pre-Move',
    icon: <FileText className="w-6 h-6 text-tomodachi-red" />
  },
  {
    id: 'arrival',
    number: 2,
    title: 'Arrival',
    icon: <Map className="w-6 h-6 text-tomodachi-red" />
  },
  {
    id: 'settling',
    number: 3,
    title: 'Settling',
    icon: <Home className="w-6 h-6 text-tomodachi-red" />
  },
  {
    id: 'living',
    number: 4,
    title: 'Living',
    icon: <Globe className="w-6 h-6 text-tomodachi-red" />
  }
];

const ProcessOverview = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {processSteps.map((step) => (
          <Card 
            key={step.id}
            className="cursor-pointer hover:shadow-md transition-shadow duration-300"
            onClick={() => scrollToSection(step.id)}
          >
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-tomodachi-red bg-opacity-10 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <div className="text-2xl font-bold text-tomodachi-black mb-2">{step.number}</div>
              <h3 className="font-medium">{step.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600">
          Or check out{' '}
          <button
            onClick={() => scrollToSection('one-off-support')}
            className="text-tomodachi-red hover:underline font-medium"
          >
            one-off task support
          </button>
        </p>
      </div>
    </div>
  );
};

export default ProcessOverview;
