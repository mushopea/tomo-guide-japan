
import { Heart, Layers, Users } from 'lucide-react';

const values = [
  {
    id: 1,
    title: "Personalized Service",
    description: "We understand that every relocation journey is unique. Our approach is tailored to your specific needs, preferences, and circumstances.",
    icon: <Layers className="w-12 h-12 text-tomodachi-red" />
  },
  {
    id: 2,
    title: "Friendship",
    description: "True to our name, we build genuine connections with our clients, offering emotional support alongside practical assistance.",
    icon: <Heart className="w-12 h-12 text-tomodachi-red" />
  },
  {
    id: 3,
    title: "Support",
    description: "We're committed to being there for you every step of the way, from pre-departure planning to long after you've settled in.",
    icon: <Users className="w-12 h-12 text-tomodachi-red" />
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
