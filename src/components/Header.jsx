import React from "react";
import "../styles/header.css";
import Logo from "../media/logo.png";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  ClipboardList,
  User,
  MessageCircle,
  Globe,
} from "lucide-react";

function Header() {
  return (
    <div className="sumic_nav">
      <div className="header">
        <img src={Logo} alt="sumic online logo" className="logo" />

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
      <div className="header_extras">
        {/* header_extras_left */}
        <div className="header_extras-left">
          <div className="ic_nest" title="Login">
            <Menu className="header_extras_ic" size={22} />
            <p className="header_extras_link">All Categories</p>
            <p className="header_extras_link">Featured selections</p>
            <p className="header_extras_link">Order protection</p>
          </div>
        </div>
        {/* header_extras_right */}
        <div className="header_extras-right">
          <p className="header_extras_link">AI sourcing agent</p>
          {/* <p className='header_extras_link'>Buyer central</p> */}
          <p className="header_extras_link">Help center</p>
          <p className="header_extras_link">More from Sumic</p>
          <p className="header_extras_link">Become a supplier</p>
        </div>
      </div>{" "}
    </div>
  );
}

export default Header;
