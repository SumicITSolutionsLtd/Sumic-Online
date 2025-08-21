import React from 'react';
import Icon from '../../../components/AppIcon';

const TradeInformation = ({ supplier }) => {
  return (
    <div className="space-y-8">
      {/* Payment Terms */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Payment Terms</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Accepted Payment Methods</h4>
            <div className="space-y-3">
              {supplier?.paymentMethods?.map((method, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="CreditCard" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{method}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Payment Terms</h4>
            <div className="space-y-3">
              {supplier?.paymentTerms?.map((term, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-success" />
                  <span className="text-sm text-muted-foreground">{term}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Shipping Information */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Shipping & Logistics</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Shipping Methods</h4>
            <div className="space-y-3">
              {supplier?.shippingMethods?.map((method, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="Truck" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{method?.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{method?.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Shipping Ports</h4>
            <div className="space-y-3">
              {supplier?.shippingPorts?.map((port, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="Anchor" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{port}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Minimum Order Requirements */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Order Requirements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supplier?.orderRequirements?.map((requirement, index) => (
            <div key={index} className="p-4 bg-muted rounded-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Package" size={20} className="text-primary" />
              </div>
              <h4 className="font-medium text-foreground mb-1">{requirement?.category}</h4>
              <p className="text-lg font-semibold text-primary">{requirement?.moq}</p>
              <p className="text-xs text-muted-foreground mt-1">{requirement?.note}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Trade Assurance */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Trade Assurance</h3>
        <div className="bg-success/10 border border-success/20 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Shield" size={24} className="text-success" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-success mb-2">Trade Assurance Protection</h4>
              <p className="text-sm text-muted-foreground mb-4">
                This supplier offers Trade Assurance protection for your orders, covering product quality and on-time shipment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-foreground mb-2">Coverage Amount</h5>
                  <p className="text-lg font-semibold text-success">{supplier?.tradeAssurance?.coverageAmount}</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">Protection Period</h5>
                  <p className="text-sm text-muted-foreground">{supplier?.tradeAssurance?.protectionPeriod}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Customization Services */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Customization Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {supplier?.customizationServices?.map((service, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
              <Icon name="Wrench" size={16} className="text-primary" />
              <div>
                <h4 className="font-medium text-foreground">{service?.name}</h4>
                <p className="text-sm text-muted-foreground">{service?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeInformation;