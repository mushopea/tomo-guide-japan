
import React from 'react';
import StepCard from './StepCard';
import { StepData } from './types';

interface StepsSectionProps {
  title: string;
  steps: StepData[];
  startIndex?: number;
}

const StepsSection: React.FC<StepsSectionProps> = ({ title, steps, startIndex = 1 }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-tomodachi-black mb-8">{title}</h3>
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        {steps.map((step, index) => (
          <StepCard 
            key={index}
            index={index}
            id={step.id}
            title={step.title}
            content={step.content}
            startIndex={startIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
