
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    supportType: 'relocation',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      supportType: value
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
      supportType: 'relocation',
      subject: '',
      message: ''
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
                We're here to help! Fill out the form or email us directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail size={20} className="text-tomodachi-red" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-tomodachi-black">Email Us</h4>
                    <a href="mailto:contactyourtomodachi@gmail.com" className="text-gray-600 hover:text-tomodachi-red">
                      contactyourtomodachi@gmail.com
                    </a>
                  </div>
                </div>
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
                    <label className="block text-sm font-medium text-gray-700 mb-3">I'm looking for... *</label>
                    <RadioGroup
                      defaultValue="relocation"
                      value={formData.supportType}
                      onValueChange={handleRadioChange}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="relocation" id="relocation" />
                        <label htmlFor="relocation">Relocation support</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-off" id="one-off" />
                        <label htmlFor="one-off">One-off task support</label>
                      </div>
                    </RadioGroup>
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
                      placeholder="Tell us about your request. If you are relocating, let us know: &#10;* Are you moving alone, with a partner, or with family and pets?&#10;* What's your work or visa situation?&#10;* When are you planning to move?&#10;* What kind of help do you need?"
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
