
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import ServiceCategories from '../components/home/ServiceCategories';
import ContactCTA from '../components/home/ContactCTA';
import MovingGuideSection from '../components/home/MovingGuideSection';
import { injectSEOMetaTags } from '../utils/seo';

const Index = () => {
  // Inject SEO meta tags when component mounts
  useEffect(() => {
    injectSEOMetaTags('home');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServiceCategories />
        <TestimonialCarousel />
        <MovingGuideSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
