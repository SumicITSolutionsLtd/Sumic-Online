import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductTabs = ({ product, supplier, reviews, specifications }) => {
  const [activeTab, setActiveTab] = useState('specifications');

  const tabs = [
    { id: 'specifications', label: 'Specifications', icon: 'FileText' },
    { id: 'supplier', label: 'Supplier Info', icon: 'Building2' },
    { id: 'reviews', label: 'Reviews', icon: 'Star' },
    { id: 'shipping', label: 'Shipping & Payment', icon: 'Truck' }
  ];

  const renderStarRating = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5]?.map((star) => (
          <Icon
            key={star}
            name="Star"
            size={16}
            className={star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'specifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specifications?.map((spec, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-4">
                  <dt className="text-sm font-medium text-muted-foreground mb-1">
                    {spec?.label}
                  </dt>
                  <dd className="text-sm font-medium text-foreground">
                    {spec?.value}
                  </dd>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Key Features</h4>
              <ul className="space-y-2">
                {product?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'supplier':
        return (
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={supplier?.logo}
                  alt={supplier?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{supplier?.name}</h3>
                <p className="text-muted-foreground">{supplier?.location}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    {renderStarRating(supplier?.rating)}
                    <span className="text-sm text-muted-foreground">
                      ({supplier?.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold text-primary">{supplier?.yearsInBusiness}</p>
                <p className="text-xs text-muted-foreground">Years in Business</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold text-primary">{supplier?.totalProducts}</p>
                <p className="text-xs text-muted-foreground">Total Products</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold text-primary">{supplier?.responseRate}</p>
                <p className="text-xs text-muted-foreground">Response Rate</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold text-primary">{supplier?.onTimeDelivery}</p>
                <p className="text-xs text-muted-foreground">On-time Delivery</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {supplier?.certifications?.map((cert, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                  >
                    <Icon name="Award" size={12} className="mr-1" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="default" iconName="MessageSquare" iconPosition="left">
                Contact Supplier
              </Button>
              <Button variant="outline" iconName="Eye" iconPosition="left">
                View All Products
              </Button>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Customer Reviews</h3>
              <div className="flex items-center space-x-2">
                {renderStarRating(product?.averageRating)}
                <span className="font-medium">{product?.averageRating}</span>
                <span className="text-muted-foreground">({reviews?.length} reviews)</span>
              </div>
            </div>
            <div className="space-y-4">
              {reviews?.map((review, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {review?.author?.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{review?.author}</p>
                        <p className="text-xs text-muted-foreground">{review?.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {renderStarRating(review?.rating)}
                      <p className="text-xs text-muted-foreground mt-1">{review?.date}</p>
                    </div>
                  </div>
                  <p className="text-sm">{review?.comment}</p>
                  {review?.orderQuantity && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Verified purchase • Quantity: {review?.orderQuantity?.toLocaleString()} units
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'shipping':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping Method:</span>
                    <span className="font-medium">Sea Freight, Air Freight</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Port of Loading:</span>
                    <span className="font-medium">Shanghai, China</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lead Time:</span>
                    <span className="font-medium">{product?.leadTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Packaging:</span>
                    <span className="font-medium">Export Standard Packaging</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Payment Terms</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Payment Methods:</span>
                    <span className="font-medium">T/T, L/C, PayPal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Payment Terms:</span>
                    <span className="font-medium">30% deposit, 70% before shipment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trade Terms:</span>
                    <span className="font-medium">FOB, CIF, EXW</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-medium mb-2">Additional Services</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Quality inspection before shipment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Custom packaging available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Documentation support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">After-sales technical support</span>
                </li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg">
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <nav className="flex space-x-8 px-6" aria-label="Tabs">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab?.id
                  ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </nav>
      </div>
      {/* Tab Content */}
      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProductTabs;