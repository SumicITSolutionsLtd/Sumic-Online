
import React from 'react';
import { Menu } from 'lucide-react';
import Logo from '../../media/logo.png'; // Using the white logo for a red background
import { Link } from 'react-router-dom';
import './HomeMobileHeader.css';
import CartIcon from '../ui/CartIcon';

const HomeMobileHeader = ({ onMenuClick }) => {
  return (
    <div className="home-mobile-header">
      <Link to="/">
        <img src={Logo} alt="sumic online logo" className="logo" />
      </Link>
      <div className="flex items-center gap-4">
        <CartIcon size={20} className="text-white" />
        <Menu className="hamburger-icon" onClick={onMenuClick} />
      </div>
    </div>
  );
};

export default HomeMobileHeader;
