
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/contact/ContactForm';
import { injectSEOMetaTags } from '../utils/seo';

const Contact = () => {
  // Inject SEO meta tags when component mounts
  useEffect(() => {
    injectSEOMetaTags('contact');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
