import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import RegistrationProgress from './components/RegistrationProgress';
import BusinessInfoStep from './components/BusinessInfoStep';
import CompanyProfileStep from './components/CompanyProfileStep';
import VerificationStep from './components/VerificationStep';
import PlatformBenefits from './components/PlatformBenefits';

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    documents: {}
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 3;

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
    // Clear related errors when user updates data
    const fieldsToUpdate = Object.keys(newData);
    const newErrors = { ...errors };
    fieldsToUpdate?.forEach(field => {
      if (newErrors?.[field]) {
        delete newErrors?.[field];
      }
    });
    setErrors(newErrors);
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.companyName?.trim()) {
        newErrors.companyName = 'Company name is required';
      }
      if (!formData?.businessEmail?.trim()) {
        newErrors.businessEmail = 'Business email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.businessEmail)) {
        newErrors.businessEmail = 'Please enter a valid email address';
      }
      if (!formData?.password?.trim()) {
        newErrors.password = 'Password is required';
      } else if (formData?.password?.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      if (!formData?.confirmPassword?.trim()) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData?.password !== formData?.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (!formData?.industry?.trim()) {
        newErrors.industry = 'Please select your industry';
      }
      if (!formData?.phoneNumber?.trim()) {
        newErrors.phoneNumber = 'Phone number is required';
      }
    }

    if (step === 2) {
      if (!formData?.businessLicense?.trim()) {
        newErrors.businessLicense = 'Business license number is required';
      }
      if (!formData?.taxId?.trim()) {
        newErrors.taxId = 'Tax ID is required';
      }
      if (!formData?.country?.trim()) {
        newErrors.country = 'Country is required';
      }
      if (!formData?.city?.trim()) {
        newErrors.city = 'City is required';
      }
      if (!formData?.address?.trim()) {
        newErrors.address = 'Address is required';
      }
      if (!formData?.businessType?.trim()) {
        newErrors.businessType = 'Business type is required';
      }
      if (!formData?.companySize?.trim()) {
        newErrors.companySize = 'Company size is required';
      }
      if (!formData?.primaryProducts?.trim()) {
        newErrors.primaryProducts = 'Please describe your primary products/services';
      }
    }

    if (step === 3) {
      if (!formData?.documents?.businessLicense) {
        newErrors.businessLicense = 'Business license document is required';
      }
      if (!formData?.documents?.taxCertificate) {
        newErrors.taxCertificate = 'Tax certificate document is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, this would be an API call to register the business
      console.log('Registration data:', formData);
      
      // Show success message and redirect
      alert('Registration successful! Please check your email for verification instructions.');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <BusinessInfoStep
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 2:
        return (
          <CompanyProfileStep
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 3:
        return (
          <VerificationStep
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Business Registration - GreenTrade B2B</title>
        <meta name="description" content="Register your business on GreenTrade B2B marketplace. Connect with global suppliers and buyers for your B2B trading needs." />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Simplified Header */}
        <header className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/dashboard" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Leaf" size={20} color="white" />
                </div>
                <span className="text-xl font-semibold text-foreground">
                  GreenTrade B2B
                </span>
              </Link>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  Already have an account?
                </span>
                <Link
                  to="/login"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-smooth"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-6 lg:p-8">
                <RegistrationProgress 
                  currentStep={currentStep} 
                  totalSteps={totalSteps} 
                />
                
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <div>
                    {currentStep > 1 && (
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        iconName="ChevronLeft"
                        iconPosition="left"
                        disabled={isSubmitting}
                      >
                        Previous
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-muted-foreground">
                      Step {currentStep} of {totalSteps}
                    </span>
                    <Button
                      onClick={handleNext}
                      loading={isSubmitting}
                      iconName={currentStep === totalSteps ? "Check" : "ChevronRight"}
                      iconPosition="right"
                      disabled={isSubmitting}
                    >
                      {currentStep === totalSteps ? 'Complete Registration' : 'Next Step'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Benefits */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <PlatformBenefits />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-card border-t border-border mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} GreenTrade B2B. All rights reserved.
              </p>
              <div className="flex items-center justify-center space-x-6 mt-4">
                <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-smooth">
                  Terms of Service
                </Link>
                <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-smooth">
                  Privacy Policy
                </Link>
                <Link to="/support" className="text-xs text-muted-foreground hover:text-foreground transition-smooth">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Register;