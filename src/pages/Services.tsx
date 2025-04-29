
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ServicesHero from '../components/services/ServicesHero';
import RelocationStages from '../components/services/RelocationStages';
import ContactCTA from '../components/home/ContactCTA';
import { injectSEOMetaTags } from '../utils/seo';

const Services = () => {
  // Inject SEO meta tags when component mounts
  useEffect(() => {
    injectSEOMetaTags('services');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServicesHero />
        <RelocationStages />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
