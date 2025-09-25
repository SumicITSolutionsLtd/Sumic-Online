
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Logo from '../../media/logo.png';
import DarkLogo from '../../media/dark_logo.png';
import { Link } from 'react-router-dom';

const TransparentMobileHeader = ({ onMenuClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`mobile-header ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/">
        <img src={scrolled ? DarkLogo : Logo} alt="sumic online logo" className="logo" />
      </Link>
      <Menu className="hamburger-icon" onClick={onMenuClick} />
    </div>
  );
};

export default TransparentMobileHeader;
