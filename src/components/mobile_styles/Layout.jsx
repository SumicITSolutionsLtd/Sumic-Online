import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import TrasparentHeader from '../ui/TrasparentHeader';
import MobileHeader from './MobileHeader';
import HomeMobileHeader from './HomeMobileHeader';
import Drawer from './Drawer';
import './mobile-header.css';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const renderHeader = () => {
    const isHomePage = location.pathname === '/';
    const isLogin = location.pathname === '/login';

    if (isMobile) {
      return (
        <>
          {isHomePage || isLogin ? (
            <HomeMobileHeader onMenuClick={handleMenuClick} />
          ) : (
            <MobileHeader onMenuClick={handleMenuClick} />
          )}
          <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
        </>
      );
    }

  

    if (isHomePage) {
      return <TrasparentHeader />;
    }

    return <Header />;
  };

  return (
    <div className='mobile_menu_holder'>
      {renderHeader()}
      <main>{children}</main>
    </div>
  );
};

export default Layout;