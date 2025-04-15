
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real implementation, you would send this data to your backend
    toast.success('Thank you for your message! We will get back to you soon.', {
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      service: 'general'
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/5">
              <h2 className="section-title">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or need assistance with your relocation to Japan? 
                We're here to help! Fill out the form or use our contact information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin size={20} className="text-tomodachi-red" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-tomodachi-black">Our Office</h4>
                    <p className="text-gray-600">1-2-3 Shibuya, Tokyo 150-0002, Japan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail size={20} className="text-tomodachi-red" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-tomodachi-black">Email Us</h4>
                    <a href="mailto:hello@tomodachi.jp" className="text-gray-600 hover:text-tomodachi-red">
                      hello@tomodachi.jp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone size={20} className="text-tomodachi-red" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-tomodachi-black">Call Us</h4>
                    <a href="tel:+81-3-1234-5678" className="text-gray-600 hover:text-tomodachi-red">
                      +81-3-1234-5678
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-lg font-semibold text-tomodachi-black mb-4">Office Hours</h4>
                <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM (JST)</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM (JST)</p>
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <div className="bg-white border border-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-tomodachi-black mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tomodachi-red focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tomodachi-red focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tomodachi-red focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="relocation">Relocation Services</option>
                      <option value="visa">Visa Support</option>
                      <option value="housing">Housing Assistance</option>
                      <option value="translation">Translation Services</option>
                      <option value="cultural">Cultural Orientation</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tomodachi-red focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tomodachi-red focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary flex items-center"
                  >
                    Send Message
                    <Send size={16} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
