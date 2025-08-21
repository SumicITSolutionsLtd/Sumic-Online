import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FastCustomization = () => {
  const customProducts = [
    {
      id: 1,
      name: "Custom Electronic Components",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
      price: "US$65.80",
      moq: "100 pieces",
      leadTime: "7-15 days",
      supplier: "Tech Components Ltd."
    },
    {
      id: 2,
      name: "Branded Packaging Solutions",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
      price: "US$19.70",
      moq: "500 pieces",
      leadTime: "5-10 days",
      supplier: "Package Pro Co."
    },
    {
      id: 3,
      name: "Custom Promotional Items",
      image: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg",
      price: "US$4",
      moq: "200 pieces",
      leadTime: "10-20 days",
      supplier: "Promo Experts Inc."
    },
    {
      id: 4,
      name: "Industrial Safety Gear",
      image: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg",
      price: "US$0.70",
      moq: "1000 pieces",
      leadTime: "3-7 days",
      supplier: "Safety First Manufacturing"
    },
    {
      id: 5,
      name: "Smart Device Accessories",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
      price: "US$18.60",
      moq: "50 pieces",
      leadTime: "7-14 days",
      supplier: "Smart Tech Solutions"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Fast customization
          </h2>
          <p className="text-sm text-muted-foreground">
            Get customized products with competitive MOQ terms and fast delivery
          </p>
        </div>
        <Link 
          to="/product-catalog?customizable=true"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All Custom Products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {customProducts?.map((product) => (
          <Link
            key={product?.id}
            to={`/product-detail?id=${product?.id}`}
            className="group"
          >
            <div className="bg-card rounded-lg p-4 border border-border hover:shadow-card transition-smooth">
              <div className="w-full h-32 rounded-lg overflow-hidden bg-muted mb-3">
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-foreground text-sm line-clamp-2 leading-tight">
                  {product?.name}
                </h3>
                
                <p className="text-lg font-bold text-primary">
                  {product?.price}
                </p>
                
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Package" size={10} />
                    <span>MOQ: {product?.moq}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={10} />
                    <span>{product?.leadTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Building2" size={10} />
                    <span className="truncate">{product?.supplier}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FastCustomization;