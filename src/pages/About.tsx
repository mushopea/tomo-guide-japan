
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import OurValues from '../components/about/OurValues';
import Tomopon from '../components/about/Tomopon';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
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
