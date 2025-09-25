import React, { useState } from 'react';
import { X, Code, AlertTriangle } from 'lucide-react';

const DevelopmentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="dev-banner fixed bottom-4 left-4 z-50 max-w-sm">
      <div className="bg-green-500 text-white rounded-lg shadow-2xl border border-green-600">
        <div className="p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                <Code className="w-4 h-4" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Under Development</h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="flex-shrink-0 ml-2 text-green-200 hover:text-white transition-colors"
                  aria-label="Close banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-green-100 mt-1 leading-relaxed">
                This website is currently in development. Some features may not work as expected.
              </p>
              <div className="flex items-center mt-2 text-xs text-green-200">
                <AlertTriangle className="w-3 h-3 mr-1" />
                <span>Beta Version</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated pulse dot */}
        <div className="absolute -top-1 -right-1">
          <div className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentBanner;