import React, { useState, useEffect } from 'react';
import { useCart } from '../../../context/CartContext';
import { XMarkIcon, CheckCircleIcon, CreditCardIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const CheckoutModal = ({ isOpen, onClose, cartItems, totalAmount }) => {
  const [step, setStep] = useState(1); // 1: Guest Info, 2: Payment, 3: Confirmation
  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Uganda'
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [mobileMoneyInfo, setMobileMoneyInfo] = useState({
    provider: '',
    phoneNumber: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleGuestInfoChange = (e) => {
    setGuestInfo({
      ...guestInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleMobileMoneyChange = (e) => {
    setMobileMoneyInfo({
      ...mobileMoneyInfo,
      [e.target.name]: e.target.value
    });
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  const handleProceedToPayment = () => {
    if (guestInfo.firstName && guestInfo.lastName && guestInfo.email && guestInfo.phone) {
      setStep(2);
    }
  };

  const handleProcessPayment = async () => {
    setIsProcessing(true);
    
    // Mock payment processing
    setTimeout(() => {
      const mockOrderNumber = 'SUM' + Date.now().toString().slice(-6);
      setOrderNumber(mockOrderNumber);
      setIsProcessing(false);
      setStep(3);
    }, 3000);
  };

  const handleCompleteOrder = () => {
    // Clear cart and close modal
    onClose();
    setStep(1);
    setGuestInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: 'Uganda'
    });
    setPaymentMethod('');
    setMobileMoneyInfo({
      provider: '',
      phoneNumber: ''
    });
    // Clear cart after successful order
    window.location.href = '/';
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Slide-out Panel */}
      <div className={`absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b bg-white sticky top-0 z-10">
          <h2 className="text-xl sm:text-2xl font-bold">Checkout</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-2">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-4 sm:px-6 py-4 border-b">
          <div className="flex items-center justify-center space-x-2 sm:space-x-4">
            <div className={`flex items-center ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium hidden sm:block">Guest Info</span>
            </div>
            <div className={`w-4 sm:w-8 h-0.5 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium hidden sm:block">Payment</span>
            </div>
            <div className={`w-4 sm:w-8 h-0.5 ${step >= 3 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${step >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium hidden sm:block">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="h-full overflow-y-auto scrollbar-hide pb-20">
          <div className="p-4 sm:p-6">
          {/* Step 1: Guest Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Guest Checkout Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={guestInfo.firstName}
                    onChange={handleGuestInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={guestInfo.lastName}
                    onChange={handleGuestInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={guestInfo.email}
                  onChange={handleGuestInfoChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={guestInfo.phone}
                  onChange={handleGuestInfoChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="+256 XXX XXX XXX"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address *</label>
                <textarea
                  name="address"
                  value={guestInfo.address}
                  onChange={handleGuestInfoChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your complete delivery address"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={guestInfo.city}
                    onChange={handleGuestInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select
                    name="country"
                    value={guestInfo.country}
                    onChange={handleGuestInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="Uganda">Uganda</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Rwanda">Rwanda</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleProceedToPayment}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold"
              >
                Proceed to Payment
              </button>
            </div>
          )}

          {/* Step 2: Payment Method */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Select Payment Method</h3>
              
              {/* Payment Options */}
              <div className="grid grid-cols-1 gap-4">
                {/* Mobile Money */}
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    paymentMethod === 'mobile_money' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handlePaymentMethodSelect('mobile_money')}
                >
                  <div className="flex items-center space-x-4">
                    <DevicePhoneMobileIcon className="h-10 w-10 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Mobile Money</h4>
                      <p className="text-sm text-gray-600">MTN, Airtel, Equity</p>
                    </div>
                  </div>
                </div>

                {/* Credit Card */}
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    paymentMethod === 'credit_card' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handlePaymentMethodSelect('credit_card')}
                >
                  <div className="flex items-center space-x-4">
                    {/* Card Icons */}
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      {/* Visa Card Icon */}
                      <div className="h-8 w-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-xs">VISA</span>
                      </div>
                      {/* Mastercard Icon */}
                      <div className="h-8 w-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-md flex items-center justify-center shadow-md">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Credit/Debit Card</h4>
                      <p className="text-sm text-gray-600">Visa, Mastercard</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Details Form */}
              {paymentMethod && (
                <div className="space-y-4 bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="font-semibold text-lg">Payment Details</h4>
                  
                  {paymentMethod === 'mobile_money' ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Money Provider</label>
                        <select
                          name="provider"
                          value={mobileMoneyInfo.provider}
                          onChange={handleMobileMoneyChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="">Select Provider</option>
                          <option value="mtn">MTN Mobile Money</option>
                          <option value="airtel">Airtel Money</option>
                          <option value="equity">Equity Bank</option>
                          <option value="centenary">Centenary Bank</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={mobileMoneyInfo.phoneNumber}
                          onChange={handleMobileMoneyChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="+256 XXX XXX XXX"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Order Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Order Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Items ({cartItems.length})</span>
                    <span>UGX {totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total</span>
                    <span className="text-green-600">UGX {totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 sticky bottom-0 bg-white p-4 sm:p-6 border-t -mx-4 sm:-mx-6">
                <button
                  onClick={() => setStep(1)}
                  className="w-full sm:flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-md font-semibold transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleProcessPayment}
                  disabled={!paymentMethod || (paymentMethod === 'mobile_money' && (!mobileMoneyInfo.provider || !mobileMoneyInfo.phoneNumber))}
                  className="w-full sm:flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-md font-semibold transition-colors"
                >
                  {isProcessing ? 'Processing Payment...' : 'Complete Payment'}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <CheckCircleIcon className="h-16 w-16 text-green-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h3>
                <p className="text-gray-600">Your order has been placed successfully</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Order Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Order Number:</span>
                    <span className="font-semibold">{orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Amount:</span>
                    <span className="font-semibold text-green-600">UGX {totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method:</span>
                    <span className="font-semibold">
                      {paymentMethod === 'mobile_money' 
                        ? `${mobileMoneyInfo.provider?.toUpperCase() || 'Mobile Money'} (${mobileMoneyInfo.phoneNumber})` 
                        : 'Credit/Debit Card'
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Address:</span>
                    <span className="font-semibold">{guestInfo.address}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">What's Next?</h4>
                <ul className="text-sm text-blue-700 space-y-1 text-left">
                  <li>• You'll receive an email confirmation shortly</li>
                  <li>• Our team will process your order within 24 hours</li>
                  <li>• You'll get tracking information once shipped</li>
                  <li>• Expected delivery: 3-5 business days</li>
                </ul>
              </div>

              <button
                onClick={handleCompleteOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold"
              >
                Continue Shopping
              </button>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
