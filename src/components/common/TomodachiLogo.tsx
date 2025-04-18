
import React from 'react';

interface TomodachiLogoProps {
  className?: string;
}

const TomodachiLogo: React.FC<TomodachiLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/cad37392-2734-4af8-a8d5-f1b19bf27fc3.png" 
        alt="Tomodachi Logo" 
        className="h-8 w-8 mr-2"
      />
      <span className="font-heading font-bold text-lg text-tomodachi-black">
        T<span className="inline-block w-4 h-4 bg-tomodachi-red rounded-full text-center text-white">◍</span>MODACHI
      </span>
    </div>
  );
};

export default TomodachiLogo;
