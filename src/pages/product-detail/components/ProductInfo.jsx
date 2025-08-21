import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductInfo = ({ product, onQuantityChange, onAddToCart, onRequestQuote }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(product?.moq);

  const handleQuantityChange = (quantity) => {
    if (quantity >= product?.moq) {
      setSelectedQuantity(quantity);
      onQuantityChange(quantity);
    }
  };

  const getCurrentPrice = () => {
    const tier = product?.priceTiers?.find(tier => 
      selectedQuantity >= tier?.minQuantity
    ) || product?.priceTiers?.[product?.priceTiers?.length - 1];
    return tier?.price;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })?.format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Product Title & Model */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
          {product?.name}
        </h1>
        <p className="text-muted-foreground">
          Model: <span className="font-medium">{product?.model}</span>
        </p>
      </div>
      {/* Trust Badges */}
      <div className="flex flex-wrap gap-2">
        {product?.badges?.map((badge, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
          >
            <Icon name="Shield" size={12} className="mr-1" />
            {badge}
          </span>
        ))}
      </div>
      {/* Pricing */}
      <div className="bg-muted/50 rounded-lg p-4">
        <div className="flex items-baseline space-x-2 mb-3">
          <span className="text-3xl font-bold text-foreground">
            {formatCurrency(getCurrentPrice())}
          </span>
          <span className="text-muted-foreground">per unit</span>
        </div>

        {/* Price Tiers */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Volume Pricing:</p>
          {product?.priceTiers?.map((tier, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {tier?.minQuantity}+ units
              </span>
              <span className="font-medium">
                {formatCurrency(tier?.price)}/unit
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* MOQ & Lead Time */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Package" size={16} className="text-primary" />
            <span className="text-sm font-medium">MOQ</span>
          </div>
          <p className="text-lg font-bold">{product?.moq?.toLocaleString()} units</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Clock" size={16} className="text-primary" />
            <span className="text-sm font-medium">Lead Time</span>
          </div>
          <p className="text-lg font-bold">{product?.leadTime}</p>
        </div>
      </div>
      {/* Quantity Selector */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          Quantity (Min: {product?.moq?.toLocaleString()})
        </label>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleQuantityChange(selectedQuantity - 100)}
            disabled={selectedQuantity <= product?.moq}
            className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon name="Minus" size={16} />
          </button>
          <input
            type="number"
            value={selectedQuantity}
            onChange={(e) => handleQuantityChange(parseInt(e?.target?.value) || product?.moq)}
            min={product?.moq}
            className="w-24 px-3 py-2 border border-border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={() => handleQuantityChange(selectedQuantity + 100)}
            className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-muted"
          >
            <Icon name="Plus" size={16} />
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Total: {formatCurrency(getCurrentPrice() * selectedQuantity)}
        </p>
      </div>
      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant="default"
          fullWidth
          iconName="ShoppingCart"
          iconPosition="left"
          onClick={() => onAddToCart(selectedQuantity)}
        >
          Add to Cart
        </Button>
        <Button
          variant="outline"
          fullWidth
          iconName="MessageSquare"
          iconPosition="left"
          onClick={() => onRequestQuote(selectedQuantity)}
        >
          Request Quote
        </Button>
      </div>
      {/* Additional Info */}
      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="Truck" size={16} className="text-primary" />
          <span>Free shipping on orders over $5,000</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="Shield" size={16} className="text-primary" />
          <span>Trade Assurance protected</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="RotateCcw" size={16} className="text-primary" />
          <span>30-day return policy</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;