
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
      <img 
        src="/lovable-uploads/387644a2-1006-4f46-842a-3891b7ebc33d.png" 
        alt="Tomodachi Text" 
        className="h-6"
      />
    </div>
  );
};

export default TomodachiLogo;
