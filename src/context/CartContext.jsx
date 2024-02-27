import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [value, setValue] = useState(1);
  const [productCart, setProductCart] = useState({
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    subTotal:0,
    taxRate: 0.005,
    tax:0, 
    discount: 10.00,
    shippingCharge:5.50
  });

  const addToCart = (product) => {
    const existingItem = productCart.cartItems.find(
      (item) => item.id === product.id
    );

    setProductCart((prevCart) => ({
      ...prevCart,
      cartItems: existingItem
        ? prevCart.cartItems.map((item) =>
            item.id === existingItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: (item.quantity + 1) * item.price,
                }
              : item
          )
        : [...prevCart.cartItems, { ...product, quantity: 1,totalPrice: product?.price }],
      totalItems: Number(prevCart.totalItems) + 1,
      subTotal: Number(prevCart.subTotal) + Number(product.price),
      tax: Number(prevCart.tax) + Number(product.price) * prevCart.taxRate,
    }));
  };

  const increaseQuantity = (productId) => {
    setProductCart((prevCart) => {
      const updatedCartItems = prevCart.cartItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * Number(item.price),
            }
          : item
      );
  
      return {
        ...prevCart,
        cartItems: updatedCartItems,
        totalItems: prevCart.totalItems + 1,
        subTotal: Number(prevCart.subTotal) + Number(updatedCartItems.find((item) => item.id === productId).price),
        tax: Number(prevCart.tax) + updatedCartItems.find((item) => item.id === productId).price * prevCart.taxRate,
      };
    });
  };
  
  const decreaseQuantity = (productId) => {
    setProductCart((prevCart) => {
        const updatedCartItems = prevCart.cartItems.map((item) =>
          item.id === productId && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: (item.quantity - 1) * item.price,
              }
            : item
        );
    
        const updatedItem = updatedCartItems.find((item) => item.id === productId);
    
        return {
          ...prevCart,
          cartItems: updatedCartItems,
          totalItems: prevCart.totalItems - 1,
          subTotal: Number(prevCart.subTotal) === Number(updatedItem.price) ? updatedItem.price : Number(prevCart.subTotal) - Number(updatedItem.price) ,
          tax: Number(prevCart.tax) - updatedItem.price * prevCart.taxRate,
        };
      });
  };


  const removeProductFromCart = (productId) => {
    const removedItem = productCart.cartItems.find(item => item.id === productId);

    setProductCart(prevCart => ({
      ...prevCart,
      cartItems: prevCart.cartItems.filter(item => item.id !== productId),
      totalItems: prevCart.totalItems - removedItem.quantity,
      subTotal: prevCart.subTotal - removedItem.quantity * removedItem.price,
      tax: prevCart.tax - removedItem.quantity * removedItem.price * prevCart.taxRate,
    }));
  };

  const contextValue = {
    value,
    addToCart,
    productCart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
