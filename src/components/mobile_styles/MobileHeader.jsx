
import React from 'react';
import { Menu } from 'lucide-react';
import DarkLogo from '../../media/dark_logo.png';
import { Link } from 'react-router-dom';

const MobileHeader = ({ onMenuClick }) => {
  return (
    <div className="mobile-header">
      <Link to="/">
        <img src={DarkLogo} alt="sumic online logo" className="logo" />
      </Link>
      <Menu className="hamburger-icon" onClick={onMenuClick} />
    </div>
  );
};

export default MobileHeader;
