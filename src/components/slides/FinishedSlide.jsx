import React from 'react';

const FinishedSlide = () => {
  return (
    <div className="slide-content h-full flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Setup Complete!
        </h1>
        <p className="text-lg font-medium text-gray-600 mb-6 leading-relaxed">
          Your system is now optimized and ready to use. You've successfully
          completed all the setup steps.
        </p>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h2>
          <div className="space-y-3 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold text-xs">1</span>
              </div>
              <p className="text-sm font-normal text-gray-600">
                Your Cursor AI is now fully activated and ready to use
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold text-xs">2</span>
              </div>
              <p className="text-sm font-normal text-gray-600">
                Start coding with AI assistance and boost your productivity
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold text-xs">3</span>
              </div>
              <p className="text-sm font-normal text-gray-600">
                Enjoy your new development experience!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedSlide;
