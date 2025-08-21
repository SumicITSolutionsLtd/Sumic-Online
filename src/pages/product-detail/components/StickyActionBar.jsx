import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const StickyActionBar = ({ 
  product, 
  selectedQuantity, 
  onQuantityChange, 
  onAddToCart, 
  onRequestQuote,
  isVisible 
}) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })?.format(amount);
  };

  const getCurrentPrice = () => {
    const tier = product?.priceTiers?.find(tier => 
      selectedQuantity >= tier?.minQuantity
    ) || product?.priceTiers?.[product?.priceTiers?.length - 1];
    return tier?.price;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-modal lg:hidden">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between space-x-4">
          {/* Price Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline space-x-2">
              <span className="text-lg font-bold text-foreground">
                {formatCurrency(getCurrentPrice())}
              </span>
              <span className="text-xs text-muted-foreground">per unit</span>
            </div>
            <p className="text-xs text-muted-foreground">
              MOQ: {product?.moq?.toLocaleString()} units
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onQuantityChange(Math.max(product?.moq, selectedQuantity - 100))}
              disabled={selectedQuantity <= product?.moq}
              className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-muted disabled:opacity-50"
            >
              <Icon name="Minus" size={14} />
            </button>
            <span className="text-sm font-medium min-w-[3rem] text-center">
              {selectedQuantity?.toLocaleString()}
            </span>
            <button
              onClick={() => onQuantityChange(selectedQuantity + 100)}
              className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-muted"
            >
              <Icon name="Plus" size={14} />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="MessageSquare"
              onClick={() => onRequestQuote(selectedQuantity)}
            >
              Quote
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="ShoppingCart"
              onClick={() => onAddToCart(selectedQuantity)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyActionBar;