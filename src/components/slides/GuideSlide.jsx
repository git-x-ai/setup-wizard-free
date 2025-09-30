import React, { useState } from 'react';

const GuideSlide = ({ onNext }) => {
  const [copiedLink, setCopiedLink] = useState(null);

  const copyToClipboard = async (text, linkName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLink(linkName);
      // Reset the green color after 2 seconds
      setTimeout(() => {
        setCopiedLink(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="slide-content">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Setup Guide</h1>
        <p className="text-lg font-medium text-gray-600 leading-relaxed">
          Follow these steps to get your system ready. Each step is designed to
          be quick and safe.
        </p>
      </div>

      {/* Manual Cleanup Instructions */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Manual System Cleanup
          </h3>
          <p className="text-gray-600 font-medium mb-6 max-w-2xl mx-auto">
            To completely remove all traces of Cursor and clean your system,
            follow these manual steps:
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-4 text-center">
                  Recommended Uninstallers
                </h4>
                <ul className="space-y-2 text-gray-700 text-left">
                  <li>
                    • <strong>BCUninstaller</strong> - Free, powerful
                  </li>
                  <li>
                    • <strong>Geek Uninstaller</strong> - Lightweight
                  </li>
                  <li>
                    • <strong>Revo Uninstaller</strong> - Advanced cleanup
                  </li>
                  <li>
                    • <strong>IObit Uninstaller</strong> - User-friendly
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-4 text-center">
                  Manual Cleanup Steps
                </h4>
                <ul className="space-y-2 text-gray-700 text-left">
                  <li>• Uninstall Cursor with your preferred uninstaller</li>
                  <li>• Clear browser data, cache, and cookies</li>
                  <li>• Run IP flush and DNS flush commands</li>
                  <li>• Remove all temporary files and folders</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 text-left">
              <h4 className="font-semibold text-white mb-3">
                Command Line Instructions
              </h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <p className="text-purple-300 mb-1">
                    IP Configuration Reset:
                  </p>
                  <code className="block bg-gray-800 p-2 rounded text-green-400 font-mono">
                    ipconfig /release
                    <br />
                    ipconfig /renew
                    <br />
                    ipconfig /flushdns
                  </code>
                </div>
                <div>
                  <p className="text-purple-300 mb-1">Clear Temporary Files:</p>
                  <code className="block bg-gray-800 p-2 rounded text-green-400 font-mono">
                    del /q /f /s %temp%\*
                    <br />
                    rmdir /s /q %temp%
                  </code>
                </div>
                <div>
                  <p className="text-purple-300 mb-1">
                    Clear Browser Cache (Chrome):
                  </p>
                  <code className="block bg-gray-800 p-2 rounded text-green-400 font-mono">
                    chrome://settings/clearBrowserData
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOR Browser Links - Always visible */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Step 1: TOR Browser Setup
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 mb-6 text-center">
            Navigate to these links in your TOR browser:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Credit Card Generator
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Generate test credit card numbers
              </p>
              <div className="flex items-center justify-between">
                <code className="text-sm text-gray-700 font-mono bg-white px-3 py-1 rounded border">
                  namso-gen.com
                </code>
                <button
                  onClick={() =>
                    copyToClipboard(
                      'https://namso-gen.com/?tab=advance&network=random',
                      'namso'
                    )
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    copiedLink === 'namso'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  {copiedLink === 'namso' ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Temporary Email
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Create disposable email addresses
              </p>
              <div className="flex items-center justify-between">
                <code className="text-sm text-gray-700 font-mono bg-white px-3 py-1 rounded border">
                  temp-mail.org
                </code>
                <button
                  onClick={() =>
                    copyToClipboard('https://temp-mail.org/en/', 'temp')
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    copiedLink === 'temp'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  {copiedLink === 'temp' ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Instructions */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Step 2: Manual Registration
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 mb-6 text-center">
            Follow these manual steps for registration:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Open TOR Browser
              </h4>
              <p className="text-sm text-gray-600">
                Use your TOR browser to navigate to the registration page.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Use Temp Email
              </h4>
              <p className="text-sm text-gray-600">
                Copy the temporary email address from your temp-mail.org tab.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Complete Registration
              </h4>
              <p className="text-sm text-gray-600">
                Fill out the registration form with the temporary email address.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Verify Email</h4>
              <p className="text-sm text-gray-600">
                Check your temporary email for verification and complete the
                process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Process */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Step 3: Checkout Process
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6 text-center">
            Once you sign up, click "Continue to start free trial" which will
            bring you to the checkout page.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Uncheck Save Information
              </h4>
              <p className="text-sm text-gray-600">
                At the bottom of the checkout page, uncheck the "Save
                information" box.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Fill Address Information
              </h4>
              <p className="text-sm text-gray-600">
                Enter a random address in the address box (autofill sometimes
                works if you just enter a few random numbers).
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Enter Random Name
              </h4>
              <p className="text-sm text-gray-600">
                Enter any random name in the name box.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Leave Card Info Blank
              </h4>
              <p className="text-sm text-gray-600">
                Leave the card information fields completely blank for now.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Generation */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Step 4: Card Generation & Activation
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Go to NamsoGen Tab
              </h4>
              <p className="text-sm text-gray-600">
                In your TOR browser, go to the NamsoGen tab.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Enter BIN Number
              </h4>
              <p className="text-sm text-gray-600">
                In the BIN tab, enter:{' '}
                <code className="bg-white px-2 py-1 rounded text-xs border">
                  552461xxxxxxxxxx
                </code>{' '}
                and then click generate.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Try Each Line in Order
              </h4>
              <p className="text-sm text-gray-600">
                Try each line in the Cursor checkout page as it goes in order:
                card info, expiration, CVV. If one doesn't work, go to another.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Continue with Free Trial
              </h4>
              <p className="text-sm text-gray-600">
                Once you fill out all the information, click the button at the
                bottom of the page to continue with the free trial.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cursor Installation */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Step 5: Cursor Installation
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Download Cursor
              </h4>
              <p className="text-sm text-gray-600">
                After successful activation, download the latest version of
                Cursor from the website you're on and install it as normal.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Open & Close Cursor
              </h4>
              <p className="text-sm text-gray-600">
                Once Cursor is installed, open it and then close it. Do NOT
                login yet.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Run VIP Reset Script
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Run your favorite Cursor VIP reset script like any one of these:
              </p>
              <div className="space-y-1 mb-3">
                <a
                  href="https://github.com/yeongpin/cursor-free-vip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-purple-600 hover:text-purple-800 text-xs underline transition-colors"
                >
                  @cursor-free-vip
                </a>
                <a
                  href="https://github.com/FilippoDeSilva/cursor-ai-bypass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-purple-600 hover:text-purple-800 text-xs underline transition-colors"
                >
                  @cursor-ai-bypass
                </a>
                <a
                  href="https://github.com/ultrasev/cursor-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-purple-600 hover:text-purple-800 text-xs underline transition-colors"
                >
                  @cursor-reset
                </a>
              </div>
              <p className="text-sm text-gray-600">
                Run the machine ID reset and if it has an option to bypass token
                limits use that, and click stop updates as well (those two are
                optional though).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Login */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Step 6: Final Setup
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Open Cursor</h4>
              <p className="text-sm text-gray-600">
                Open Cursor again after running the VIP tool.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Press Login</h4>
              <p className="text-sm text-gray-600">
                Press the login button in Cursor.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Allow Login in Chrome
              </h4>
              <p className="text-sm text-gray-600">
                Allow the login in your Chrome browser when prompted.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl text-center shadow-sm">
            <h4 className="font-bold text-purple-800 mb-3 text-xl">
              🎉 Setup Complete!
            </h4>
            <p className="text-purple-700 text-base">
              You're all done! You can now proceed to slide 3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSlide;
