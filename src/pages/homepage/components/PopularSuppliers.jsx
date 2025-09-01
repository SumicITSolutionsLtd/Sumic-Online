import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import product_0 from '../../../media/products/product_0.jpg';
import product_1 from '../../../media/products/product_1.jpg';
import product_2 from '../../../media/products/product_2.jpg';
import product_3 from '../../../media/products/product_3.jpg';

const PopularSuppliers = () => {
  const suppliers = [
    {
      id: 1,
      name: "Global Manufacturing Co.",
      image: product_0,
      rating: 4.8,
      reviewCount: 2450,
      location: "Shanghai, China",
      verified: true,
      yearEstablished: 2010
    },
    {
      id: 2,
      name: "Premium Electronics Ltd.",
      image: product_1,
      rating: 4.9,
      reviewCount: 1890,
      location: "Shenzhen, China",
      verified: true,
      yearEstablished: 2008
    },
    {
      id: 3,
      name: "Industrial Solutions Inc.",
      image: product_2,
      rating: 4.7,
      reviewCount: 3200,
      location: "Guangzhou, China",
      verified: true,
      yearEstablished: 2005
    },
    {
      id: 4,
      name: "Quality Goods Supplier",
      image: product_3,
      rating: 4.6,
      reviewCount: 1650,
      location: "Hangzhou, China",
      verified: true,
      yearEstablished: 2012
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math?.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars?.push(<Icon key={i} name="Star" size={12} color="#F59E0B" />);
    }

    if (hasHalfStar) {
      stars?.push(<Icon key="half" name="StarHalf" size={12} color="#F59E0B" />);
    }

    return stars;
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Popular suppliers
        </h2>
        <Link 
          to="/supplier-profile"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All Suppliers
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {suppliers?.map((supplier) => (
          <Link
            key={supplier?.id}
            to={`/supplier-profile?id=${supplier?.id}`}
            className="group"
          >
            <div className="bg-background rounded-lg p-4 border border-border hover:shadow-card transition-smooth">
              <div className="w-full h-32 rounded-lg overflow-hidden bg-muted mb-4">
                <Image
                  src={supplier?.image}
                  alt={supplier?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-foreground text-sm leading-tight">
                    {supplier?.name}
                  </h3>
                  {supplier?.verified && (
                    <div className="flex-shrink-0">
                      <Icon name="BadgeCheck" size={16} color="#10B981" />
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-1">
                  <div className="flex items-center space-x-1">
                    {renderStars(supplier?.rating)}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({supplier?.reviewCount?.toLocaleString()})
                  </span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={12} color="#6B7280" />
                  <span className="text-xs text-muted-foreground">
                    {supplier?.location}
                  </span>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  Est. {supplier?.yearEstablished}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularSuppliers;