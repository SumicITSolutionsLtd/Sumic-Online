import React from 'react';
import Icon from '../AppIcon';

const MobileMenuToggle = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <Icon 
        name={isOpen ? "X" : "Menu"} 
        size={24} 
        className="transition-smooth" 
      />
    </button>
  );
};

export default MobileMenuToggle;