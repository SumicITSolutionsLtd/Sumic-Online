import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ store, product, price, oldPrice, upcomingPrice, shipping, qty, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-3">{store}</h3>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-4">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-lg"
        />

        {/* Details */}
        <div className="flex-1">
          <p className="text-sm font-medium">{product.name}</p>
          <p className="text-green-600 font-bold">UGX {price?.toLocaleString()}</p>
          <p className="text-xs line-through text-gray-500">UGX {oldPrice?.toLocaleString()}</p>
          {upcomingPrice && (
            <p className="text-xs text-green-500">
              Upcoming price UGX {upcomingPrice?.toLocaleString()}
            </p>
          )}
          <p className="text-xs text-gray-500">{shipping}</p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onDecrease}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span>{qty}</span>
          <button
            onClick={onIncrease}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 ml-2"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
