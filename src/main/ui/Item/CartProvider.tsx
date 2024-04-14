import React, {ReactNode, useState} from 'react';
import CartContext from './CartContext';
import {Cosmetic} from '../../ui/Item/DetailProduct.tsx';

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({children}) => {
  const [cartItems, setCartItems] = useState<Cosmetic[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (item: Cosmetic) => {
    setCartItems(prevCartItems => [...prevCartItems, item]);
    setIsCartVisible(true);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        isCartVisible,
        setIsCartVisible,
        setCartItems,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
