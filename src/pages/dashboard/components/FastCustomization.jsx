import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import product_0 from '../../../media/products/product_0.jpg';
import product_1 from '../../../media/products/product_1.jpg';
import product_2 from '../../../media/products/product_2.jpg';
import product_3 from '../../../media/products/product_3.jpg';

const FastCustomization = () => {
  const customizableProducts = [
    {
      id: 1,
      name: "Custom Printed T-Shirts",
      image: product_0,
      moq: "50 pieces",
      price: "$8 - $15",
      customizationTime: "7-10 days",
      supplier: "TextilePrint Pro",
      rating: 4.7,
      features: ["Logo Printing", "Color Options", "Size Range"]
    },
    {
      id: 2,
      name: "Branded USB Drives",
      image: product_1,
      moq: "100 pieces",
      price: "$5 - $12",
      customizationTime: "5-7 days",
      supplier: "TechGifts Ltd",
      rating: 4.6,
      features: ["Logo Engraving", "Storage Options", "Color Choice"]
    },
    {
      id: 3,
      name: "Custom Packaging Boxes",
      image: product_2,
      moq: "500 pieces",
      price: "$0.80 - $3.50",
      customizationTime: "10-15 days",
      supplier: "PackageMaster Co",
      rating: 4.8,
      features: ["Size Options", "Print Design", "Material Choice"]
    },
    {
      id: 4,
      name: "Promotional Mugs",
      image: product_3,
      moq: "100 pieces",
      price: "$3 - $8",
      customizationTime: "7-12 days",
      supplier: "PromoItems Inc",
      rating: 4.5,
      features: ["Logo Print", "Color Options", "Material Types"]
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-card mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Fast Customization
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Products with favorable MOQ terms and quick turnaround
          </p>
        </div>
        <Link 
          to="/product-catalog?filter=customizable"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All Custom Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customizableProducts?.map((product) => (
          <div key={product?.id} className="border border-border rounded-lg p-4 hover:shadow-card transition-smooth">
            <div className="w-full h-40 rounded-lg overflow-hidden bg-muted mb-4">
              <Image
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </div>
            
            <div className="space-y-3">
              <div>
                <Link
                  to={`/product-detail?id=${product?.id}`}
                  className="font-medium text-foreground hover:text-primary transition-smooth line-clamp-2"
                >
                  {product?.name}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  by {product?.supplier}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">
                  {product?.price}
                </span>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-warning fill-current" />
                  <span className="text-sm text-muted-foreground">{product?.rating}</span>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>MOQ:</span>
                  <span className="font-medium">{product?.moq}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Lead Time:</span>
                  <span className="font-medium">{product?.customizationTime}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-medium">Customization Options:</p>
                <div className="flex flex-wrap gap-1">
                  {product?.features?.map((feature, index) => (
                    <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" iconName="MessageSquare" iconPosition="left">
                  Quote
                </Button>
                <Button variant="outline" size="sm" iconName="Eye">
                  View
                </Button>
              </div>
            </div>
          </div>
        ))};
      </div>
    </div>
  );
};

export default FastCustomization;