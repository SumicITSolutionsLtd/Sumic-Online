import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const CompanyProfileStep = ({ formData, updateFormData, errors }) => {
  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'it', label: 'Italy' },
    { value: 'es', label: 'Spain' },
    { value: 'nl', label: 'Netherlands' },
    { value: 'cn', label: 'China' },
    { value: 'jp', label: 'Japan' },
    { value: 'kr', label: 'South Korea' },
    { value: 'in', label: 'India' },
    { value: 'au', label: 'Australia' },
    { value: 'br', label: 'Brazil' },
    { value: 'mx', label: 'Mexico' },
    { value: 'other', label: 'Other' }
  ];

  const companySizeOptions = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '501-1000', label: '501-1000 employees' },
    { value: '1000+', label: '1000+ employees' }
  ];

  const businessTypeOptions = [
    { value: 'manufacturer', label: 'Manufacturer' },
    { value: 'supplier', label: 'Supplier/Distributor' },
    { value: 'wholesaler', label: 'Wholesaler' },
    { value: 'retailer', label: 'Retailer' },
    { value: 'trading', label: 'Trading Company' },
    { value: 'service', label: 'Service Provider' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Company Profile
        </h2>
        <p className="text-muted-foreground">
          Provide detailed information about your company
        </p>
      </div>
      <div className="space-y-4">
        <Input
          label="Business License Number"
          type="text"
          placeholder="Enter your business license number"
          description="Official business registration number"
          value={formData?.businessLicense || ''}
          onChange={(e) => handleInputChange('businessLicense', e?.target?.value)}
          error={errors?.businessLicense}
          required
        />

        <Input
          label="Tax ID / VAT Number"
          type="text"
          placeholder="Enter your tax identification number"
          value={formData?.taxId || ''}
          onChange={(e) => handleInputChange('taxId', e?.target?.value)}
          error={errors?.taxId}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Country/Region"
            placeholder="Select country"
            options={countryOptions}
            value={formData?.country || ''}
            onChange={(value) => handleInputChange('country', value)}
            error={errors?.country}
            searchable
            required
          />

          <Input
            label="City"
            type="text"
            placeholder="Enter city"
            value={formData?.city || ''}
            onChange={(e) => handleInputChange('city', e?.target?.value)}
            error={errors?.city}
            required
          />
        </div>

        <Input
          label="Complete Address"
          type="text"
          placeholder="Enter your complete business address"
          value={formData?.address || ''}
          onChange={(e) => handleInputChange('address', e?.target?.value)}
          error={errors?.address}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Business Type"
            placeholder="Select business type"
            options={businessTypeOptions}
            value={formData?.businessType || ''}
            onChange={(value) => handleInputChange('businessType', value)}
            error={errors?.businessType}
            required
          />

          <Select
            label="Company Size"
            placeholder="Select company size"
            options={companySizeOptions}
            value={formData?.companySize || ''}
            onChange={(value) => handleInputChange('companySize', value)}
            error={errors?.companySize}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Primary Products/Services
          </label>
          <textarea
            placeholder="Describe your main products or services..."
            value={formData?.primaryProducts || ''}
            onChange={(e) => handleInputChange('primaryProducts', e?.target?.value)}
            className="w-full px-3 py-2 border border-border rounded-md text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
            rows={4}
          />
          {errors?.primaryProducts && (
            <p className="text-sm text-destructive mt-1">{errors?.primaryProducts}</p>
          )}
        </div>

        <Input
          label="Website URL (Optional)"
          type="url"
          placeholder="https://www.yourcompany.com"
          value={formData?.website || ''}
          onChange={(e) => handleInputChange('website', e?.target?.value)}
          error={errors?.website}
        />

        <Input
          label="Annual Revenue (Optional)"
          type="text"
          placeholder="e.g., $1M - $5M"
          description="This helps us understand your business scale"
          value={formData?.annualRevenue || ''}
          onChange={(e) => handleInputChange('annualRevenue', e?.target?.value)}
          error={errors?.annualRevenue}
        />
      </div>
    </div>
  );
};

export default CompanyProfileStep;