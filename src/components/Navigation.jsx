import React from 'react';

const Navigation = ({ currentSlide, totalSlides, onNext, onPrev }) => {
  const canGoBack = currentSlide > 1;
  const canGoForward = currentSlide < totalSlides;

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={onPrev}
        disabled={!canGoBack}
        className={`no-drag p-1 transition-all duration-300 ${
          canGoBack
            ? 'hover:text-purple-600 text-gray-600'
            : 'opacity-30 cursor-not-allowed text-gray-400'
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <button
        onClick={onNext}
        disabled={!canGoForward}
        className={`no-drag p-1 transition-all duration-300 ${
          canGoForward
            ? 'hover:text-purple-600 text-gray-600'
            : 'opacity-30 cursor-not-allowed text-gray-400'
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Navigation;
