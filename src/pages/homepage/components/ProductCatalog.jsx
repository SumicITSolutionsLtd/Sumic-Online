import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      name: "High-Performance LED Displays",
      image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg",
      price: "US$27-49.02",
      supplier: "Display Tech Solutions",
      location: "Shenzhen, China",
      moq: "10 pieces",
      rating: 4.8,
      verified: true
    },
    {
      id: 2,
      name: "Industrial Control Systems",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      price: "US$665.50",
      supplier: "Control Systems Ltd.",
      location: "Shanghai, China",
      moq: "5 pieces",
      rating: 4.9,
      verified: true
    },
    {
      id: 3,
      name: "Premium Electronic Components",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
      price: "US$1.70",
      supplier: "ElectroTech Manufacturing",
      location: "Guangzhou, China",
      moq: "1000 pieces",
      rating: 4.7,
      verified: true
    },
    {
      id: 4,
      name: "Smart Wearable Technology",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
      price: "US$0.33",
      supplier: "Wearable Innovations Co.",
      location: "Beijing, China",
      moq: "100 pieces",
      rating: 4.6,
      verified: false
    },
    {
      id: 5,
      name: "Fashion Accessories Collection",
      image: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg",
      price: "US$0.02",
      supplier: "Fashion Forward Ltd.",
      location: "Hong Kong",
      moq: "500 pieces",
      rating: 4.5,
      verified: true
    },
    {
      id: 6,
      name: "Safety Equipment Solutions",
      image: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg",
      price: "US$400",
      supplier: "SafetyFirst Manufacturing",
      location: "Tianjin, China",
      moq: "50 pieces",
      rating: 4.8,
      verified: true
    },
    {
      id: 7,
      name: "Construction Materials",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      price: "US$29.99",
      supplier: "BuildRight Materials",
      location: "Wuhan, China",
      moq: "20 pieces",
      rating: 4.7,
      verified: true
    },
    {
      id: 8,
      name: "Packaging Solutions",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
      price: "US$3.41-3.99",
      supplier: "PackPro Industries",
      location: "Suzhou, China",
      moq: "2000 pieces",
      rating: 4.4,
      verified: false
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math?.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars?.push(<Icon key={i} name="Star" size={12} color="#F59E0B" />);
    }
    return stars;
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Featured Products
        </h2>
        <Link 
          to="/product-catalog"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View Full Catalog
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <Link
            key={product?.id}
            to={`/product-detail?id=${product?.id}`}
            className="group"
          >
            <div className="bg-background rounded-lg p-4 border border-border hover:shadow-card transition-smooth">
              <div className="w-full h-40 rounded-lg overflow-hidden bg-muted mb-4">
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-sm line-clamp-2 leading-tight">
                  {product?.name}
                </h3>
                
                <div className="space-y-2">
                  <p className="text-lg font-bold text-primary">
                    {product?.price}
                  </p>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-foreground truncate">
                        {product?.supplier}
                      </span>
                      {product?.verified && (
                        <Icon name="BadgeCheck" size={14} color="#10B981" />
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={10} color="#6B7280" />
                      <span className="text-xs text-muted-foreground">
                        {product?.location}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Icon name="Package" size={10} color="#6B7280" />
                        <span className="text-xs text-muted-foreground">
                          MOQ: {product?.moq}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center">
                          {renderStars(product?.rating)}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {product?.rating}
                        </span>
                      </div>
                    </div>
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

export default ProductCatalog;