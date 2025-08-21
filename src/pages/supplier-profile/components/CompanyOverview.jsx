import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyOverview = ({ supplier }) => {
  return (
    <div className="space-y-8">
      {/* Company Description */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">About Our Company</h3>
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <p className="mb-4">{supplier?.description}</p>
          <p>{supplier?.additionalInfo}</p>
        </div>
      </div>
      {/* Certifications */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Certifications & Standards</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {supplier?.certifications?.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-muted rounded-lg text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <h4 className="font-medium text-foreground text-sm mb-1">{cert?.name}</h4>
              <p className="text-xs text-muted-foreground">{cert?.issuer}</p>
              <p className="text-xs text-muted-foreground">Valid until {cert?.validUntil}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Facility Photos */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Our Facilities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supplier?.facilityPhotos?.map((photo, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={photo?.url}
                  alt={photo?.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{photo?.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Key Statistics */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Company Statistics</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {supplier?.statistics?.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;