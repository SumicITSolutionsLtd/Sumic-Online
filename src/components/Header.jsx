// src/components/header/ Header.js
import React, { useState } from "react";
import "../styles/header.css";
import DarkLogo from "../media/dark_logo.png";
import { Link } from "react-router-dom";
import CategoriesMegaMenu, { getAllCategoriesMegaMenuData } from "../components/ui/megamenus/CategoriesMegaMenu";
import AISourcingMegaMenu from "../components/ui/megamenus/AISourcingMegaMenu";
import OrderProtectionMegaMenu from "../components/ui/megamenus/OrderProtectionMegaMenu";
import FeaturedSelectionsMegaMenu from "../components/ui/megamenus/FeaturedSelectionsMegaMenu";
import HelpCenterMegaMenu from "../components/ui/megamenus/HelpCenterMegaMenu";
import MoreFromSumicMegaMenu from "../components/ui/megamenus/MoreFromSumicMegaMenu";
import {
  ShoppingCart,
  Menu,
  ClipboardList,
  User,
  MessageCircle,
  Globe,
} from "lucide-react";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [megaMenuData, setMegaMenuData] = useState(null);

  const handleHover = (menu) => {
    if (menu === "categories") {
      setMegaMenuData(getAllCategoriesMegaMenuData());
    } else {
      setMegaMenuData(null);
    }
    setActiveMenu(menu);
  };

  const handleLeave = () => {
    setActiveMenu(null);
    setMegaMenuData(null);
  };

  return (
    <div className="sumic_nav scrolled">
      <div className="header">
        <Link to="/">
          <img
          style={{ marginLeft: ".8rem" }}
          src={DarkLogo}
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

          {/* <Link to="/" className="header_ic" title="Chat">
            <MessageCircle size={22} />
          </Link> */}
          {/* <Link to="/" className="header_ic" title="Orders">
            <ClipboardList size={22} />
          </Link> */}

          <Link to="/cart" className="header_ic" title="Cart">
            <ShoppingCart size={22} />
          </Link>
          <Link to="/login" className="header_ic ic_nest" title="Login">
            <User size={22} />
            <p>Sign in</p>
          </Link>
        </div>
      </div>

      {/* Extras section (always visible in   mode) */}
      <div className="header_extras" onMouseLeave={handleLeave}>
        <div className="header_extras-left">
          <div className="ic_nest" title="All Categories">
            <Menu className="header_extras_ic" size={22} />
            <p
              className={`header_extras_link mega-menu-trigger ${
                activeMenu === "categories" ? "active" : ""
              }`}
              onMouseEnter={() => handleHover("categories")}
            >
              All Categories
            </p>
            <p
              className={`header_extras_link mega-menu-trigger ${
                activeMenu === "featured" ? "active" : ""
              }`}
              onMouseEnter={() => handleHover("featured")}
            >
              Featured selections
            </p>
            <p
              className={`header_extras_link mega-menu-trigger ${
                activeMenu === "order" ? "active" : ""
              }`}
              onMouseEnter={() => handleHover("order")}
            >
              Order protection
            </p>
          </div>
        </div>

        <div className="header_extras-right">
          <p
            className={`header_extras_link mega-menu-trigger ${
              activeMenu === "ai" ? "active" : ""
            }`}
            onMouseEnter={() => handleHover("ai")}
          >
            AI sourcing agent
          </p>
          <p
            className={`header_extras_link mega-menu-trigger ${
              activeMenu === "help" ? "active" : ""
            }`}
            onMouseEnter={() => handleHover("help")}
          >
            Help center
          </p>
          <p
            className={`header_extras_link mega-menu-trigger ${
              activeMenu === "more" ? "active" : ""
            }`}
            onMouseEnter={() => handleHover("more")}
          >
            More from Sumic
          </p>
          <p className="header_extras_link">Become a supplier</p>
        </div>

        {/* Mega Menus */}
        <CategoriesMegaMenu
          isVisible={activeMenu === "categories"}
          megaMenuData={megaMenuData}
        />
        <AISourcingMegaMenu isVisible={activeMenu === "ai"} />
        <OrderProtectionMegaMenu isVisible={activeMenu === "order"} />
        <FeaturedSelectionsMegaMenu isVisible={activeMenu === "featured"} />
        <HelpCenterMegaMenu isVisible={activeMenu === "help"} />
        <MoreFromSumicMegaMenu isVisible={activeMenu === "more"} />
      </div>
    </div>
  );
};

export default  Header;
