
import React, { useState } from 'react';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';
import EmptyCart from './components/EmptyCart';
import SavedForLater from './components/SavedForLater';
import Header from '../../components/Header';
import productOne from "../../media/products/product_0.jpg"
import productTwo from "../../media/products/product_1.jpg"
import productThree from "../../media/products/product_2.jpg"
import Footer from '../../components/Footer';



const CartPage = () => {
  // Sample cart data (you can pull this dynamically later)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      store: "Kick n' Kicks",
      product: {
        name: "The kicks were released as a retro in 2004, with new limited colorways in high and low top versions for men and women",
        image: productOne, 
      },
      price: 24714,
      oldPrice: 51492,
      upcomingPrice: 23169,
      shipping: "Free shipping",
      qty: 1,
    },
    {
      id: 2,
      store: "Kikubo Global Store",
      product: {
        name: "2-in-1 Wireless Lavalier Microphone for iPhone Android, Mini Pro Lapel Mic",
        image: productTwo, 
      },
      price: 57828,
      oldPrice: 63414,
      upcomingPrice: null,
      shipping: "Free shipping",
      qty: 1,
    },
  ]);

  // Handlers for quantity changes & removal
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Summary calculations
  const itemsTotal = cartItems.reduce(
    (acc, item) => acc + item.oldPrice * item.qty,
    0
  );
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
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
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              store={item.store}
              product={item.product}
              price={item.price}
              oldPrice={item.oldPrice}
              upcomingPrice={item.upcomingPrice}
              shipping={item.shipping}
              qty={item.qty}
              onIncrease={() => increaseQty(item.id)}
              onDecrease={() => decreaseQty(item.id)}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </div>

        {/* Cart Summary */}
        <CartSummary
          itemsTotal={itemsTotal}
          discount={discount}
          subtotal={subtotal}
          shipping="Free"
          estimatedTotal={estimatedTotal}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default CartPage;
