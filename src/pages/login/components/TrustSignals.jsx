import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import product_0 from '../../../media/products/product_0.jpg';
import product_1 from '../../../media/products/product_1.jpg';

const TrustSignals = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'SSL Encrypted',
      description: 'Bank-level security for all transactions'
    },
    {
      icon: 'CheckCircle',
      title: 'Verified Platform',
      description: 'ISO 27001 certified security standards'
    },
    {
      icon: 'Lock',
      title: 'Secure Payments',
      description: 'PCI DSS compliant payment processing'
    }
  ];

  const testimonials = [
    {
      name: 'Kalanzi Dixon',
      company: 'Global Manufacturing Ltd.',
      role: 'Procurement Director',
      content: `sumic-online has streamlined our supplier sourcing process. We've reduced procurement time by 40% and found reliable partners worldwide.`,
      avatar: product_0
    },
    {
      name: 'Gift Ayebare',company: 'TechComponents Inc.',role: 'Supply Chain Manager',
      content: `The platform's verification system gives us confidence in new suppliers. We've expanded our vendor network significantly through sumic-online.`,
      avatar: product_1
    }
  ];

  const platformStats = [
    {
      icon: 'Users',
      value: '10,000+',
      label: 'Verified Suppliers'
    },
    {
      icon: 'Globe',
      value: '150+',
      label: 'Countries Served'
    },
    {
      icon: 'ShoppingCart',
      value: '$2.5B+',
      label: 'Trade Volume'
    },
    {
      icon: 'Award',
      value: '99.8%',
      label: 'Success Rate'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Security Features */}
      <div className="bg-card rounded-lg p-6 shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Shield" size={20} className="text-primary mr-2" />
          Enterprise Security
        </h3>
        <div className="space-y-4">
          {securityFeatures?.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name={feature?.icon} size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground">{feature?.title}</h4>
                <p className="text-xs text-muted-foreground">{feature?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Platform Statistics */}
      <div className="bg-card rounded-lg p-6 shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Trusted by Businesses Worldwide
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {platformStats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon name={stat?.icon} size={18} className="text-primary" />
              </div>
              <div className="text-lg font-semibold text-foreground">{stat?.value}</div>
              <div className="text-xs text-muted-foreground">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Customer Testimonials */}
      <div className="bg-card rounded-lg p-6 shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          What Our Clients Say
        </h3>
        <div className="space-y-4">
          {testimonials?.map((testimonial, index) => (
            <div key={index} className="border-l-4 border-primary/20 pl-4">
              <div className="flex items-start space-x-3 mb-2">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">{testimonial?.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial?.role} • {testimonial?.company}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "{testimonial?.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Certification Badges */}
      <div className="bg-card rounded-lg p-6 shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Certifications & Compliance
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <Icon name="Award" size={24} className="text-primary mx-auto mb-2" />
            <div className="text-xs font-medium text-foreground">ISO 27001</div>
            <div className="text-xs text-muted-foreground">Security</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <Icon name="CheckCircle" size={24} className="text-primary mx-auto mb-2" />
            <div className="text-xs font-medium text-foreground">PCI DSS</div>
            <div className="text-xs text-muted-foreground">Payments</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <Icon name="Shield" size={24} className="text-primary mx-auto mb-2" />
            <div className="text-xs font-medium text-foreground">SOC 2</div>
            <div className="text-xs text-muted-foreground">Compliance</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <Icon name="Globe" size={24} className="text-primary mx-auto mb-2" />
            <div className="text-xs font-medium text-foreground">GDPR</div>
            <div className="text-xs text-muted-foreground">Privacy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;