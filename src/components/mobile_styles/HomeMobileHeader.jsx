
import React from 'react';
import { Menu } from 'lucide-react';
import Logo from '../../media/logo.png'; // Using the white logo for a red background
import { Link } from 'react-router-dom';
import './HomeMobileHeader.css';

const HomeMobileHeader = ({ onMenuClick }) => {
  return (
    <div className="home-mobile-header">
      <Link to="/">
        <img src={Logo} alt="sumic online logo" className="logo" />
      </Link>
      <Menu className="hamburger-icon" onClick={onMenuClick} />
    </div>
  );
};

export default HomeMobileHeader;
