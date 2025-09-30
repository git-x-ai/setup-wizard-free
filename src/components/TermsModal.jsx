import React, { useState } from 'react';

const TermsModal = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('tos');

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

  const handleAccept = () => {
    setIsVisible(false);
    onAccept();
  };

  if (!isVisible) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'tos':
        return (
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-2">
                Free Open Source Application
              </h3>
              <p className="text-purple-700">
                Setup Wizard Free is an open-source application provided free of
                charge. This is a community-driven project designed to help
                users attain their free trial.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Data Loss Disclaimer
              </h3>
              <p>
                We are not responsible for any data loss, including but not
                limited to browser data, machine IDs, coding progress, or any
                other information that may be affected by the use of this
                application.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Application Safety
              </h3>
              <p>
                This application is a trusted and safe tool. We are committed to
                providing a legitimate service and this is not a scam. The
                application has been designed with user safety in mind.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                User Responsibility
              </h3>
              <p>
                Users are responsible for backing up any important data before
                using this application. We recommend creating system restore
                points and backing up important files.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Terms of Use</h3>
              <p>
                By using this application, you agree to use it responsibly and
                in accordance with all applicable laws and regulations. Misuse
                of this application is strictly prohibited.
              </p>
            </div>
          </div>
        );
      case 'license':
        return (
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-2">
                DUAL LICENSE - SETUP WIZARD FREE
              </h3>
              <p className="text-purple-700 font-medium">
                Copyright (c) 2025 CCC Suite
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                This software is dual-licensed under the following terms:
              </h3>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                === FREE USE LICENSE ===
              </h3>
              <p>
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software for personal,
                educational, and non-commercial use without restriction,
                including without limitation the rights to use, copy, modify,
                merge, publish, distribute, sublicense, and/or sell copies of
                the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
              </p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.
                </li>
                <li>
                  Any modifications to the Software must be contributed back to
                  the original project via pull request or direct notification
                  to the original author.
                </li>
                <li>
                  Commercial use is strictly prohibited without explicit written
                  permission from the copyright holder.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                === COMMERCIAL USE RESTRICTIONS ===
              </h3>
              <p>
                Commercial use of this software is prohibited without explicit
                written permission from CCC Suite. This includes but is not
                limited to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Selling the software or any derivative works</li>
                <li>Using the software in commercial products or services</li>
                <li>Distributing the software for commercial purposes</li>
                <li>Any use that generates revenue or profit</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                === MODIFICATION REQUIREMENTS ===
              </h3>
              <p>If you modify this software:</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>
                  You MUST notify the original author (CCC Suite) before making
                  changes
                </li>
                <li>
                  You MUST submit changes via pull request to the original
                  repository
                </li>
                <li>You MUST maintain the original copyright notice</li>
                <li>You MUST clearly indicate your modifications</li>
                <li>You MAY NOT remove or alter the original license terms</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                === CONTRIBUTION REQUIREMENTS ===
              </h3>
              <p>
                Contributions to this project are welcome but must follow these
                guidelines:
              </p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>All contributions must be submitted via pull request</li>
                <li>Contributors must agree to the same dual license terms</li>
                <li>All code must be original or properly attributed</li>
                <li>
                  No contributions that violate the commercial use restrictions
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                === DISCLAIMER ===
              </h3>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                === CONTACT ===
              </h3>
              <p>
                For commercial licensing inquiries or permission requests,
                contact: CCC Suite - [Contact Information]
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 className="font-semibold text-yellow-800 mb-2">
                This license ensures that:
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-yellow-700">
                <li>
                  The software remains free for personal and educational use
                </li>
                <li>Commercial use requires explicit permission</li>
                <li>All modifications must be contributed back</li>
                <li>
                  The original author maintains control over commercial use
                </li>
                <li>Contributors must follow the same terms</li>
              </ul>
            </div>
          </div>
        );
      case 'support':
        return (
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-3 text-lg">
                Need Help?
              </h3>
              <p className="text-blue-700 mb-4">
                If you need help with Setup Wizard Free, please join our Discord
                community. Our team and community members are here to assist you
                with any issues you might encounter.
              </p>
              <a
                href="https://discord.gg/SW83FxMm6J"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Community Support
              </h3>
              <p>
                Our Discord community is the best place to get help. You'll find
                other users who have encountered similar issues and can share
                their solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Response Time
              </h3>
              <p>
                We typically respond to support requests within 24 hours. For
                urgent issues, please mention it in your message.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Before Asking for Help
              </h3>
              <p>
                Please check if your issue has already been discussed in the
                Discord server. Also, make sure you're using the latest version
                of the application.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <style>
        {`
          .terms-modal-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .terms-modal-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .terms-modal-scroll::-webkit-scrollbar-thumb {
            background: #d1d5db;
            border-radius: 3px;
          }
          .terms-modal-scroll::-webkit-scrollbar-thumb:hover {
            background: #9ca3af;
          }
        `}
      </style>
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        {/* Window Controls */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 px-4 py-3 flex justify-between items-center flex-shrink-0">
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
            Terms & Conditions
          </div>
          <div className="w-12"></div>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Header with tabs */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex-shrink-0">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('tos')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'tos'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                Terms of Service
              </button>
              <button
                onClick={() => setActiveTab('license')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'license'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                License
              </button>
              <button
                onClick={() => setActiveTab('support')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'support'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                Support
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto flex-1 terms-modal-scroll">
            {renderContent()}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-center flex-shrink-0">
            <button
              onClick={handleAccept}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsModal;
