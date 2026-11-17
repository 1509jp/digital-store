import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [lastOrder, setLastOrder] = useState(null);

  function completeOrder() {
    if (cartItems.length === 0) return false;

    setLastOrder({
      items: cartItems.map((item) => ({ ...item })),
      total: cartItems.reduce(
        (total, item) =>
          total + (item.priceDiscount ?? item.price) * item.quantity,
        0
      ),
      createdAt: new Date().toISOString()
    });

    setCartItems([]);
    return true;
  }

  function addToCart(product, size, color) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          size,
          color,
          quantity: 1
        }
      ];
    });
  }

  function updateQuantity(id, size, color, quantity) {
    if (!Number.isInteger(quantity) || quantity < 1) return;

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id &&
        item.size === size &&
        item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  }

  function removeFromCart(id, size, color) {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) =>
          !(item.id === id &&
            item.size === size &&
            item.color === color)
      )
    );
  }

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total +
      (item.priceDiscount ?? item.price) * item.quantity,
    0
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartTotal,
        cartCount,
        lastOrder,
        completeOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }

  return context;
}
