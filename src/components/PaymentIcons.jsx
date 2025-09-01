import React from 'react';

const PaymentIcons = {
  Visa: ({ className = "", size = 40 }) => (
    <svg
      width={size}
      height={size * 0.625}
      viewBox="0 0 40 25"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="25" rx="4" fill="#1A1F71" stroke="#E5E7EB" strokeWidth="0.5" />
      <g transform="translate(8, 7)">
        <path
          d="M7.5 2L6.2 9H4.8L6.1 2H7.5ZM13.8 2L10.5 9H9.2L11.5 2H13.8ZM17.8 2C18.4 2 18.8 2.2 19 2.6C19.2 3 19.1 3.5 18.8 4L17.8 9H16.4L17.3 4.5C17.4 4.2 17.3 4 17.1 3.9C16.9 3.8 16.6 3.8 16.3 3.8H15.5L14.6 9H13.2L15 2H17.8ZM3.5 2L2.2 9H0.8L2.1 2H3.5Z"
          fill="white"
        />
        <path
          d="M20 2L19.5 4.5H21L20.7 6H19.2L18.8 8H20.5L20.2 9.5H17L19 2H20Z"
          fill="white"
        />
      </g>
    </svg>
  ),

  Mastercard: ({ className = "", size = 40 }) => (
    <svg
      width={size}
      height={size * 0.625}
      viewBox="0 0 40 25"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="25" rx="4" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
      <circle cx="15" cy="12.5" r="6" fill="#EB001B" />
      <circle cx="25" cy="12.5" r="6" fill="#F79E1B" />
      <path
        d="M20 7.5C21.2 8.6 22 10.4 22 12.5C22 14.6 21.2 16.4 20 17.5C18.8 16.4 18 14.6 18 12.5C18 10.4 18.8 8.6 20 7.5Z"
        fill="#FF5F00"
      />
    </svg>
  ),

  JCB: ({ className = "", size = 40 }) => (
    <svg
      width={size}
      height={size * 0.625}
      viewBox="0 0 40 25"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="25" rx="4" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
      <g transform="translate(4, 8)">
        <rect x="0" y="0" width="8" height="9" rx="1" fill="#005BAC" />
        <rect x="10" y="0" width="8" height="9" rx="1" fill="#CC092F" />
        <rect x="20" y="0" width="8" height="9" rx="1" fill="#1A6C33" />
        <text x="4" y="6.5" fill="white" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">J</text>
        <text x="14" y="6.5" fill="white" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">C</text>
        <text x="24" y="6.5" fill="white" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">B</text>
      </g>
    </svg>
  ),

  AmericanExpress: ({ className = "", size = 40 }) => (
    <svg
      width={size}
      height={size * 0.625}
      viewBox="0 0 40 25"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="25" rx="4" fill="#006FCF" stroke="#E5E7EB" strokeWidth="0.5" />
      <g transform="translate(6, 8)">
        <rect x="0" y="0" width="28" height="9" fill="#006FCF" />
        <path
          d="M2 2H8L9.5 4.5L11 2H17V7H11L9.5 4.5L8 7H2V2Z"
          fill="white"
        />
        <text x="19" y="6.5" fill="white" fontSize="4" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">AMEX</text>
      </g>
    </svg>
  )
};

export default PaymentIcons;