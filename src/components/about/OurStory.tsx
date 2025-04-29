
import { useImageOptimization } from "../../hooks/use-image-optimization";

const OurStory = () => {
  useImageOptimization();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="section-title mb-8">About us</h2>
              <p className="text-gray-600 mb-4">
               My name is Trent. I am the founder of Tomodachi. In 2022, I moved to Japan all by myself and I made lots of mistakes even with the ability to speak fluent Japanese. There plenty of things I had wished a friend had told me about before moving here. Tomodachi is here to help save you from making the same mistakes I did when I moved to Japan.
              </p>
              <p className="text-gray-600 mb-4">
                Witnessing the growing interest in Japan inspires us. We recognize that while many desire to build a life here, the path forward isn't always clear. Tomodachi bridges that gap, offering expert services to simplify your relocation journey.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-tomodachi-light-gray p-8 rounded-lg">
                <div className="w-full h-64 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/c3e7aa9a-4a8c-4e9b-921a-b0a6e1e3e387.png" 
                    alt="About Tomodachi" 
                    className="w-full h-full object-contain opacity-100"
                    loading="lazy"
                    onLoad={(e) => e.currentTarget.classList.add('loaded')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
