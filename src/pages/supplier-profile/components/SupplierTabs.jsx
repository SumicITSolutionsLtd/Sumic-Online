import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import CompanyOverview from './CompanyOverview';
import ProductCatalog from './ProductCatalog';
import CompanyCapabilities from './CompanyCapabilities';
import TradeInformation from './TradeInformation';

const SupplierTabs = ({ supplier }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    {
      id: 'overview',
      label: 'Company Overview',
      icon: 'Building2',
      component: CompanyOverview
    },
    {
      id: 'products',
      label: 'Product Catalog',
      icon: 'Package',
      component: ProductCatalog
    },
    {
      id: 'capabilities',
      label: 'Capabilities',
      icon: 'Settings',
      component: CompanyCapabilities
    },
    {
      id: 'trade',
      label: 'Trade Info',
      icon: 'Truck',
      component: TradeInformation
    }
  ];

  const ActiveComponent = tabs?.find(tab => tab?.id === activeTab)?.component;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <nav className="flex overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-smooth ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted'
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
        {ActiveComponent && <ActiveComponent supplier={supplier} />}
      </div>
    </div>
  );
};

export default SupplierTabs;