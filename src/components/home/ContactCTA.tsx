
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="bg-tomodachi-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Big or small, tell us what you need help with!
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Whether you're planning a move or need assistance with daily life in Japan, we're here to help.
        </p>
        <Link to="/contact" className="inline-block bg-tomodachi-red text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
