
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MovingProcessHero from '../components/process/MovingProcessHero';
import StepByStepGuide from '../components/process/StepByStepGuide';
import { injectSEOMetaTags } from '../utils/seo';

const Process = () => {
  // Inject SEO meta tags when component mounts
  useEffect(() => {
    injectSEOMetaTags('process');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <MovingProcessHero />
        <StepByStepGuide />
      </main>
      <Footer />
    </div>
  );
};

export default Process;
