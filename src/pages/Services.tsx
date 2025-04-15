
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ServicesHero from '../components/services/ServicesHero';
import RelocationStages from '../components/services/RelocationStages';
import ProcessOverview from '../components/services/ProcessOverview';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServicesHero />
        <ProcessOverview />
        <RelocationStages />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
