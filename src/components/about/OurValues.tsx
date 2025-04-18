
import { Heart, Layers, Users, ShieldCheck, MessageCircle } from 'lucide-react';

const values = [
  {
    id: 1,
    title: "Respect",
    icon: <Layers className="w-12 h-12 text-tomodachi-red" />,
    description: "We honor and value individuals from all backgrounds and cultures."
  },
  {
    id: 2,
    title: "Friendship",
    icon: <Heart className="w-12 h-12 text-tomodachi-red" />,
    description: "We build meaningful connections with our clients based on trust and care."
  },
  {
    id: 3,
    title: "Trust",
    icon: <Users className="w-12 h-12 text-tomodachi-red" />,
    description: "We are committed to maintaining confidentiality and reliability in every interaction."
  },
  {
    id: 4,
    title: "Reliability",
    icon: <ShieldCheck className="w-12 h-12 text-tomodachi-red" />,
    description: "We deliver on our promises and are there when you need us."
  },
  {
    id: 5,
    title: "Communication",
    icon: <MessageCircle className="w-12 h-12 text-tomodachi-red" />,
    description: "We believe in clear, open, and consistent communication."
  }
];

const OurValues = () => {
  return (
    <section className="py-16 bg-tomodachi-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tomodachi-black">Our Values</h2>
          <div className="w-24 h-1 bg-tomodachi-red mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core principles guide everything we do at Tomodachi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value) => (
            <div key={value.id} className="bg-white p-8 rounded-lg text-center flex flex-col items-center">
              <div className="mb-6 rounded-full bg-tomodachi-light-gray p-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-tomodachi-black mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
