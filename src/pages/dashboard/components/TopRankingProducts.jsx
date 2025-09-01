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
      name: "Wireless Bluetooth Headphones",
      image: product_0,
      price: "$15 - $35",
      moq: "50 pieces",
      supplier: "AudioTech Manufacturing",
      rating: 4.9,
      orders: 25420,
      rank: 1,
      growth: "+15%",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Stainless Steel Water Bottles",
      image: product_1,
      price: "$8 - $18",
      moq: "100 pieces",
      supplier: "EcoBottle Solutions",
      rating: 4.8,
      orders: 18750,
      rank: 2,
      growth: "+22%",
      category: "Home & Garden"
    },
    {
      id: 3,
      name: "LED Desk Lamps",
      image: product_2,
      price: "$12 - $28",
      moq: "50 pieces",
      supplier: "LightTech Industries",
      rating: 4.7,
      orders: 16890,
      rank: 3,
      growth: "+8%",
      category: "Electronics"
    },
    {
      id: 4,
      name: "Eco-Friendly Tote Bags",
      image: product_3,
      price: "$3 - $12",
      moq: "200 pieces",
      supplier: "GreenBag Co",
      rating: 4.6,
      orders: 14320,
      rank: 4,
      growth: "+18%",
      category: "Fashion"
    },
    {
      id: 5,
      name: "Portable Phone Chargers",
      image: product_4,
      price: "$10 - $25",
      moq: "100 pieces",
      supplier: "PowerTech Solutions",
      rating: 4.5,
      orders: 12650,
      rank: 5,
      growth: "+12%",
      category: "Electronics"
    }
  ];

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1: return "Trophy";
      case 2: return "Medal";
      case 3: return "Award";
      default: return "Star";
    }
  };

  const getRankColor = (rank) => {
    switch(rank) {
      case 1: return "text-warning";
      case 2: return "text-muted-foreground";
      case 3: return "text-accent";
      default: return "text-primary";
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Top Ranking Products
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Best performing products based on orders and ratings
          </p>
        </div>
        <Link 
          to="/product-catalog?sort=popular"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View Full Rankings
        </Link>
      </div>
      <div className="space-y-4">
        {topProducts?.map((product) => (
          <div key={product?.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:shadow-card transition-smooth">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-muted ${getRankColor(product?.rank)}`}>
              <Icon name={getRankIcon(product?.rank)} size={16} />
            </div>
            
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
              <Image
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <Link
                    to={`/product-detail?id=${product?.id}`}
                    className="font-medium text-foreground hover:text-primary transition-smooth"
                  >
                    {product?.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    by {product?.supplier}
                  </p>
                </div>
                
                <div className="text-right">
                  <span className="text-lg font-semibold text-primary">
                    {product?.price}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    MOQ: {product?.moq}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-warning fill-current" />
                    <span>{product?.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Package" size={14} />
                    <span>{product?.orders?.toLocaleString()} orders</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Tag" size={14} />
                    <span>{product?.category}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="bg-success/10 text-success text-xs px-2 py-1 rounded-full flex items-center">
                    <Icon name="TrendingUp" size={10} className="mr-1" />
                    {product?.growth}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    #{product?.rank}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRankingProducts;