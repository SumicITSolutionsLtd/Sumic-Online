import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const NewArrivals = () => {
  const newProducts = [
    {
      id: 1,
      name: "Smart Fitness Tracker",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
      price: "$25 - $45",
      moq: "50 pieces",
      supplier: "HealthTech Innovations",
      rating: 4.6,
      addedDate: "2025-01-15",
      isNew: true,
      category: "Electronics",
      features: ["Heart Rate Monitor", "Sleep Tracking", "Waterproof"]
    },
    {
      id: 2,
      name: "Bamboo Kitchen Utensil Set",
      image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg",
      price: "$8 - $18",
      moq: "100 pieces",
      supplier: "EcoKitchen Solutions",
      rating: 4.7,
      addedDate: "2025-01-14",
      isNew: true,
      category: "Home & Kitchen",
      features: ["Eco-Friendly", "Durable", "Non-Toxic"]
    },
    {
      id: 3,
      name: "Wireless Car Charger",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
      price: "$15 - $30",
      moq: "50 pieces",
      supplier: "AutoTech Pro",
      rating: 4.5,
      addedDate: "2025-01-13",
      isNew: true,
      category: "Automotive",
      features: ["Fast Charging", "Universal Fit", "LED Indicator"]
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg",
      price: "$120 - $250",
      moq: "10 pieces",
      supplier: "ComfortSeating Ltd",
      rating: 4.8,
      addedDate: "2025-01-12",
      isNew: true,
      category: "Office Furniture",
      features: ["Lumbar Support", "Adjustable Height", "Breathable Mesh"]
    },
    {
      id: 5,
      name: "Solar Power Bank",
      image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg",
      price: "$20 - $40",
      moq: "100 pieces",
      supplier: "GreenEnergy Tech",
      rating: 4.4,
      addedDate: "2025-01-11",
      isNew: true,
      category: "Electronics",
      features: ["Solar Charging", "20000mAh", "Dual USB Ports"]
    },
    {
      id: 6,
      name: "Stainless Steel Lunch Box",
      image: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg",
      price: "$12 - $25",
      moq: "100 pieces",
      supplier: "MealPrep Solutions",
      rating: 4.6,
      addedDate: "2025-01-10",
      isNew: true,
      category: "Home & Kitchen",
      features: ["Leak-Proof", "Compartments", "Microwave Safe"]
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Yesterday";
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date?.toLocaleDateString();
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            New Arrivals
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Recently added products from verified suppliers
          </p>
        </div>
        <Link 
          to="/product-catalog?filter=new"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All New Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newProducts?.map((product) => (
          <div key={product?.id} className="border border-border rounded-lg p-4 hover:shadow-card transition-smooth">
            <div className="relative">
              <div className="w-full h-48 rounded-lg overflow-hidden bg-muted mb-4">
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              {product?.isNew && (
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  New
                </span>
              )}
            </div>
            
            <div className="space-y-3">
              <div>
                <Link
                  to={`/product-detail?id=${product?.id}`}
                  className="font-medium text-foreground hover:text-primary transition-smooth line-clamp-2"
                >
                  {product?.name}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  by {product?.supplier}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">
                  {product?.price}
                </span>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-warning fill-current" />
                  <span className="text-sm text-muted-foreground">{product?.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>MOQ: {product?.moq}</span>
                <span>{formatDate(product?.addedDate)}</span>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-medium">Key Features:</p>
                <div className="flex flex-wrap gap-1">
                  {product?.features?.slice(0, 2)?.map((feature, index) => (
                    <span key={index} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {product?.features?.length > 2 && (
                    <span className="text-xs text-muted-foreground px-2 py-1">
                      +{product?.features?.length - 2} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" iconName="MessageSquare" iconPosition="left">
                  Contact
                </Button>
                <Button variant="outline" size="sm" iconName="Heart">
                  Save
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;