import React from 'react'
import "./trade_confidence.css"

const TradeConfidence = () => {
  return (
    <div  className="call-us-trade-confidence min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="trade_title_container">
          <h1 className="trade_title">
            Trade with confidence from production quality to purchase protection
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Verified Supplier Section */}
          <div className="flex-1 bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Ensure production quality with
            </h2>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-green-100/70 text-green-700 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </span>
              Verified Supplier
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.
            </p>
            <div className="flex space-x-6 mt-8">
             
              <button className="text-green-700 font-medium hover:text-green-800 transition-colors">
                Learn more
              </button>
            </div>
          </div>
          
          {/* Trade Assurance Section */}
          <div className="flex-1 bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Protect your purchase with
            </h2>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-green-100/70 text-green-700 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </span>
              Trade Assurance
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.
            </p>
            <div className="flex space-x-6 mt-8">
     
              <button className="text-green-700 font-medium hover:text-green-800 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeConfidence;