
import React, { useState } from 'react';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';
import EmptyCart from './components/EmptyCart';
import SavedForLater from './components/SavedForLater';
import CheckoutModal from './components/CheckoutModal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useCart } from '../../context/CartContext';



const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, cartItemCount, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Handlers for quantity changes & removal
  const increaseQty = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const decreaseQty = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setIsCheckoutOpen(true);
    }
  };

  const handleCheckoutComplete = () => {
    clearCart();
    setIsCheckoutOpen(false);
  };

  // Summary calculations
  const itemsTotal = cartItems.reduce(
    (acc, item) => acc + (item.originalPrice || item.price) * item.quantity,
    0
  );
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = itemsTotal - subtotal;
  const estimatedTotal = subtotal; // shipping is free

  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <div style={{paddingTop: "12rem", paddingBottom:"5rem"}} className="cart_page max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">Cart ({cartItems.length})</h2>
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                store="Sumic Store"
                product={{
                  name: item.title,
                  image: item.images?.[0] || '/src/media/products/product_0.jpg'
                }}
                price={item.price}
                oldPrice={item.originalPrice}
                upcomingPrice={null}
                shipping="Free shipping"
                qty={item.quantity}
                onIncrease={() => increaseQty(item.id)}
                onDecrease={() => decreaseQty(item.id)}
                onRemove={() => removeItem(item.id)}
              />
            ))
          )}
        </div>

        {/* Cart Summary */}
        <CartSummary
          itemsTotal={itemsTotal}
          discount={discount}
          subtotal={subtotal}
          shipping="Free"
          estimatedTotal={estimatedTotal}
          cartItemCount={cartItemCount}
          onCheckout={handleCheckout}
        />
      </div>
      <Footer/>
      
      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        totalAmount={estimatedTotal}
      />
    </div>
  );
};

export default CartPage;
