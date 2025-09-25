import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { useCart } from '../../../context/CartContext';

const ProductCard = ({ product, viewMode = 'grid', onShowNotification }) => {
  const [isWishlisted, setIsWishlisted] = useState(product?.isWishlisted || false);
  const [imageLoading, setImageLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleWishlistToggle = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToCart({
      id: product?.id,
      title: product?.name,
      price: product?.priceRange?.min, // Using min price as the product price
      images: product?.images,
      // Add other necessary product details here if needed by your cart context
    });
    onShowNotification(`${product?.name} added to cart!`);
  };

  const handleRequestQuote = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    // Request quote logic
    console.log('Request quote for:', product?.id);
  };

  if (viewMode === 'list') {
    return (
      <Link 
        to={`/product-detail?id=${product?.id}`}
        className="block bg-card border border-border rounded-lg hover:shadow-card transition-smooth"
      >
        <div className="flex p-4 space-x-4">
          {/* Product Image */}
          <div className="flex-shrink-0 w-32 h-32 bg-muted rounded-lg overflow-hidden">
            <Image
              src={product?.images[0]}
              alt={product?.name}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoading(false)}
            />
            {imageLoading && (
              <div className="w-full h-full flex items-center justify-center">
                <Icon name="Loader2" size={24} className="animate-spin text-muted-foreground" />
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground truncate mb-2">
                  {product?.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {product?.description}
                </p>
                
                {/* Price and MOQ */}
                <div className="sumic_flex flex space-x-4 mb-3">
                  <div>
                    <span className="text-lg font-bold text-primary">
                      ${product?.priceRange?.min} - ${product?.priceRange?.max}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">/ piece</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    MOQ: {product?.moq} pieces
                  </div>
                </div>

                {/* Supplier Info */}
                <div className="sumic_flex flex items-left space-x-2 mb-3">
                  <Link 
                    to={`/supplier-profile?id=${product?.supplier?.id}`}
                    className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
                    onClick={(e) => e?.stopPropagation()}
                  >
                    {product?.supplier?.name}
                  </Link>
                  {/* country and ratings ommited for now...sorry */}

                  {/* <div className="sumic_left flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-warning fill-current" />
                    <span className="text-sm text-muted-foreground">
                      {product?.supplier?.rating} ({product?.supplier?.reviewCount})
                    </span>
                  </div> */}
                  {/* <span className="sumic_product_country text-sm text-muted-foreground">
                    {product?.supplier?.location}
                  </span> */}
                </div>

                {/* Certifications */}
                {/* {product?.certifications && product?.certifications?.length > 0 && (
                  <div className="flex items-center space-x-2 mb-3">
                    {product?.certifications?.slice(0, 3)?.map((cert, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-success/10 text-success text-xs rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                    {product?.certifications?.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{product?.certifications?.length - 3} more
                      </span>
                    )}
                  </div>
                )} */}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={handleWishlistToggle}
                className="p-2 hover:bg-muted rounded-full transition-smooth"
              >
                <Icon 
                  name="Heart" 
                  size={20} 
                  className={isWishlisted ? 'text-destructive fill-current' : 'text-muted-foreground'} 
                />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="sumic_flex flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleAddToCart}
                iconName="ShoppingCart"
                iconPosition="left"
              >
                Add to Cart
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleRequestQuote}
                iconName="MessageSquare"
                iconPosition="left"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid view
  return (
    <Link 
      to={`/product-detail?id=${product?.id}`}
      className="block bg-card border border-border rounded-lg hover:shadow-card transition-smooth group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        {/* Product Image */}
        <div className="relative mb-3">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <Image
              src={product?.images[0]}
              alt={product?.name}
              className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setImageLoading(false)}
            />
            {product?.images.length > 1 && (
              <Image
                src={product?.images[1]}
                alt={product?.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              />
            )}
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Loader2" size={24} className="animate-spin text-muted-foreground" />
              </div>
            )}
          </div>
          
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 p-2 bg-card/80 backdrop-blur-sm hover:bg-card rounded-full transition-smooth"
          >
            <Icon 
              name="Heart" 
              size={16} 
              className={isWishlisted ? 'text-destructive fill-current' : 'text-muted-foreground'} 
            />
          </button>

          {/* Badges */}
          <div className="absolute top-2 left-2 space-y-1">
            {product?.isNew && (
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                New
              </span>
            )}
            {product?.isFeatured && (
              <span className="px-2 py-1 bg-warning text-warning-foreground text-xs rounded-full">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-smooth">
            {product?.name}
          </h3>
          
          {/* Price and MOQ */}
          <div className="space-y-1">
            <div className="flex items-baseline space-x-1">
              <span className="text-lg font-bold text-primary">
                ${product?.priceRange?.min} - ${product?.priceRange?.max}
              </span>
              <span className="text-sm text-muted-foreground">/ piece</span>
            </div>
            <div className="text-sm text-muted-foreground">
              MOQ: {product?.moq} pieces
            </div>
          </div>

          {/* Supplier Info */}
          <div className="space-y-1">
            <Link 
              to={`/supplier-profile?id=${product?.supplier?.id}`}
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth block truncate"
              onClick={(e) => e?.stopPropagation()}
            >
              {product?.supplier?.name}
            </Link>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={12} className="text-warning fill-current" />
                <span className="text-xs text-muted-foreground">
                  {product?.supplier?.rating} ({product?.supplier?.reviewCount})
                </span>
              </div>
              {/* <span className="text-xs text-muted-foreground">
                {product?.supplier?.location}
              </span> */}
            </div>
          </div>

          {/* Certifications */}
          {/* {product?.certifications && product?.certifications?.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product?.certifications?.slice(0, 2)?.map((cert, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-success/10 text-success text-xs rounded-full"
                >
                  {cert}
                </span>
              ))}
              {product?.certifications?.length > 2 && (
                <span className="text-xs text-muted-foreground self-center">
                  +{product?.certifications?.length - 2}
                </span>
              )}
            </div>
          )} */}
        </div>

        {/* Action Buttons */}
        <div style={{flexDirection:"column"}} className="flex items-center space-x-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleAddToCart}
            iconName="ShoppingCart"
            iconPosition="left"
            fullWidth
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Add to Cart
          </Button>
          {/* <Button
            variant="default"
            size="sm"
            onClick={handleRequestQuote}
            iconName="MessageSquare"
            iconPosition="left"
            fullWidth >
            Quote
          </Button> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;