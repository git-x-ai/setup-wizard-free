import React, { useState } from 'react';
import TitleBar from './components/TitleBar';
import SlideContainer from './components/SlideContainer';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-violet-100 h-screen flex flex-col">
      <TitleBar />
      <div className="main-content flex-1">
        <div className="max-w-2xl mx-auto h-full flex flex-col">
          <SlideContainer
            currentSlide={currentSlide}
            onNext={nextSlide}
            onPrev={prevSlide}
          />
        </div>
      </div>
      <Footer
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
}

export default App;
