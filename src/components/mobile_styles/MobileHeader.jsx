
import React from 'react';
import { Menu } from 'lucide-react';
import DarkLogo from '../../media/dark_logo.png';
import { Link } from 'react-router-dom';
import CartIcon from '../ui/CartIcon';

const MobileHeader = ({ onMenuClick }) => {
  return (
    <div className="mobile-header">
      <Link to="/">
        <img src={DarkLogo} alt="sumic online logo" className="logo" />
      </Link>
      <div className="flex items-center gap-4">
        <CartIcon size={20} className="text-gray-700" />
        <Menu className="hamburger-icon" onClick={onMenuClick} />
      </div>
    </div>
  );
};

export default MobileHeader;
