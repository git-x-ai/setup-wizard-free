import React, { useState } from 'react';
import TermsModal from './TermsModal';

const TitleBar = () => {
  const [showTerms, setShowTerms] = useState(false);

  const handleClose = () => {
    if (window.electronAPI) {
      window.electronAPI.closeWindow();
    }
  };

  const handleMinimize = () => {
    if (window.electronAPI) {
      window.electronAPI.minimizeWindow();
    }
  };

  const handleMaximize = () => {
    if (window.electronAPI) {
      window.electronAPI.maximizeWindow();
    }
  };

  const handleTermsToggle = () => {
    setShowTerms(!showTerms);
  };

  const handleTermsAccept = () => {
    setShowTerms(false);
  };

  const handleRestoreClick = () => {
    if (window.electronAPI && window.electronAPI.openSystemRestore) {
      window.electronAPI.openSystemRestore();
    }
  };

  return (
    <>
      <div className="drag-area bg-white/80 backdrop-blur-sm border-b border-gray-200/50 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button
            onClick={handleClose}
            className="no-drag w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
          />
          <button
            onClick={handleMinimize}
            className="no-drag w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
          />
          <button
            onClick={handleMaximize}
            className="no-drag w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
          />
        </div>
        <div className="text-sm font-medium text-gray-600">
          Setup Wizard Free
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleRestoreClick}
            className="no-drag p-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
            title="Open System Restore"
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
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
          </button>
          <button
            onClick={handleTermsToggle}
            className="no-drag p-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
            title="View Terms & Conditions"
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
          <a
            href="https://github.com/git-x-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="no-drag p-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
            title="Visit GitHub Profile"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
      {showTerms && <TermsModal onAccept={handleTermsAccept} />}
    </>
  );
};

export default TitleBar;
