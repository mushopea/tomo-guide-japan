
import React from 'react';

interface TomodachiLogoProps {
  className?: string;
}

const TomodachiLogo: React.FC<TomodachiLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="rounded-full bg-tomodachi-light-gray p-1 mr-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="white" stroke="black" strokeWidth="1.5"/>
          <path d="M8 14C8.5 15.5 10 16.5 12 16.5C14 16.5 15.5 15.5 16 14" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="8" cy="10" r="1.5" fill="black"/>
          <circle cx="16" cy="10" r="1.5" fill="black"/>
        </svg>
      </div>
      <span className="font-heading font-bold text-lg text-tomodachi-black">TOMODACHI</span>
    </div>
  );
};

export default TomodachiLogo;
