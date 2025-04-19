
import { Check } from "lucide-react";

const services = [
  {
    title: "Full Relocation Support",
    subtitle: "Moving to Japan is a big step — we're here to support all of it, or just the parts that matter most to you.",
    image: "https://images.unsplash.com/photo-1551322120-c697cf88fbdc",
    features: [
      "Visa Support: Help with document prep and embassy application",
      "Arrival Welcome: Airport pickup and navigation to your stay",
      "Legal Registration: Residence card, address registration, MyNumber setup",
      "Health Enrollment: National insurance and pension application",
      "Banking Setup: Account opening and credit card support",
      "Phone Plan Setup: SIM card or eSIM registration with English-friendly carriers",
      "Utilities Setup: Start gas, water, electricity, and internet",
      "Housing Support: Help finding temporary or permanent housing",
      "Translation Help: In-person support at city hall, clinics, and other services",
      "Local Advice: School, clinic, and neighborhood recommendations"
    ]
  },
  {
    title: "Housing Support",
    subtitle: "Full support for finding and securing your new home.",
    image: "https://images.unsplash.com/photo-1582883040775-f98dd8c04597",
    features: [
      "Apartment Search: Foreign-friendly, pet-friendly, and short-term options",
      "Agent Communication: Handle language, bookings, and scheduling",
      "Lease Guidance: Translate terms and explain contracts",
      "Move-In Prep: Help with required documents and basic setup",
      "Utilities: Set up water, electricity and more"
    ]
  },
  {
    title: "One-Off Task Help",
    subtitle: "Flexible help for individual tasks — remote or in-person, billed at an affordable hourly rate.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    features: [
      "Ward Office Support: Help with address registration, forms, and translation",
      "Utility Setup: Arrange gas, water, electricity, and internet",
      "Filling Forms: Assistance completing paperwork for housing, insurance, or banking",
      "Communication with Services: We'll call, translate, or email Japanese providers on your behalf",
      "Lease Guidance: Help reviewing rental contracts and understanding key terms"
    ]
  }
];

const RelocationStages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-tomodachi-black mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="h-48 rounded-lg overflow-hidden mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-tomodachi-black mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.subtitle}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelocationStages;
