
import React from 'react';
import { StepData } from './types';

interface TableOfContentsProps {
  steps: StepData[];
  onScrollToSection: (id: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ steps, onScrollToSection }) => {
  const beforeArrivalSteps = steps.filter(step => step.category === "BEFORE ARRIVAL");
  const afterArrivalSteps = steps.filter(step => step.category === "AFTER ARRIVAL");

  return (
    <div className="mb-16 p-6 border border-gray-200 rounded-lg bg-gray-50">
      <h3 className="text-xl font-bold mb-4 text-tomodachi-black">Table of Contents</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold text-gray-700 mb-2">BEFORE ARRIVAL</h4>
          <ul className="space-y-2">
            {beforeArrivalSteps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 font-medium">{index + 1}.</span>
                <button 
                  onClick={() => onScrollToSection(step.id)}
                  className="text-tomodachi-red hover:underline text-left"
                >
                  {step.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-700 mb-2">AFTER ARRIVAL</h4>
          <ul className="space-y-2">
            {afterArrivalSteps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 font-medium">{index + beforeArrivalSteps.length}.</span>
                <button 
                  onClick={() => onScrollToSection(step.id)}
                  className="text-tomodachi-red hover:underline text-left"
                >
                  {step.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
