
import { Link } from 'react-router-dom';
import { Percent } from 'lucide-react';

const ServicesHero = () => {
  return (
    <>
      <div className="bg-tomodachi-red text-white py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            <Percent className="w-5 h-5" />
            <p className="text-sm md:text-base">
              Opening discount: <strong>30%</strong> off all services (ends May 15)
            </p>
          </div>
        </div>
      </div>
      <section className="bg-tomodachi-red bg-opacity-10 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-tomodachi-black mb-6">Services</h1>
            <div className="w-20 h-1 bg-tomodachi-red mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              From specific tasks to full relocation, we're here for individuals, families, and businesses.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesHero;
