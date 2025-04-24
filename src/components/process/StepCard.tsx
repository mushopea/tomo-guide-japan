
import React from 'react';

interface StepCardProps {
  index: number;
  id: string;
  title: string;
  content: React.ReactNode;
  startIndex?: number;
}

const StepCard: React.FC<StepCardProps> = ({ index, id, title, content, startIndex = 1 }) => {
  return (
    <div id={id} className="mb-12 relative">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tomodachi-red text-white flex items-center justify-center font-bold text-lg z-10 relative border-4">
          {index + startIndex}
        </div>
        <div className="flex-grow">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-xl font-bold text-tomodachi-black mb-4">{title}</h4>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
