import React from 'react';
import { Link } from 'react-router-dom';

const MoreFromSumicMegaMenu = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="mega mega-menu-more-sumic absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-50 animate-in slide-in-from-top-2 duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Sumic <span className="text-green-600">IT Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
A digitally empowered world where technology uplifts businesses and communities.      
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
             Sumic IT Solutions Ltd is a forward thinking Information Technology company headquartered in
Uganda, with operations spanning Africa and Asia. We are committed to driving digital
transformation for Micro, Small, and Medium Enterprises (MSMEs) and Small and Medium
Enterprises (SMEs).
              </p>
            </div>

            {/* Academy Features - Horizontal Layout */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Digital Skills</h4>
                    <p className="text-sm font-bold text-green-600">Training Programs</p>
                    <p className="text-xs text-gray-600">for emerging markets</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Tech Solutions</h4>
                    <p className="text-sm font-bold text-blue-600">for MSMEs & SMEs</p>
                    <p className="text-xs text-gray-600">across Africa & Asia</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900"><span className="font-bold text-purple-600">Innovation Hub</span></h4>
                    <p className="text-xs text-gray-600">driving digital transformation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            {/* <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900">Our Mission</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                We believe in harnessing the power of technology to address some of the most 
                pressing challenges faced by underserved communities and businesses in emerging 
                markets. Our solutions are designed to enhance efficiency, promote scalability, 
                and foster growth across diverse sectors.
              </p>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex space-x-4">

              <a
                href="https://sumicinternational.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Explore Academy
              </a>
            </div>
          </div>

          {/* Right Services Section */}
          <div className="lg:pl-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h3>
              <div className="space-y-4">
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-green-600">Mobile Application Development</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-green-600">Software Development</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                   <span className="text-sm font-medium text-green-600">AI Model Development</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-green-600">ITES &a BPO (Information Technology Enabled Services & Business Process Outsourcing)</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                   <span className="text-sm font-medium text-green-600">Digital Marketing</span>
                </div>
      
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-green-700">Spanning Africa & Asia</span>
                </div>
              </div>
            </div>
            
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFromSumicMegaMenu;
