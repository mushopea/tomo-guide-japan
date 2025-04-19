
import { FileText, Phone, User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const supportServices = [
  {
    icon: <FileText className="w-6 h-6 text-tomodachi-red" />,
    title: 'Form Filling Assistance'
  },
  {
    icon: <Phone className="w-6 h-6 text-tomodachi-red" />,
    title: 'Customer Service Support'
  },
  {
    icon: <User className="w-6 h-6 text-tomodachi-red" />,
    title: 'In-Person Translation Services'
  },
  {
    icon: <User className="w-6 h-6 text-tomodachi-red" />,
    title: 'City Hall Visits'
  },
  {
    icon: <User className="w-6 h-6 text-tomodachi-red" />,
    title: 'Booking reservations'
  }
];

const OneOffSupport = () => {
  return (
    <section id="one-off-support" className="bg-tomodachi-light-gray py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-tomodachi-black mb-4 text-center">One-Off Task Support</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Have a specific request? Let your Tomodachi handle it. We offer flexible, affordable hourly assistance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportServices.map((service, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-tomodachi-red bg-opacity-10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-tomodachi-black text-center">{service.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneOffSupport;
