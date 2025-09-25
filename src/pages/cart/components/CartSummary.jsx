import React from "react";

const CartSummary = ({ itemsTotal, discount, subtotal, shipping, estimatedTotal, cartItemCount, onCheckout }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow w-full lg:w-1/3">
      <h2 className="text-xl font-bold mb-4">Summary</h2>

      {/* Items Preview */}
      <div className="flex gap-2 mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
        <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Items total</span>
          <span className="line-through text-gray-500">
            UGX {itemsTotal.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Items discount</span>
          <span>- UGX {discount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Subtotal</span>
          <span>UGX {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shipping}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Estimated total</span>
          <span className="text-green-600">UGX {estimatedTotal.toLocaleString()}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button 
        onClick={onCheckout}
        className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-3xl font-semibold transition-colors"
      >
        Checkout ({cartItemCount})
      </button>

      {/* Payment Options */}
      <div className="mt-6">
        <p className="text-sm font-medium mb-2">Pay with</p>
        <div className="flex gap-2">
          <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-xs text-gray-600">MTN</span>
          </div>
          <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-xs text-gray-600">Airtel</span>
          </div>
          <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-xs text-gray-600">Card</span>
          </div>
        </div>
      </div>

      {/* Buyer Protection */}
      <div className="mt-6 border-t pt-4 text-xs text-gray-600">
        <p>
           Get a full refund if the item is not as described or not delivered
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
