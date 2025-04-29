
import React from "react";
import { useImageOptimization } from "../../hooks/use-image-optimization";

const AboutHero = () => {
  useImageOptimization();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-tomodachi-black mb-6">About Tomodachi</h1>
            <p className="text-xl text-gray-600 mb-6">
              Your personal support system for navigating life in Japan - whether you're relocating or need help with a single task.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-80">
              <img 
                src="/lovable-uploads/c2cd7372-0ab4-489b-a2b3-de9f0a415be0.png" 
                alt="About Tomodachi" 
                className="w-full h-full object-contain"
                loading="lazy"
                onLoad={(e) => e.currentTarget.classList.add('loaded')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
