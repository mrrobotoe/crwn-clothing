import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const foundCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (foundCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToDecrement) => {
  const foundCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDecrement.id
  );
  
  if (foundCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToDecrement.id)
  }
  if (foundCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToDecrement.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  carItems: [],
  addItemToCart: () => {},
  cartQuantity: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartQuantity(newCartQuantity);
  }, [cartItems]);

  useEffect(() => {
    const totalInCart = cartItems.reduce(
      (total, cartItem) => total + (cartItem.quantity * cartItem.price),
      0
    );
    setCartTotal(totalInCart);
  })

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToDecrement ) => {
    setCartItems(removeCartItem(cartItems, productToDecrement));
  }

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartQuantity,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
