import React from 'react';

import Button from '../../../components/ui/Button';

const WelcomeSection = ({ user }) => {
  const currentHour = new Date()?.getHours();
  const getGreeting = () => {
    if (currentHour < 12) return 'Good morning';
    if (currentHour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const recentActivity = [
    { type: 'quote', count: 3, label: 'Pending Quotes' },
    { type: 'order', count: 7, label: 'Active Orders' },
    { type: 'message', count: 12, label: 'New Messages' }
  ];

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            {getGreeting()}, {user?.name}!
          </h1>
          <p className="text-muted-foreground text-lg">
            Welcome back to {user?.company}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Last login: Today at 9:15 AM
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {recentActivity?.map((activity, index) => (
            <div key={index} className="bg-card rounded-lg p-4 min-w-[120px] text-center shadow-card">
              <div className="text-2xl font-bold text-primary mb-1">
                {activity?.count}
              </div>
              <div className="text-xs text-muted-foreground">
                {activity?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-6">
        <Button variant="default" iconName="MessageSquare" iconPosition="left">
          Request Quote
        </Button>
        <Button variant="outline" iconName="ShoppingCart" iconPosition="left">
          View Cart (5)
        </Button>
        <Button variant="outline" iconName="Heart" iconPosition="left">
          Saved Products
        </Button>
      </div>
    </div>
  );
};

export default WelcomeSection;