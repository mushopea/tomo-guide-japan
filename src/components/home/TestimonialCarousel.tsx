
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Tomodachi made our move to Tokyo so much easier than we expected. Their help finding an apartment that accepted our dog was invaluable!",
    name: "Emma Wilson",
    city: "Tokyo"
  },
  {
    id: 2,
    content: "I was struggling with city hall paperwork until Tomodachi stepped in. They saved me hours of confusion and helped me get everything sorted quickly.",
    name: "Alex Johnson",
    city: "Osaka"
  },
  {
    id: 3,
    content: "When our appliances arrived and we couldn't read the Japanese manuals, Tomodachi came over the same day to help us set everything up and explain how to use them.",
    name: "Maria Rodriguez",
    city: "Kyoto"
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const pauseAutoplay = () => {
    setIsAutoplay(false);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const resumeAutoplay = () => {
    setIsAutoplay(true);
  };

  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, activeIndex]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-tomodachi-black">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-tomodachi-red mx-auto mt-4"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div 
            className="overflow-hidden"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
            onTouchStart={pauseAutoplay}
            onTouchEnd={resumeAutoplay}
          >
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-lg text-gray-600 italic mb-6">"{testimonial.content}"</p>
                    <div className="text-right">
                      <p className="font-medium text-tomodachi-black">{testimonial.name}, {testimonial.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-tomodachi-red z-10"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-tomodachi-red z-10"
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${index === activeIndex ? 'bg-tomodachi-red' : 'bg-gray-300'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
