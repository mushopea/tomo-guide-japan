
import { Check } from "lucide-react";

const services = [
  {
    title: "Full Relocation Support",
    subtitle: "Moving to Japan is a big step — we're here to support all of it, or just the parts that matter most to you.",
    image: "/lovable-uploads/full service.avif",
    features: [
      "Visa Support: Help with document prep and embassy application",
      "Arrival Welcome: Airport pickup and navigation to your stay",
      "Legal Registration: Residence card, address registration, MyNumber setup",
      "Health Enrollment: National insurance and pension application",
      "Banking Setup: Account opening and credit card support",
      "Phone Plan Setup: SIM card or eSIM registration with English-friendly carriers",
      "Utilities Setup: Start gas, water, electricity, and internet",
      "Housing Support: Finding your temporary or permanent housing",
      "Translation Help: In-person support at city hall, clinics, and other services",
      "Local Advice: School, clinic, and neighborhood recommendations"
    ]
  },
  {
    title: "One-Off Task",
    subtitle: "Flexible help for individual tasks — remote or in-person, at an affordable hourly rate. Examples:",
    image: "/lovable-uploads/one task.png",
    features: [
      "Ward Office Accompaniment: Help with ID and license registration",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                {service.features.map((feature, featureIndex) => {
                  const [title, description] = feature.split(': ');
                  return (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <strong>{title}</strong>: {description}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelocationStages;
