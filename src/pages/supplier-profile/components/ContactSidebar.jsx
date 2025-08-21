import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ContactSidebar = ({ supplier }) => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message?.trim()) {
      // In real app, this would send the message
      console.log('Sending message:', message);
      setMessage('');
      setIsMessageOpen(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
        
        {/* Contact Person */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
            <Image
              src={supplier?.contactPerson?.avatar}
              alt={supplier?.contactPerson?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-foreground">{supplier?.contactPerson?.name}</h4>
            <p className="text-sm text-muted-foreground">{supplier?.contactPerson?.title}</p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={16} className="text-muted-foreground" />
            <span className="text-sm text-foreground">{supplier?.contactInfo?.phone}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Mail" size={16} className="text-muted-foreground" />
            <span className="text-sm text-foreground">{supplier?.contactInfo?.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="MapPin" size={16} className="text-muted-foreground" />
            <span className="text-sm text-foreground">{supplier?.contactInfo?.address}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Globe" size={16} className="text-muted-foreground" />
            <a 
              href={supplier?.contactInfo?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              {supplier?.contactInfo?.website}
            </a>
          </div>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <Button 
            variant="default" 
            fullWidth 
            iconName="MessageSquare" 
            iconPosition="left"
            onClick={() => setIsMessageOpen(true)}
          >
            Send Message
          </Button>
          <Button 
            variant="outline" 
            fullWidth 
            iconName="FileText" 
            iconPosition="left"
          >
            Request Quote
          </Button>
          <Button 
            variant="outline" 
            fullWidth 
            iconName="Heart" 
            iconPosition="left"
          >
            Add to Favorites
          </Button>
          <Button 
            variant="outline" 
            fullWidth 
            iconName="Share2" 
            iconPosition="left"
          >
            Share Profile
          </Button>
        </div>
      </div>
      {/* Business Hours */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Business Hours</h3>
        <div className="space-y-2">
          {supplier?.businessHours?.map((hours, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{hours?.day}</span>
              <span className="text-sm text-foreground">{hours?.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-success/10 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-sm font-medium text-success">Currently Online</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Typically responds within 2 hours
          </p>
        </div>
      </div>
      {/* Message Modal */}
      {isMessageOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-lg w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Send Message</h3>
              <button
                onClick={() => setIsMessageOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="p-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e?.target?.value)}
                placeholder="Type your message here..."
                className="w-full h-32 p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex justify-end space-x-2 mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setIsMessageOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  variant="default" 
                  onClick={handleSendMessage}
                  disabled={!message?.trim()}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSidebar;