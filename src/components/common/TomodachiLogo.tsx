
import React from 'react';

interface TomodachiLogoProps {
  className?: string;
}

const TomodachiLogo: React.FC<TomodachiLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/b0c798af-b1ff-458b-be27-7ad7f7ede331.png" 
        alt="Tomodachi Logo" 
        className="h-8 w-8 mr-2"
        loading="eager" 
        onLoad={(e) => e.currentTarget.classList.add('loaded')}
      />
      <img 
        src="/lovable-uploads/387644a2-1006-4f46-842a-3891b7ebc33d.png" 
        alt="Tomodachi Text" 
        className="h-6"
        loading="eager"
        onLoad={(e) => e.currentTarget.classList.add('loaded')}
      />
    </div>
  );
};

export default TomodachiLogo;
