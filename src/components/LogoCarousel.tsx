
import React from 'react';
import './LogoCarousel.css';

const LogoCarousel = () => {
  const logos = [
    { name: 'Globant', width: '120px' },
    { name: 'Mercado Libre', width: '140px' },
    { name: 'Franchising Company', width: '150px' },
    { name: 'Data Center', width: '120px' },
    { name: 'Macro', width: '130px' },
    { name: 'Globant', width: '120px' }, // Duplicate for seamless loop
  ];

  return (
    <div className="w-full overflow-hidden bg-black py-8">
      <div className="flex items-center justify-center mb-6">
        <h3 className="text-white text-lg font-medium">Colaboramos con</h3>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll-left space-x-12">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16"
              style={{ minWidth: logo.width }}
            >
              <div className="text-white font-semibold text-center opacity-70 hover:opacity-100 transition-opacity">
                {logo.name}
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16"
              style={{ minWidth: logo.width }}
            >
              <div className="text-white font-semibold text-center opacity-70 hover:opacity-100 transition-opacity">
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
