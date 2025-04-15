
import React from 'react';

interface TomodachiLogoProps {
  className?: string;
}

const TomodachiLogo: React.FC<TomodachiLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/b771d233-9b32-4f70-baf2-6eeb0fff18d5.png" 
        alt="Tomodachi Logo" 
        className="h-8 w-8 mr-2"
      />
      <span className="font-heading font-bold text-lg text-tomodachi-black">
        T<span className="text-tomodachi-red">O</span>MODACHI
      </span>
    </div>
  );
};

export default TomodachiLogo;
