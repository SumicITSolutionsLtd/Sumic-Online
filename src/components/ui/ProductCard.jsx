import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({
  id,
  title,
  price,
  originalPrice,
  discountPrice,
  rating = 4.5,
  reviewCount = 1000,
  soldCount,
  images = [],
  badges = [],
  savings,
  promotions = [],
  link = `/product/${id}`,
  onAddToCart
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return price ? `UGX${price.toLocaleString()}` : '';
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">★</span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">☆</span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">★</span>
        );
      }
    }
    return stars;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const product = {
      id,
      title,
      price,
      originalPrice,
      images,
      badges,
      savings
    };
    
    addToCart(product);
    
    // Call the parent's onAddToCart callback if provided
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div 
      className="product-card bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-lg transition-all duration-300 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {/* Main Image */}
        <img
          src={images[currentImageIndex] || '/src/media/products/product_0.jpg'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs font-semibold text-white rounded ${
                badge.type === 'sale' ? 'bg-red-500' : 
                badge.type === 'new' ? 'bg-green-500' :
                badge.type === 'hot' ? 'bg-orange-500' :
                'bg-blue-500'
              }`}
            >
              {badge.text}
            </span>
          ))}
        </div>

        {/* Navigation Arrows (on hover) */}
        {images.length > 1 && isHovered && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Shopping Cart Icon */}
        {/* <div className="absolute top-2 right-2">
          <div className="bg-white rounded-full p-2 shadow-md">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div> */}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 relative">
        {/* Title */}
        <Link to={link} className="block">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-green-600 transition-colors">
            {title}
          </h3>
        </Link>

        {/* Price Section */}
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <span className="sm-text font-bold text-gray-900">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="sm-text text-gray-500 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          <div className='pricing_flex'>
{discountPrice && (
            <div className="text-xs text-red-500 font-medium">
              {formatPrice(discountPrice)} off on {formatPrice(originalPrice - discountPrice)}
            </div>
          )}
          
          {savings && (
            <div className="text-xs text-red-500 font-medium">
              Save {formatPrice(savings)}
            </div>
          )}
          </div>
          
        </div>

        {/* Rating and Sales */}
        <div className="mt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            {/* <div className="flex">
              {renderStars(rating)}
            </div>
            <span className="text-gray-600">{rating}</span> */}
            {/* <span className="text-gray-500">{reviewCount}+ sold</span> */}
          {/* {soldCount && (
            <span className="text-gray-500">{soldCount} sold</span>
          )} */}
          </div>
         
        </div>

        {/* Promotions */}
        {promotions.length > 0 && (
          <div className="mt-2">
            {promotions.map((promo, index) => (
              <div key={index} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                {promo}
              </div>
            ))}
          </div>
        )}

        {/* Hover Actions - Positioned absolutely to expand card */}
        <div className={`absolute left-0 right-0 bottom-0 bg-white border-t border-gray-200 transition-all duration-300 transform ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <div className="p-4 space-y-2">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-green-500 text-white py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
            >
              Add to Cart
            </button>
            {/* <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
              Similar items
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;