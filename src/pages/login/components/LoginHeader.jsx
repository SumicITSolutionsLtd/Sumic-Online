import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import logo from '../../../media/logo.png';

const LoginHeader = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <img src={logo} alt="sumic-online" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={16} className="text-muted-foreground" />
              <select className="text-sm text-muted-foreground bg-transparent border-none focus:outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="zh">中文</option>
              </select>
            </div>
            
            {/* Help Link */}
            <Link
              to="/help"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth flex items-center space-x-1"
            >
              <Icon name="HelpCircle" size={16} />
              <span>Help</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoginHeader;