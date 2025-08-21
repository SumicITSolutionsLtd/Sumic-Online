import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const BusinessInfoStep = ({ formData, updateFormData, errors }) => {
  const industryOptions = [
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'electronics', label: 'Electronics & Technology' },
    { value: 'textiles', label: 'Textiles & Apparel' },
    { value: 'automotive', label: 'Automotive & Transportation' },
    { value: 'chemicals', label: 'Chemicals & Materials' },
    { value: 'food', label: 'Food & Beverages' },
    { value: 'machinery', label: 'Industrial Machinery' },
    { value: 'construction', label: 'Construction & Building Materials' },
    { value: 'healthcare', label: 'Healthcare & Medical Equipment' },
    { value: 'agriculture', label: 'Agriculture & Farming' },
    { value: 'energy', label: 'Energy & Environment' },
    { value: 'sports', label: 'Sports & Entertainment' },
    { value: 'beauty', label: 'Beauty & Personal Care' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'packaging', label: 'Packaging & Printing' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Business Information
        </h2>
        <p className="text-muted-foreground">
          Let's start with your basic company details
        </p>
      </div>
      <div className="space-y-4">
        <Input
          label="Company Name"
          type="text"
          placeholder="Enter your company name"
          value={formData?.companyName || ''}
          onChange={(e) => handleInputChange('companyName', e?.target?.value)}
          error={errors?.companyName}
          required
        />

        <Input
          label="Business Email"
          type="email"
          placeholder="business@company.com"
          description="This will be your primary login email"
          value={formData?.businessEmail || ''}
          onChange={(e) => handleInputChange('businessEmail', e?.target?.value)}
          error={errors?.businessEmail}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create a strong password"
          description="Minimum 8 characters with letters and numbers"
          value={formData?.password || ''}
          onChange={(e) => handleInputChange('password', e?.target?.value)}
          error={errors?.password}
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          value={formData?.confirmPassword || ''}
          onChange={(e) => handleInputChange('confirmPassword', e?.target?.value)}
          error={errors?.confirmPassword}
          required
        />

        <Select
          label="Primary Industry"
          placeholder="Select your industry"
          description="Choose the industry that best describes your business"
          options={industryOptions}
          value={formData?.industry || ''}
          onChange={(value) => handleInputChange('industry', value)}
          error={errors?.industry}
          searchable
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={formData?.phoneNumber || ''}
          onChange={(e) => handleInputChange('phoneNumber', e?.target?.value)}
          error={errors?.phoneNumber}
          required
        />
      </div>
    </div>
  );
};

export default BusinessInfoStep;