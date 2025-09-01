import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import product_0 from '../../../media/products/product_0.jpg';
import product_1 from '../../../media/products/product_1.jpg';
import product_2 from '../../../media/products/product_2.jpg';
import product_3 from '../../../media/products/product_3.jpg';
import product_4 from '../../../media/products/product_4.jpg';

const PopularSuppliers = () => {
  const suppliers = [
    {
      id: 1,
      name: "Global Tech Solutions",
      logo: product_0,
      location: "Guangzhou, China",
      rating: 4.9,
      orders: 15420,
      responseRate: "98%",
      mainProducts: "Electronics, Components",
      verified: true,
      goldSupplier: true
    },
    {
      id: 2,
      name: "Industrial Machinery Corp",
      logo: product_1,
      location: "Mumbai, India",
      rating: 4.8,
      orders: 12350,
      responseRate: "95%",
      mainProducts: "Machinery, Equipment",
      verified: true,
      goldSupplier: true
    },
    {
      id: 3,
      name: "Premium Materials Ltd",
      logo: product_2,
      location: "Istanbul, Turkey",
      rating: 4.7,
      orders: 9870,
      responseRate: "92%",
      mainProducts: "Raw Materials, Steel",
      verified: true,
      goldSupplier: false
    },
    {
      id: 4,
      name: "Safety First Equipment",
      logo: product_3,
      location: "São Paulo, Brazil",
      rating: 4.6,
      orders: 8540,
      responseRate: "90%",
      mainProducts: "Safety, PPE",
      verified: true,
      goldSupplier: false
    },
    {
      id: 5,
      name: "Packaging Solutions Pro",
      logo: product_4,
      location: "Bangkok, Thailand",
      rating: 4.5,
      orders: 7230,
      responseRate: "88%",
      mainProducts: "Packaging, Printing",
      verified: true,
      goldSupplier: true
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-card mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Popular Suppliers
        </h2>
        <Link 
          to="/supplier-profile"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All Suppliers
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {suppliers?.map((supplier) => (
          <Link
            key={supplier?.id}
            to={`/supplier-profile?id=${supplier?.id}`}
            className="group"
          >
            <div className="bg-muted rounded-lg p-4 hover:shadow-card transition-smooth">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-background mx-auto mb-3">
                  <Image
                    src={supplier?.logo}
                    alt={supplier?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="font-medium text-foreground text-sm mb-1 truncate">
                  {supplier?.name}
                </h3>
                
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {supplier?.verified && (
                    <Icon name="CheckCircle" size={12} className="text-success" />
                  )}
                  {supplier?.goldSupplier && (
                    <Icon name="Crown" size={12} className="text-warning" />
                  )}
                </div>
              </div>
              
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Rating:</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={10} className="text-warning fill-current" />
                    <span>{supplier?.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>Orders:</span>
                  <span>{supplier?.orders?.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>Response:</span>
                  <span>{supplier?.responseRate}</span>
                </div>
                
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground truncate">
                    {supplier?.mainProducts}
                  </p>
                  <p className="text-xs text-muted-foreground truncate mt-1">
                    {supplier?.location}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularSuppliers;