import React from 'react';
import WelcomeSlide from './slides/WelcomeSlide';
import GuideSlide from './slides/GuideSlide';
import FinishedSlide from './slides/FinishedSlide';

const SlideContainer = ({ currentSlide, onNext, onPrev }) => {
  return (
    <div className="relative h-full flex flex-col">
      {currentSlide === 1 && <WelcomeSlide onNext={onNext} />}
      {currentSlide === 2 && <GuideSlide onNext={onNext} />}
      {currentSlide === 3 && <FinishedSlide />}
    </div>
  );
};

export default SlideContainer;
