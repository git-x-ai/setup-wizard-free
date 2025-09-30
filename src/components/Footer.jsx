import React from 'react';
import Navigation from './Navigation';

const Footer = ({ currentSlide, totalSlides, onNext, onPrev }) => {
  return (
    <div className="bg-white/40 backdrop-blur-sm border-t border-gray-200/50 px-8 py-4">
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <span>
            Step {currentSlide} of {totalSlides}
          </span>
          <div className="flex space-x-1">
            {Array.from({ length: totalSlides }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i + 1 <= currentSlide ? 'bg-purple-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows in subtle pill container */}
        <div className="bg-white/60 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm border border-white/50">
          <Navigation
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onNext={onNext}
            onPrev={onPrev}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
