import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import product_0 from '../../../media/products/product_0.jpg';
import product_1 from '../../../media/products/product_1.jpg';
import product_2 from '../../../media/products/product_2.jpg';
import product_3 from '../../../media/products/product_3.jpg';
import product_4 from '../../../media/products/product_4.jpg';

const TopRankingProducts = () => {
  const topProducts = [
    {
      id: 1,
      name: "Professional LED Display",
      image: product_0,
      price: "US$29.99",
      originalPrice: "US$39.99",
      discount: 25,
      rating: 4.8,
      reviews: 1250,
      orders: 5420,
      trending: true
    },
    {
      id: 2,
      name: "Industrial Control System",
      image: product_1,
      price: "US$665.50",
      originalPrice: "US$750.00",
      discount: 11,
      rating: 4.9,
      reviews: 890,
      orders: 2340,
      trending: false
    },
    {
      id: 3,
      name: "Smart Home Devices",
      image: product_2,
      price: "US$3.41-3.99",
      originalPrice: null,
      discount: 0,
      rating: 4.7,
      reviews: 2100,
      orders: 8750,
      trending: true
    },
    {
      id: 4,
      name: "Premium Fashion Accessories",
      image: product_3,
      price: "US$1.30-1.60",
      originalPrice: null,
      discount: 0,
      rating: 4.6,
      reviews: 1650,
      orders: 4230,
      trending: false
    },
    {
      id: 5,
      name: "Construction Materials",
      image: product_4,
      price: "US$27-49.02",
      originalPrice: null,
      discount: 0,
      rating: 4.8,
      reviews: 980,
      orders: 3150,
      trending: true
    },
    {
      id: 6,
      name: "Electronic Components",
      image: product_0,
      price: "US$1.70",
      originalPrice: "US$2.20",
      discount: 23,
      rating: 4.9,
      reviews: 3200,
      orders: 12500,
      trending: true
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math?.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars?.push(<Icon key={i} name="Star" size={10} color="#F59E0B" />);
    }
    return stars;
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Top Ranking
        </h2>
        <Link 
          to="/product-catalog?sort=ranking"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All Rankings
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {topProducts?.map((product) => (
          <Link
            key={product?.id}
            to={`/product-detail?id=${product?.id}`}
            className="group relative"
          >
            <div className="bg-background rounded-lg p-3 border border-border hover:shadow-card transition-smooth">
              {product?.trending && (
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-error text-white text-xs px-2 py-1 rounded-md font-medium">
                    HOT
                  </span>
                </div>
              )}
              
              {product?.discount > 0 && (
                <div className="absolute top-2 right-2 z-10">
                  <span className="bg-success text-white text-xs px-2 py-1 rounded-md font-medium">
                    -{product?.discount}%
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
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-bold text-primary">
                      {product?.price}
                    </span>
                    {product?.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product?.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center space-x-1">
                      {renderStars(product?.rating)}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product?.reviews})
                    </span>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {product?.orders?.toLocaleString()} orders
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

export default TopRankingProducts;