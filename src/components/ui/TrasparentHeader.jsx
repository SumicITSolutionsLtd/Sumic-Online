import React, { useState, useEffect } from "react"; // add useState import
import "../../styles/header.css";
import Logo from "../../media/logo.png";
import DarkLogo from "../../media/dark_logo.png";
import { Link } from "react-router-dom";
import CategoriesMegaMenu, { getAllCategoriesMegaMenuData } from './megamenus/CategoriesMegaMenu';
import AISourcingMegaMenu from './megamenus/AISourcingMegaMenu';
import OrderProtectionMegaMenu from './megamenus/OrderProtectionMegaMenu';
import FeaturedSelectionsMegaMenu from './megamenus/FeaturedSelectionsMegaMenu';
import HelpCenterMegaMenu from './megamenus/HelpCenterMegaMenu';
import MoreFromSumicMegaMenu from './megamenus/MoreFromSumicMegaMenu';


import {
  Menu,
  User,
  Globe,
} from "lucide-react";
import CartIcon from "./CartIcon";


import TransparentMobileHeader from "../mobile_styles/Layout";

const TrasparentHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [megaMenuData, setMegaMenuData] = useState(null);
  const [showAISourcingMenu, setShowAISourcingMenu] = useState(false);
  const [showOrderProtectionMenu, setShowOrderProtectionMenu] = useState(false);
  const [showFeaturedSelectionsMenu, setShowFeaturedSelectionsMenu] = useState(false);
  const [showHelpCenterMenu, setShowHelpCenterMenu] = useState(false);
  const [showMoreFromSumicMenu, setShowMoreFromSumicMenu] = useState(false);

  const handleAllCategoriesHover = () => {
    // Close other menus if open
    setShowAISourcingMenu(false);
    setShowOrderProtectionMenu(false);
    setShowFeaturedSelectionsMenu(false);
    setShowHelpCenterMenu(false);
    setShowMoreFromSumicMenu(false);
    
    if (!showMegaMenu) {
      setMegaMenuData(getAllCategoriesMegaMenuData());
      setShowMegaMenu(true);
    }
  };

  const handleMegaMenuLeave = () => {
    setShowMegaMenu(false);
    setShowAISourcingMenu(false);
    setShowOrderProtectionMenu(false);
    setShowFeaturedSelectionsMenu(false);
    setShowHelpCenterMenu(false);
    setShowMoreFromSumicMenu(false);
    // Delay clearing data to prevent flicker
    setTimeout(() => {
      if (!showMegaMenu) {
        setMegaMenuData(null);
      }
    }, 100);
  };

  const handleAISourcingHover = () => {
    // Close other menus if open
    setShowMegaMenu(false);
    setMegaMenuData(null);
    setShowOrderProtectionMenu(false);
    setShowFeaturedSelectionsMenu(false);
    setShowHelpCenterMenu(false);
    setShowMoreFromSumicMenu(false);
    
    setShowAISourcingMenu(true);
  };

  const handleOrderProtectionHover = () => {
    // Close other menus if open
    setShowMegaMenu(false);
    setMegaMenuData(null);
    setShowAISourcingMenu(false);
    setShowFeaturedSelectionsMenu(false);
    setShowHelpCenterMenu(false);
    setShowMoreFromSumicMenu(false);
    
    setShowOrderProtectionMenu(true);
  };

  const handleFeaturedSelectionsHover = () => {
    // Close other menus if open
    setShowMegaMenu(false);
    setMegaMenuData(null);
    setShowAISourcingMenu(false);
    setShowOrderProtectionMenu(false);
    setShowHelpCenterMenu(false);
    setShowMoreFromSumicMenu(false);
    
    setShowFeaturedSelectionsMenu(true);
  };

  const handleHelpCenterHover = () => {
    // Close other menus if open
    setShowMegaMenu(false);
    setMegaMenuData(null);
    setShowAISourcingMenu(false);
    setShowOrderProtectionMenu(false);
    setShowFeaturedSelectionsMenu(false);
    setShowMoreFromSumicMenu(false);
    
    setShowHelpCenterMenu(true);
  };

  const handleMoreFromSumicHover = () => {
    // Close other menus if open
    setShowMegaMenu(false);
    setMegaMenuData(null);
    setShowAISourcingMenu(false);
    setShowOrderProtectionMenu(false);
    setShowFeaturedSelectionsMenu(false);
    setShowHelpCenterMenu(false);
    
    setShowMoreFromSumicMenu(true);
  };

  const handleAISourcingLeave = () => {
    setShowAISourcingMenu(false);
  };

  // Check if any mega menu is open
  const isAnyMegaMenuOpen = showMegaMenu || showAISourcingMenu || showOrderProtectionMenu || showFeaturedSelectionsMenu || showHelpCenterMenu || showMoreFromSumicMenu;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sumic_nav ${scrolled || isAnyMegaMenuOpen ? "scrolled" : ""}`}>
      <div className="header">
        <Link to="/">
        
        
        <img
        style={{marginLeft:".8rem", cursor:"pointer"}}
          src={scrolled || isAnyMegaMenuOpen ? DarkLogo : Logo}
          alt="sumic online logo"
          className="logo"
        />
</Link>
        <div className="nav">
          <div className="header_location">
            <p>Deliver to:</p>
            <p>Uganda</p>
          </div>

          <button className="header_ic ic_nest" title="Language">
            <Globe size={22} />
            <p>English</p>
          </button>
{/* 
          <Link to="/" className="header_ic" title="Chat">
            <MessageCircle size={22} />
          </Link>
          <Link to="/" className="header_ic" title="Orders">
            <ClipboardList size={22} />
          </Link> */}

          <CartIcon />
          <Link to="/login" className="header_ic ic_nest" title="Login">
            <User size={22} />
            <p>Sign in</p>
          </Link>
        </div>
      </div>
      {/* when scrolled */}
         {!scrolled && (
        <div className="header_extras" onMouseLeave={handleMegaMenuLeave}>
          <div className="header_extras-left">
            <div className="ic_nest" title="All Categories">
              <Menu className="header_extras_ic" size={22} />
              <p 
                className={`header_extras_link mega-menu-trigger ${
                  showMegaMenu ? 'active' : ''
                }`}
                onMouseEnter={handleAllCategoriesHover}
              >
                All Categories
              </p>
              <p 
                className={`header_extras_link mega-menu-trigger ${
                  showFeaturedSelectionsMenu ? 'active' : ''
                }`}
                onMouseEnter={handleFeaturedSelectionsHover}
              >
                Featured selections
              </p>
              <p 
                className={`header_extras_link mega-menu-trigger ${
                  showOrderProtectionMenu ? 'active' : ''
                }`}
                onMouseEnter={handleOrderProtectionHover}
              >
                Order protection
              </p>
            </div>
          </div>
          <div className="header_extras-right">
           
                 <p 
              className={`header_extras_link mega-menu-trigger ${
                showMoreFromSumicMenu ? 'active' : ''
              }`}
              onMouseEnter={handleMoreFromSumicHover}
            >
              Learn more about SumicIT solutions
            </p>
           
            <p 
              className={`header_extras_link mega-menu-trigger ${
                showAISourcingMenu ? 'active' : ''
              }`}
              onMouseEnter={handleAISourcingHover}
            >
              AI sourcing agent
            </p>
            <p 
              className={`header_extras_link mega-menu-trigger ${
                showHelpCenterMenu ? 'active' : ''
              }`}
              onMouseEnter={handleHelpCenterHover}
            >
              Help center
            </p>
      
            <p className="header_extras_link">Become a supplier</p>
          </div>
          
          {/* Mega Menus */}
          <CategoriesMegaMenu 
            isVisible={showMegaMenu && !scrolled} 
            megaMenuData={megaMenuData}
          />
                    {/* More from Sumic Mega Menu */}

                    <MoreFromSumicMegaMenu isVisible={showMoreFromSumicMenu && !scrolled} />
          {/* AI Sourcing Mega Menu */}
          <AISourcingMegaMenu isVisible={showAISourcingMenu && !scrolled} />
          
          {/* Order Protection Mega Menu */}
          <OrderProtectionMegaMenu isVisible={showOrderProtectionMenu && !scrolled} />
          
          {/* Featured Selections Mega Menu */}
          <FeaturedSelectionsMegaMenu isVisible={showFeaturedSelectionsMenu && !scrolled} />
          
          {/* Help Center Mega Menu */}
          <HelpCenterMegaMenu isVisible={showHelpCenterMenu && !scrolled} />
          
        </div>
      )}


      {/* one mobile */}

      {/* <TransparentMobileHeader/> */}
   
    </div>
  );
}

export default TrasparentHeader;