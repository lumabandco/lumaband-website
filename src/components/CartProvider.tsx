'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type CartContextType = {
  quantity: number;
  setQuantity: (q: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType>({
  quantity: 0,
  setQuantity: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('lumaband_cart_qty');
    if (saved) {
      setQuantity(parseInt(saved, 10));
    }
  }, []);

  const handleSetQuantity = (q: number) => {
    setQuantity(q);
    localStorage.setItem('lumaband_cart_qty', q.toString());
  };

  const clearCart = () => {
    setQuantity(0);
    localStorage.removeItem('lumaband_cart_qty');
  };

  return (
    <CartContext.Provider value={{ quantity, setQuantity: handleSetQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
