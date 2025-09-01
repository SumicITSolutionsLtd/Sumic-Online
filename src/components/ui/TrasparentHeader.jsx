import React, { useState, useEffect, Fragment } from "react"; // add useState import
import "../../styles/header.css";
import Logo from "../../media/logo.png";
import DarkLogo from "../../media/dark_logo.png";
import { Link } from "react-router-dom";
import MegaMenu, { getAllCategoriesMegaMenuData } from './MegaMenu';
import {
  ShoppingCart,
  Menu,
  ClipboardList,
  User,
  MessageCircle,
  Globe,
} from "lucide-react";

const TrasparentHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [megaMenuData, setMegaMenuData] = useState(null);

  const handleAllCategoriesHover = () => {
    if (!showMegaMenu) {
      setMegaMenuData(getAllCategoriesMegaMenuData());
      setShowMegaMenu(true);
    }
  };

  const handleMegaMenuLeave = () => {
    setShowMegaMenu(false);
    // Delay clearing data to prevent flicker
    setTimeout(() => {
      if (!showMegaMenu) {
        setMegaMenuData(null);
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sumic_nav ${scrolled ? "scrolled" : ""}`}>
      <div className="header">
        <img
        style={{marginLeft:".8rem"}}
          src={scrolled ? DarkLogo : Logo}
          alt="sumic online logo"
          className="logo"
        />

        <div className="nav">
          <div className="header_location">
            <p>Deliver to:</p>
            <p>Uganda</p>
          </div>

          <button className="header_ic ic_nest" title="Language">
            <Globe size={22} />
            <p>English</p>
          </button>

          <Link to="/chat" className="header_ic" title="Chat">
            <MessageCircle size={22} />
          </Link>
          <Link to="/orders" className="header_ic" title="Orders">
            <ClipboardList size={22} />
          </Link>

          <Link to="/cart" className="header_ic" title="Cart">
            <ShoppingCart size={22} />
          </Link>
          <Link to="/login" className="header_ic ic_nest" title="Login">
            <User size={22} />
            <p>Sign in</p>
          </Link>
        </div>
      </div>
         {!scrolled && (
        <div className="header_extras">
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
              <p className="header_extras_link">Featured selections</p>
              <p className="header_extras_link">Order protection</p>
            </div>
          </div>
          <div className="header_extras-right">
            <p className="header_extras_link">AI sourcing agent</p>
            <p className="header_extras_link">Help center</p>
            <p className="header_extras_link">More from Sumic</p>
            <p className="header_extras_link">Become a supplier</p>
          </div>
          
          {/* Mega Menu */}
          <Fragment onMouseLeave={handleMegaMenuLeave}>
            <MegaMenu 
              isVisible={showMegaMenu && !scrolled} 
              megaMenuData={megaMenuData}
            />
          </Fragment>
        </div>
      )}
   
    </div>
  );
}

export default TrasparentHeader;