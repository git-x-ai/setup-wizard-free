import React from 'react';

const WelcomeSlide = ({ onNext }) => {
  return (
    <div className="slide-content h-full flex flex-col justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome!</h1>
        <p className="text-lg font-medium text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto">
          Welcome to Setup Wizard Free! This open-source setup wizard will help
          you get started quickly and efficiently.
        </p>
        <p className="text-base font-normal text-gray-700 leading-relaxed max-w-2xl mx-auto">
          I've put together this wizard to make your setup process easy and
          straightforward.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 text-center">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
            <svg
              className="w-5 h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 mb-2 text-base">
            3-5 Minutes Setup
          </h3>
          <p className="text-sm text-gray-600">
            Quick and efficient setup process.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 text-center">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
            <svg
              className="w-5 h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 mb-2 text-base">100% Safe</h3>
          <p className="text-sm text-gray-600">
            Completely secure and reliable.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 text-center">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
            <svg
              className="w-5 h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 mb-2 text-base">Fast Setup</h3>
          <p className="text-sm text-gray-600">
            Lightning-fast configuration process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSlide;
