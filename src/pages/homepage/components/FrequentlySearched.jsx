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
      name: "Smart Watches",
      image: product_0,
      searchCount: 2850,
      priceRange: "US$65.80",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Apple Products",
      image: product_1,
      searchCount: 1950,
      priceRange: "US$400",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Industrial Equipment",
      image: product_2,
      searchCount: 1680,
      priceRange: "US$19.70",
      category: "Machinery"
    },
    {
      id: 4,
      name: "Fashion Accessories",
      image: product_3,
      searchCount: 1420,
      priceRange: "US$4",
      category: "Fashion"
    },
    {
      id: 5,
      name: "Safety Equipment",
      image: product_4,
      searchCount: 1290,
      priceRange: "US$0.70",
      category: "Safety"
    },
    {
      id: 6,
      name: "Electronics Components",
      image: product_0,
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