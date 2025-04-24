
import React from 'react';
import { Download } from 'lucide-react';

const ChecklistDownload: React.FC = () => {
  return (
    <div className="mt-16 py-10 bg-tomodachi-red bg-opacity-10 rounded-lg px-8 text-center">
      <h1 className="text-3xl font-bold text-tomodachi-black mb-4">Tomodachi Moving Checklist</h1>
      
      <p className="text-gray-600 mb-8">
        Download our free printable Moving to Japan checklist!
      </p>

      <div className="mb-8">
        <a href="/lovable-uploads/tomodachi-moving-to-japan-printable-checklist.pdf"><img 
          src="/lovable-uploads/guidep.png" 
          alt="Moving Checklist Preview"
          className="mx-auto max-h-[400px]"
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.add('loaded')}
        /></a>
      </div>
      
      <div>
        <a
          href="/lovable-uploads/tomodachi-moving-to-japan-printable-checklist.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-tomodachi-red text-white rounded-md font-semibold shadow hover:bg-tomodachi-black transition-colors"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Checklist
        </a>
      </div>
    </div>
  );
};

export default ChecklistDownload;
