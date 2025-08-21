import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SupplierHeader = ({ supplier }) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden mb-6">
      {/* Banner Image */}
      <div className="h-48 sm:h-64 relative overflow-hidden">
        <Image
          src={supplier?.bannerImage}
          alt={`${supplier?.companyName} banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      {/* Company Info */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Company Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border border-border rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={supplier?.logo}
                alt={`${supplier?.companyName} logo`}
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* Company Details */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {supplier?.companyName}
                </h1>
                <div className="flex items-center space-x-2 ml-4">
                  {supplier?.verifications?.map((verification, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-full text-xs font-medium"
                    >
                      <Icon name="CheckCircle" size={14} />
                      <span>{verification}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center text-muted-foreground mb-3">
                <Icon name="MapPin" size={16} className="mr-2" />
                <span className="text-sm">{supplier?.location}</span>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-muted-foreground" />
                  <span>
                    <span className="font-medium text-foreground">{supplier?.yearsInBusiness}</span>
                    <span className="text-muted-foreground"> years in business</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Package" size={16} className="text-muted-foreground" />
                  <span>
                    <span className="font-medium text-foreground">{supplier?.totalProducts}</span>
                    <span className="text-muted-foreground"> products</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span>
                    <span className="font-medium text-foreground">{supplier?.responseRate}</span>
                    <span className="text-muted-foreground"> response rate</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Rating */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < Math.floor(supplier?.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-foreground">{supplier?.rating}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Based on {supplier?.reviewCount} reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierHeader;