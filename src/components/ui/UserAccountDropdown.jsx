import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Image from '../AppImage';

const UserAccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Mock user data - in real app, this would come from context/auth
  useEffect(() => {
    // Simulate checking authentication status
    const mockUser = {
      name: 'John Smith',
      email: 'john.smith@company.com',
      company: 'Smith Manufacturing Co.',
      avatar: '/assets/images/avatar-placeholder.jpg',
      role: 'Procurement Manager'
    };
    setUser(mockUser);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // In real app, this would clear auth tokens and context
    setUser(null);
    navigate('/login');
    setIsOpen(false);
  };

  const menuItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: 'LayoutDashboard'
    },
    {
      label: 'My Orders',
      path: '/orders',
      icon: 'ShoppingCart'
    },
    {
      label: 'Saved Products',
      path: '/saved',
      icon: 'Heart'
    },
    {
      label: 'Account Settings',
      path: '/settings',
      icon: 'Settings'
    },
    {
      label: 'Help & Support',
      path: '/support',
      icon: 'HelpCircle'
    }
  ];

  if (!user) {
    return (
      <div className="flex items-center space-x-2">
        <Link
          to="/login"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-smooth"
        >
          Register
        </Link>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      {/* User Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-1 rounded-full hover:bg-muted transition-smooth focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
          <Image
            src={user?.avatar}
            alt={user?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden sm:block text-left">
          <p className="text-sm font-medium text-foreground">{user?.name}</p>
          <p className="text-xs text-muted-foreground">{user?.company}</p>
        </div>
        <Icon 
          name={isOpen ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-muted-foreground" 
        />
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-popover border border-border rounded-lg shadow-modal z-50">
          {/* User Info Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                <Image
                  src={user?.avatar}
                  alt={user?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {user?.email}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {user?.role} • {user?.company}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            {menuItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 text-sm hover:bg-muted rounded-md transition-smooth"
              >
                <Icon name={item?.icon} size={16} className="text-muted-foreground" />
                <span>{item?.label}</span>
              </Link>
            ))}
          </div>

          {/* Logout */}
          <div className="p-2 border-t border-border">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-md transition-smooth"
            >
              <Icon name="LogOut" size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAccountDropdown;