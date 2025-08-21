import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecommendedCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Industrial Machinery",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      productCount: 15420,
      trending: true,
      description: "Heavy machinery and industrial equipment"
    },
    {
      id: 2,
      name: "Electronics & Components",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
      productCount: 28750,
      trending: false,
      description: "Electronic components and devices"
    },
    {
      id: 3,
      name: "Raw Materials",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      productCount: 9340,
      trending: true,
      description: "Steel, aluminum, and other raw materials"
    },
    {
      id: 4,
      name: "Packaging & Printing",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
      productCount: 6890,
      trending: false,
      description: "Packaging materials and printing supplies"
    },
    {
      id: 5,
      name: "Safety Equipment",
      image: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg",
      productCount: 4250,
      trending: true,
      description: "Industrial safety and protective equipment"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Recommended Categories
        </h2>
        <Link 
          to="/product-catalog"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All Categories
        </Link>
      </div>
      <div className="space-y-4">
        {categories?.map((category) => (
          <Link
            key={category?.id}
            to={`/product-catalog?category=${category?.name?.toLowerCase()?.replace(/\s+/g, '-')}`}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-smooth group"
          >
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
              <Image
                src={category?.image}
                alt={category?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-medium text-foreground truncate">
                  {category?.name}
                </h3>
                {category?.trending && (
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    Trending
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-1 truncate">
                {category?.description}
              </p>
              <p className="text-xs text-muted-foreground">
                {category?.productCount?.toLocaleString()} products
              </p>
            </div>
            
            <Icon 
              name="ChevronRight" 
              size={16} 
              className="text-muted-foreground group-hover:text-foreground transition-smooth" 
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCategories;