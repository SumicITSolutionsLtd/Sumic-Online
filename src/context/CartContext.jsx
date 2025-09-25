import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Cart Context
const CartContext = createContext();

// Cart Actions
const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
};

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };

    case CART_ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };

    case CART_ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      };

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // Initialize cart state from localStorage or empty array
  const getInitialCart = () => {
    try {
      return JSON.parse(localStorage.getItem('sumic_cart') || '[]');
    } catch (error) {
      console.warn('Failed to load cart from localStorage:', error);
      return [];
    }
  };

  const [cartState, dispatch] = useReducer(cartReducer, {
    items: getInitialCart()
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem('sumic_cart', JSON.stringify(cartState.items));
    } catch (error) {
      console.warn('Failed to save cart to localStorage:', error);
    }
  }, [cartState.items]);

  const addToCart = (product) => {
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: product
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: { id: productId }
    });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { id: productId, quantity }
    });
  };

  const clearCart = () => {
    dispatch({
      type: CART_ACTIONS.CLEAR_CART
    });
    try {
      localStorage.removeItem('sumic_cart');
    } catch (error) {
      console.warn('Failed to clear cart from localStorage:', error);
    }
  };

  const getCartItemCount = () => {
    return cartState.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartState.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    cartItems: cartState.items,
    cartItemCount: getCartItemCount(),
    cartTotal: getCartTotal(),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
