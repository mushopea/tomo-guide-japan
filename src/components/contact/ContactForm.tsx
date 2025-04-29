
import { useState, useEffect } from 'react';
import { Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    supportType: 'relocation',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Image optimization
  useEffect(() => {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.classList.add('loaded');
          imgObserver.unobserve(img);
        }
      });
    });

    const images = document.querySelectorAll('img');
    images.forEach(img => imgObserver.observe(img));

    return () => {
      images.forEach(img => imgObserver.unobserve(img));
    };
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    
    try {
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);
      
      const response = await fetch('https://formcarry.com/s/z2omJxqMEf0', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('There was a problem sending your message. Please try again.');
      }
      
      setSubmitSuccess(true);
      toast.success('Thank you for your message! We will get back to you soon.', {
        duration: 5000,
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        supportType: 'relocation',
        subject: '',
        message: ''
      });
      formElement.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'There was a problem sending your message. Please try again.');
      toast.error('There was a problem sending your message. Please try again.', {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/5">
              <h2 className="text-3xl font-bold text-tomodachi-black mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or need assistance with your relocation to Japan? 
                Consultation is free! Fill out the form or email us directly.
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
              <div className="bg-white border border-gray-300 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-tomodachi-black mb-6">Send Us a Message</h3>
                
                {submitError && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      {submitError}
                    </AlertDescription>
                  </Alert>
                )}
                
                {submitSuccess && (
                  <Alert className="mb-6 bg-green-50 border-green-200">
                    <AlertTitle>Message Sent!</AlertTitle>
                    <AlertDescription>
                      Thank you for your message. We'll get back to you as soon as possible.
                    </AlertDescription>
                  </Alert>
                )}
                
                <form 
                  onSubmit={handleSubmit}
                  action="https://formcarry.com/s/z2omJxqMEf0"
                  method="POST"
                  acceptCharset="UTF-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
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
                      name="supportType"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="relocation" id="relocation" />
                        <label htmlFor="relocation">Relocation support</label>
                      </div>
                      {formData.supportType === 'relocation' && (
                        <div className="radio-helper-text">
                          Let us know:<br />
                          1) Who you're moving with (family and pets)<br />
                          2) Your work and visa situation<br />
                          3) When you plan to move
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-off" id="one-off" />
                        <label htmlFor="one-off">One-off task support</label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Tell us about your request - consultation is free."
                      className="w-full"
                    />
                  </div>
                  
                  {/* Hidden honeypot field for spam protection */}
                  <input 
                    type="text" 
                    name="_gotcha" 
                    style={{ display: 'none' }} 
                    tabIndex={-1} 
                    autoComplete="off" 
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-tomodachi-red hover:bg-tomodachi-red/90 text-white flex items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={16} className="ml-2" />}
                  </Button>
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
