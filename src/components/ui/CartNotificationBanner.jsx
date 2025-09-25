import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

const CartNotificationBanner = ({ 
  isVisible, 
  message, 
  productName, 
  onClose, 
  duration = 3000,
  offsetTop = 88
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          onClose();
        }, 300); // Wait for animation to complete
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed left-1/2 transform -translate-x-1/2 w-full max-w-sm mx-4"
      style={{ top: offsetTop, zIndex: 2000 }}
    >
      <div
        className={`bg-white border border-green-200 rounded-lg shadow-lg p-4 transition-all duration-300 ${
          isAnimating 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-2 scale-95'
        }`}
      >
        <div className="flex items-start space-x-3">
          {/* Success Icon */}
          <div className="flex-shrink-0">
            <CheckCircleIcon className="h-6 w-6 text-green-500" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              {message || 'Item added to cart!'}
            </p>
            {productName && (
              <p className="text-xs text-gray-600 mt-1 truncate">
                {productName}
              </p>
            )}
          </div>
          
          {/* Close Button */}
          <button
            onClick={() => {
              setIsAnimating(false);
              setTimeout(() => onClose(), 300);
            }}
            className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div 
            className="bg-green-500 h-1 rounded-full transition-all duration-300 ease-linear"
            style={{
              width: isAnimating ? '100%' : '0%',
              transitionDuration: `${duration}ms`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartNotificationBanner;
