import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartIcon = ({ size = 22, className = "header_ic" }) => {
  const { cartItemCount } = useCart();

  return (
    <Link to="/cart" className={className} title="Cart">
      <div className="relative">
        <ShoppingCart size={size} />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
            {cartItemCount > 99 ? '99+' : cartItemCount}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
