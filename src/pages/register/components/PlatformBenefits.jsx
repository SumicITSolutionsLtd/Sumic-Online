import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PlatformBenefits = () => {
  const benefits = [
    {
      icon: 'Globe',
      title: 'Global Reach',
      description: 'Connect with buyers and suppliers from over 190 countries worldwide'
    },
    {
      icon: 'Shield',
      title: 'Secure Trading',
      description: 'Trade assurance and secure payment options protect your transactions'
    },
    {
      icon: 'TrendingUp',
      title: 'Business Growth',
      description: 'Access to millions of potential customers and growth opportunities'
    },
    {
      icon: 'Award',
      title: 'Quality Assurance',
      description: 'Verified suppliers and quality control measures ensure reliability'
    }
  ];

  const successStories = [
    {
      company: 'TechManufacturing Co.',
      industry: 'Electronics',
      achievement: '300% increase in international orders',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      quote: `"GreenTrade B2B helped us expand globally and connect with quality suppliers we never would have found otherwise."`
    },
    {
      company: 'EcoTextiles Ltd.',
      industry: 'Textiles',
      achievement: 'Reduced sourcing costs by 40%',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?w=400&h=300&fit=crop',
      quote: `"The platform's verification system gave us confidence in our supplier relationships and improved our supply chain efficiency."`
    }
  ];

  const securityFeatures = [
    {
      icon: 'Lock',
      title: 'SSL Encryption',
      description: 'All data is protected with 256-bit SSL encryption'
    },
    {
      icon: 'ShieldCheck',
      title: 'Verified Suppliers',
      description: 'Comprehensive business verification process'
    },
    {
      icon: 'CreditCard',
      title: 'Secure Payments',
      description: 'Multiple secure payment options available'
    },
    {
      icon: 'FileCheck',
      title: 'Trade Assurance',
      description: 'Protection for your orders and payments'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Platform Benefits */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Why Choose GreenTrade B2B?
        </h3>
        <div className="space-y-4">
          {benefits?.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={benefit?.icon} size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground">
                  {benefit?.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {benefit?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Success Stories */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Success Stories
        </h3>
        <div className="space-y-6">
          {successStories?.map((story, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={story?.image}
                    alt={story?.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">
                    {story?.company}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {story?.industry}
                  </p>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-md p-3 mb-3">
                <p className="text-sm font-medium text-primary">
                  {story?.achievement}
                </p>
              </div>
              <blockquote className="text-xs text-muted-foreground italic">
                {story?.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      {/* Security Assurances */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Security & Trust
        </h3>
        <div className="space-y-3">
          {securityFeatures?.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Icon name={feature?.icon} size={16} className="text-success" />
              <div>
                <span className="text-sm font-medium text-foreground">
                  {feature?.title}
                </span>
                <p className="text-xs text-muted-foreground">
                  {feature?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Support */}
      <div className="bg-muted/50 border border-border rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <Icon name="Headphones" size={20} className="text-primary" />
          <div>
            <h4 className="text-sm font-medium text-foreground">
              Need Help?
            </h4>
            <p className="text-xs text-muted-foreground">
              Our support team is available 24/7 to assist you
            </p>
            <p className="text-xs text-primary font-medium mt-1">
              support@greentradeb2b.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformBenefits;