import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const EmptyCart = ({ onShopNow }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white rounded-2xl shadow">
      {/* Icon */}
      <div className="w-20 h-20 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6">
        <FaShoppingCart size={32} />
      </div>

      {/* Message */}
      <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
      <p className="text-gray-600 mb-6 max-w-sm">
        Looks like you haven’t added anything yet. Browse our products and find
        something you love.
      </p>

      {/* Shop Button */}
      <button
        onClick={onShopNow}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold transition"
      >
        Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
