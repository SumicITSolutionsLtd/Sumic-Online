import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProducts = ({ products, title = "Related Products" }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })?.format(amount);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link
          to="/product-catalog"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
        >
          View All Products
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products?.map((product) => (
          <div
            key={product?.id}
            className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-card transition-shadow group"
          >
            {/* Product Image */}
            <div className="aspect-square relative overflow-hidden bg-muted">
              <Image
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product?.isNew && (
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  New
                </span>
              )}
              <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="Heart" size={16} />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {product?.name}
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">
                    {formatCurrency(product?.price)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    MOQ: {product?.moq?.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5]?.map((star) => (
                      <Icon
                        key={star}
                        name="Star"
                        size={12}
                        className={star <= product?.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product?.reviewCount})
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Icon name="MapPin" size={12} />
                  <span>{product?.location}</span>
                </div>
              </div>

              <div className="flex space-x-2 mt-3">
                <Link
                  to={`/product-detail?id=${product?.id}`}
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" fullWidth>
                    View Details
                  </Button>
                </Link>
                <Button
                  variant="default"
                  size="sm"
                  iconName="MessageSquare"
                  onClick={() => console.log('Contact supplier for', product?.name)}
                >
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;