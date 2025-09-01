import React from 'react';
import Icon from '../../../components/AppIcon';

const PlatformBenefits = () => {
  const benefits = [
    {
      icon: 'Users',
      title: 'Connect with 10,000+ Verified Suppliers',
      description: 'Access a global network of pre-verified manufacturers and suppliers across 150+ countries with detailed company profiles and certifications.',
      color: 'text-blue-600'
    },
    {
      icon: 'CreditCard',
      title: 'Secure Payment Processing',
      description: 'Trade with confidence using our escrow services, multiple payment methods, and fraud protection for all international transactions.',
      color: 'text-green-600'
    },
    {
      icon: 'Shield',
      title: 'Trade Assurance Program',
      description: 'Every transaction is protected by our comprehensive trade assurance covering product quality, delivery time, and payment security.',
      color: 'text-purple-600'
    },
    {
      icon: 'Zap',
      title: 'Instant Quote Requests',
      description: 'Get competitive quotes from multiple suppliers within 24 hours with our streamlined RFQ system and automated matching.',
      color: 'text-orange-600'
    },
    {
      icon: 'BarChart3',
      title: 'Market Intelligence',
      description: 'Make informed decisions with real-time pricing data, market trends, and supplier performance analytics.',
      color: 'text-indigo-600'
    },
    {
      icon: 'Headphones',
      title: '24/7 Support & Mediation',
      description: 'Our dedicated trade specialists provide round-the-clock support and dispute resolution services in multiple languages.',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Why Choose sumic-online?
        </h2>
        <p className="text-muted-foreground">
          Join thousands of businesses already growing with our platform
        </p>
      </div>
      <div className="space-y-6">
        {benefits?.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0`}>
              <Icon name={benefit?.icon} size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {benefit?.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {benefit?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-primary">$2.5B+</div>
            <div className="text-xs text-muted-foreground">Trade Volume</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-primary">500K+</div>
            <div className="text-xs text-muted-foreground">Active Buyers</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-primary">99.8%</div>
            <div className="text-xs text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformBenefits;