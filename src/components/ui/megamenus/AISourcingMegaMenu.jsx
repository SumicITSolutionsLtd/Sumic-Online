import React from 'react';
import { Link } from 'react-router-dom';
import ai_sourcing from '../../../media/ai_sourcing.jpg';

const AISourcingMegaMenu = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="mega mega-menu-ai absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-50 animate-in slide-in-from-top-2 duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Source smarter with <span className="text-green-600">Accio</span>
              </h2>
              <p className="text-lg text-gray-600">
                Leverage AI to find the perfect product match in seconds
              </p>
            </div>

            {/* Feature Cards - Horizontal Layout */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Matches from over</h4>
                    <p className="text-sm font-bold text-gray-900">100 million products</p>
                    <p className="text-xs text-gray-600">with precision</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Handles queries 3</h4>
                    <p className="text-sm font-bold text-blue-600">times as complex</p>
                    <p className="text-xs text-gray-600">in half the time</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900"><span className="font-bold text-purple-600">Verifies and cross-validates</span></h4>
                    <p className="text-xs text-gray-600">product information</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership and CTA */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Partnered with</span>
                <span className="font-bold text-green-500">SumicIT</span>
              </div>
              
              <Link
                to="/ai-sourcing"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Source now
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:pl-8">
            <div className="relative">
              <img
                src={ai_sourcing}
                alt="AI Sourcing Agent"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISourcingMegaMenu;