
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import ServiceCategories from '../components/home/ServiceCategories';
import ContactCTA from '../components/home/ContactCTA';
import MovingGuideSection from '../components/home/MovingGuideSection';

const Index = () => {
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
