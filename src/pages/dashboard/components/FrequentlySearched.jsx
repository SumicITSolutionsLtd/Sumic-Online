import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FrequentlySearched = () => {
  const searchedItems = [
    {
      id: 1,
      name: "LED Strip Lights",
      image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg",
      searchCount: 1250,
      priceRange: "$5 - $25",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Packaging Boxes",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
      searchCount: 980,
      priceRange: "$0.50 - $5",
      category: "Packaging"
    },
    {
      id: 3,
      name: "Industrial Valves",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      searchCount: 875,
      priceRange: "$50 - $500",
      category: "Machinery"
    },
    {
      id: 4,
      name: "Safety Gloves",
      image: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg",
      searchCount: 720,
      priceRange: "$2 - $15",
      category: "Safety"
    },
    {
      id: 5,
      name: "USB Cables",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
      searchCount: 650,
      priceRange: "$1 - $10",
      category: "Electronics"
    },
    {
      id: 6,
      name: "Steel Pipes",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      searchCount: 590,
      priceRange: "$20 - $200",
      category: "Materials"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-card mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Frequently Searched Items
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
            <div className="bg-muted rounded-lg p-4 hover:shadow-card transition-smooth">
              <div className="w-full h-24 rounded-lg overflow-hidden bg-background mb-3">
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
                <p className="text-xs text-primary font-medium">
                  {item?.priceRange}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item?.category}</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Search" size={10} />
                    <span>{item?.searchCount}</span>
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