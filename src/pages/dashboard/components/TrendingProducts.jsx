import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import product_0 from '../../../media/products/product_0.jpg';
import product_1 from '../../../media/products/product_1.jpg';
import product_2 from '../../../media/products/product_2.jpg';
import product_3 from '../../../media/products/product_3.jpg';

const TrendingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Industrial CNC Machine",
      image: product_0,
      price: "$45,000 - $65,000",
      moq: "1 unit",
      supplier: "Precision Manufacturing Co.",
      rating: 4.8,
      trending: true,
      discount: "15% off"
    },
    {
      id: 2,
      name: "LED Display Modules",
      image: product_1,
      price: "$25 - $45",
      moq: "100 pieces",
      supplier: "TechComponents Ltd.",
      rating: 4.6,
      trending: true,
      discount: null
    },
    {
      id: 3,
      name: "Stainless Steel Sheets",
      image: product_2,
      price: "$1,200 - $1,800",
      moq: "5 tons",
      supplier: "MetalWorks Industries",
      rating: 4.7,
      trending: false,
      discount: "10% off"
    },
    {
      id: 4,
      name: "Safety Helmets",
      image: product_3,
      price: "$15 - $25",
      moq: "50 pieces",
      supplier: "SafeGuard Equipment",
      rating: 4.5,
      trending: true,
      discount: null
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Trending in Your Industry
        </h2>
        <Link 
          to="/product-catalog"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All Products
        </Link>
      </div>
      <div className="space-y-4">
        {products?.map((product) => (
          <div key={product?.id} className="border border-border rounded-lg p-4 hover:shadow-card transition-smooth">
            <div className="flex space-x-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <Link
                    to={`/product-detail?id=${product?.id}`}
                    className="font-medium text-foreground hover:text-primary transition-smooth truncate"
                  >
                    {product?.name}
                  </Link>
                  {product?.trending && (
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0">
                      <Icon name="TrendingUp" size={12} className="inline mr-1" />
                      Hot
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-lg font-semibold text-primary">
                    {product?.price}
                  </span>
                  {product?.discount && (
                    <span className="bg-destructive/10 text-destructive text-xs px-2 py-1 rounded-full">
                      {product?.discount}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>MOQ: {product?.moq}</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-warning fill-current" />
                    <span>{product?.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-1 truncate">
                  {product?.supplier}
                </p>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-4">
              <Button variant="outline" size="sm" iconName="MessageSquare" iconPosition="left">
                Contact
              </Button>
              <Button variant="outline" size="sm" iconName="Heart">
                Save
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;