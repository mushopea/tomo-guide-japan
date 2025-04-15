
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import ServiceCategories from '../components/home/ServiceCategories';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TestimonialCarousel />
        <ServiceCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
