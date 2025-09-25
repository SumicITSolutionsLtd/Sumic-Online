
import React from 'react';
import { X, Globe, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllCategoriesMegaMenuData } from '../ui/megamenus/CategoriesMegaMenu';
import Sumic_Logo from "/src/media/dark_logo.png"

const Drawer = ({ isOpen, onClose }) => {
  const { categories } = getAllCategoriesMegaMenuData();

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose}></div>
      <div className="drawer open">
        <div className="drawer-header">
       <img className='mobile_drawer_logo' src={Sumic_Logo}/>

          <button onClick={onClose} className="close-button">
            <X />
          </button>
        </div>
        <div className="drawer-content">

          <div className="drawer-section">
            <Link to="/login" className="drawer-link" onClick={onClose}>
              <User size={22} />
              <span>Sign in</span>
            </Link>
          </div>

           <div className="drawer-section">
            <Link to="/cart" className="drawer-link" onClick={onClose}>
              <ShoppingCart size={22} />
              <span>Cart</span>
            </Link>

            <div  className="drawer-language-link drawer-link">
              <Globe size={22} />
              <span>English</span>
            </div>
          </div>
          <div className="drawer-section">
            <h3 className="drawer-section-title">All Categories</h3>
            {categories?.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="drawer-link"
                onClick={onClose}
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="drawer-section">
            <h3 className="drawer-section-title">More from Sumic</h3>
            <Link to="/" className="drawer-link" onClick={onClose}>AI sourcing agent</Link>
            <Link to="/" className="drawer-link" onClick={onClose}>Help center</Link>
            <Link to="/" className="drawer-link" onClick={onClose}>Become a supplier</Link>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Drawer;
