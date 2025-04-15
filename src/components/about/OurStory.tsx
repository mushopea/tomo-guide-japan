
const OurStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="section-title mb-8">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Tomodachi was founded in 2015 by a team of expats who had experienced firsthand the challenges of relocating to Japan. After navigating the complexities of visas, housing, language barriers, and cultural adjustments, they recognized a need for comprehensive support that went beyond what traditional relocation services offered.
              </p>
              <p className="text-gray-600 mb-4">
                Our founders envisioned a service that would not only handle the practical aspects of moving but would also provide the emotional support and cultural guidance needed to truly feel at home in Japan.
              </p>
              <p className="text-gray-600">
                Today, Tomodachi has helped thousands of individuals, families, and businesses successfully transition to life in Japan with our personalized, compassionate approach to relocation services.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-tomodachi-light-gray p-8 rounded-lg">
                <div className="w-full h-64 flex items-center justify-center">
                  <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="60" width="160" height="100" rx="5" fill="white" stroke="black" strokeWidth="2"/>
                    <circle cx="180" cy="110" r="40" fill="white" stroke="black" strokeWidth="2"/>
                    <circle cx="170" cy="100" r="3" fill="black"/>
                    <circle cx="190" cy="100" r="3" fill="black"/>
                    <path d="M170 120C175 125 185 125 190 120" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="40" y="80" width="50" height="30" rx="2" fill="white" stroke="black" strokeWidth="2"/>
                    <path d="M50 95 H80" stroke="black" strokeWidth="2"/>
                    <rect x="40" y="120" width="100" height="10" rx="2" fill="white" stroke="black" strokeWidth="2"/>
                    <rect x="40" y="140" width="80" height="10" rx="2" fill="white" stroke="black" strokeWidth="2"/>
                    <path d="M180 150 L180 180" stroke="black" strokeWidth="2"/>
                    <path d="M160 180 L200 180" stroke="black" strokeWidth="2"/>
                  </svg>
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
