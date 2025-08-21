import React from 'react';
import Icon from '../../../components/AppIcon';

const RegistrationProgress = ({ currentStep, totalSteps }) => {
  const steps = [
    { number: 1, title: 'Business Info', description: 'Basic company details' },
    { number: 2, title: 'Company Profile', description: 'Detailed information' },
    { number: 3, title: 'Verification', description: 'Document upload' }
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps?.map((step, index) => (
          <div key={step?.number} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-smooth ${
                step?.number < currentStep 
                  ? 'bg-primary text-primary-foreground' 
                  : step?.number === currentStep
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {step?.number < currentStep ? (
                  <Icon name="Check" size={16} />
                ) : (
                  step?.number
                )}
              </div>
              <div className="mt-2 text-center">
                <p className={`text-sm font-medium ${
                  step?.number <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step?.title}
                </p>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {step?.description}
                </p>
              </div>
            </div>
            
            {/* Connector Line */}
            {index < steps?.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 transition-smooth ${
                step?.number < currentStep ? 'bg-primary' : 'bg-muted'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationProgress;