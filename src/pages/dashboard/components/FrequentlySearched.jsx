import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import product_0 from '../../../media/products/product_0.jpg';
import product_1 from '../../../media/products/product_1.jpg';
import product_2 from '../../../media/products/product_2.jpg';
import product_3 from '../../../media/products/product_3.jpg';
import product_4 from '../../../media/products/product_4.jpg';

const FrequentlySearched = () => {
  const searchedItems = [
    {
      id: 1,
      name: "LED Strip Lights",
      image: product_0,
      searchCount: 1250,
      priceRange: "$5 - $25",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Packaging Boxes",
      image: product_1,
      searchCount: 980,
      priceRange: "$0.50 - $5",
      category: "Packaging"
    },
    {
      id: 3,
      name: "Industrial Valves",
      image: product_2,
      searchCount: 875,
      priceRange: "$50 - $500",
      category: "Machinery"
    },
    {
      id: 4,
      name: "Safety Gloves",
      image: product_3,
      searchCount: 720,
      priceRange: "$2 - $15",
      category: "Safety"
    },
    {
      id: 5,
      name: "USB Cables",
      image: product_4,
      searchCount: 650,
      priceRange: "$1 - $10",
      category: "Electronics"
    },
    {
      id: 6,
      name: "Steel Pipes",
      image: product_0,
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