import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import product_0 from '../../../media/products/product_0.jpg';
import product_1 from '../../../media/products/product_1.jpg';
import product_2 from '../../../media/products/product_2.jpg';
import product_3 from '../../../media/products/product_3.jpg';

const PreferredSuppliers = () => {
  const suppliers = [
    {
      id: 1,
      name: "Precision Manufacturing Co.",
      logo: product_0,
      location: "Shanghai, China",
      rating: 4.8,
      responseTime: "< 2 hours",
      totalOrders: 24,
      lastOrder: "2 days ago",
      verified: true,
      goldSupplier: true
    },
    {
      id: 2,
      name: "TechComponents Ltd.",
      logo: product_1,
      location: "Shenzhen, China",
      rating: 4.6,
      responseTime: "< 4 hours",
      totalOrders: 18,
      lastOrder: "1 week ago",
      verified: true,
      goldSupplier: false
    },
    {
      id: 3,
      name: "MetalWorks Industries",
      logo: product_2,
      location: "Mumbai, India",
      rating: 4.7,
      responseTime: "< 6 hours",
      totalOrders: 31,
      lastOrder: "3 days ago",
      verified: true,
      goldSupplier: true
    },
    {
      id: 4,
      name: "SafeGuard Equipment",
      logo: product_3,
      location: "Istanbul, Turkey",
      rating: 4.5,
      responseTime: "< 8 hours",
      totalOrders: 12,
      lastOrder: "5 days ago",
      verified: true,
      goldSupplier: false
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Your Preferred Suppliers
        </h2>
        <Link 
          to="/supplier-profile"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All Suppliers
        </Link>
      </div>
      <div className="space-y-4">
        {suppliers?.map((supplier) => (
          <div key={supplier?.id} className="border border-border rounded-lg p-4 hover:shadow-card transition-smooth">
            <div style={{flexDirection:"column"}} className="flex items-start space-x-4">
              <div className="w-16 mb-2 ml-3 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={supplier?.logo}
                  alt={supplier?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div style={{flexDirection:"column"}} className="flex items-start justify-between mb-2">
                  <div>
                    <Link
                      to={`/supplier-profile?id=${supplier?.id}`}
                      className="font-medium text-foreground hover:text-primary transition-smooth"
                    >
                      {supplier?.name}
                    </Link>
                    {/* <div className="flex items-center space-x-2 mt-1">
                      {supplier?.verified && (
                        <span className="bg-success/10 text-success text-xs px-2 py-1 rounded-full flex items-center">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Verified
                        </span>
                      )}
                      {supplier?.goldSupplier && (
                        <span className="bg-warning/10 text-warning text-xs px-2 py-1 rounded-full flex items-center">
                          <Icon name="Crown" size={12} className="mr-1" />
                          Gold
                        </span>
                      )}
                    </div> */}
                  </div>
                  
                  <div className="flex items-center space-x-1 text-sm">
                    <Icon name="Star" size={14} className="text-warning fill-current" />
                    <span className="text-muted-foreground">{supplier?.rating}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={12} />
                    <span className="truncate">{supplier?.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{supplier?.responseTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Package" size={12} />
                    <span>{supplier?.totalOrders} orders</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>{supplier?.lastOrder}</span>
                  </div>
                </div>
                
                <div style={{flexDirection:"column"}} className="flex space-x-2">
                  {/* <Button variant="outline" size="sm" iconName="MessageSquare" iconPosition="left">
                    Message
                  </Button> */}
                  <Button variant="outline" size="sm" iconName="RotateCcw" iconPosition="left">
                    Reorder
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreferredSuppliers;