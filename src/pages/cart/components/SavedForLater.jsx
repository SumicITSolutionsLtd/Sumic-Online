import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const SavedForLater = ({ items, onMoveToCart, onRemove }) => {
  if (!items || items.length === 0) {
    return null; // Don’t show if empty
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow mt-8">
      <h2 className="text-lg font-bold mb-4">Saved for Later ({items.length})</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 flex flex-col justify-between hover:shadow transition"
          >
            {/* Product Image */}
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            {/* Details */}
            <div className="flex-1">
              <p className="text-sm font-medium mb-1 line-clamp-2">
                {item.product.name}
              </p>
              <p className="text-green-600 font-bold">
                UGX {item.price.toLocaleString()}
              </p>
              {item.oldPrice && (
                <p className="text-xs line-through text-gray-500">
                  UGX {item.oldPrice.toLocaleString()}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-3">
              <button
                onClick={() => onMoveToCart(item.id)}
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-lg"
              >
                Move to Cart
              </button>
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedForLater;
