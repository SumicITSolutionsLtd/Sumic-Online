import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenterMegaMenu = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="mega mega-menu-help-center absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-50 animate-in slide-in-from-top-2 duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Main Help Cards Section */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
              
              {/* For Buyers Card */}
              <Link
                to="/help/buyers"
                className="group bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-200 hover:border-gray-300"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-700 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6M8 11H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                  For buyers
                </h3>
              </Link>

              {/* For Suppliers Card */}
              <Link
                to="/help/suppliers"
                className="group bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-200 hover:border-gray-300"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-700 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                  For suppliers
                </h3>
              </Link>

            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <Link
                to="/help/dispute"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
              >
                Open a dispute
              </Link>
              <Link
                to="/help/report-ipr"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
              >
                Report IPR infringement
              </Link>
              <Link
                to="/help/report-abuse"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors py-2"
              >
                Report abuse
              </Link>
            </div>
            
            {/* Additional Help Section */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Quick Help</h4>
              <div className="space-y-2">
                <Link
                  to="/help/faq"
                  className="block text-xs text-gray-600 hover:text-green-600 transition-colors"
                >
                  Frequently Asked Questions
                </Link>
                <Link
                  to="/help/contact"
                  className="block text-xs text-gray-600 hover:text-green-600 transition-colors"
                >
                  Contact Customer Service
                </Link>
                <Link
                  to="/help/guide"
                  className="block text-xs text-gray-600 hover:text-green-600 transition-colors"
                >
                  User Guide & Tutorials
                </Link>
                <Link
                  to="/help/policies"
                  className="block text-xs text-gray-600 hover:text-green-600 transition-colors"
                >
                  Terms & Policies
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HelpCenterMegaMenu;