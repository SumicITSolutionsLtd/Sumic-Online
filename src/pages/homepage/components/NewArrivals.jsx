import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import product_0 from '../../../media/products/product_0.jpg';
import product_1 from '../../../media/products/product_1.jpg';
import product_2 from '../../../media/products/product_2.jpg';
import product_3 from '../../../media/products/product_3.jpg';
import product_4 from '../../../media/products/product_4.jpg';

const NewArrivals = () => {
  const newProducts = [
    {
      id: 1,
      name: "Latest Smart Technology",
      image: product_0,
      price: "US$0.33",
      addedDate: "2025-08-15",
      supplier: "Innovation Tech Co.",
      category: "Electronics",
      isNew: true
    },
    {
      id: 2,
      name: "Advanced Manufacturing Tools",
      image: product_1,
      price: "US$0.02",
      addedDate: "2025-08-14",
      supplier: "Industrial Solutions Ltd.",
      category: "Machinery",
      isNew: true
    },
    {
      id: 3,
      name: "Premium Materials",
      image: product_2,
      price: "US$400",
      addedDate: "2025-08-13",
      supplier: "Quality Materials Inc.",
      category: "Raw Materials",
      isNew: true
    },
    {
      id: 4,
      name: "Fashion Forward Items",
      image: product_3,
      price: "US$29.99",
      addedDate: "2025-08-12",
      supplier: "Style Makers Co.",
      category: "Fashion",
      isNew: true
    },
    {
      id: 5,
      name: "Safety Innovation Products",
      image: product_4,
      price: "US$3.41-3.99",
      addedDate: "2025-08-11",
      supplier: "SafeGuard Manufacturing",
      category: "Safety",
      isNew: true
    },
    {
      id: 6,
      name: "Green Technology Solutions",
      image: product_0,
      price: "US$1.30-1.60",
      addedDate: "2025-08-10",
      supplier: "EcoTech Industries",
      category: "Green Tech",
      isNew: true
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math?.abs(now - date);
    const diffDays = Math?.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Yesterday";
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date?.toLocaleDateString();
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          New Arrivals
        </h2>
        <Link 
          to="/product-catalog?sort=newest"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All New Products
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {newProducts?.map((product) => (
          <Link
            key={product?.id}
            to={`/product-detail?id=${product?.id}`}
            className="group relative"
          >
            <div className="bg-background rounded-lg p-3 border border-border hover:shadow-card transition-smooth">
              {product?.isNew && (
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-success text-white text-xs px-2 py-1 rounded-md font-medium">
                    NEW
                  </span>
                </div>
              )}
              
              <div className="w-full h-24 rounded-lg overflow-hidden bg-muted mb-3">
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              
              <div className="space-y-1">
                <h3 className="font-medium text-foreground text-xs line-clamp-2 leading-tight">
                  {product?.name}
                </h3>
                
                <div className="space-y-1">
                  <span className="text-sm font-bold text-primary block">
                    {product?.price}
                  </span>
                  
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={10} color="#6B7280" />
                    <span className="text-xs text-muted-foreground">
                      {formatDate(product?.addedDate)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Icon name="Building2" size={10} color="#6B7280" />
                    <span className="text-xs text-muted-foreground truncate">
                      {product?.supplier}
                    </span>
                  </div>
                  
                  <div className="text-xs text-primary font-medium">
                    {product?.category}
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

export default NewArrivals;