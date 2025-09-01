import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedSelectionsMegaMenu = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="mega mega-menu-featured absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-50 animate-in slide-in-from-top-2 duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Featured Cards Section */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-6">
              
              {/* Top Ranking Card */}
              <Link
                to="/top-ranking"
                className="group bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-200 hover:border-gray-300"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-700 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                  Top ranking
                </h3>
              </Link>

              {/* New Arrivals Card */}
              <Link
                to="/new-arrivals"
                className="group bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-200 hover:border-gray-300 relative"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-700 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8v2m6-2v2" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                  New arrivals
                </h3>
                {/* NEW Badge */}
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </span>
              </Link>

              {/* Top Deals Card */}
              <Link
                to="/top-deals"
                className="group bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-200 hover:border-gray-300"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-700 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                  Top deals
                </h3>
              </Link>

            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <Link
                to="/dropshipping-center"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
              >
                Dropshipping center
              </Link>
              <Link
                to="/sample-center"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
              >
                Sample center
              </Link>
              <Link
                to="/fast-customization"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
              >
                Fast customization
              </Link>
              <Link
                to="/online-trade-show"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors py-2"
              >
                Online Trade Show
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturedSelectionsMegaMenu;