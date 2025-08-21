import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FrequentlySearched = () => {
  const searchedItems = [
    {
      id: 1,
      name: "Smart Watches",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
      searchCount: 2850,
      priceRange: "US$65.80",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Apple Products",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
      searchCount: 1950,
      priceRange: "US$400",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Industrial Equipment",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      searchCount: 1680,
      priceRange: "US$19.70",
      category: "Machinery"
    },
    {
      id: 4,
      name: "Fashion Accessories",
      image: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg",
      searchCount: 1420,
      priceRange: "US$4",
      category: "Fashion"
    },
    {
      id: 5,
      name: "Safety Equipment",
      image: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg",
      searchCount: 1290,
      priceRange: "US$0.70",
      category: "Safety"
    },
    {
      id: 6,
      name: "Electronics Components",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
      searchCount: 1150,
      priceRange: "US$18.60",
      category: "Electronics"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Frequently searched
        </h2>
        <Link 
          to="/product-catalog"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {searchedItems?.map((item) => (
          <Link
            key={item?.id}
            to={`/product-catalog?search=${encodeURIComponent(item?.name)}`}
            className="group"
          >
            <div className="bg-background rounded-lg p-4 border border-border hover:shadow-card transition-smooth">
              <div className="w-full h-24 rounded-lg overflow-hidden bg-muted mb-3">
                <Image
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              
              <h3 className="font-medium text-foreground text-sm mb-2 truncate">
                {item?.name}
              </h3>
              
              <div className="space-y-1">
                <p className="text-sm text-primary font-semibold">
                  {item?.priceRange}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item?.category}</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Search" size={10} />
                    <span>{item?.searchCount?.toLocaleString()}</span>
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

export default FrequentlySearched;