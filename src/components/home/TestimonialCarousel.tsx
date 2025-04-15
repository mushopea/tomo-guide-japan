
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Tomodachi made our transition to Tokyo seamless. From visa application to finding our dream apartment, they were with us every step of the way.",
    name: "Sarah Johnson",
    title: "English Teacher, Tokyo",
    avatar: "SJ"
  },
  {
    id: 2,
    quote: "Moving my business to Osaka seemed daunting until Tomodachi stepped in. Their knowledge of local regulations and cultural nuances was invaluable.",
    name: "Michael Chen",
    title: "Tech Entrepreneur, Osaka",
    avatar: "MC"
  },
  {
    id: 3,
    quote: "As a family of four moving to Japan, we had countless concerns. Tomodachi addressed each one with patience and expert guidance. We couldn't be happier.",
    name: "The Rodriguez Family",
    title: "Expats from Spain, Kyoto",
    avatar: "RF"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-tomodachi-light-gray py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className={`transition-transform duration-500 ease-in-out`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-white rounded-lg p-8 shadow-sm">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-tomodachi-red text-white rounded-full flex items-center justify-center font-medium mr-4">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold text-tomodachi-black">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.title}</p>
                          </div>
                        </div>
                        <blockquote>
                          <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-tomodachi-red focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-tomodachi-red focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full focus:outline-none transition-colors duration-300 ${
                  index === currentIndex ? 'bg-tomodachi-red' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
