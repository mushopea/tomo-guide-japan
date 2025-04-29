
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import OurStory from '../components/about/OurStory';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import OurValues from '../components/about/OurValues';
import Tomopon from '../components/about/Tomopon';
import { injectSEOMetaTags } from '../utils/seo';

const About = () => {
  // Inject SEO meta tags when component mounts
  useEffect(() => {
    injectSEOMetaTags('about');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <OurStory />
        <TestimonialCarousel />
        <OurValues />
        <Tomopon />
      </main>
      <Footer />
    </div>
  );
};

export default About;
