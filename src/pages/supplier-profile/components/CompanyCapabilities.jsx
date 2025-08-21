import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyCapabilities = ({ supplier }) => {
  return (
    <div className="space-y-8">
      {/* Manufacturing Processes */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Manufacturing Processes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supplier?.manufacturingProcesses?.map((process, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Cog" size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{process.name}</h4>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quality Control */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Quality Control</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Quality Standards</h4>
            {supplier?.qualityStandards?.map((standard, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm text-muted-foreground">{standard}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Testing Equipment</h4>
            {supplier?.testingEquipment?.map((equipment, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Icon name="TestTube" size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">{equipment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Production Capacity */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Production Capacity</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {supplier?.productionCapacity?.map((capacity, index) => (
            <div key={index} className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">{capacity?.value}</div>
              <div className="text-sm text-muted-foreground">{capacity?.unit}</div>
              <div className="text-xs text-muted-foreground mt-1">{capacity?.period}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Export Markets */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Export Markets</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {supplier?.exportMarkets?.map((market, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
              <Icon name="Globe" size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{market}</span>
            </div>
          ))}
        </div>
      </div>
      {/* R&D Capabilities */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">R&D Capabilities</h3>
        <div className="bg-muted rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-3">Research Areas</h4>
              <ul className="space-y-2">
                {supplier?.researchAreas?.map((area, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="Lightbulb" size={14} className="text-warning" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">Development Timeline</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Prototype Development</span>
                  <span className="text-sm font-medium text-foreground">7-14 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sample Production</span>
                  <span className="text-sm font-medium text-foreground">15-30 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Mass Production</span>
                  <span className="text-sm font-medium text-foreground">30-45 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCapabilities;